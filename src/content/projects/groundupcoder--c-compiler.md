---
repo: "GroundUpCoder/c-compiler"
name: "c-compiler"
description: "C compiler in one JS file"
readmeQualityOk: true
url: "https://github.com/GroundUpCoder/c-compiler"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [69, 20]
stars: 50
forks: 4
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2026-03-03T22:55:48Z"
lastCommitAt: "2026-08-13T04:24:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 37
maintainers: ["josephkimgpt"]
openGraphImageUrl: "https://opengraph.githubassets.com/df8bf4a09208d0e84f85513877c22c6e8afca39229d93b3cfac8ad095adc08f7/GroundUpCoder/c-compiler"
---

# c-compiler

C-to-WebAssembly compiler in one file.

I occasionally post videos about this project at [youtube.com/@groundupcoder](https://www.youtube.com/@groundupcoder) — design decisions, problems I've hit, and parts of the implementation I find interesting. This repo isn't structured as a tutorial; it's the actual code I'm writing as I go.

**compiler.js** — JavaScript, runs on Node.js and browser.

A frozen C++20 port (**compiler.cc**) is preserved in `old/` along with its own test runner and unit tests. The two compilers produce identical output for all unit tests (verified by equiv tests in `old/`).

### Node.js version

Requires **Node.js 24** with `--experimental-wasm-jspi`, or **Node.js 25+** (no flag needed). Older versions can still produce valid `.wasm` bytes (codegen is version-independent), but can't run them locally because their V8 lacks WASM GC and/or `WebAssembly.Suspending`. See [docs/NODE_VERSIONS.md](https://github.com/GroundUpCoder/c-compiler/blob/HEAD/docs/NODE_VERSIONS.md) for the full compatibility matrix.

There are three ways to run the compiled programs:

### WASM files (`.wasm`) — run with Node.js

Compile to a `.wasm` file and run it with…
