---
repo: "CHIP-SPV/chipStar"
name: "chipStar"
description: "chipStar is a tool for compiling and running HIP/CUDA on SPIR-V via OpenCL or Level Zero APIs."
readmeQualityOk: true
url: "https://github.com/CHIP-SPV/chipStar"
language: "LLVM"
languages: ["LLVM"]
languagePcts: [90]
topics: ["cuda", "hip", "opencl", "hpc", "llvm", "level0", "spir-v"]
stars: 403
forks: 48
openIssues: 503
closedIssues: 771
watchers: 10
contributors: 23
recentReleases: 0
createdAt: "2021-09-15T15:40:50Z"
lastCommitAt: "2026-11-17T14:16:07Z"
lastReleaseAt: "2024-01-22T13:08:43Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 34
maintainers: ["pvelesko"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd3f8ee5f51ca3fb2975c0cf6ede8b458b542f22dff480000747186119315330/CHIP-SPV/chipStar"
discussionCount: 11
---

# chipStar

chipStar enables compiling and running HIP and CUDA applications on platforms which support
SPIR-V as the device intermediate representation. It supports
OpenCL and Level Zero as the low-level runtime alternatives.

* [User documentation](https://github.com/CHIP-SPV/chipStar/blob/HEAD/docs/Using.md)
* [Developer documentation](https://github.com/CHIP-SPV/chipStar/blob/HEAD/docs/Development.md)
* [A list of (un)supported features](https://github.com/CHIP-SPV/chipStar/blob/HEAD/docs/Features.md)

The [chipStar article](https://urn.fi/URN:NBN:fi:tuni-202603093048) provides an overview of chipStar. It is the preferred citation for academic publications referring to chipStar somehow.

The name chipStar comes from `c`uda and `hip` and the word `Star` which means asterisk, a typical shell wildcard, denoting the intention to make "CUDA and HIP applications run everywhere". The project was previously called CHIP-SPV.

## Library Support

chipStar supports a growing set of HIP/ROCm libraries. Use `install_chipstar.py` to install chipStar along with any of these libraries:

```bash
# Interactive mode with TUI
./install_chipstar.py

# Install specific components…
