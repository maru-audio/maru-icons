/** Render the complete canonical collection, without fonts or external assets. */
import assert from "node:assert/strict"
import { execFileSync } from "node:child_process"
import { readFileSync, writeFileSync } from "node:fs"
import { resolve } from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

export function previewSvg(icons, iconToSvg) {
  const columns = 14
  const cellWidth = 96
  const cellHeight = 80
  const padding = 32
  const size = 48
  const width = columns * cellWidth + padding * 2
  const height = Math.ceil(icons.length / columns) * cellHeight + padding * 2
  const cells = icons.map((icon, index) => {
    const x = padding + (index % columns) * cellWidth + (cellWidth - size) / 2
    const y =
      padding +
      Math.floor(index / columns) * cellHeight +
      (cellHeight - size) / 2
    return iconToSvg(icon, { size, color: "#2563eb", strokeWidth: 2 })
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace("<svg ", `<svg data-icon="${icon.name}" x="${x}" y="${y}" `)
  })
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><title>All ${icons.length} Maru Icons</title><rect width="100%" height="100%" fill="white"/>${cells.join("")}</svg>`
}

export async function generatePreview({
  icons,
  iconToSvg,
  target,
  check = false,
}) {
  const png = await sharp(Buffer.from(previewSvg(icons, iconToSvg)), {
    density: 144,
  })
    .png({ compressionLevel: 9 })
    .toBuffer()
  if (check)
    assert(
      readFileSync(target).equals(png),
      "Stale icons-preview.png; run pnpm preview"
    )
  else writeFileSync(target, png)
  return png
}

// Regenerate geometry/SVGs first, so preview never reads an outdated build.
if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  execFileSync(
    process.execPath,
    [fileURLToPath(new URL("generate.mjs", import.meta.url))],
    { stdio: "inherit" }
  )
}
