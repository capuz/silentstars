---
repo: "LinxISA/linx-isa"
name: "linx-isa"
description: "Linx Instruction Set Architecture"
readmeQualityOk: true
url: "https://github.com/LinxISA/linx-isa"
homepage: "https://linxisa.github.io/"
language: "Python"
languages: ["Python", "C"]
languagePcts: [41, 32]
stars: 67
forks: 14
openIssues: 3
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2026-01-29T10:49:30Z"
lastCommitAt: "2026-07-04T22:20:36Z"
lastReleaseAt: "2026-05-19T12:27:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 30
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/03b59c4a5cb475259b54f8d3d0575b38a87565e4fac2551ffca252b850d15228/LinxISA/linx-isa"
discussionCount: 1
---

</p>

<h1 align="center">LinxISA: Block-Structured Instruction Set Architecture</h1>

</p>

---

## What is LinxISA?

**LinxISA** is a block-structured instruction set architecture (ISA) designed for high-performance computing. Unlike traditional scalar ISAs, LinxISA organizes instructions into **blocks** that execute as atomic units, enabling:

- **Explicit block boundaries** with mandatory control-flow integrity
- **Two-layer state model** (global + block-local state)
- **Vector/tile extensions** for SIMD-style parallelism
- **Template blocks** for function prologues/epilogues and accelerator operations

This repository serves as the **superproject** that pins together all ecosystem components: compiler (LLVM), emulator (QEMU), Linux kernel, RTL (LinxCore), and standard libraries (glibc, musl).

---

## Quick Start

### Clone with Submodules

```bash
git clone --recurse-submodules git@github.com:LinxISA/linx-isa.git
cd linx-isa
git submodule sync --recursive
git submodule update --init --recursive
```

### Run Validation Gates

```bash
# Canonical ISA + AVS contract validation
python3 tools/isa/build_golden.py --profile v0.56 --check
python3 tools/isa/validate_spec.py --profile…
