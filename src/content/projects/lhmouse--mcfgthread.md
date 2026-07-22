---
repo: "lhmouse/mcfgthread"
name: "mcfgthread"
description: "Cornerstone of the MOST efficient std::thread on Windows for mingw-w64"
readmeQualityOk: true
url: "https://github.com/lhmouse/mcfgthread"
homepage: "https://web.libera.chat/#mcfproj"
language: "C"
languages: ["C"]
languagePcts: [80]
topics: ["mingw-w64", "thread", "mutex", "windows", "gcc", "mingw"]
stars: 318
forks: 32
openIssues: 2
closedIssues: 76
watchers: 18
contributors: 4
recentReleases: 0
createdAt: "2016-04-13T05:20:25Z"
lastCommitAt: "2026-07-22T06:09:52Z"
lastReleaseAt: "2022-05-15T13:35:01Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 40
maintainers: ["lhmouse"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c833beae35e7f4a88d59d960d0698fd278f4170b19d58d5a8db14b409c4ed06/lhmouse/mcfgthread"
discussionCount: 8
---

# The MCF Gthread Library

**MCF Gthread** is a threading support library for **Windows 7** and above that
implements the _gthread interface set_, which is used internally both by **GCC**
to provide synchronization of initialization of local static objects, and by
**libstdc++** to provide C++11 threading facilities.

> [!WARNING]
> This project uses some undocumented NT system calls and is not guaranteed to
> work on some Windows versions. The author gives no warranty for this project.
> Use it at your own risk.

## Benchmark Results

This is the result of [a benchmark program](https://github.com/lhmouse/mcfgthread/blob/HEAD/doc/benchmark_mutex.c) on **Windows
11 26H2** (build 26200.8737) on an **Intel i9-14900K** desktop processor (8
P-cores + 16 E-cores, 32 threads):

This is the result on **Windows 11 25H2** (build 26200.8655) on an **AMD Ryzen 9
9950X3D** desktop processor (16 cores, 32 threads; special thanks to @fredyakumo
for testing!):

This is the result on **Windows 11 26H2** (build 26200.8737) on a **Qualcomm
Snapdragon 8cx Gen 3** mobile processor (4 big cores + 4 little cores, no
hyper-threading):

This is the result on **Windows 11 24H2** (build 26100.4652) on an…
