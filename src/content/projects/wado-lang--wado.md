---
repo: "wado-lang/wado"
name: "wado"
description: "The Wado Programming Language"
readmeQualityOk: true
url: "https://github.com/wado-lang/wado"
homepage: "https://wado-lang.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["wado", "wasi", "wasm", "programming-language"]
stars: 120
forks: 2
openIssues: 34
closedIssues: 206
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2026-01-08T03:09:09Z"
lastCommitAt: "2026-11-07T09:30:11Z"
lastReleaseAt: "2026-07-11T00:52:20Z"
status: "thriving"
tags: ["funded"]
healthScore: 97
undervaluedScore: 40
maintainers: ["gfx", "claude", "wado-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5866607bd8187531037a12237562077a82c1b6389ef9617bd436502e2f867bf6/wado-lang/wado"
fundingLinks: ["GITHUB:https://github.com/wado-lang"]
discussionCount: 0
---

# The Wado Programming Language

Wado is a statically typed, garbage-collected, and effectful language that targets **only** the WebAssembly Component Model and WASI 0.3+. It is designed for embedding small, type-safe Wasm applications where performance and binary size matter.

You can use Wado to build CLI applications and HTTP services, or try it directly in your browser.

[Gale](https://github.com/wado-lang/wado/blob/HEAD/package-gale), an ANTLR4-compatible parser generator written in Wado, shows what Wado can achieve in performance and binary size. In our [SQL parsing benchmark](https://github.com/wado-lang/wado/blob/HEAD/benchmark/README.md#sql-parse), its generated parser is much faster than ANTLR4's Java parser and slightly faster than a hand-written Rust parser.

Visit [wado-lang.org](https://wado-lang.org) for the documentation, playground, and blog. The [design philosophy](https://github.com/wado-lang/wado/blob/HEAD/docs/design-philosophy.md) explains the reasoning behind the language.

## Hello World

This is a complete Wado program that prints "Hello, world!" to stdout:

```wado
#!/usr/bin/env -S wado run
use { println, Stdout } from "core:cli";

export fn run() with…
