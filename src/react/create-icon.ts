import { createElement, forwardRef, type SVGProps } from "react"
import type { IconGeometry, IconNode } from "../types.js"
import { scaledStrokeWidth } from "../geometry.js"

export interface MaruIconProps extends Omit<SVGProps<SVGSVGElement>, "ref"> {
  size?: number | string
  color?: string
  strokeWidth?: number | string
  absoluteStrokeWidth?: boolean
  nonScalingStroke?: boolean
  title?: string
}

/** Small shared renderer; individual components import only their own geometry. */
export function createMaruIcon(
  name: string,
  nodes: readonly IconNode[],
  geometry: IconGeometry = {}
) {
  const viewBox = geometry.viewBox ?? "0 0 24 24"
  const Icon = forwardRef<SVGSVGElement, MaruIconProps>(function MaruIcon(
    {
      size = 24,
      color = "currentColor",
      strokeWidth = geometry.defaultStrokeWidth ?? 2,
      absoluteStrokeWidth = false,
      nonScalingStroke = false,
      title,
      children,
      ...props
    },
    ref
  ) {
    const labelled = Boolean(
      title || props["aria-label"] || props["aria-labelledby"]
    )
    return createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox,
        fill: "none",
        color,
        stroke: color,
        strokeWidth: scaledStrokeWidth(
          strokeWidth,
          viewBox,
          absoluteStrokeWidth || nonScalingStroke
        ),
        strokeLinecap: geometry.strokeLinecap ?? "round",
        strokeLinejoin: "round",
        focusable: "false",
        role: labelled ? "img" : undefined,
        "aria-hidden": labelled ? undefined : true,
        "aria-label": title,
        ...props,
        ref,
      },
      title ? createElement("title", null, title) : null,
      ...nodes.map(([tag, attributes], index) =>
        createElement(tag, {
          ...attributes,
          key: index,
          ...(absoluteStrokeWidth || nonScalingStroke
            ? { vectorEffect: "non-scaling-stroke" }
            : {}),
        })
      ),
      children
    )
  })
  Icon.displayName = name
  return Icon
}
