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
stars: 56
forks: 168
openIssues: 51
closedIssues: 411
watchers: 2
contributors: 43
recentReleases: 0
createdAt: "2024-07-04T03:57:51Z"
lastCommitAt: "2026-08-19T04:07:18Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 64
maintainers: ["actions-user", "seveibar", "tscircuitbot"]
openGraphImageUrl: "https://opengraph.githubassets.com/740274946db5961df0edd0927da2a05afdab26534489f182ea0a3d4b8e9d044a/tscircuit/core"
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

## Non-React Usage

```tsx
import { Board, Resistor, Led, Trace, Circuit } from "@tscircuit/core"

const circuit = new Circuit()

const board = new Board({
  width: "10mm",…
