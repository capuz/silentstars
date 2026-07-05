---
repo: "mkofler96/KoFEM"
name: "KoFEM"
description: "Open Source Browser-Based FEM Solver"
readmeQualityOk: true
url: "https://github.com/mkofler96/KoFEM"
homepage: "https://kofem.org/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [59]
topics: ["browser", "fem"]
stars: 8
forks: 1
openIssues: 4
closedIssues: 151
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-12T18:13:02Z"
lastCommitAt: "2026-07-05T06:31:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 56
maintainers: ["mkofler96"]
openGraphImageUrl: "https://opengraph.githubassets.com/03f3ba8c23771ad49bb4035c4e69d81a1f45eb09f7dce48516bbdd0c9cc5a736/mkofler96/KoFEM"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/mkofler"]
---

</p>

<h1 align="center">KoFEM</h1>

KoFEM is Finite element analysis tool made to run in your browser, without installation and without sending data to any server or cloud. It runs the full pipeline — **STEP geometry → OCCT tessellation → Netgen
volume mesh → MFEM FEM solve** — directly in the browser via a C++ engine
compiled to WebAssembly, with a React + Three.js frontend. The software can be launched from the official website [kofem.org](https://kofem.org/) or run locally via docker.

## Run it with Docker

The app is a static frontend (pre-built WASM engine + React UI) served by Nginx.
The compiled WASM engine is committed under `web/src/wasm/pkg/`, so **you don't
need Emscripten, Rust, or the C++ libraries — just Docker.** The container
listens on port **10000**.

Option A — Pull the published image (recommended)

```bash
docker run ghcr.io/mkofler96/kofem-web:latest
```

Option B — Build it yourself

```bash
# Build context is the web/ directory (Dockerfile lives at web/Dockerfile).
docker build -t kofem-web ./web
docker run kofem-web
```

## Development

To rebuild the WASM engine from C++ source first, run
`bash scripts/docker-build-wasm.sh` — it compiles the engine…
