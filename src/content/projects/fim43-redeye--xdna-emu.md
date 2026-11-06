---
repo: "FIM43-Redeye/xdna-emu"
name: "xdna-emu"
description: "Open-source emulator and visual debugger for AMD XDNA NPUs (Ryzen AI)"
readmeQualityOk: true
url: "https://github.com/FIM43-Redeye/xdna-emu"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [62, 24]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-12-23T04:30:04Z"
lastCommitAt: "2026-11-06T09:29:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 65
maintainers: ["FIM43-Redeye"]
openGraphImageUrl: "https://opengraph.githubassets.com/23f69de4d8539971989304d2946eabba45524f3c151fae9cca6c48d505d84230/FIM43-Redeye/xdna-emu"
---

## NOTE TO THE READER

Due to the unexpected death of my only system with XDNA 1, development on
this project is currently paused. Hoping to resume as soon as possible.

# xdna-emu

Open-source emulator and visual debugger for AMD XDNA NPUs (Ryzen AI).
Loads real `.xclbin` binaries, executes them faithfully, and provides a
drop-in emulation backend for the AMD NPU development ecosystem.

## Overview

xdna-emu is a from-scratch emulator for the AIE2 tile processor array found
in AMD Ryzen AI hardware. It targets binary compatibility: the same xclbin
that runs on real silicon runs in the emulator, producing identical results.

The emulator plugs into AMD's XRT runtime via a driver plugin, so existing
XRT-based test programs run against the emulator unmodified. Set `XDNA_EMU=1`
and your test binary talks to the emulator instead of the NPU.

### Design Principles

- **Derive from the toolchain.** Hardware behavior is extracted from
  open-source sources (aie-rt, llvm-aie, mlir-aie), not hardcoded. The
  TableGen-driven ISA decoder has zero hardcoded encodings. BD field parsing
  has zero hardcoded bit positions. See…
