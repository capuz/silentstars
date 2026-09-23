---
repo: "openclaw/libopus-wasm"
name: "libopus-wasm"
description: "Small, modern WASM bindings for libopus raw packet encode/decode."
readmeQualityOk: true
url: "https://github.com/openclaw/libopus-wasm"
homepage: "https://libopus-wasm.dev"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [50, 45]
stars: 98
forks: 10
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 8
recentReleases: 2
createdAt: "2026-05-26T00:59:23Z"
lastCommitAt: "2026-09-23T08:47:37Z"
lastReleaseAt: "2026-09-13T14:32:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 85
undervaluedScore: 32
maintainers: ["steipete", "vincentkoc", "SebTardif"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a9449c8e723abe3f9b1eff1ada07dfdd9138a4f86448de5ad73fa230d319395/openclaw/libopus-wasm"
fundingLinks: ["GITHUB:https://github.com/openclaw"]
---

# libopus-wasm

Small, modern WebAssembly bindings for [libopus](https://opus-codec.org/) raw
packet encode/decode. One single-file ES module that runs unchanged in browsers
and Node — no `locateFile` hook, no second `.wasm` request, no native build step.

The default path is realtime voice: 48 kHz, stereo, 20 ms frames, raw Opus
packets, no Ogg/WebM container layer.

- **Browser and Node** from one import. Bundles cleanly with Vite, webpack, esbuild.
- **Int16 and Float32 PCM** — use whatever your pipeline already speaks.
- **Loss-resilient** — in-band FEC and packet-loss concealment.
- **Tunable** — bitrate, VBR/CBR, complexity, signal, bandwidth, DTX, plus a curated CTL passthrough.
- **Drop-in `@discordjs/opus` adapter** — same method shape, no node-gyp.

📖 **Full documentation: [libopus-wasm.dev](https://libopus-wasm.dev)**

## Install

```bash
npm install libopus-wasm
```

ESM-only; Node 22+ or any current browser. No `@types` install needed.

## Quick start

```ts
import { createDecoder, createEncoder, getPacketInfo } from "libopus-wasm";

const encoder = await createEncoder(); // 48 kHz, stereo, 20 ms, audio
const decoder = await createDecoder();

const pcm = new…
