---
repo: "tscircuit/core"
name: "core"
description: "Create electronics with Typescript and React. Compile Typescript to Circuit JSON"
readmeQualityOk: true
url: "https://github.com/tscircuit/core"
homepage: "https://tscircuit.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["hacktoberfest", "electronics", "electronics-engineering", "kicad", "kicad-pcb", "electronics-as-code"]
stars: 61
forks: 258
openIssues: 44
closedIssues: 479
watchers: 2
contributors: 50
recentReleases: 0
createdAt: "2024-07-04T03:57:51Z"
lastCommitAt: "2026-11-13T18:30:01Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 63
maintainers: ["actions-user", "ShiboSoftwareDev", "rushabhcodes"]
openGraphImageUrl: "https://opengraph.githubassets.com/81a6df95b411a4d462749a0e15f6756ca91a3999c59dd698cf4c360fb6312abd/tscircuit/core"
---

# @tscircuit/core

The core logic used to build Circuit JSON from tscircuit React elements.

[tscircuit](https://github.com/tscircuit/tscircuit) &middot; [Online Playground](https://tscircuit.com/editor) &middot; [Development Guide](https://github.com/tscircuit/core/blob/HEAD/docs/DEVELOPMENT.md) &middot; [Core Benchmarks](https://core-benchmarks.tscircuit.com/) &middot; [Contributor Getting Started Video](https://share.cleanshot.com/rbJpnvJZ)

You can use `core` to create [Circuit JSON](https://github.com/tscircuit/circuit-json), which can then
be converted into Gerbers, viewed online, and much more.

## Usage

```tsx
import { Circuit } from "@tscircuit/core"

const circuit = new Circuit()

circuit.add(
  <board width="10mm" height="10mm">
    <resistor name="R1" resistance="10k" footprint="0402" />
    <led name="L1" footprint="0402" />

    <trace from="R1.pin1" to="net.VCC" />
    <trace from="R1.pin2" to="L1.pos" />
    <trace from="L1.neg" to="net.GND" />
  </board>
)

circuit.getCircuitJson()
```

## System block diagrams

For high-level functional diagrams, use the [`systemblock` namespace](https://github.com/tscircuit/core/blob/HEAD/docs/system-blocks.md).
Core…
