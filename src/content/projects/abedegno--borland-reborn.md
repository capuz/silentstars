---
repo: "abedegno/borland-reborn"
name: "borland-reborn"
description: "Borland's DOS compilers, recovered as source that rebuilds the original binaries byte for byte. First up: Borland C++ 2.0's BCC.EXE."
readmeQualityOk: true
url: "https://github.com/abedegno/borland-reborn"
language: "C"
languages: ["C", "Assembly"]
languagePcts: [49, 47]
topics: ["borland", "borland-cpp", "compiler", "decompilation", "dos", "matching-decompilation", "ms-dos", "retrocomputing", "reverse-engineering", "software-preservation"]
stars: 237
forks: 26
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 2
recentReleases: 3
createdAt: "2026-11-12T08:59:07Z"
lastCommitAt: "2026-11-20T11:58:30Z"
lastReleaseAt: "2026-11-15T09:18:50Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 28
maintainers: ["abedegno", "xiaoshaoning"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1455056972/637cd5ed-6659-42e1-8ed0-948c02cf0956"
---

# borland-reborn

**Borland's DOS compilers, rebuilt from their own binaries.**

This repository recovers the source code of classic Borland compilers from the published
executables, so that the recovered C and assembly rebuild each executable **byte for byte**
with the original Borland toolchain. Then it makes that source readable: real names, named
record fields, comments on every file, and notes on what the compiler does and where it goes
wrong.

| Directory | Program | Status |
|---|---|---|
| [`bcc20/`](https://github.com/abedegno/borland-reborn/blob/HEAD/bcc20/) | **Borland C++ 2.0** (1991), `BCC.EXE`, the command-line compiler | Complete: rebuilds byte-identical (SHA-256 `dd5744b9...`) |
| [`cpp20/`](https://github.com/abedegno/borland-reborn/blob/HEAD/cpp20/) | **Borland C++ 2.0** (1991), `CPP.EXE`, the standalone preprocessor | Complete: rebuilds byte-identical (SHA-256 `39879c60...`) |
| [`touch20/`](https://github.com/abedegno/borland-reborn/blob/HEAD/touch20/) | **Borland C++ 2.0** (1991), `TOUCH.COM` 3.0, sets files' date and time | Complete: rebuilds byte-identical (SHA-256 `8a7077f3...`) |
