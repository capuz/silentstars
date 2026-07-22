---
repo: "AleksandarLilic/ama-riscv-sim"
name: "ama-riscv-sim"
description: "C++ Instruction Set Simulator for RISC-V RV32IMC & custom packed SIMD ISA with cache and branch predictor models, C/ASM workloads, and Python analysis tools"
readmeQualityOk: true
url: "https://github.com/AleksandarLilic/ama-riscv-sim"
language: "C++"
languages: ["C++", "Python", "C"]
languagePcts: [34, 32, 27]
topics: ["instruction-set-simulator", "risc-v", "emulator", "simd", "baremetal", "riscv", "branch-prediction", "cache", "performance-analysis", "performance-visualization"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-02-18T16:15:34Z"
lastCommitAt: "2026-07-22T06:09:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 79
maintainers: ["AleksandarLilic"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c833beae35e7f4a88d59d960d0698fd278f4170b19d58d5a8db14b409c4ed06/AleksandarLilic/ama-riscv-sim"
---

# RISC-V ISA simulator

C++ Instruction Set Simulator for RISC-V RV32IMC & custom SIMD instructions with cache and branch predictor models, C/ASM workloads, and Python analysis tools

- [RISC-V ISA simulator](#risc-v-isa-simulator)
- [Getting the project](#getting-the-project)
  - [Prerequisites](#prerequisites)
    - [Simulator build](#simulator-build)
    - [RISC-V software build (`sw/`)](#risc-v-software-build-sw)
    - [Analysis scripts (`script/`)](#analysis-scripts-script)
    - [Testing (`test/`)](#testing-test)
  - [Quick start](#quick-start)
- [Overview](#overview)
  - [Usage](#usage)
- [Example use-case: Dhrystone](#example-use-case-dhrystone)
  - [Running Dhrystone](#running-dhrystone)
    - [Notes on profiling](#notes-on-profiling)
  - [Execution log](#execution-log)
  - [Callstack](#callstack)
  - [Profiled instructions](#profiled-instructions)
  - [Execution trace and register file usage](#execution-trace-and-register-file-usage)
  - [Hardware models outputs](#hardware-models-outputs)
  - [Analysis scripts](#analysis-scripts)
    - [Flat profile](#flat-profile)
    - [FlameGraph](#flamegraph)
    - [Call Graph](#call-graph)
    - [Execution…
