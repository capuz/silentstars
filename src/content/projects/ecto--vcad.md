---
repo: "ecto/vcad"
name: "vcad"
description: "BRep CAD kernel in Rust/WASM"
readmeQualityOk: true
url: "https://github.com/ecto/vcad"
homepage: "https://vcad.io"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [61, 28]
stars: 436
forks: 29
openIssues: 117
closedIssues: 54
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-01-27T18:00:14Z"
lastCommitAt: "2026-10-21T17:30:55Z"
lastReleaseAt: "2026-04-29T15:42:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 26
maintainers: ["ecto"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ae09d1d4e7687783e847c2beaf651efc66551e2e7e4aa45fff142d56a92774b/ecto/vcad"
discussionCount: 3
---

# vcad

Open-source parametric CAD for the AI era.

**[Try it now →](https://vcad.io)**

## Features

- **Modeling** — Primitives, booleans, fillets, chamfers, shell
- **Sketching** — 2D constraints, extrude, revolve, sweep, loft
- **Assembly** — Parts, instances, joints, forward kinematics
- **Simulation** — Physics with phyz, gym-style RL interface
- **Import/Export** — STEP import, STL/GLB/STEP/DXF export
- **Rendering** — Direct BRep ray tracing + tessellated mode
- **Cloud** — Supabase sync with Google/GitHub auth

## Use vcad

### Web App

Visit [vcad.io](https://vcad.io) — no install required.

### Native Mac App

A native SwiftUI app lives in [`apple/VcadApp`](https://github.com/ecto/vcad/blob/HEAD/apple/VcadApp) (macOS only;
other platforms use the web app). Build it from source:

```bash
apple/VcadApp/build-ffi.sh   # build the vcad-ffi kernel static library
apple/VcadApp/bundle.sh      # assemble dist/vcad.app
open apple/VcadApp/dist/vcad.app
```

### CLI

```bash
cargo install vcad-cli
vcad export input.vcad output.stl
vcad import-step input.step output.vcad
```

### MCP Server (AI Agents)

The MCP server lets AI agents create and manipulate CAD models:

```bash
npm…
