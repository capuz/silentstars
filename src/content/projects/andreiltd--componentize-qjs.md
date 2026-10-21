---
repo: "andreiltd/componentize-qjs"
name: "componentize-qjs"
description: "Convert JavaScript to WebAssembly components using QuickJS"
readmeQualityOk: true
url: "https://github.com/andreiltd/componentize-qjs"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 11
forks: 5
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 5
recentReleases: 2
createdAt: "2026-02-03T17:58:41Z"
lastCommitAt: "2026-10-21T17:31:57Z"
lastReleaseAt: "2026-09-02T15:04:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 68
maintainers: ["renovate[bot]", "andreiltd", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/79afc111de23a40de58881c98d19c061f8a9785d2fff809e1849a9418b49c3d1/andreiltd/componentize-qjs"
---

# componentize-qjs

Convert JavaScript source code into
[WebAssembly components](https://component-model.bytecodealliance.org/) using
[QuickJS](https://github.com/quickjs-ng/quickjs).

## Overview

`componentize-qjs` takes a JavaScript source file and a
[WIT](https://component-model.bytecodealliance.org/design/wit.html) definition,
and produces a standalone WebAssembly component that can run on any
component-model runtime (e.g. [Wasmtime](https://wasmtime.dev/)).

Under the hood it:

1. Embeds the [QuickJS](https://github.com/quickjs-ng/quickjs) engine (via
   [rquickjs](https://github.com/DelSkayn/rquickjs)) as the JavaScript
   runtime.
2. Uses [wit-dylib](https://crates.io/crates/wit-dylib) to generate WIT
   bindings that bridge the component model and the JS engine.
3. Snapshots the initialized JS state with
   [Wizer](https://github.com/bytecodealliance/wizer) so startup cost is paid at
   build time, not at runtime.
4. Prunes explicitly marked one-time setup code with Walrus and strips
   debug/build metadata from the snapshotted component.

## Prerequisites

Rust **1.97** or later is required by Wasmtime (the `wasm32-wasip2` target also
needs a recent toolchain for PIC…
