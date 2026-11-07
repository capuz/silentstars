---
repo: "dpretet/friscv"
name: "friscv"
description: "RISCV CPU implementation in SystemVerilog"
readmeQualityOk: true
url: "https://github.com/dpretet/friscv"
language: "SystemVerilog"
languages: ["SystemVerilog", "C++"]
languagePcts: [33, 20]
topics: ["riscv-cpu", "riscv", "rv32i", "verilog", "systemverilog", "fpga", "asic", "risc-v", "assembler", "fpga-soc"]
stars: 33
forks: 7
openIssues: 5
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2021-02-13T07:54:18Z"
lastCommitAt: "2026-11-07T13:55:36Z"
lastReleaseAt: "2026-10-30T15:57:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 48
maintainers: ["dpretet", "tianruilint"]
openGraphImageUrl: "https://opengraph.githubassets.com/0df909786081bc569a9e74b48c16c2b9fb5f5ccf4464f9fff360736bb41be78e/dpretet/friscv"
---

███████╗██████╗ ██╗███████╗ ██████╗██╗   ██╗
     ██╔════╝██╔══██╗██║██╔════╝██╔════╝██║   ██║
     █████╗  ██████╔╝██║███████╗██║     ██║   ██║
     ██╔══╝  ██╔══██╗██║╚════██║██║     ╚██╗ ██╔╝
     ██║     ██║  ██║██║███████║╚██████╗ ╚████╔╝
     ╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝ ╚═════╝  ╚═══╝

# Overview

FRISCV is a SystemVerilog implementation of the [RISCV ISA](https://riscv.org):

- Built around a 3-stage pipeline
- In-order execution
- AXI4-lite for instruction and data bus
- Instruction & data cache units
- Privilege modes:
    - Machine-mode only for simple embedded system
    - User-mode for secure embedded system
- Physical memory protection (PMP) & Physical Memory Attribute (PMA), up to 16 regions
- External, software and timer interrupts
- Support multiple (optional) extensions:
    - Zifencei
    - Zicsr
    - Zicntr
    - Zihpm
    - M extension (multiply/divide)
    - A extension (atomic operation)
- RV32I & RV32E architecture
- Clint interrupt controller

The core is [compliant](https://github.com/dpretet/friscv/blob/HEAD/test/riscv-tests/README.md) with the official RISCV testsuite.

#…
