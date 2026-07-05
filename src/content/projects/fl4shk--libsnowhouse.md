---
repo: "fl4shk/libsnowhouse"
name: "libsnowhouse"
description: "(In Development) SpinalHDL/Scala Library for developing CPUs with strictly-in-order pipelines"
readmeQualityOk: true
url: "https://github.com/fl4shk/libsnowhouse"
language: "Assembly"
languages: ["Assembly", "Scala"]
languagePcts: [62, 33]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-12-26T16:21:46Z"
lastCommitAt: "2026-07-05T21:01:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 65
maintainers: ["fl4shk"]
openGraphImageUrl: "https://opengraph.githubassets.com/e44fa8f701946928895f2e9ab1b438f21b114dce2073816ee5f6175e13a68324/fl4shk/libsnowhouse"
---

# Lib Snow House

1. This is a SpinalHDL library that primarily exists for developing
  RISC (or RISC-like) CPUs with strictly-in-order pipeline structures.
2. The primary inputs to this library for creating a new CPU are as
  follows:
  * A data structure indicating the kinds of instructions that your CPU
    supports.
  * A Scala function implementing the SpinalHDL code for your CPU's
    specific instruction decoder (though not all aspects of the Instruction
    Decode pipeline stage need to be implemented).
3. NOTE: There is no support implemented yet for virtual memory at the time
  of this writing, but in theory a user of `libsnowhouse` could implement
  **most** of the support needed for that through the instruction/data
  memory-access "bus"es/"port"s of a CPU implemented via this library.

4. There is a sample CPU that has been developed with the library, called
  the `SnowHouseCpu`. This CPU, given a, is able to reach clock rates
  around 140 MHz in a Speed Grade -1, Xilinx Artix-7 FPGA, at least in a
  version of this CPU that lacks support for any kind of interrupt.
  * This CPU's implementation, besides the generic parts of
    `libsnowhouse`, lives mostly within this…
