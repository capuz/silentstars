---
repo: "pulp-platform/spatz"
name: "spatz"
description: "Spatz is a compact RISC-V-based vector processor meant for high-performance, small computing clusters."
readmeQualityOk: true
url: "https://github.com/pulp-platform/spatz"
homepage: "https://arxiv.org/abs/2309.10137"
language: "C"
languages: ["C", "SystemVerilog"]
languagePcts: [66, 20]
stars: 167
forks: 52
openIssues: 4
closedIssues: 19
watchers: 3
contributors: 33
recentReleases: 0
createdAt: "2023-09-15T14:48:39Z"
lastCommitAt: "2026-08-27T14:32:29Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 46
maintainers: ["Navaneeth-KunhiPurayil", "bowwwang", "rgiunti"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6dcbe08bc23209b90dc27079bcacf788d82c51056280225802c3d5f4cddf7a9/pulp-platform/spatz"
---

# Spatz

Spatz is a compact vector processor based on [RISC-V's Vector Extension (RVV) v1.0](https://github.com/riscv/riscv-v-spec/releases/tag/v1.0). Spatz acts as a coprocessor of [Snitch](https://github.com/pulp-platform/snitch), a tiny 64-bit scalar core. It is developed as part of the PULP project, a joint effort between ETH Zurich and the University of Bologna.

## Getting started

Make sure you download all necessary dependencies:

```bash
make all
```

The Makefile target will automatically download and compile tested versions of LLVM, GCC, Spike, and Verilator. It might take a while. If you have issues cloning the GitHub modules, you might need to remove the folders in `sw/toolchain`.

ETH users can source the toolchains and initialize the environment by doing:

```bash

source util/iis-env.sh

make init
```

The Spatz cluster system (hw/system/spatz_cluster) is a fundamental system around a Snitch core and a Spatz coprocessor. The cluster can be configured using a config file. The configuration parameters are documented using JSON schema, and documentation is generated for the schema. The cluster testbench simulates an infinite memory. The RISC-V ELF file is preloaded…
