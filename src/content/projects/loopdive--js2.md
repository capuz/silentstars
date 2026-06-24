---
repo: "loopdive/js2"
name: "js2"
description: "ECMAScript to WebAssembly GC AOT compiler"
url: "https://github.com/loopdive/js2"
homepage: "http://js2.loopdive.com/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [52, 44]
topics: ["aot-compilation", "compiler", "garbage-collection", "javascript", "typescript", "wasm-gc", "webassembly", "ecmascript"]
stars: 17
forks: 2
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-23T11:33:54Z"
lastCommitAt: "2026-06-24T00:21:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 48
maintainers: ["ttraenkler", "github-actions[bot]", "js2-merge-queue-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6de50634739dad5fcff35e6eed44c13d03627c867b1632c33baa9d888a771c8/loopdive/js2"
fundingLinks: ["GITHUB:https://github.com/loopdive"]
discussionCount: 3
---

# js2wasm

Direct AOT compilation from JavaScript and TypeScript to WebAssembly GC.

> **Status: early-stage research prototype — a tech demo, not a production-ready compiler.**
> `js2wasm` is an experimental ahead-of-time JavaScript/TypeScript-to-WasmGC compiler under active development. It explores one specific point in the design space: full ECMAScript backwards compatibility via direct AOT compilation, with no JavaScript engine or interpreter bundled into the output. It does **not** claim production readiness, full language coverage, or stable APIs — expect rough edges, gaps, and breaking changes. Live conformance and benchmark figures are in **[STATUS.md](./STATUS.md)** (numbers change frequently and are not duplicated in this README).

`js2wasm` compiles source code into WasmGC binaries without embedding a JavaScript interpreter or shipping a bundled runtime. That avoids the runtime tax common in the interpreter-based and engine-embedding approaches — where a JavaScript interpreter or full engine is compiled to Wasm and shipped inside every module — and keeps the output aligned with Wasm-native deployment models.

`js2wasm` is a free and open-source project developed by…
