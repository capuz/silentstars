---
repo: "aviatesk/JETLS.jl"
name: "JETLS.jl"
description: "A new language server for Julia, enabling modern, compiler-powered tooling."
url: "https://github.com/aviatesk/JETLS.jl"
homepage: "https://aviatesk.github.io/JETLS.jl/"
language: "Julia"
languages: ["Julia"]
languagePcts: [98]
topics: ["jet", "julia", "language-server", "static-analysis", "vscode-extension"]
stars: 291
forks: 22
openIssues: 18
closedIssues: 111
watchers: 7
contributors: 20
recentReleases: 0
createdAt: "2022-10-30T09:05:21Z"
lastCommitAt: "2026-06-28T01:43:38Z"
lastReleaseAt: "2025-12-08T11:36:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 40
maintainers: ["aviatesk", "github-actions[bot]", "koalazub"]
openGraphImageUrl: "https://opengraph.githubassets.com/70e3a1e3b28b09f99c4b886346e66aa6837ffc1045759f05c7305095830d8bb3/aviatesk/JETLS.jl"
---

# JETLS

The goal of this project is to develop a new language server for
[Julia](https://julialang.org/), currently called "JETLS".
JETLS aims to enhance developer productivity by providing advanced static
analysis and seamless integration with the Julia runtime.
By leveraging tooling technologies like
[JET.jl](https://github.com/aviatesk/JET.jl),
[JuliaSyntax.jl](https://github.com/JuliaLang/julia/tree/master/JuliaSyntax) and
[JuliaLowering.jl](https://github.com/JuliaLang/julia/tree/master/JuliaLowering),
JETLS aims to offer enhanced language features such as type-sensitive
diagnostics, macro-aware go-to definition and such.

This repository manages JETLS.jl, a Julia package that implements a language
server, and [`jetls-client`](https://marketplace.visualstudio.com/items?itemName=aviatesk.jetls-client),
a sample VSCode extension that serves as a language client for testing JETLS.

> [!warning]
> **Experimental**: JETLS is under active development.
> Not production-ready; APIs and behavior may change.
> Stability and performance are limited. Expect bugs and rough edges.

> [!warning]
> JETLS requires Julia 1.12.2 or later.
> It does not support Julia 1.12.1 or earlier, nor…
