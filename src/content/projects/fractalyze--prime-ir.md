---
repo: "fractalyze/prime-ir"
name: "prime-ir"
description: " Intermediate Representation (IR) for cryptographic computations"
url: "https://github.com/fractalyze/prime-ir"
language: "C++"
languages: ["C++", "MLIR"]
languagePcts: [59, 31]
topics: ["compiler", "zk", "mlir", "cryptography"]
stars: 21
forks: 1
openIssues: 21
closedIssues: 28
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2025-02-06T09:11:18Z"
lastCommitAt: "2026-07-03T06:24:07Z"
lastReleaseAt: "2026-02-27T09:19:36Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 90
undervaluedScore: 59
maintainers: ["chokobole", "fractalyze-dev", "batzor"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d6556193e925c8826e2312b62d694c589447218aedf8ff386689109dec867a2/fractalyze/prime-ir"
discussionCount: 1
---

# PrimeIR

**PrimeIR** is an Intermediate Representation (IR) for cryptographic
computations built on
[MLIR (Multi-Level Intermediate Representation)](https://mlir.llvm.org/).
Originally developed for Zero-Knowledge (ZK) proving systems, PrimeIR has
evolved to support a broader range of cryptographic applications including
homomorphic encryption, digital signatures, and other prime field-based
protocols.

The core goal of PrimeIR is to enable automatic domain-specific optimizations
and efficiently support diverse, heterogeneous backends without any additional
fine-tuning for targets.

## Motivation

Cryptographic systems often require domain-specific arithmetic operations, such
as field multiplication or modular inversion. These operations are difficult to
express and optimize at the level of low-level IRs like LLVM IR.

In contrast, a high-level, cryptography-aware IR preserves algebraic structure
and developer intent, providing the following advantages:

- **Domain-specific optimization**: MLIR allows us to design a domain-specific
  language (DSL) that preserves mathematical semantics. This enables
  simplifications such as $-(-x) = x$.

- **Hardware abstraction**: MLIR is…
