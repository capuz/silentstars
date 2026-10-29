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
stars: 18
forks: 86
openIssues: 1
closedIssues: 85
watchers: 2
contributors: 29
recentReleases: 0
createdAt: "2024-12-10T02:53:44Z"
lastCommitAt: "2026-10-29T12:25:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 81
maintainers: ["tscircuitbot", "0hmX", "seveibar"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4ad8d2cbdef0140c37a696c7031d0e35e3ff18a3c075f6d20c2b49aea626789/tscircuit/runframe"
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
