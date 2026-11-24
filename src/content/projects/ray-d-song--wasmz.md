---
repo: "Ray-D-Song/wasmz"
name: "wasmz"
description: "Fast WebAssembly interpreter"
readmeQualityOk: true
url: "https://github.com/Ray-D-Song/wasmz"
homepage: "https://ray-d-song.github.io/wasmz/"
language: "Zig"
languages: ["Zig"]
languagePcts: [95]
stars: 84
forks: 5
openIssues: 0
closedIssues: 11
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-03-27T05:42:40Z"
lastCommitAt: "2026-11-24T01:59:28Z"
lastReleaseAt: "2026-11-24T01:14:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 21
maintainers: ["Ray-D-Song"]
openGraphImageUrl: "https://opengraph.githubassets.com/395fe3f5d1bb1b9276f8807e5b687d9bd6e0ee5530cfb362a33c04186cadacb9/Ray-D-Song/wasmz"
---

# wasmz

A WebAssembly runtime written in [Zig](https://ziglang.org/), designed to be fast, compact, and easy to embed.

## Performance

In my benchmarks, **wasmz** is currently the fastest WebAssembly interpreter I have tested.

- Benchmark report: [https://ray-d-song.github.io/wasmz/bench.html](https://ray-d-song.github.io/wasmz/bench.html)
- Full docs: [https://ray-d-song.github.io/wasmz/](https://ray-d-song.github.io/wasmz/)

The benchmark chapter also includes notes on the parser and interpreter optimizations used in wasmz.

If you find workloads where wasmz has a clear disadvantage, please let me know. I will do my best to optimize them :)

### Real-World Tested

Validated with production WASM workloads:
- **esbuild** - JavaScript bundler compiled to WASM
- **QuickJS** - Lightweight JavaScript engine compiled to WASM
- **SQLite** - Database engine compiled to WASM
