---
repo: "loopdive/js2"
name: "js2"
description: "JavaScript (ECMAScript) ahead-of-time compiler"
readmeQualityOk: true
url: "https://github.com/loopdive/js2"
homepage: "https://js2.loopdive.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["aot-compilation", "compiler", "garbage-collection", "javascript", "typescript", "wasm-gc", "webassembly", "ecmascript"]
stars: 67
forks: 4
openIssues: 3
closedIssues: 26
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-23T11:33:54Z"
lastCommitAt: "2026-11-06T02:27:25Z"
lastReleaseAt: "2026-07-19T00:40:52Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 38
maintainers: ["ttraenkler", "github-actions[bot]", "js2-merge-queue-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e387d6d6395910554b121efdd76cd34b5c812e133e088c12aa5eb607562b3d1/loopdive/js2"
fundingLinks: ["GITHUB:https://github.com/loopdive"]
discussionCount: 4
---

# js2wasm

Direct AOT compilation from JavaScript and TypeScript to machine code (current target WebAssembly GC).

> **Status: early-stage research prototype — a tech demo, not a production-ready compiler.**
> `js2wasm` is an experimental ahead-of-time JavaScript/TypeScript-to-WasmGC compiler under active development. It explores one specific point in the design space: full ECMAScript backwards compatibility via direct AOT compilation, with no JavaScript engine or interpreter bundled into the output. It does **not** claim production readiness, full language coverage, or stable APIs — expect rough edges, gaps, and breaking changes. Beyond the auto-updated conformance figure below, live numbers live in **[STATUS.md](https://github.com/loopdive/js2/blob/HEAD/STATUS.md)** (they change frequently and are not otherwise duplicated here).

`js2wasm` compiles source code into WasmGC binaries without embedding a JavaScript interpreter or shipping a bundled runtime. That avoids the runtime tax common in the interpreter-based and engine-embedding approaches — where a JavaScript interpreter or full engine is compiled to Wasm and shipped inside every module — and keeps the output aligned with…
