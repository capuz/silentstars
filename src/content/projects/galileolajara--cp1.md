---
repo: "galileolajara/cp1"
name: "cp1"
description: "Cp1 / C+1 / C plus 1 Programming Language, a TypeScript for C"
readmeQualityOk: true
url: "https://github.com/galileolajara/cp1"
homepage: "https://cp1-lang.org"
language: "C"
languages: ["C"]
languagePcts: [97]
stars: 82
forks: 1
openIssues: 3
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-10-23T12:32:18Z"
lastCommitAt: "2026-07-22T06:10:02Z"
lastReleaseAt: "2025-07-03T15:08:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 62
undervaluedScore: 24
maintainers: ["galileolajara"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8286fe51014479c2089c5add75a993dcf774cd26161cca11d2df2db61f7e9f7/galileolajara/cp1"
---

## What does Hello World (with Metaprogramming) look like?

How to use?
-
```
git clone https://github.com/galileolajara/cp1
cd cp1

# On Windows, no need to build. Pre-built .exe are in the bin folder

# On Linux, macOS, or BSD, run one of the following:
make -f Makefile-tcc # to build using TCC
make -f Makefile-clang # to build using Clang
make -f Makefile-gcc # to build using GCC
```

Then checkout the examples:
```
# On Windows:
bin\cp1-run examples/01-hello.cp1 # To run hello world
bin\cp1-compile -c hello.c examples/01-hello.cp1 # To see the C code

# On Linux, macOS, or BSD:
bin/cp1-run examples/01-hello.cp1 # To run hello world
bin/cp1-compile -c hello.c examples/01-hello.cp1 # To see the C code
```

On Linux, macOS or BSD, if you want to build Cp1 using the .cp1 files, you need ninja and re2c installed. Then run one of the following:
```
ninja -f build-tcc.ninja # to build using TCC
ninja -f build-clang.ninja # to build using Clang
ninja -f build-gcc.ninja # to build using GCC
```
Top 1 Feature: Easy-to-use yet powerful metaprogramming system
-
- Metaprogramming is just as easy as *string intepolation*. Uses QuickJS of Fabrice Bellard (who made TCC).
- Metaprograms are…
