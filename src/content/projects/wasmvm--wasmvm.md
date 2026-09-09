---
repo: "WasmVM/WasmVM"
name: "WasmVM"
description: "A standalone WebAssembly process virtual machine"
readmeQualityOk: true
url: "https://github.com/WasmVM/WasmVM"
homepage: "https://wasmvm.github.io/WasmVM/"
language: "C++"
languages: ["C++"]
languagePcts: [97]
topics: ["webassembly", "virtual-machine", "wasm"]
stars: 230
forks: 38
openIssues: 4
closedIssues: 99
watchers: 16
contributors: 14
recentReleases: 1
createdAt: "2017-05-23T17:59:07Z"
lastCommitAt: "2026-09-09T08:15:22Z"
lastReleaseAt: "2026-06-24T06:44:37Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 44
maintainers: ["LuisHsu"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa45464a88b9afec8083bf67a16c5c18532f208409c7a5150bb74617072b3304/WasmVM/WasmVM"
---

# WasmVM

#### A standalone WebAssembly virtual machine 

**[online document](https://wasmvm.github.io/WasmVM/)**

**[正體中文](https://github.com/WasmVM/WasmVM/blob/HEAD/README_zh.md)**

## Prerequisite

* CMake >= 3.16

* A C/C++ compiler supporting C11 and C++20

## Notice
 
1. This project uses **"Taiwan Traditional Chinese"** as primary, English as secondary language in documents.
  
  Other languages (Ex: Simplified Chinese) are only used as references or translations.

## Build

1. Run CMake

```shell
mkdir build && cd build && cmake ..
```

2. Run Make

```shell
make -j4
```

## Run Unittests

1. Run CMake

```shell
mkdir build && cd build && cmake ..
```

2. Run Make with the test target

```shell
make test
```

## Generate HTML documents

1. Run CMake

```shell
mkdir build && cd build && cmake ..
```

2. Run Make

```shell
make docs
```

The generated document will under `build/docs/html`
