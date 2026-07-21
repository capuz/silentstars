---
repo: "zig-utils/zig-js"
name: "zig-js"
description: "A JavaScript engine in pure Zig."
readmeQualityOk: true
url: "https://github.com/zig-utils/zig-js"
language: "Zig"
languages: ["Zig"]
languagePcts: [86]
topics: ["engine", "javascript", "javascriptcore", "js", "jsc", "zig", "test262"]
stars: 8
forks: 0
openIssues: 19
closedIssues: 406
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-05-27T15:16:11Z"
lastCommitAt: "2026-07-21T06:10:41Z"
lastReleaseAt: "2026-06-05T19:57:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 54
maintainers: ["chrisbbreuer", "glennmichael123"]
openGraphImageUrl: "https://opengraph.githubassets.com/80de6fa7d9ee5b5b0f2734c186a1c24487b97402279b95a1954b1a8b1b794176/zig-utils/zig-js"
---

# zig-js

A pure-Zig JavaScript engine with a JavaScriptCore-shaped C API. No JSC, V8, or external C libraries; no compatibility promises before stabilization.

```zig
const js = @import("js");

const ctx = try js.Context.create(allocator);
defer ctx.destroy();

const value = try ctx.evaluate("let x = 40; x + 2");
```

## Status

| profile | result | evidence |
| --- | ---: | --- |
| configured test262 | **53,175 / 53,175** | [run](https://github.com/zig-utils/zig-js/blob/HEAD/docs/.data/test262-run-2026-07-05.txt) · [data](https://github.com/zig-utils/zig-js/blob/HEAD/docs/.data/test262.json) |
| ten-profile WebAssembly matrix | **151,802 / 151,802 applicable** | Core 3: 63,964/63,964 · [matrix](https://github.com/zig-utils/zig-js/blob/HEAD/docs/.data/wasm-conformance-matrix.json) · [upstream-main shadow](https://github.com/zig-utils/zig-js/blob/HEAD/docs/.data/wasm-core-main-shadow-inventory.json) · [reproduce](https://github.com/zig-utils/zig-js/blob/HEAD/docs/wasm.md) |
| pinned private ABI | **Home 447/447 · Bun 437/437** | [inventories, provider audit, precise lifecycle, and exact reproduction](https://github.com/zig-utils/zig-js/blob/HEAD/docs/abi/README.md) |

##…
