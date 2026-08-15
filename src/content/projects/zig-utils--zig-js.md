---
repo: "zig-utils/zig-js"
name: "zig-js"
description: "A JavaScript engine in pure Zig."
readmeQualityOk: true
url: "https://github.com/zig-utils/zig-js"
language: "Zig"
languages: ["Zig"]
languagePcts: [87]
topics: ["engine", "javascript", "javascriptcore", "js", "jsc", "zig", "test262"]
stars: 28
forks: 0
openIssues: 43
closedIssues: 518
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-05-27T15:16:11Z"
lastCommitAt: "2026-08-15T04:03:45Z"
lastReleaseAt: "2026-06-05T19:57:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 42
maintainers: ["chrisbbreuer"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac90965f146dee6f1f7027b9f83a24a1fd12cf07884b7d9004751e546fddcd5b/zig-utils/zig-js"
discussionCount: 0
---

# zig-js

Core engine and importable `js` module code are Zig; the static library exports JavaScriptCore-shaped C headers/symbols, with macOS Objective-C bridge glue in `src/objc_bridge.m`. The package depends on `zig-regex` and `zig-gc`, not bundled JSC/V8; system JavaScriptCore is used only by explicit differential and benchmark targets. APIs are pre-stabilization.

```zig
const js = @import("js");

const ctx = try js.Context.create(allocator);
defer ctx.destroy();

const value = try ctx.evaluate("let x = 40; x + 2");
```

## Status

| profile | result | evidence |
| --- | ---: | --- |
| configured test262 | **53,175 / 53,175** | [run](https://github.com/zig-utils/zig-js/blob/HEAD/docs/.data/test262-run-2026-07-27.txt) · [data](https://github.com/zig-utils/zig-js/blob/HEAD/docs/.data/test262.json) |
| ten-profile WebAssembly matrix | **151,802 / 151,802 applicable** | Core 3: 63,964/63,964 · [matrix](https://github.com/zig-utils/zig-js/blob/HEAD/docs/.data/wasm-conformance-matrix.json) · [upstream-main shadow](https://github.com/zig-utils/zig-js/blob/HEAD/docs/.data/wasm-core-main-shadow-inventory.json) · [reproduce](https://github.com/zig-utils/zig-js/blob/HEAD/docs/wasm.md) |…
