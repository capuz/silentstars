---
repo: "WoofWare/borzoi"
name: "borzoi"
description: "An F# LSP that is WRITTEN IN RUST and therefore REALLY FAST"
readmeQualityOk: true
url: "https://github.com/WoofWare/borzoi"
homepage: "https://woofware.github.io/borzoi/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 7
forks: 0
openIssues: 113
closedIssues: 90
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-15T20:15:56Z"
lastCommitAt: "2026-11-14T09:18:30Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 88
undervaluedScore: 48
maintainers: ["Smaug123"]
openGraphImageUrl: "https://opengraph.githubassets.com/518259d04173a5a1d196f83d4e29521d3cd8176094a5577ca9e1f37fa9912564/WoofWare/borzoi"
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
