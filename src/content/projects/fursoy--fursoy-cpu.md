---
repo: "FURSOY/fursoy-cpu"
name: "fursoy-cpu"
description: "64-bit out-of-order superscalar RISC-V processor (RV64IMAFDV + Zba/Zbb) in SystemVerilog. Boots Linux 6.6.50 + BusyBox under Sv39 virtual memory and meets 500 MHz timing in Nangate 45nm."
readmeQualityOk: true
url: "https://github.com/FURSOY/fursoy-cpu"
homepage: "https://cpu.fursoy.com"
language: "C++"
languages: ["C++", "SystemVerilog"]
languagePcts: [51, 36]
topics: ["linux-kernel", "out-of-order", "riscv", "systemverilog", "verilator"]
stars: 22
forks: 1
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-09-06T10:03:25Z"
lastCommitAt: "2026-11-14T21:55:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 39
maintainers: ["FURSOY"]
openGraphImageUrl: "https://opengraph.githubassets.com/df40e3bbd4b884b2a38a1d7b757600f3282fc72013a5fddb537fd6881e283f8d/FURSOY/fursoy-cpu"
discussionCount: 0
---

# Fursoy Slice-1

**A 64-bit Out-of-Order Superscalar RISC-V Processor (`RV64IMAFDV + Zba + Zbb + Zicsr + Zifencei`) booting mainline Linux 6.6.50 and BusyBox userspace under Sv39 virtual memory.**

Fursoy Slice-1 (`fursoy_s1_core` / `fursoy_s1_soc`) is a clean-slate 64-bit out-of-order superscalar RISC-V processor implemented in SystemVerilog, featuring Sv39 demand paging, machine/supervisor/user privilege separation, cycle-exact hardware performance telemetry, and 500 MHz Nangate 45nm standard-cell synthesis closure across 8 core functional blocks.

---

## Microarchitecture Highlights

- **2-Wide Superscalar OoO Core (`fursoy_s1_core`)**:
  - 2-wide fetch, decode, register rename, and in-order retirement (`M/S/U` privilege modes, `medeleg`/`mideleg`, `WFI`, `MRET`/`SRET`).
  - **128-entry Reorder Buffer** (`ROB_DEPTH = 128`) with 4-bit wrap-safe epoch tags and precise exception/interrupt flush recovery.
  - **160-entry Physical Integer Register File** (`PRF_SIZE = 160`, `128` speculative free-list entries) plus **8 branch checkpoints** (`NUM_CHECKPOINTS = 8`) for single-cycle speculative RAT rollback.
  - Dedicated issue queues: **32-entry Integer IQ** (`INT_IQ_DEPTH = 32`),…
