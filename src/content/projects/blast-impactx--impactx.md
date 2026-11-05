---
repo: "BLAST-ImpactX/impactx"
name: "impactx"
description: "high-performance modeling of beam dynamics in particle accelerators with collective effects"
readmeQualityOk: true
url: "https://github.com/BLAST-ImpactX/impactx"
homepage: "https://impactx.readthedocs.io"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [56, 42]
topics: ["simulation", "beam-dynamics", "particle-in-cell", "gpu", "physics", "pic", "particle", "accelerator", "research", "csr"]
stars: 60
forks: 34
openIssues: 177
closedIssues: 196
watchers: 4
contributors: 29
recentReleases: 0
createdAt: "2021-07-20T16:37:22Z"
lastCommitAt: "2026-11-05T08:04:37Z"
lastReleaseAt: "2023-06-05T18:04:22Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 88
undervaluedScore: 54
maintainers: ["ax3l", "dependabot[bot]", "cemitch99"]
openGraphImageUrl: "https://opengraph.githubassets.com/bae00c9ec1ad6d4c438719f81a01305ef98cd0742566963b04c81bd1d4c18f55/BLAST-ImpactX/impactx"
discussionCount: 10
---

# ImpactX

ImpactX: an s-based beam dynamics code including space charge effects.
This is the next generation of the [IMPACT-Z](https://github.com/impact-lbl/IMPACT-Z) code.

## Documentation

In order to learn how to install and run the code, please see the online documentation:
https://impactx.readthedocs.io

* ImpactX Doxygen: https://impactx.readthedocs.io/en/latest/_static/doxyhtml
* AMReX Doxygen: https://amrex-codes.github.io/amrex/doxygen
* WarpX Doxygen: https://warpx.readthedocs.io/en/latest/_static/doxyhtml

## Contributing

Our workflow is described in [CONTRIBUTING.rst](https://github.com/BLAST-ImpactX/impactx/blob/HEAD/CONTRIBUTING.rst).

## Developer Environment

Please see our [developer installation section](https://impactx.readthedocs.io/en/latest/install/dependencies.html#install-dependencies) of the documentation for an easy install of our software dependencies.

## Get the Source Code

Before you start, you will need a copy of the ImpactX source code:

```bash
git clone git@github.com:BLAST-ImpactX/impactx.git
cd impactx
```

## Compile

```bash
# find dependencies & configure
cmake -S . -B build

# compile
cmake --build build -j 4
```

That's all!
ImpactX…
