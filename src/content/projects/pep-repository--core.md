---
repo: "PEP-Repository/core"
name: "core"
description: "Public mirror of the core repository of PEP"
readmeQualityOk: true
url: "https://github.com/PEP-Repository/core"
language: "C++"
languages: ["C++"]
languagePcts: [74]
stars: 9
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2024-11-28T10:50:29Z"
lastCommitAt: "2026-10-13T10:14:00Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 72
maintainers: ["stevenwdv", "sandermeis", "pep-team"]
openGraphImageUrl: "https://opengraph.githubassets.com/0442d5818414cc4b245ae28df27656316d88cbda0e7f9697b93ef5425adb9b5a/PEP-Repository/core"
---

# PEP

PEP is an acronym for "Polymorphic Encryption and Pseudonymization". The software provides a data repository featuring secure and privacy friendly data storage and dissemination. More information is available on the [project home page](https://pep.cs.ru.nl/), which also contains a link to the [user documentation](https://docs.pages.pep.cs.ru.nl/public/core/main/).

## Building

### Building on *nix

1. Install required packages (ubuntu packages in monospace)
   - `git`
   - conan 2.27 or newer (e.g. via `pipx`)
   - `cmake` 3.28 or newer (see https://apt.kitware.com/ for how to get this for older versions of debian-based OSs)
   - ninja (`ninja-build`)
   - `clang` (`g++` supported but not recommended for compiler performance reasons related to templates & RxCpp)
     - See [`cpp/CONTRIBUTING.md`](https://github.com/PEP-Repository/core/blob/HEAD/cpp/CONTRIBUTING.md) for supported versions, see https://apt.llvm.org/ for how to get recent clang versions for older versions of debian-based OSs 
   - C++ STL, e.g. `libstdc++-dev`
     - See [`cpp/CONTRIBUTING.md`](https://github.com/PEP-Repository/core/blob/HEAD/cpp/CONTRIBUTING.md) for supported versions, see…
