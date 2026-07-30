---
repo: "Samsung/walrus"
name: "walrus"
description: "WebAssembly Lightweight RUntime"
readmeQualityOk: true
url: "https://github.com/Samsung/walrus"
language: "WebAssembly"
languages: ["WebAssembly"]
languagePcts: [82]
stars: 75
forks: 22
openIssues: 11
closedIssues: 6
watchers: 7
contributors: 19
recentReleases: 0
createdAt: "2022-10-05T23:53:29Z"
lastCommitAt: "2026-07-30T06:08:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 45
maintainers: ["zherczeg", "kulcsaradam", "hyraxbyerax"]
openGraphImageUrl: "https://opengraph.githubassets.com/216e702342a7c5283c14164e927f7fb09a5ad8d7f1f2511e7a81f73a59753679/Samsung/walrus"
---

# WALRUS: WebAssembly Lightweight RUntime

This project aims to provide a lightweight WebAssembly runtime engine. It now fully supports WebAssembly specs with an simple interpreter, but we plan to optimize interpreting as well as adopting JIT compiler for better performance.

## Cloning

Clone as normal, but don't forget to get the submodules as well:

```console
$ git clone --recursive https://github.com/Samsung/walrus
$ cd walrus
$ git submodule update --init
```

This will fetch the testsuite and gtest repos, which are needed for some tests.

## Building using CMake

You'll need [CMake](https://cmake.org). You can then run CMake, the normal way:

> Note: Due to the need for supporting old targets only supporting cmake 2.8, the defined cmake version is 2.8, however due to many environments shipping newer cmake versions which do not support cmake versions below 3.5, you may need to override the minimum version using `-DCMAKE_POLICY_VERSION_MINIMUM=3.5`

```console
$ cmake -DCMAKE_POLICY_VERSION_MINIMUM=3.5 -H. -Bout/release/x64 -DWALRUS_ARCH=x64 -DWALRUS_HOST=linux -DWALRUS_MODE=release -DWALRUS_OUTPUT=shell -GNinja
$ ninja -Cout/release/x64
$ ./out/release/x64/walrus test.wasm…
