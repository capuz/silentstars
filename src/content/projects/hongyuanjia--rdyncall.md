---
repo: "hongyuanjia/rdyncall"
name: "rdyncall"
description: "R bindings to the DynCall libries for flexible Foreign Function Interface (FFI) between R and C"
url: "https://github.com/hongyuanjia/rdyncall"
homepage: "https://hongyuanjia.github.io/rdyncall/"
language: "C"
languages: ["C"]
languagePcts: [76]
stars: 9
forks: 2
openIssues: 3
closedIssues: 12
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-01-02T03:50:08Z"
lastCommitAt: "2026-06-23T23:26:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 55
maintainers: ["hongyuanjia"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f31b4be5205421f4c20ca0d2e9ad6e648db91adc4aa6f077a1328817f96ab06/hongyuanjia/rdyncall"
---

# rdyncall

`rdyncall` provides an R interface to the [DynCall](https://dyncall.org)
libraries. It is a low-level Foreign Function Interface (FFI) for loading
shared C libraries, resolving symbols, calling C functions from R by signature,
working with C `struct` and `union` data, and exposing R functions as C callback
pointers.

The package is intended for developers who already know the C API they want to
call and need an exploratory or dynamic binding layer from R without writing a
compiled wrapper for every function.

## Installation

```r
remotes::install_github("hongyuanjia/rdyncall")
```

`rdyncall` was previously archived on CRAN. This repository contains the active
modernization work toward a maintainable package and current R toolchains.

## Quick Start

Call a C function directly by loading a library, resolving a symbol, and
providing a call signature:

```r
library(rdyncall)

mathlib <- dynfind(c("msvcrt", "m", "m.so.6"))
sqrt_addr <- dynsym(mathlib, "sqrt")

dyncall(sqrt_addr, "d)d", 144)
```

The signature `"d)d"` means one C `double` argument and a C `double` return
value. Signatures must match the target C function type.

R functions can also be wrapped as C…
