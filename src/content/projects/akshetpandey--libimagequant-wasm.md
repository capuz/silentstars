---
repo: "akshetpandey/libimagequant-wasm"
name: "libimagequant-wasm"
description: "WASM bindings for libimagequant image quantization library with Web Worker support"
readmeQualityOk: true
url: "https://github.com/akshetpandey/libimagequant-wasm"
language: "JavaScript"
languages: ["JavaScript", "TypeScript", "Rust"]
languagePcts: [50, 30, 21]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-08-13T06:51:15Z"
lastCommitAt: "2026-10-25T22:10:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 64
maintainers: ["akshetpandey"]
openGraphImageUrl: "https://opengraph.githubassets.com/73f8dfe42faadb18cdcddf6ea0c6d2cf1b0a266da6e58255b73ec453e5ea620b/akshetpandey/libimagequant-wasm"
---

# libimagequant-wasm

Quantize PNGs, animated PNGs, and RGBA images into indexed PNGs with up to 256 colors and alpha transparency.
Uses [libimagequant](https://github.com/ImageOptim/libimagequant) compiled to WebAssembly,
with processing in a browser worker or Node.js worker thread. Includes TypeScript declarations,
ES modules, and CommonJS exports.

## Install

```bash
npm install libimagequant-wasm
```

| Environment    | Entry point               | Result pixels                                |
| -------------- | ------------------------- | -------------------------------------------- |
| Browser        | `libimagequant-wasm`      | Native `ImageData`                           |
| Node.js 22.12+ | `libimagequant-wasm/node` | `{ data: Uint8ClampedArray, width, height }` |

Use `/node` explicitly in server code. The root entry is the browser API.
Neither entry requires Rust or additional runtime dependencies.

## Browser

```typescript
import LibImageQuant from 'libimagequant-wasm';

const quantizer = new LibImageQuant();
try {
  const response = await fetch('/input.png');
  if (!response.ok) throw new Error(`HTTP ${response.status}`);

  const result = await…
