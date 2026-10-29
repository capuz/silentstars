---
repo: "rems-project/archsem"
name: "archsem"
description: "Rocq framework to define the semantics of CPU architectures"
readmeQualityOk: true
url: "https://github.com/rems-project/archsem"
language: "Rocq Prover"
languages: ["Rocq Prover", "OCaml"]
languagePcts: [73, 26]
stars: 40
forks: 4
openIssues: 2
closedIssues: 3
watchers: 13
contributors: 15
recentReleases: 0
createdAt: "2024-12-13T18:15:01Z"
lastCommitAt: "2026-10-29T10:17:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 49
maintainers: ["febyeji", "tperami", "sebpop"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/903006055/fee5e752-7e71-44d2-bc74-55a3f201d988"
---

# ArchSem

ArchSem is a Rocq framework to define the semantics of CPU architectures such as
Arm-A, RISC-V, and x86, integrating their concurrency and instruction-set
semantics. The framework is designed to be generic but is currently only
instantiated for Arm-A, RISC-V and x86.

## Paper

[ArchSem: Reusable Rigorous Semantics of Relaxed Architectures](https://www.cl.cam.ac.uk/~pes20/Stuff/2025-archsem-paper.pdf). 
Thibaut Pérami, Thomas Bauereiss, Brian Campbell, Zongyuan Liu, Nils Lauermann, Alasdair Armstrong, and Peter Sewell.
In POPL 2026.
[doi](https://doi.org/10.1145/3776650)

## General goals and organization

In order to build an architecture model one needs two components:
- An _ISA model_ that provides the semantics of instructions. Those are intended
  to be derived from [Sail](https://github.com/rems-project/sail) or
  [ASL](https://developer.arm.com/Architectures/Architecture%20Specification%20Language)
  specifications such as [sail-arm](https://github.com/rems-project/sail-arm) (via Sail).
  Currently we only have a pipeline to import those from Sail definitions
- A _concurrency model_ that defines how the instructions interact with each
  other, both in the same…
