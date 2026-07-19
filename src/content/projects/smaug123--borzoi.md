---
repo: "Smaug123/borzoi"
name: "borzoi"
description: "An F# LSP that is WRITTEN IN RUST and therefore REALLY FAST"
readmeQualityOk: true
url: "https://github.com/Smaug123/borzoi"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 5
forks: 0
openIssues: 98
closedIssues: 21
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-15T20:15:56Z"
lastCommitAt: "2026-07-19T06:12:14Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 83
undervaluedScore: 33
maintainers: ["Smaug123"]
openGraphImageUrl: "https://opengraph.githubassets.com/97b26f2cafbdee9474f442d0516f8fdc3e1c8670cb3a6ae9d2157fe5ab3cf645/Smaug123/borzoi"
---

# Borzoi: an F# LSP

*Slop status: 100% vibe-coded. Written primarily by Claude Opus 4.6-4.8, Fable 5, and GPT-5.5 and 5.6 Sol. Abandon hope, all ye who enter here.*

This is an F# LSP written in Rust.

All my life I have unsuccessfully fought the urge to rewrite the world; I have finally got round to the F# language itself.
The *real*, official and supported, answer to "how do we make a fast F# LSP" is the ongoing work in the F# compiler's own repo to create a proper tree-sitter grammar.

## Status

Not ready for use.

Differential testing against the F# compiler's own source indicates that we correctly parse almost all of the compiler, and we correctly perform enough of MSBuild to know what is compiling where and to list all the package dependencies.
But the type-checker is barely begun, and NuGet restore is only partially implemented.

## Trying it out

If you *do* try it out (I repeat that it is extremely incomplete), consider seeing how it performs in Neovim.
`nix build .#otel` gives you an OpenTelemetry-enabled build in `result/` (set `OTEL_EXPORTER_OTLP_ENDPOINT` or default to `http://localhost:4318`), and then `:luafile .nvim.lua` from within Neovim will turn it on with a…
