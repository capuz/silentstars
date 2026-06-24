---
repo: "equinor/resdata"
name: "resdata"
description: "Software for reading and writing the result files from the Eclipse reservoir simulator."
url: "https://github.com/equinor/resdata"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [61, 38]
topics: ["reservoir", "python", "c", "opm", "eclipse"]
stars: 126
forks: 103
openIssues: 32
closedIssues: 221
watchers: 21
contributors: 81
recentReleases: 0
createdAt: "2017-03-16T08:39:13Z"
lastCommitAt: "2026-06-24T06:38:37Z"
lastReleaseAt: "2017-11-16T15:24:04Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 50
maintainers: ["eivindjahren", "dependabot[bot]", "berland"]
openGraphImageUrl: "https://opengraph.githubassets.com/5dceee482edfe63bfd0fdf163f1b02aab75d581b41d5c40abc1702ea510c4efc/equinor/resdata"
discussionCount: 8
---

# ResData
Python package for reading and writing the result files from
reservoir simulators. The file types covered are the
RESTART, INIT, RFT, Summary and GRID files in unified and non-unified, and formatted and unformatted.

ResData officially only supports Linux and macOS. It was initially developed as part of the
[_ert_](http://github.com/Equinor/ert) project.

## Using
[ResData is available on PyPI](https://pypi.org/project/resdata/) and can be installed into a [Python virtual environment](https://docs.python.org/3/library/venv.html#creating-virtual-environments) with `pip`:

```sh
pip install resdata
```

## Building
ResData is a Python project with a C++ extension layer. Most of the functionality is implemented in C++ and uses [cwrap](https://github.com/equinor/cwrap) for binding it to Python.

A C++17-compatible compiler, like GCC 8+ or Clang 11+ is required. Other C++ dependencies are brought in automatically by [Conan](https://conan.io) during [CMake](https://cmake.org) compilation.

In a [Python virtual environment](https://docs.python.org/3/library/venv.html#creating-virtual-environments), run:
```sh
# Fetch directly from GitHub
pip install…
