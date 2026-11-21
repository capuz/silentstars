---
repo: "jfalcou/copacabana"
name: "copacabana"
description: "Recurring CMake tools to be installed in our project via CPM"
readmeQualityOk: true
url: "https://github.com/jfalcou/copacabana"
language: "CMake"
languages: ["CMake", "Python"]
languagePcts: [48, 44]
stars: 6
forks: 1
openIssues: 0
closedIssues: 58
watchers: 2
contributors: 2
recentReleases: 9
createdAt: "2023-06-03T15:58:08Z"
lastCommitAt: "2026-11-21T11:32:40Z"
lastReleaseAt: "2026-11-09T00:15:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 86
maintainers: ["jfalcou", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd62904b9a1d28b301d70111e7c43113f1dcac83e38f93feb2e3eec3bfcda1b5/jfalcou/copacabana"
---

# Copacabana

The CMake and CI plumbing a C++ project writes every time, written once here:

- install rules and the package config `find_package` needs
- unit-test generation, sanitizers, coverage
- a styled Doxygen setup
- single-header packaging, `.deb`, `.rpm` and `.tar.gz`

The current release is [Version 9.0.0 - Insensatez](https://github.com/jfalcou/copacabana/releases/tag/v9.0.0).

Copacabana gives you two independent halves:

- **CMake functions**, named `copa_*`, that you call from your own `CMakeLists.txt`.
- **Reusable GitHub workflows and composite actions**, that you reference from your own
  `.github/workflows/`.

Take either on its own. The CMake half needs nothing but CMake 3.24 and works with any CI, or
none. The CI half assumes your project builds through CMake presets, and nothing else about it.

## Getting it

```cmake
CPMAddPackage(NAME COPACABANA GITHUB_REPOSITORY jfalcou/copacabana GIT_TAG v9.0.0)

set(CMAKE_MODULE_PATH ${CMAKE_MODULE_PATH} ${COPACABANA_SOURCE_DIR}/copacabana/cmake)
include(${COPACABANA_SOURCE_DIR}/copacabana/cmake/copacabana.cmake)
```
