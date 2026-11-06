---
repo: "dy/jz"
name: "jz"
description: "JS to WASM compiler"
readmeQualityOk: true
url: "https://github.com/dy/jz"
homepage: "http://jz.js.org/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [89]
topics: ["assemblyscript", "compiler", "porffor", "wasm", "aot", "audio", "creative-coding", "dsp", "javascript", "simd"]
stars: 219
forks: 10
openIssues: 1
closedIssues: 3
watchers: 2
contributors: 7
recentReleases: 3
createdAt: "2024-11-13T14:13:53Z"
lastCommitAt: "2026-11-06T06:53:29Z"
lastReleaseAt: "2026-11-03T23:49:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 45
maintainers: ["dy"]
openGraphImageUrl: "https://opengraph.githubassets.com/b24e3f1e24921fbd74cde32a60bb648f39eb73ce7d89caa4c9bfc9e05998bb43/dy/jz"
discussionCount: 3
---

[](https://www.npmjs.com/package/jz) [](https://github.com/dy/jz/actions/workflows/test.yml) [](https://github.com/dy/jz/actions/workflows/bench.yml)

**JZ** (_javascript zero_) compiles JavaScript to fast, minimal WASM.

**[site](https://jz.js.org/)**  /  **[guide](https://jz.js.org/guide/)**  /  **[try it](https://jz.js.org/repl/)**  /  **[examples](https://jz.js.org/examples/)**  /  **[benchmarks](https://jz.js.org/bench/)**

| Good for | Not for |
|---|---|
| DSP, audio, synthesis | UI, DOM, frontend state |
| Images, video, pixels | Network, hot I/O, serving HTTP |
| Simulation, physics, games | Dynamic object models and monkey-patching |
| Parsers, codecs, compression | Allocation-heavy, long-lived object graphs |
| Scientific, numeric, edge ML | Security-sensitive cryptography and arbitrary-precision integers |
| Hashing, checksums, RNG | Tiny calls where the JS/WASM boundary dominates |

## Usage

```sh
npm install jz
```

```js
import jz from 'jz'
const { exports } = jz`export const square = x => x * x`
exports.square(7) // 49
```

`jz(source, opts)` compiles and instantiates. `compile(source, opts)` returns the wasm, and
`instantiate(wasm, { imports, memory, wasi })`…
