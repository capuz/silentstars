---
repo: "hpc/quo-vadis"
name: "quo-vadis"
description: "A cross-stack coordination layer to dynamically map runtime components to hardware resources"
readmeQualityOk: true
url: "https://github.com/hpc/quo-vadis"
homepage: "https://hpc.github.io/quo-vadis/"
language: "C++"
languages: ["C++"]
languagePcts: [73]
stars: 9
forks: 4
openIssues: 11
closedIssues: 57
watchers: 7
contributors: 6
recentReleases: 0
createdAt: "2020-06-23T23:25:39Z"
lastCommitAt: "2026-08-30T00:42:47Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 75
maintainers: ["samuelkgutierrez", "eleon"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b28b5c2d639d009cd7fe465debc0e4a7609b747c4c9a1728d74e0507dd3fa75/hpc/quo-vadis"
---

](https://github.com/hpc/quo-vadis/actions/workflows/qa.yml)

# quo-vadis

**This project is under active development and is currently not stable.**

A next-generation, machine-independent coordination layer to arbitrate access
among multiple runtime components and map tasks efficiently to heterogeneous
architectures.

## Building
```shell
mkdir build && cd build && cmake .. && make
```
Or, using [ninja](https://ninja-build.org/), perform the following:
```shell
mkdir build && cd build && cmake -G Ninja .. && ninja
```

### Build Options
Below is a table of build options for quo-vadis (QV). Options can be specified
in a variety of ways using `cmake` or `ccmake`. For example,
```shell
cmake -DQV_GPU_SUPPORT=OFF -DQV_FORTRAN_SUPPORT=OFF ..
```

| Option                       | Default | Comment                             |
| ---------------------------- | ------- | ----------------------------------- |
| QV_FORTRAN_SUPPORT           | ON      | Toggle Fortran support              |
| QV_GPU_SUPPORT               | ON      | Toggle GPU support                  |
| QV_MPI_SUPPORT               | ON      | Toggle MPI support                  |
| QV_OMP_SUPPORT               | ON…
