---
repo: "dmrgpp-project/dmrgpp"
name: "dmrgpp"
description: "A free and open source implementation of the DMRG Algorithm"
readmeQualityOk: true
url: "https://github.com/dmrgpp-project/dmrgpp"
homepage: "https://g1257.github.io/dmrgPlusPlus/"
language: "C++"
languages: ["C++"]
languagePcts: [84]
stars: 44
forks: 29
openIssues: 40
closedIssues: 63
watchers: 7
contributors: 12
recentReleases: 1
createdAt: "2010-06-02T17:01:16Z"
lastCommitAt: "2026-11-05T14:05:33Z"
lastReleaseAt: "2026-09-25T20:30:50Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 61
maintainers: ["PDoakORNL", "g1257", "masterleinad"]
openGraphImageUrl: "https://opengraph.githubassets.com/d63ac46fb9e3fff6d8c6be8ba1f25af5ba1990c3a9eab6a4d6f00271b3e75d6b/dmrgpp-project/dmrgpp"
---

# Quick Start

## Description

DMRG++ is a free and open source implementation of the
density matrix renormalization group (DMRG) algorithm.
You are welcomed to use it and publish data
 obtained with DMRG++. If you do,
*please cite this work* (see [`CITATION.cff`](https://github.com/dmrgpp-project/dmrgpp/blob/HEAD/CITATION.cff)).

## License and Disclaimers

The full software license for DMRG++ v7.1
can be found in file LICENSE in the root directory of the code,
along with disclaimers.

## Building and Running DMRG++

### Required Software

* GNU C++ or LLVM CLANG++ (C++17 is used)

* The BLAS and LAPACK library or equivalent

* HDF5 devel with C++ support

* boost-devel (boost-spirit) for Ainur
Only headers files are used; boost runtime is not used.

* cmake and dependencies

* GSL (GNU Scientific Library)

* Kokkos and Kokkos-Kernels [automatic download possible]

* Catch2 for testing [automatic download possible]

### Downloading DMRG++
Create a directory somewhere and cd to it.

git clone https://github.com/dmrgpp-project/dmrgpp.git
cd dmrgpp/
Pull requests should be opened against the `master` branch.

### Configure

Use the following command to configure DMRG++
```
cmake -B…
