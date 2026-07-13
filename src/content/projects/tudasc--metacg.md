---
repo: "tudasc/MetaCG"
name: "MetaCG"
description: "MetaCG offers an annotated whole program call-graph tool for Clang/LLVM."
readmeQualityOk: true
url: "https://github.com/tudasc/MetaCG"
language: "C++"
languages: ["C++"]
languagePcts: [86]
topics: ["clang", "llvm", "call-graph", "whole-program-analysis"]
stars: 56
forks: 10
openIssues: 8
closedIssues: 2
watchers: 3
contributors: 13
recentReleases: 0
createdAt: "2020-08-10T05:43:50Z"
lastCommitAt: "2026-07-13T06:37:13Z"
lastReleaseAt: "2024-10-15T15:12:13Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 78
undervaluedScore: 31
maintainers: ["jplehr", "pearzt", "TimHeldmann"]
openGraphImageUrl: "https://opengraph.githubassets.com/94ea39e18d1979161fb0b5892fb0f4673353469e1172f14321075a2183e16b95/tudasc/MetaCG"
---

# MetaCG

MetaCG provides a common whole-program call-graph representation to exchange information between different tools built on top of LLVM/Clang.
It uses the JSON file format and separates structure from information, i.e., caller/callee relation and *meta* information.

The MetaCG graph library is the fundamental component, together with, e.g., I/O facilities.
The repository also contains an experimental Clang-based tool for call-graph construction at the source-code level.
As an example tool, the repository contains the PGIS analysis tool, which is used as the analysis backend in [PIRA](https://github.com/tudasc/pira).
PGIS has been deprecated and may be removed in a future version.

The current default file format is MetaCG format version 4.
More info on the different formats can be found in the [graph README](https://github.com/tudasc/MetaCG/blob/HEAD/graph/README.md).

The MetaCG project includes `pymetacg`, a set of bindings that allows to parse MetaCG files from Python.
Refer to the [pymetacg README](https://github.com/tudasc/MetaCG/blob/HEAD/pymetacg/README.md) for more information how to build and use `pymetacg`.

## Requirements and Building

MetaCG consists of the…
