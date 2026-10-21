---
repo: "ctoth/Qlatt"
name: "Qlatt"
description: "Explainable WebAudio Klatt formant synthesizer with declarative TTS frontend and WASM-backed AudioWorklet DSP"
readmeQualityOk: true
url: "https://github.com/ctoth/Qlatt"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["dsp", "formant-synthesis", "klatt", "speech-synthesis", "text-to-speech", "typescript", "wasm", "webaudio"]
stars: 12
forks: 2
openIssues: 85
closedIssues: 82
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-04-10T01:55:03Z"
lastCommitAt: "2026-10-21T08:50:10Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 89
undervaluedScore: 65
maintainers: ["ctoth"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d5b86c31920cfda45d647a9773744c7201e48c2d13720f12ac7369cc6502e9d/ctoth/Qlatt"
---

# Qlatt

Explainable WebAudio Klatt formant synthesis with a declarative TTS frontend and WASM-backed AudioWorklet DSP.

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Build the WASM modules:

```bash
npm run build:wasm
```

On Windows, use:

```powershell
npm run build:wasm:ps
```

3. Start the dev server:

```bash
npm run dev
```

`npm run dev` runs `predev`, which compiles `src/worklets/*-processor.ts` into `public/worklets/`. It does not build the Rust WASM crates, so step 2 is still required after DSP changes or on a fresh checkout.

4. Open the browser harness:

```text
http://localhost:8000/test/test-harness.html
```

The harness exposes a `Frontend` selector. Available bundled frontends:

- **qlatt-english** — default frontend with CMU dictionary lookup, Elovitz LTS rules, and prosody modeled from Pierrehumbert/O'Shaughnessy
- **dectalk-english** — faithful recreation of DECtalk 4.63 timing, duration, F0 (hat pattern), stop/fricative models, and LTS rules
- **qlatt-beauty** — graph-native frontend scaffold used to validate independent resource ownership and lowering

## Common Commands

```bash
npm test                        # run the Vitest suite…
