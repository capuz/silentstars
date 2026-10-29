---
repo: "Mellanox/nccl-rdma-sharp-plugins"
name: "nccl-rdma-sharp-plugins"
description: "RDMA and SHARP plugins for nccl library"
readmeQualityOk: true
url: "https://github.com/Mellanox/nccl-rdma-sharp-plugins"
language: "C"
languages: ["C"]
languagePcts: [92]
stars: 232
forks: 45
openIssues: 14
closedIssues: 7
watchers: 22
contributors: 17
recentReleases: 0
createdAt: "2019-08-14T18:51:23Z"
lastCommitAt: "2026-10-29T21:23:37Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 86
undervaluedScore: 18
maintainers: ["Sergei-Lebedev", "bureddy"]
openGraphImageUrl: "https://opengraph.githubassets.com/0bd8fc8f73ba21c2a831af3dfc3b2c7e933730b53addc8210e412e8904dfb7b5/Mellanox/nccl-rdma-sharp-plugins"
---

# nccl-rdma-sharp-plugins

nccl-rdma-sharp plugin enables RDMA and Switch based collectives(SHARP)
with [NVIDIA's NCCL](https://github.com/NVIDIA/nccl) library

## Overview

## Requirements

* MOFED
* CUDA
* SHARP
* NCCL
* GPUDirectRDMA plugin

## Build Instructions

### build system requirements

* CUDA
* SHARP
* MOFED

Plugin uses GNU autotools for its build system. You can build it as follows:

```
$ ./autogen.sh
$ ./configure
$ make
$ make install
```

The following flags enabled to build with custom dependencies

```
  --with-verbs=PATH       Path to non-standard libibverbs installation
  --with-sharp=PATH       Path to non-standard SHARP installation
  --with-cuda=PATH        Path to non-standard CUDA installation
```
