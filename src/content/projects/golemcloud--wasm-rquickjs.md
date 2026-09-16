---
repo: "golemcloud/wasm-rquickjs"
name: "wasm-rquickjs"
description: "QuickJs based wrapper generator for WASM components in written in JavaScript"
readmeQualityOk: true
url: "https://github.com/golemcloud/wasm-rquickjs"
language: "JavaScript"
languages: ["JavaScript", "Rust"]
languagePcts: [58, 40]
stars: 21
forks: 2
openIssues: 1
closedIssues: 45
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-06-13T08:41:50Z"
lastCommitAt: "2026-09-16T08:48:13Z"
lastReleaseAt: "2025-09-05T16:44:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 65
maintainers: ["noise64", "vigoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed5febc10ddbd0f78aaf4847e10cb976681a4f6e570e3a57ec539fc7ee3814f5/golemcloud/wasm-rquickjs"
---

# wasm-rquickjs

## Introduction

Command line tool and library to generate a Rust crate wrapping JavaScript code into a WebAssembly Component using the
QuickJS engine.

### Comparison with ComponentizeJS

[ComponentizeJS](https://github.com/bytecodealliance/ComponentizeJS) achieves the same goal of wrapping JavaScript code
into
a WebAssembly Component, but it does it using a modified version of the SpiderMonkey engine.

Advantages of wasm-rquickjs over ComponentizeJS:

- At the time of writing, there are known bugs in ComponentizeJS (or one of its underlying modules) that prevents it
  from being used in production.
- Much simpler to develop and debug, as everything exposed for JavaScript is implemented in async Rust using
  the [rquickjs library](https://github.com/DelSkayn/rquickjs)
- The WIT-JS mapping rules and the set of available JavaScript APIs are well defined
- Smaller WASM binary size

Advantages of ComponentizeJS over wasm-rquickjs:

- Faster runtime (due to the SpiderMonkey engine)
- Faster startup time (it does pre-initialization with Wizer)
- No need for the Rust toolchain for end users

### Comparison with wasmedge-quickjs

The project is similar to…
