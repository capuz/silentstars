---
repo: "senolgulgonul/verisim"
name: "verisim"
description: "Verilog in your browser — fully client-side. A browser-based Verilog simulator built by compiling Icarus Verilog to WebAssembly"
readmeQualityOk: true
url: "https://github.com/senolgulgonul/verisim"
homepage: "https://senolgulgonul.github.io/verisim/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [81]
topics: ["fpga", "iverilog", "simulator", "verilog", "wasm"]
stars: 26
forks: 5
openIssues: 3
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-08T11:08:30Z"
lastCommitAt: "2026-11-11T19:42:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 20
maintainers: ["senolgulgonul"]
openGraphImageUrl: "https://opengraph.githubassets.com/99742f33d6ac811a9d87b4255425860c6eddfe80ac63707e092c0c9d6c6c7121/senolgulgonul/verisim"
---

# VeriSim

**Verilog in your browser — fully client-side.**
A browser-based Verilog simulator built by compiling [Icarus Verilog](https://github.com/steveicarus/iverilog) to WebAssembly. No server, no install: edit, compile, simulate, view waveforms, and synthesize to a gate-level or RTL schematic — entirely in the page.

**Live:** https://senolgulgonul.github.io/verisim/

---

## Ported toolchain

VeriSim runs **Icarus Verilog version 14.0 (devel)**, built from upstream commit [`c7530db`](https://github.com/steveicarus/iverilog/commit/c7530db) (`master` as of 2026-05-31, the development line after the 13.0 release), compiled to WebAssembly with [Emscripten](https://emscripten.org/).

Icarus Verilog is three cooperating programs; each is shipped here as a separate WebAssembly module:

| Program | Role | Module |
|---|---|---|
| `ivlpp` | preprocessor (macros, includes, `` `line `` directives) | `ivlpp.wasm` / `ivlpp.js` |
| `ivl`   | compiler — elaborates Verilog and emits a `.vvp` program | `ivl.wasm` / `ivl.js` |
| `vvp`   | runtime — executes the `.vvp` program, writes the VCD | `vvp.wasm` / `vvp.js` |

## How it works

A normal Icarus install runs these as separate OS…
