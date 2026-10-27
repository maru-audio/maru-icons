export type IconNode = readonly [
  "path" | "circle" | "ellipse" | "rect" | "line" | "polyline",
  Readonly<Record<string, string | number>>,
]

export interface IconGeometry {
  readonly viewBox?: string
  readonly defaultStrokeWidth?: number
  readonly strokeLinecap?: "butt" | "round" | "square"
}

export interface MaruIconData extends IconGeometry {
  readonly name: string
  readonly componentName: string
  readonly label: string
  readonly category: string
  readonly tags: readonly string[]
  readonly nodes: readonly IconNode[]
  readonly brandAsset?: "wordmark" | "signal-mark"
  readonly source?: {
    readonly library: "lucide"
    readonly name: string
    readonly version: string
  }
}
