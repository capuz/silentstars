---
repo: "Kagamma/evil-script"
name: "evil-script"
description: "Simple C-like scripting engine written in Free Pascal"
readmeQualityOk: true
url: "https://github.com/Kagamma/evil-script"
language: "Pascal"
languages: ["Pascal"]
languagePcts: [100]
topics: ["scripting-language", "free-pascal", "pascal", "interpreter", "fpc", "dynamic-types", "dynamic-typing"]
stars: 34
forks: 7
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2021-01-09T15:29:46Z"
lastCommitAt: "2026-10-03T09:23:37Z"
lastReleaseAt: "2025-02-24T04:05:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 83
undervaluedScore: 56
maintainers: ["Kagamma"]
openGraphImageUrl: "https://opengraph.githubassets.com/273f189dfc721616e00e864d98772eb5f4ec0818945302b1ca7496c77ea596e8/Kagamma/evil-script"
---

Simple C-like scripting engine written in Free Pascal. Originally designed as a scripting language for `satania-buddy`, it is now a standalone project intended as a general-purpose, embeddable scripting engine.

It has been tested and works on the following platforms: DOS (go32v2), Windows (x86 & x64), Linux (x64, AArch64), although theoretically it should work on every platforms except 8/16-bit systems.

Enable `SE_LIBFFI` if you need to call external functions from DLLs/SOs.

#### Documentations
- https://github.com/Kagamma/evil-script/tree/main/docs

#### Building
- `fpc -O4 evil.pas`

#### Running
- `evil examples/hello.evil`

#### How to embedded into applications
- See `Test.pas` and `evil.pas` source code
- Also see https://github.com/Kagamma/evil-script/tree/main/docs/how-to-use.md

#### Performance
- The interpreter uses indirect threading. It compares well to CPython in most cases.
- On x86-64 CPUs, the interpreter supports JIT compilation. This makes it much faster than pure interpreter mode for number crunching.

poca: https://github.com/BeRo1985/poca

PascalScript: https://wiki.freepascal.org/Pascal_Script

Sheet:…
