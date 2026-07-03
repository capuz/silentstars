---
repo: "loopdive/js2"
name: "js2"
description: "ECMAScript to WebAssembly GC AOT compiler"
url: "https://github.com/loopdive/js2"
homepage: "http://js2.loopdive.com/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [56, 40]
topics: ["aot-compilation", "compiler", "garbage-collection", "javascript", "typescript", "wasm-gc", "webassembly", "ecmascript"]
stars: 18
forks: 2
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 4
recentReleases: 6
createdAt: "2026-04-23T11:33:54Z"
lastCommitAt: "2026-07-03T06:05:07Z"
lastReleaseAt: "2026-06-29T21:04:31Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 57
maintainers: ["ttraenkler", "js2-merge-queue-bot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0b53f2a6eec429ac76e4339aa51bc6ae687b9191a0f826eab90da62cfa39677/loopdive/js2"
fundingLinks: ["GITHUB:https://github.com/loopdive"]
discussionCount: 3
---

# js2wasm

Direct AOT compilation from JavaScript and TypeScript to WebAssembly GC.

> **Status: early-stage research prototype — a tech demo, not a production-ready compiler.**
> `js2wasm` is an experimental ahead-of-time JavaScript/TypeScript-to-WasmGC compiler under active development. It explores one specific point in the design space: full ECMAScript backwards compatibility via direct AOT compilation, with no JavaScript engine or interpreter bundled into the output. It does **not** claim production readiness, full language coverage, or stable APIs — expect rough edges, gaps, and breaking changes. Live conformance and benchmark figures are in **[STATUS.md](./STATUS.md)** (numbers change frequently and are not duplicated in this README).

`js2wasm` compiles source code into WasmGC binaries without embedding a JavaScript interpreter or shipping a bundled runtime. That avoids the runtime tax common in the interpreter-based and engine-embedding approaches — where a JavaScript interpreter or full engine is compiled to Wasm and shipped inside every module — and keeps the output aligned with Wasm-native deployment models.

`js2wasm` is a free and open-source project developed by…
