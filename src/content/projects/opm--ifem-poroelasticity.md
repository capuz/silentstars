---
repo: "OPM/IFEM-PoroElasticity"
name: "IFEM-PoroElasticity"
description: "PoroElasticity solvers built on IFEM"
readmeQualityOk: true
url: "https://github.com/OPM/IFEM-PoroElasticity"
language: "C"
languages: ["C", "C++"]
languagePcts: [53, 43]
stars: 9
forks: 10
openIssues: 0
closedIssues: 2
watchers: 4
contributors: 9
recentReleases: 0
createdAt: "2016-03-09T13:34:57Z"
lastCommitAt: "2026-10-21T21:15:01Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 74
undervaluedScore: 53
maintainers: ["akva2", "kmokstad"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e582ab3cd2aaca49757abf8f7799c9201f6a9c0792dcb2326dc60c1a670bc69/OPM/IFEM-PoroElasticity"
---

# IFEM PoroElasticity

## Introduction

This module contains the poro-elasticity libraries and applications built
using the IFEM library.

### Getting all dependencies

1. Install IFEM from https://github.com/OPM/IFEM

### Getting the code

This is done by first navigating to a folder `<App root>` in which you want
the application typing

    git clone https://github.com/OPM/IFEM-Elasticity Elasticity
    git clone https://github.com/OPM/IFEM-PoroElasticity PoroElasticity

The build system uses sibling directory logic to locate the IFEM-Elasticity
module.

### Compiling the code

To compile, first navigate to the root catalogue `<App root>`.

1. `cd PoroElasticity`
2. `mkdir Debug`
3. `cd Debug`
5. `cmake -DCMAKE_BUILD_TYPE=Debug ..`
6. `make`

This will compile the library and application.
The executable can be found in the 'bin' sub-folder.
Change all instances of `Debug` with `Release` to drop debug-symbols,
and get a faster running code.

### Testing the code

IFEM uses the cmake test system.
To compile and run all regression- and unit-tests, navigate to your build
folder (i.e. `<App root>/PoroElasticity/Debug`) and type

    make check
