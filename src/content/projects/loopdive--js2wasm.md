---
repo: "loopdive/js2wasm"
name: "js2wasm"
description: "JavaScript (ECMAScript) to WebAssembly ahead-of-time compiler"
readmeQualityOk: true
url: "https://github.com/loopdive/js2wasm"
homepage: "http://js2wasm.loopdive.com/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [68, 29]
topics: ["aot-compilation", "compiler", "garbage-collection", "javascript", "typescript", "wasm-gc", "webassembly", "ecmascript"]
stars: 51
forks: 3
openIssues: 1
closedIssues: 22
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-04-23T11:33:54Z"
lastCommitAt: "2026-08-13T05:19:16Z"
lastReleaseAt: "2026-07-19T00:40:52Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 45
maintainers: ["ttraenkler", "github-actions[bot]", "js2-merge-queue-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fce7561d2e0f01c5f99ca862bc71044970f8d6d0c2144c53ef5ab17a035805a6/loopdive/js2wasm"
fundingLinks: ["GITHUB:https://github.com/loopdive"]
discussionCount: 3
---

# js2wasm

Direct AOT compilation from JavaScript and TypeScript to WebAssembly GC.

> **Status: early-stage research prototype — a tech demo, not a production-ready compiler.**
> `js2wasm` is an experimental ahead-of-time JavaScript/TypeScript-to-WasmGC compiler under active development. It explores one specific point in the design space: full ECMAScript backwards compatibility via direct AOT compilation, with no JavaScript engine or interpreter bundled into the output. It does **not** claim production readiness, full language coverage, or stable APIs — expect rough edges, gaps, and breaking changes. Beyond the two auto-updated conformance figures below, live numbers live in **[STATUS.md](https://github.com/loopdive/js2wasm/blob/HEAD/STATUS.md)** (they change frequently and are not otherwise duplicated here).

`js2wasm` compiles source code into WasmGC binaries without embedding a JavaScript interpreter or shipping a bundled runtime. That avoids the runtime tax common in the interpreter-based and engine-embedding approaches — where a JavaScript interpreter or full engine is compiled to Wasm and shipped inside every module — and keeps the output aligned with Wasm-native deployment…
