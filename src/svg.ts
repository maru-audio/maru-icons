import type { MaruIconData } from "./types.js"
import { ORIGINAL_LICENSE, BRAND_NOTICE } from "./notices.js"
import { LUCIDE_NOTICE } from "./third-party.js"
import { scaledStrokeWidth } from "./geometry.js"

export interface SvgOptions {
  size?: number
  color?: string
  strokeWidth?: number
  nonScalingStroke?: boolean
}

function escapeAttribute(value: string | number): string {
  return String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
      })[character]!
  )
}

/** Serialize trusted catalog geometry; options are escaped for inline SVG. */
export function iconToSvg(
  icon: MaruIconData,
  {
    size = 24,
    color = "currentColor",
    strokeWidth = icon.defaultStrokeWidth ?? 2,
    nonScalingStroke = false,
  }: SvgOptions = {}
): string {
  const viewBox = icon.viewBox ?? "0 0 24 24"
  const resolvedStroke = scaledStrokeWidth(
    strokeWidth,
    viewBox,
    nonScalingStroke
  )
  const shapes = icon.nodes
    .map(([tag, attributes]) => {
      const serialized = Object.entries(attributes)
        .map(
          ([name, value]) =>
            `${name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}="${escapeAttribute(value)}"`
        )
        .join(" ")
      return `<${tag} ${serialized}${nonScalingStroke ? ' vector-effect="non-scaling-stroke"' : ""}/>`
    })
    .join("")
  const rights = icon.source
    ? LUCIDE_NOTICE
    : `${ORIGINAL_LICENSE}${icon.brandAsset ? " " + BRAND_NOTICE : ""}`
  const notice = `<!-- ${rights.replace(/--/g, "—")} -->\n`
  return `${notice}<svg xmlns="http://www.w3.org/2000/svg" width="${escapeAttribute(size)}" height="${escapeAttribute(size)}" viewBox="${escapeAttribute(viewBox)}" fill="none" color="${escapeAttribute(color)}" stroke="${escapeAttribute(color)}" stroke-width="${escapeAttribute(resolvedStroke)}" stroke-linecap="${icon.strokeLinecap ?? "round"}" stroke-linejoin="round">${shapes}</svg>`
}
