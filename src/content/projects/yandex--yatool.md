---
repo: "yandex/yatool"
name: "yatool"
description: "Yatool is a cross-platform distribution, building, testing, and debugging toolkit focused on monorepositories"
readmeQualityOk: true
url: "https://github.com/yandex/yatool"
language: "C++"
languages: ["C++", "C"]
languagePcts: [41, 35]
stars: 222
forks: 29
openIssues: 13
closedIssues: 14
watchers: 9
contributors: 111
recentReleases: 0
createdAt: "2023-11-24T10:45:45Z"
lastCommitAt: "2026-08-08T04:33:40Z"
status: "thriving"
tags: []
healthScore: 74
undervaluedScore: 37
maintainers: ["robot-piglet", "say42", "VestniK"]
openGraphImageUrl: "https://opengraph.githubassets.com/638e92c719bf1daf13c3168d5e8849f154661129d252e35c5c5d41f935114d80/yandex/yatool"
---

# Yatool

Yatool is a cross-platform distribution, building, testing, and debugging toolkit focused on monorepositories.

All utilities are available for use through a single entry point `ya`.
The main handler in `ya` utility is `make`, which is a high-level universal build system.

## ya make

`ya make` build system can be described as

- **Completely static**.
  All dependencies are analyzed in advance and changes are recorded in the command graph.
  Based on the analysis, each command receives a unique UID, which fixes its result on a given state of input data and dependencies.
  The immutability of the UID indicates the immutability of its result and therefore serves as a key in the results cache, and is also used when analyzing changes to exclude a command from execution.

- **Universal and high-level**.
  The description of the build system is done at the level of modules, macros and dependencies between modules.
  Our build system hides a lot.
  It itself builds inter-file dependencies, both direct (`a.cpp` includes `b.h`) and induced by generation (if `x.proto` imports `y.proto`, then `x.pb.h` will include `y.pb.h`), allowing developers to avoid wasting time specifying…
