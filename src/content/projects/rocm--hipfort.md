---
repo: "ROCm/hipfort"
name: "hipfort"
description: "Fortran interfaces for ROCm libraries"
readmeQualityOk: true
url: "https://github.com/ROCm/hipfort"
homepage: "https://rocm.docs.amd.com/projects/hipfort/en/latest/"
language: "Fortran"
languages: ["Fortran"]
languagePcts: [99]
topics: ["fortran", "gpu", "rocm", "hip", "cuda", "gpgpu", "blas", "sparse", "fft", "random"]
stars: 96
forks: 48
openIssues: 3
closedIssues: 51
watchers: 19
contributors: 101
recentReleases: 0
createdAt: "2020-05-13T20:00:24Z"
lastCommitAt: "2026-10-21T21:15:45Z"
lastReleaseAt: "2022-02-16T16:55:28Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 52
maintainers: ["amontoison", "Ozone-Whiskey", "Abuudiii"]
openGraphImageUrl: "https://opengraph.githubassets.com/39ac138599b11aa1655383ae7405e331046073e3267503116ebec034204603db/ROCm/hipfort"
---

# hipfort: Fortran Interface For GPU Kernel Libraries

This repository contains the source and testing for hipfort.
This is a Fortran interface library for accessing GPU kernels.

## Documentation

> [!NOTE]
> The published hipfort documentation is available at [hipfort](https://rocm.docs.amd.com/projects/hipfort/en/latest/index.html) in an organized, easy-to-read format, with search and a table of contents. The documentation source files reside in the hipfort/docs folder of this repository. As with all ROCm projects, the documentation is open source. For more information, see [Contribute to ROCm documentation](https://rocm.docs.amd.com/en/latest/contribute/contributing.html).

## Build and test hipfort from source

Install `git`, `cmake`, HIP, a Fortran compiler, and a matching C compiler, if not yet
installed. `amdflang`/`amdclang` (ROCm's LLVM Flang and Clang, bundled with ROCm) is the
recommended default; `gfortran`/`gcc` (version 7.5.0 or newer) is also supported.
Then build, install, and test hipfort from source with the commands below:

```shell
git clone https://github.com/ROCm/hipfort.git
cd hipfort
cmake -S . -B build -DCMAKE_INSTALL_PREFIX=/tmp/hipfort…
