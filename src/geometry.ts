/** Stroke props use the same 24-unit convention even for native brand viewBoxes. */
export function scaledStrokeWidth(
  value: number | string,
  viewBox: string,
  nonScaling = false
): number | string {
  const numeric = Number(value)
  if (nonScaling || !Number.isFinite(numeric)) return value
  return (
    (numeric * Math.max(...viewBox.trim().split(/\s+/).slice(2).map(Number))) /
    24
  )
}
