---
repo: "hankhsu1996/lyra"
name: "lyra"
description: "Modern SystemVerilog simulation toolchain with a multi-stage IR pipeline and multiple backends."
readmeQualityOk: true
url: "https://github.com/hankhsu1996/lyra"
language: "C++"
languages: ["C++", "SystemVerilog"]
languagePcts: [77, 20]
topics: ["compiler", "simulation", "simulator", "systemverilog", "verilog"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-04-22T05:42:03Z"
lastCommitAt: "2026-10-10T10:00:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 82
maintainers: ["hankhsu1996"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a80bf9b918efa5a2f9faf36dd65f549d64d60170bb0404e916a030b2e547b3b/hankhsu1996/lyra"
postedAt: "2026-10-09T10:56:38.881Z"
---

# Lyra: A Modern SystemVerilog Simulation Toolchain

**Lyra** is a SystemVerilog compiler and simulator built the way a modern language toolchain is
built: around independently compilable units with explicit dependencies, where incremental and
parallel compilation are constraints on the design rather than optimizations added to it later.

The goal is a fast edit-run loop rather than peak simulation speed. Those two pull in different
directions, and Lyra picks the loop. A module, package, or interface compiles on its own into
class-level artifacts, and instantiation, parameter binding, and hierarchy all happen when the
simulation starts. Compile time then follows how many distinct units a design has, not how many
instances it elaborates into.

Those commitments, and the constraints that follow from them, are stated in
[docs/architecture/north_star.md](https://github.com/hankhsu1996/lyra/blob/HEAD/docs/architecture/north_star.md). Every other design document in
this repository answers to that one.

Coverage is measured rather than described. Every construct Lyra handles is claimed by a case under
`tests/conformance/` stating what IEEE 1800 requires of a program and checking itself…
