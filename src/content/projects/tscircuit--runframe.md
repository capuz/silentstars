---
repo: "tscircuit/runframe"
name: "runframe"
description: "Runs tscircuit code inside a webworker, view PCBs, schematics and 3D previews"
readmeQualityOk: true
url: "https://github.com/tscircuit/runframe"
homepage: "https://runframe.tscircuit.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["electronics", "tscircuit"]
stars: 17
forks: 72
openIssues: 1
closedIssues: 83
watchers: 2
contributors: 27
recentReleases: 0
createdAt: "2024-12-10T02:53:44Z"
lastCommitAt: "2026-07-04T23:14:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 82
maintainers: ["tscircuitbot", "seveibar", "imrishabh18"]
openGraphImageUrl: "https://opengraph.githubassets.com/78957a750f3c7860d87816827b204311589465295c472e06075ababa0d6a3b03/tscircuit/runframe"
---

# @tscircuit/runframe

[tscircuit](https://github.com/tscircuit/tscircuit) ⋅ [View Examples](https://runframe.vercel.app)

A React component that runs tscircuit inside a webworker and shows you the PCB,
Schematic, 3D and other previews.

- Automatically imports other snippets and libraries if imported
- Runs inside webworker (doesn't block the main thread)
- Converts typescript to javascript using babel

## Usage

```tsx
import { RunFrame } from "@tscircuit/runframe/runner"

const App = () => (
  <RunFrame
    fsMap={{
      "main.tsx": `
circuit.add(
  <resistor resistance="1k" />
)
`,
    }}
    entrypoint="main.tsx"

    // Listen to events
    onCircuitJsonChange={(circuitJson) => void}
    onRenderingFinished={({ circuitJson }) => void}
    onRenderEvent={(event) => void}
    onError={(error) => void}
    availableTabs={["pcb", "schematic", "cad"]}
    defaultTab="pcb"
  />
)
```

### Using CircuitJsonPreview Directly

If you already have circuit JSON and just want to display it:

```tsx
import { CircuitJsonPreview } from "@tscircuit/runframe/preview"

const App = () => (
  <CircuitJsonPreview
    circuitJson={myCircuitJson}
    // Optional props
    showCodeTab={false}…
