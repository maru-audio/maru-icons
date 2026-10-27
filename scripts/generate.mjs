import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs"
import { fileURLToPath } from "node:url"
import assert from "node:assert/strict"
import {
  COPYRIGHT_NOTICE,
  TRADEMARK_NOTICE,
  ICONS_PACKAGE_NAME,
  ICONS_REPO_URL,
  ICONS_ISSUES_URL,
  PACKAGE_AUTHOR,
  brandText,
} from "./brand-source.mjs"
import { resolveBrandIcon } from "./brand-icons.mjs"
import { generatePreview } from "./generate-preview.mjs"

const root = new URL("../", import.meta.url)
const icons = JSON.parse(readFileSync(new URL("icons.json", root), "utf8")).map(
  resolveBrandIcon
)
const check = process.argv.includes("--check")
const header =
  "// Generated from icons.json by scripts/generate.mjs. Do not edit.\n"
const names = new Set()
const components = new Set()
const tags = new Set(["path", "circle", "ellipse", "rect", "line", "polyline"])
const attributes = new Set([
  "d",
  "cx",
  "cy",
  "r",
  "x",
  "y",
  "width",
  "height",
  "rx",
  "ry",
  "x1",
  "x2",
  "y1",
  "y2",
  "points",
  "fill",
  "stroke",
  "strokeWidth",
])
for (const icon of icons) {
  if (icon.source) {
    assert.equal(icon.source.library, "lucide")
    assert.match(icon.source.name, /^[a-z0-9-]+$/)
    assert.match(icon.source.version, /^\d+\.\d+\.\d+$/)
  }
  assert.match(icon.name, /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/)
  assert.match(icon.componentName, /^[A-Z][A-Za-z0-9]*Icon$/)
  assert(!names.has(icon.name), `Duplicate icon: ${icon.name}`)
  assert(
    !components.has(icon.componentName),
    `Duplicate component: ${icon.componentName}`
  )
  names.add(icon.name)
  if (icon.viewBox) {
    const dimensions = icon.viewBox.trim().split(/\s+/).map(Number)
    assert(
      dimensions.length === 4 &&
        dimensions.every(Number.isFinite) &&
        dimensions[2] > 0 &&
        dimensions[3] > 0
    )
  }
  components.add(icon.componentName)
  assert(icon.label && icon.category && icon.tags.length && icon.nodes.length)
  for (const [tag, attrs] of icon.nodes) {
    assert(tags.has(tag), `Unsupported SVG node: ${tag}`)
    for (const [key, value] of Object.entries(attrs)) {
      assert(attributes.has(key), `Unsupported SVG attribute: ${key}`)
      assert(
        typeof value === "string" ||
          (typeof value === "number" && Number.isFinite(value))
      )
      assert(
        !/[<>"&]|url\s*\(/i.test(String(value)),
        `Unsafe SVG value in ${icon.name}`
      )
    }
  }
}

function write(path, content) {
  const target = new URL(path, root)
  if (check) {
    assert(
      existsSync(target) && readFileSync(target).equals(Buffer.from(content)),
      `Stale generated file: ${path}. Run pnpm --filter maru-icons generate.`
    )
  } else {
    mkdirSync(new URL("./", target), { recursive: true })
    writeFileSync(target, content)
  }
}

const publicReadme = brandText(
  readFileSync(new URL("github/README.md", root), "utf8")
)
  .replaceAll("{{COPYRIGHT_NOTICE}}", COPYRIGHT_NOTICE)
  .replaceAll("{{TRADEMARK_NOTICE}}", TRADEMARK_NOTICE)
assert(!/\{\{[^}]+\}\}/.test(publicReadme), "Unexpanded README token")
write("README.md", publicReadme)
write(
  "MARU_audio.webp",
  readFileSync(
    new URL("../MARU_audio.webp", import.meta.url)
  )
)

const manifest = JSON.parse(readFileSync(new URL("package.json", root), "utf8"))
manifest.name = ICONS_PACKAGE_NAME
manifest.author = PACKAGE_AUTHOR
manifest.repository = { type: "git", url: `git+${ICONS_REPO_URL}.git` }
manifest.bugs = { url: ICONS_ISSUES_URL }
manifest.license = "SEE LICENSE IN LICENSE"
write("package.json", JSON.stringify(manifest, null, 2) + "\n")
write(
  "licenses/ICON-LICENSES.json",
  JSON.stringify(
    icons.map((icon) => ({
      id: icon.name,
      componentName: icon.componentName,
      license: icon.source
        ? "Lucide ISC; Feather MIT where applicable"
        : "Maru Icons License 1.1",
      licenseFiles: icon.source ? ["licenses/lucide-LICENSE"] : ["LICENSE"],
      ...(icon.brandAsset
        ? { trademark: true, trademarkFile: "TRADEMARKS.md" }
        : {}),
      ...(icon.source ? { source: icon.source } : {}),
    })),
    null,
    2
  ) + "\n"
)
const originalNotice = `${COPYRIGHT_NOTICE} Licensed under the Maru Icons License; see LICENSE. Use and resale are allowed; contacting Maru is encouraged but optional.`
const license = readFileSync(new URL("LICENSE", root), "utf8").replace(
  /^Copyright[^\n]*|^©[^\n]*/m,
  COPYRIGHT_NOTICE
)
write("LICENSE", license)
write(
  "src/notices.ts",
  `${header}export const ORIGINAL_NOTICE = ${JSON.stringify(originalNotice)}\nexport const ORIGINAL_LICENSE = ${JSON.stringify(license)}\nexport const BRAND_NOTICE = ${JSON.stringify(TRADEMARK_NOTICE + " See TRADEMARKS.md; no trademark rights are granted.")}\n`
)
for (const icon of icons) {
  write(
    `src/react/icons/${icon.name}.ts`,
    `${header}${icon.source ? `/** @license Lucide ${icon.source.version} — ISC; Feather-derived artwork also MIT. See licenses/lucide-LICENSE. */\n` : `/** @license ${originalNotice}${icon.brandAsset ? " " + TRADEMARK_NOTICE + " See TRADEMARKS.md." : ""} */\n`}import { createMaruIcon } from "../create-icon.js"\n\nexport const ${icon.componentName} = /* @__PURE__ */ createMaruIcon(${JSON.stringify(icon.componentName)}, ${JSON.stringify(icon.nodes)}${icon.viewBox ? `, ${JSON.stringify({ viewBox: icon.viewBox, defaultStrokeWidth: icon.defaultStrokeWidth, strokeLinecap: icon.strokeLinecap })}` : ""})\n`
  )
}
write(
  "src/react/index.ts",
  header +
    'export type { MaruIconProps } from "./create-icon.js"\n' +
    icons
      .map(
        (icon) =>
          `export { ${icon.componentName} } from "./icons/${icon.name}.js"\n`
      )
      .join("")
)
write(
  "src/catalog.ts",
  `${header}import type { MaruIconData } from "./types.js"\n\nexport const iconCatalog: readonly MaruIconData[] = ${JSON.stringify(icons, null, 2)}\n`
)
write(
  "src/index.ts",
  `${header}export { ORIGINAL_NOTICE, BRAND_NOTICE } from "./notices.js"\nexport { iconCatalog } from "./catalog.js"\nexport { iconToSvg } from "./svg.js"\nexport type { SvgOptions } from "./svg.js"\nexport type { MaruIconData, IconNode, IconGeometry } from "./types.js"\n`
)
// SVG output is a distributable projection of the same geometry, never another source.
const { stripTypeScriptTypes } = await import("node:module")
const svgSource = readFileSync(new URL("src/svg.ts", root), "utf8")
  .replace(/^import type[^\n]+\n/, "")
  .replace(/^import \{ LUCIDE_NOTICE \} from [^\n]+\n/m, "")
  .replace(/^import \{ ORIGINAL_LICENSE, BRAND_NOTICE \} from [^\n]+\n/m, "")
  .replace(/^import \{ scaledStrokeWidth \} from [^\n]+\n/m, "")
const geometrySource = readFileSync(new URL("src/geometry.ts", root), "utf8")
const noticeSource = readFileSync(
  new URL("src/third-party.ts", root),
  "utf8"
).replace("export const", "const")
const { iconToSvg } = await import(
  `data:text/javascript,${encodeURIComponent(stripTypeScriptTypes(geometrySource + "\n" + noticeSource + "\n" + readFileSync(new URL("src/notices.ts", root), "utf8") + "\n" + svgSource))}`
)
for (const icon of icons)
  write(`dist/svg/${icon.name}.svg`, iconToSvg(icon) + "\n")
await generatePreview({
  icons,
  iconToSvg,
  target: new URL("icons-preview.png", root),
  check,
})
console.log(
  `${check ? "Checked" : "Generated"} ${icons.length} Maru Icons (${fileURLToPath(root)})`
)
