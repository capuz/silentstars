---
repo: "denzi-gh/crashwoc-decomp-ps2"
name: "crashwoc-decomp-ps2"
description: "This is a WIP decompilation of Crash Bandicoot: The Wrath of Cortex for Playstation 2"
readmeQualityOk: true
url: "https://github.com/denzi-gh/crashwoc-decomp-ps2"
language: "C"
languages: ["C"]
languagePcts: [82]
topics: ["c", "decompilation", "gcc", "ps2", "reverse-engineering"]
stars: 18
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-07-06T09:52:55Z"
lastCommitAt: "2026-10-24T08:20:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 39
maintainers: ["denzi-gh", "td-9"]
openGraphImageUrl: "https://opengraph.githubassets.com/1841f3a4b28652935e82809bf57e6e8267ecf45ba112f1842a5e66fbf962836c/denzi-gh/crashwoc-decomp-ps2"
---

# Crash Bandicoot: The Wrath of Cortex Decompilation (PS2)

A byte-exact matching decompilation of **Crash Bandicoot: The Wrath of Cortex**
for the PlayStation 2 - reconstructing the retail executable from hand-written C
that compiles to the exact original bytes.

> **Want to contribute?** Start with [CONTRIBUTING.md](https://github.com/denzi-gh/crashwoc-decomp-ps2/blob/HEAD/CONTRIBUTING.md).

## Target

All matching work targets exactly one build:

```text
Crash Bandicoot: The Wrath of Cortex
PAL retail v1.03 - SLES-50386 (SLES_503.86)
```

You supply your own legally obtained copies at
`orig/pal103/`; they must match exactly:

| File          | Size (bytes) | SHA-256                                                            |
| ------------- | -----------: | ------------------------------------------------------------------ |
| `SLES_503.86` |    6,731,763 | `7fc6826d08c42a5a92fc018edae3e520783beb5a8330410251192bfe26b1eca1` |
| `SYSTEM.CNF`  |           56 | `86fe327e4576516f57004800b2663c75c8a65a62872f3fdf3aa0618daf23d9c1` |

## Diffing

After initial setup, objdiff.json will be generated and can be used with the objdiff-cli or the objdiff GUI.

## Documentation

| Doc | What…
