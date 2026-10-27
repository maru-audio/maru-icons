# Contributing Maru Icons

Missing a useful icon? Open an issue or pull request. Share a screenshot or sketch
and describe the audio workflow it supports. We want to spend less time
recreating the same building blocks and build better audio tools together.

## Add an icon

1. Add original SVG geometry and metadata to `icons.json`. Use the existing
   24×24 frame, rounded caps and joins, a 2-unit stroke and `currentColor`.
   Include a stable kebab-case ID, component name, category and useful search tags.
2. Run `pnpm build` to regenerate React components, catalog and static SVGs.
3. Run `pnpm test` and `pnpm typecheck`. Check the icon at 16, 24 and 48 px,
   with different colors and stroke widths. Filled details must inherit color.
4. Submit the metadata and generated source together. Describe the meaning of
   the icon and include a preview. Avoid adding near-duplicates without a clear
   audio use case.

Contribute only artwork you created or have permission to contribute. New
original contributions use the [Maru Icons License](LICENSE), which permits use,
redistribution and resale, including in icon packs, UI kits and frameworks. You retain your
copyright; preserve existing copyright and attribution, and add your own credit
when appropriate. Imported artwork needs its original source and compatible
license notices; do not replace an upstream author's credit with ours.

By submitting an original contribution for inclusion, you grant Maru Audio a
non-exclusive right to reproduce, modify, distribute and sublicense that
contribution under the Maru Icons License, including its permitted commercial
redistribution in icon packs, UI kits and frameworks. You retain copyright.
Do not submit work unless you have authority to make this grant. Previously
submitted work is not assumed to carry this new grant without the contributor's
agreement.

Maru's brand marks are maintained separately. See [trademark guidance](TRADEMARKS.md).
