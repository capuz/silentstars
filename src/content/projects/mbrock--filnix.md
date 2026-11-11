---
repo: "mbrock/filnix"
name: "filnix"
description: "Fil-C as a Nix C/C++ toolchain and cross platform"
readmeQualityOk: true
url: "https://github.com/mbrock/filnix"
language: "Rocq Prover"
languages: ["Rocq Prover", "Prolog"]
languagePcts: [45, 21]
stars: 144
forks: 8
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 4
recentReleases: 7
createdAt: "2025-10-22T11:45:21Z"
lastCommitAt: "2026-11-11T11:17:03Z"
lastReleaseAt: "2026-11-06T12:16:52Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 94
undervaluedScore: 48
maintainers: ["ampagent", "mbrock"]
openGraphImageUrl: "https://opengraph.githubassets.com/074269f5fafbb35708e8bd1d22c90c0d50b3c3970dcd72f74d8fdffd2baf4d89/mbrock/filnix"
---

# filnix — Fil-C as a Nix toolchain

[Fil-C](https://github.com/pizlonator/fil-c) is Filip Pizlo's memory-safe implementation of C and C++. Every
pointer carries an invisible capability, every access is bounds-checked, and a
concurrent garbage collector turns use-after-free into a clean trap. Ordinary
C code compiles unchanged, or nearly so, and there is no `unsafe` escape hatch.

This flake builds the Fil-C toolchain with Nix and plugs it into nixpkgs as a
cross-compilation target. You get `pkgsFilc`: a package set in which
everything, including libc, is compiled with Fil-C.

The ordinary `filcc` compiler and `pkgsFilc` package set track official Fil-C
releases, currently [0.687](https://github.com/pizlonator/fil-c/releases/tag/v0.687). Compiler/runtime experiments are opt-in through
`filcc-staging` and `pkgsFilcStaging`, on the same Filnix `main` branch.

The flake exports `x86_64-linux` and `aarch64-linux` outputs. ARM64 remains
experimental; see [the toolchain notes](https://github.com/mbrock/filnix/blob/HEAD/docs/upstream-updates.md) for validation limits.

## Quick start

Use the binary cache to avoid building LLVM and glibc yourself:

``` bash
cachix use filc
```

Compile a…
