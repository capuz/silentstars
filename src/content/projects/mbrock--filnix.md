---
repo: "mbrock/filnix"
name: "filnix"
description: "Fil-C as a Nix C/C++ toolchain and cross platform"
readmeQualityOk: true
url: "https://github.com/mbrock/filnix"
language: "Prolog"
languages: ["Prolog", "Python"]
languagePcts: [37, 20]
stars: 135
forks: 7
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 4
recentReleases: 5
createdAt: "2025-10-22T11:45:21Z"
lastCommitAt: "2026-11-05T07:49:52Z"
lastReleaseAt: "2026-10-24T03:40:25Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 94
undervaluedScore: 48
maintainers: ["mbrock", "ampagent"]
openGraphImageUrl: "https://opengraph.githubassets.com/50d74e71cf34490343e08ad919735aaf990bd58fdff1fafa7da0803d2b7bc1f6/mbrock/filnix"
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
