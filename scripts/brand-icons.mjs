import assert from "node:assert/strict"
import { readFileSync } from "node:fs"

/** Brand remains the geometry owner; the standalone icon package ships projections. */
export function resolveBrandIcon(icon) {
  if (!icon.brandAsset) return icon
  assert(["wordmark", "signal-mark"].includes(icon.brandAsset))
  assert(!icon.nodes, "Brand icon geometry must come from brand/assets")
  const source = readFileSync(
    new URL(`../assets/brand/${icon.brandAsset}.svg`, import.meta.url),
    "utf8"
  )
  for (const [, tag] of source.matchAll(/<([a-z][\w-]*)\b/gi)) {
    assert(
      ["svg", "title", "g", "path"].includes(tag),
      `Review unsupported brand SVG element: ${tag}`
    )
  }
  assert(
    !/<(?:image|use)\b|\btransform=/i.test(source),
    "Review changed brand SVG structure before projecting icons"
  )
  const viewBox = source.match(/viewBox="([^"]+)"/)?.[1]
  assert(viewBox)
  const paths = [...source.matchAll(/<path\b([\s\S]*?)\/?\s*>/g)].map((match) =>
    Object.fromEntries(
      [...match[1].matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [
        key,
        value,
      ])
    )
  )
  assert(paths.length && paths.every((path) => path.d))
  if (icon.brandAsset === "wordmark") {
    return {
      ...icon,
      viewBox,
      nodes: paths.map(({ d }) => [
        "path",
        { d, fill: "currentColor", stroke: "none" },
      ]),
    }
  }
  const strokeWidth = Number(paths[0]["stroke-width"])
  assert(Number.isFinite(strokeWidth) && strokeWidth > 0)
  return {
    ...icon,
    viewBox,
    defaultStrokeWidth:
      (strokeWidth * 24) /
      Math.max(...viewBox.split(/\s+/).slice(2).map(Number)),
    strokeLinecap: paths[0]["stroke-linecap"] ?? "round",
    nodes: paths.map(({ d }) => ["path", { d }]),
  }
}
