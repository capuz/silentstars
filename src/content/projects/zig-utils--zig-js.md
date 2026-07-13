---
repo: "zig-utils/zig-js"
name: "zig-js"
description: "A JavaScript engine in pure Zig."
readmeQualityOk: true
url: "https://github.com/zig-utils/zig-js"
language: "Zig"
languages: ["Zig"]
languagePcts: [85]
topics: ["engine", "javascript", "javascriptcore", "js", "jsc", "zig", "test262"]
stars: 5
forks: 0
openIssues: 9
closedIssues: 32
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-05-27T15:16:11Z"
lastCommitAt: "2026-07-13T06:36:27Z"
lastReleaseAt: "2026-06-05T19:57:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 54
maintainers: ["chrisbbreuer"]
openGraphImageUrl: "https://opengraph.githubassets.com/4aba972131be8bf9382c4fdf04ec0e5373109a61be5fb0720cdf8ca9a3c0710e/zig-utils/zig-js"
---

# zig-js

A JavaScript engine written in pure Zig, with an implemented JavaScriptCore-shaped C API subset. No JSC, no V8, no external C libraries.

`zig-js` is a small embeddable engine for Zig applications, tools, experiments, and runtimes that want to own their JavaScript stack. Use it directly as a Zig module, or link `libzig-js.a` for hosts that only need the implemented public C API subset. The project is still pre-stabilization, so clean zig-js semantics win over preserving inert compatibility shims.

The configured conformance runner is green against the pinned tc39/test262 corpus it scores: **48,506 / 48,506 valid** and **4,669 / 4,669 negative**, with **0 parse**, **0 runtime**, **0 host**, **0 skipped**, and **0 excluded** failures. That is a scoped result, not a claim of full ECMAScript completion.

```zig
const js = @import("js");

const ctx = try js.Context.create(allocator);
defer ctx.destroy();

const v = try ctx.evaluate("let x = 40; x + 2");
// v == .{ .number = 42 }
```

## Contents

- [Status](#status)
- [How It Works](#how-it-works)
- [Conformance](#conformance)
- [Performance](#performance)
- [Language And Runtime Coverage](#language-and-runtime-coverage)
-…
