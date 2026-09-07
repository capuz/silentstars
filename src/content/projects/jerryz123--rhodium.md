---
repo: "jerryz123/rhodium"
name: "rhodium"
description: "An HDL built on Rhombus/Racket"
readmeQualityOk: true
url: "https://github.com/jerryz123/rhodium"
language: "SystemVerilog"
languages: ["SystemVerilog"]
languagePcts: [63]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-13T04:15:00Z"
lastCommitAt: "2026-09-07T08:30:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 54
maintainers: ["jerryz123"]
openGraphImageUrl: "https://opengraph.githubassets.com/6edf151f5e7ad7e2c5aa826b0fb359da29189b255dd2389671046cec4a861fc4/jerryz123/rhodium"
---

# Rhodium

> All the code and text in this repository was written by a LLM. The only text not produced by a LLM is this disclaimer. I worked with a coding agent to implement everything here to my personal preferences.

Rhodium is an experimental hardware description language hosted by
[Rhombus](https://docs.racket-lang.org/rhombus/). Ordinary Rhombus computation
generates hardware through concise, typed notation; elaboration produces one
public, backend-independent hardware IR and verifies it before any downstream
tool consumes it.

Normal designs use `#lang rhodium`. Authors who want to assemble a smaller
language can start from `#lang rhodium/base` and import only the frontend layers
they need. Both profiles create exactly the same core hardware model.

This page is the user and integrator entry point. Contributors changing Rhodium
itself should start with [`DEVELOPING.md`](https://github.com/jerryz123/rhodium/blob/HEAD/DEVELOPING.md).

Rhodium does not emit SystemVerilog itself. Its optional backend lowers verified
IR through CIRCT, which owns RTL generation.

## Quick start

### Requirements

- Racket 9.2 or a compatible current release
- Rhombus 1.1
- Device Tree Compiler for…
