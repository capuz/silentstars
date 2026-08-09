---
repo: "loopdive/js2"
name: "js2"
description: "ECMAScript ahead-of-time compiler"
readmeQualityOk: true
url: "https://github.com/loopdive/js2"
homepage: "http://js2.loopdive.com/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [67, 30]
topics: ["aot-compilation", "compiler", "garbage-collection", "javascript", "typescript", "wasm-gc", "webassembly", "ecmascript"]
stars: 41
forks: 3
openIssues: 1
closedIssues: 16
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-04-23T11:33:54Z"
lastCommitAt: "2026-08-09T03:01:34Z"
lastReleaseAt: "2026-07-19T00:40:52Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 47
maintainers: ["ttraenkler", "claude", "js2-merge-queue-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e45741705af9d2846f4137063974b1cee579d497d1501686e3cec93067fdbb6/loopdive/js2"
fundingLinks: ["GITHUB:https://github.com/loopdive"]
discussionCount: 3
---

# js2wasm

Direct AOT compilation from JavaScript and TypeScript to WebAssembly GC.

> **Status: early-stage research prototype — a tech demo, not a production-ready compiler.**
> `js2wasm` is an experimental ahead-of-time JavaScript/TypeScript-to-WasmGC compiler under active development. It explores one specific point in the design space: full ECMAScript backwards compatibility via direct AOT compilation, with no JavaScript engine or interpreter bundled into the output. It does **not** claim production readiness, full language coverage, or stable APIs — expect rough edges, gaps, and breaking changes. Beyond the two auto-updated conformance figures below, live numbers live in **[STATUS.md](https://github.com/loopdive/js2/blob/HEAD/STATUS.md)** (they change frequently and are not otherwise duplicated here).

`js2wasm` compiles source code into WasmGC binaries without embedding a JavaScript interpreter or shipping a bundled runtime. That avoids the runtime tax common in the interpreter-based and engine-embedding approaches — where a JavaScript interpreter or full engine is compiled to Wasm and shipped inside every module — and keeps the output aligned with Wasm-native deployment…
