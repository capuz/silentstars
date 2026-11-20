---
repo: "codetiger/triqueue"
name: "triqueue"
description: "A simple int8 outer-product matrix coprocessor in SystemVerilog for RISC-V SoCs, inspired by Apple AMX, Arm SME and Gemmini."
readmeQualityOk: true
url: "https://github.com/codetiger/triqueue"
homepage: "https://codetiger.github.io/triqueue/"
language: "Python"
languages: ["Python", "SystemVerilog"]
languagePcts: [50, 23]
topics: ["asic", "coprocessor", "formal-verification", "gemm", "hardware-accelerator", "matrix-multiplication", "openroad", "risc-v", "riscv"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-11-07T06:35:53Z"
lastCommitAt: "2026-11-19T11:58:43Z"
lastReleaseAt: "2026-11-11T07:58:52Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 57
maintainers: ["codetiger", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4aa85f7a8fdbeb0fa8d38b74f12622feb92c174b5b4d0950a2177f80dbdbdf78/codetiger/triqueue"
---

# Tri-Queue: a simple matrix coprocessor for RISC-V

An open-source int8 matrix-multiply coprocessor in SystemVerilog for RISC-V SoCs, inspired by Apple's AMX, Arm SME and UC Berkeley's Gemmini.

Like AMX and SME, it computes outer products into an in-place output tile. Like Gemmini, it uses decoupled queues so loads and stores overlap compute. To stay small and simple, it drops the vector register file, the operand crossbar and the scratchpad SRAM: the whole datapath is two operand FIFOs (`QA`, `QB`) feeding a double-banked `T × T` int32 accumulator tile (`SC`), driven by a 10-byte hardware-looped program. On edge and corner tiles where half the rows or columns would otherwise sit idle, **variable-arity accumulate cells** (`r × c × d = T²`) put the spare multiplier quadrants to work on extra `k` steps in the same cycle, lifting edge-tile utilization from 50% to 67% and corner tiles from 25% to 50% with fixed quadrant wiring (`docs/specification.md` §4).
