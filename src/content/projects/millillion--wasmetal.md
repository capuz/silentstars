---
repo: "Millillion/wasmetal"
name: "wasmetal"
description: "A bare metal physical implementation of WebAssembly. That's right, a WebAssembly CPU."
readmeQualityOk: true
url: "https://github.com/Millillion/wasmetal"
language: "Python"
languages: ["Python", "SystemVerilog"]
languagePcts: [62, 24]
stars: 375
forks: 10
openIssues: 14
closedIssues: 2
watchers: 12
contributors: 3
recentReleases: 0
createdAt: "2018-04-21T16:19:43Z"
lastCommitAt: "2026-11-04T13:05:31Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 76
undervaluedScore: 30
maintainers: ["lastmjs"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8b44ec6b17a65c093705441a3449192cde728be01d0bc2c961d7626e64f7f90/Millillion/wasmetal"
fundingLinks: ["GITHUB:https://github.com/lastmjs"]
---

# WasMetal

A project to build a bare metal physical implementation of WebAssembly. That's right, a WebAssembly CPU. Inspired in part by [this amazing talk](https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript).

WasMetal is being revived under [Millillion](https://github.com/Millillion) in 2026. It implements WebAssembly Core 3.0 instructions in a clocked SystemVerilog stack machine, with a software loading and validation front end.

Completed work lives on `main`. Temporary development branches are integrated into `main` and pushed before a task is finished; the README is reviewed with every commit. Main-branch verification runs finish before queued code changes are tested, so frequent commits do not cancel active regressions. Newer pushes can replace an older pending run.

## Current status

The CPU now implements integral floating-point rounding directly in the IEEE
encoding. All 259 official suites pass [without memory stalls](https://github.com/Millillion/wasmetal/blob/HEAD/docs/verification/core-rounding-native-zero.json)
and [with three wait states](https://github.com/Millillion/wasmetal/blob/HEAD/docs/verification/core-3.0-current.json), with
[every…
