import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { test } from "node:test"
import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { iconCatalog, iconToSvg } from "maru-icons"
import * as components from "maru-icons/react"

test("every catalog entry has a React component and the matching static SVG", async () => {
  assert.equal(
    new Set(iconCatalog.map((icon) => icon.name)).size,
    iconCatalog.length
  )
  assert.equal(Object.keys(components).length, iconCatalog.length)
  for (const icon of iconCatalog) {
    const { [icon.componentName]: Component } = await import(
      `maru-icons/react/${icon.name}`
    )
    assert.equal(Component, components[icon.componentName])
    const markup = renderToStaticMarkup(createElement(Component))
    assert(markup.includes(`viewBox="${icon.viewBox ?? "0 0 24 24"}"`))
    assert.match(markup, /aria-hidden="true"/)
    assert.equal(
      readFileSync(
        new URL(`../dist/svg/${icon.name}.svg`, import.meta.url),
        "utf8"
      ),
      iconToSvg(icon) + "\n"
    )
    assert.doesNotMatch(iconToSvg(icon), /<script|onload|<foreignObject/)
  }
})

test("React props preserve labeling, SVG customization, children and fixed strokes", () => {
  const markup = renderToStaticMarkup(
    createElement(components.SineWaveIcon, {
      size: 48,
      color: "tomato",
      strokeWidth: 1.5,
      absoluteStrokeWidth: true,
      "aria-label": "Sine oscillator",
      className: "oscillator",
      "data-test": "wave",
    })
  )
  assert.match(markup, /width="48"/)
  assert.match(markup, /stroke="tomato"/)
  assert.match(markup, /stroke-width="1.5"/)
  assert.match(markup, /role="img"/)
  assert.match(markup, /aria-label="Sine oscillator"/)
  assert.match(markup, /class="oscillator"/)
  assert.match(markup, /vector-effect="non-scaling-stroke"/)
  assert.doesNotMatch(markup, /aria-hidden/)
  const title = renderToStaticMarkup(
    createElement(
      components.KnobIcon,
      { title: "Gain" },
      createElement("desc", null, "Output level")
    )
  )
  assert.match(title, /<title>Gain<\/title>/)
  assert.match(title, /<desc>Output level<\/desc>/)
  assert.doesNotMatch(title, /aria-hidden/)
})

test("SVG option values are escaped", () => {
  const svg = iconToSvg(iconCatalog[0], { color: 'red" onload="alert(1)' })
  assert.match(svg, /red&quot; onload=&quot;alert\(1\)/)
  assert.doesNotMatch(svg, /stroke="red" onload=/)
})

test("custom colors propagate to currentColor-filled details and defaults still inherit", () => {
  const icon = iconCatalog.find((icon) => icon.name === "midi-din")
  const markup = renderToStaticMarkup(
    createElement(components.MidiDinIcon, { color: "#2563eb" })
  )
  assert.match(markup, /<svg[^>]* color="#2563eb"/)
  assert.match(markup, /stroke="#2563eb"/)
  assert.equal((markup.match(/fill="currentColor"/g) ?? []).length, 5)
  const svg = iconToSvg(icon, { color: "#2563eb" })
  assert.match(svg, /<svg[^>]* color="#2563eb"/)
  assert.equal((svg.match(/fill="currentColor"/g) ?? []).length, 5)
  assert.match(iconToSvg(icon), / color="currentColor"/)
  assert.match(
    renderToStaticMarkup(createElement(components.MidiDinIcon)),
    / color="currentColor"/
  )
})

test("Lucide imports retain provenance and notices in standalone SVG downloads", () => {
  const imported = iconCatalog.filter(
    (icon) => icon.source?.library === "lucide"
  )
  assert.equal(imported.length, 135)
  for (const icon of imported) {
    assert.equal(icon.source.version, "1.31.0")
    const svg = iconToSvg(icon)
    assert.match(svg, /ISC License/)
    assert.match(svg, /Copyright \(c\) 2026 Lucide Icons and Contributors/)
    assert.match(svg, /Cole Bemis/)
  }
})

test("Lucide-compatible nonScalingStroke works on both original and imported icons", () => {
  for (const Component of [components.KnobIcon, components.HeadphonesIcon]) {
    const markup = renderToStaticMarkup(
      createElement(Component, {
        size: 48,
        strokeWidth: 1,
        color: "tomato",
        nonScalingStroke: true,
        style: { opacity: 0.5 },
        className: "audio-icon",
      })
    )
    assert.match(markup, /stroke-width="1"/)
    assert.match(markup, /stroke="tomato"/)
    assert.match(markup, /vector-effect="non-scaling-stroke"/)
    assert.match(markup, /class="audio-icon"/)
    assert.match(markup, /opacity:0.5/)
    assert.doesNotMatch(markup, /nonScalingStroke=/)
  }
  assert.match(
    iconToSvg(iconCatalog[0], { nonScalingStroke: true }),
    /vector-effect="non-scaling-stroke"/
  )
})

test("pickup patterns and placements are distinct static symbols with searchable dual-cardioid layouts", () => {
  const patterns = iconCatalog.filter(
    (icon) => icon.category === "Microphone patterns"
  )
  const placements = iconCatalog.filter(
    (icon) => icon.category === "Microphone placement"
  )
  assert.equal(patterns.length, 6)
  assert.equal(placements.length, 7)
  assert.equal(
    new Set(
      [...patterns, ...placements].map((icon) => JSON.stringify(icon.nodes))
    ).size,
    13
  )
  for (const icon of [...patterns, ...placements])
    assert.doesNotMatch(iconToSvg(icon), /NaN|Infinity/)
  assert(
    iconCatalog
      .find((icon) => icon.name === "mic-placement-back-to-back")
      .tags.includes("double cardioid")
  )
})

test("the framework-independent entry has no React or workspace runtime imports", () => {
  for (const file of ["index.js", "catalog.js", "svg.js", "types.js"]) {
    const source = readFileSync(
      new URL(`../dist/${file}`, import.meta.url),
      "utf8"
    )
    assert.doesNotMatch(source, /from ["'](?:react|@maruaudio)/)
  }
})

test("Maru marks preserve canonical brand geometry and share color/stroke controls", () => {
  for (const [name, asset] of [
    ["maru-logo", "wordmark"],
    ["maru-wave", "signal-mark"],
  ]) {
    const icon = iconCatalog.find((entry) => entry.name === name)
    const source = readFileSync(
      new URL(`../assets/brand/${asset}.svg`, import.meta.url),
      "utf8"
    )
    const paths = [...source.matchAll(/<path\b[^>]*\bd="([^"]+)"/g)].map(
      (match) => match[1]
    )
    assert.deepEqual(
      icon.nodes.map(([, attributes]) => attributes.d),
      paths
    )
    assert.equal(icon.viewBox, source.match(/viewBox="([^"]+)"/)[1])
    assert.equal(icon.brandAsset, asset)
  }
  const logo = renderToStaticMarkup(
    createElement(components.MaruLogoIcon, { color: "#2563eb", size: 48 })
  )
  assert.match(logo, /color="#2563eb"/)
  assert.match(logo, /fill="currentColor" stroke="none"/)
  const wave = renderToStaticMarkup(createElement(components.MaruWaveIcon))
  assert.match(wave, /stroke-width="14"/)
  assert.match(wave, /stroke-linecap="butt"/)
  const fixed = renderToStaticMarkup(
    createElement(components.MaruWaveIcon, {
      strokeWidth: 2,
      nonScalingStroke: true,
    })
  )
  assert.match(fixed, /stroke-width="2"/)
  assert.match(fixed, /vector-effect="non-scaling-stroke"/)
  const waveData = iconCatalog.find((entry) => entry.name === "maru-wave")
  assert.match(iconToSvg(waveData), /stroke-width="14"/)
  assert.match(
    iconToSvg(waveData, { strokeWidth: 2, nonScalingStroke: true }),
    /stroke-width="2"/
  )
})

test("original copyright and brand trademark notices survive distribution", () => {
  const original = iconCatalog.find((icon) => icon.name === "sine-wave")
  assert.match(iconToSvg(original), /© 2026 Maru Audio/)
  assert.match(iconToSvg(original), /Maru Icons License 1.1/)
  assert.match(
    iconToSvg(original),
    /Contact and contribution are entirely optional/
  )
  assert.doesNotMatch(iconToSvg(original), /no trademark rights/)
  for (const name of ["maru-logo", "maru-wave"]) {
    const icon = iconCatalog.find((icon) => icon.name === name)
    assert.match(iconToSvg(icon), /trademarks of Maru Audio/)
    assert.match(iconToSvg(icon), /no trademark rights are granted/)
    const source = readFileSync(
      new URL(`../src/react/icons/${name}.ts`, import.meta.url),
      "utf8"
    )
    assert.match(source, /@license © 2026 Maru Audio/)
    assert.match(source, /TRADEMARKS.md/)
  }
  assert.match(
    readFileSync(new URL("../LICENSE", import.meta.url), "utf8"),
    /© 2026 Maru Audio/
  )
})

test("every icon has explicit license scope without imposing Maru terms on upstream SVGs", () => {
  const rights = JSON.parse(
    readFileSync(
      new URL("../licenses/ICON-LICENSES.json", import.meta.url),
      "utf8"
    )
  )
  assert.equal(rights.length, iconCatalog.length)
  assert.equal(
    new Set(rights.map((entry) => entry.id)).size,
    iconCatalog.length
  )
  for (const icon of iconCatalog) {
    const entry = rights.find((entry) => entry.id === icon.name)
    assert.equal(entry.componentName, icon.componentName)
    for (const file of entry.licenseFiles)
      assert(readFileSync(new URL(`../${file}`, import.meta.url), "utf8"))
    if (icon.source) {
      assert.deepEqual(entry.licenseFiles, ["licenses/lucide-LICENSE"])
      assert.deepEqual(entry.source, icon.source)
      assert.doesNotMatch(
        iconToSvg(icon),
        /Maru Icons License|separate permission|Resale in reusable/
      )
    } else {
      assert.deepEqual(entry.licenseFiles, ["LICENSE"])
      assert.match(iconToSvg(icon), /Maru Icons License 1.1/)
      assert.match(
        iconToSvg(icon),
        /Contact and contribution are entirely optional/
      )
    }
    assert.equal(Boolean(entry.trademark), Boolean(icon.brandAsset))
    if (icon.brandAsset) assert.equal(entry.trademarkFile, "TRADEMARKS.md")
  }
})
