---
repo: "anutosh491/WasmBolt"
name: "WasmBolt"
description: "The LLVM Project in your Browser"
readmeQualityOk: true
url: "https://github.com/anutosh491/WasmBolt"
homepage: "https://anutosh21.github.io/WasmBolt/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [58]
stars: 20
forks: 2
openIssues: 8
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-04T11:09:12Z"
lastCommitAt: "2026-10-10T10:05:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 26
maintainers: ["anutosh491"]
openGraphImageUrl: "https://opengraph.githubassets.com/9cda2e3bd3771c9a621486eb4811e85b0468361b2166db4a2dd529f74069d959/anutosh491/WasmBolt"
---

# WasmBolt

**WasmBolt is a browser-native laboratory for MLIR, C, C++ and LLVM.** It embeds
Clang's frontend and the WebAssembly LLD linker in an Emscripten runtime, and
uses published LLVM, MLIR and Graphviz tool modules in Web Workers. The complete
pipeline runs locally in the browser. Try here : https://anutosh21.github.io/WasmBolt/

Start with the [tutorials](https://github.com/anutosh491/WasmBolt/blob/HEAD/tutorials.md) for MLIR, WebAssembly, LLVM utilities,
x86-64 and AArch64.
They walk through commands and inspecting generated files in the browser.

```text
C / C++ source -> resident Clang -> AST / LLVM IR / optimized IR / assembly
LLVM IR -> resident Clang -> optimized IR / assembly
Resident Clang -> Wasm object -> in-process wasm-ld -> Wasm side module -> execution
LLVM CFG -> opt in a Worker -> DOT -> Graphviz in a Worker -> SVG
```

## What works

- C23 and C++23 source;
- tensor-based MLIR input, the complete `mlir-opt` dialect/pass registry, and
  `mlir-translate` for translation to LLVM IR;
- Clang diagnostics and textual AST dumps;
- unoptimized and optimized LLVM IR;
- configurable new-pass-manager pipelines such as `default<O2>`;
- LLVM `dot-cfg` output rendered…
