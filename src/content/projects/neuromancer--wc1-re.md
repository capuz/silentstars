---
repo: "neuromancer/wc1-re"
name: "wc1-re"
description: "Wing Commander 1 source reconstruction and SDL2 port"
readmeQualityOk: true
url: "https://github.com/neuromancer/wc1-re"
language: "C"
languages: ["C"]
languagePcts: [76]
topics: ["ghidra", "retro-gaming", "source-reconstruction"]
stars: 57
forks: 7
openIssues: 7
closedIssues: 8
watchers: 7
contributors: 3
recentReleases: 10
createdAt: "2026-08-08T18:21:23Z"
lastCommitAt: "2026-10-21T23:36:01Z"
lastReleaseAt: "2026-08-20T05:58:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 91
undervaluedScore: 36
maintainers: ["neuromancer"]
openGraphImageUrl: "https://opengraph.githubassets.com/094caa3cc5b0751fbdd4821a72c04c250c475a36d504689c7f7a67001d97ba82/neuromancer/wc1-re"
fundingLinks: ["GITHUB:https://github.com/neuromancer"]
---

# Wing Commander source reconstruction and SDL2 port

This project recreates the source of **Wing Commander** as shipped in *Wing
Commander: The Kilrathi Saga* (1996). The reconstructed game core is C, the
`ix` audio library is C++, and the reference build uses Microsoft Visual C++
4.20 to reproduce the original Win32 executable as closely as possible.

A native SDL2 port is available for Windows, Linux, and macOS. It supports
Kilrathi Saga data and has partial support for the original DOS game data.

No copyrighted game data is included.

If you find this project useful, you can [support its development through
GitHub Sponsors](https://github.com/sponsors/neuromancer).

## Status

The reference build works, but byte-for-byte reconstruction is incomplete.
Unreferenced routines found between previously mapped functions are still
being recovered.

`make report` calculates per-function machine-code similarity to the retail
executable. It covers annotated functions and can miss unreconstructed code
between them. Use `make compare` to check executable layout as well; neither
score measures gameplay completeness.

## Similarity

Run `make report` for the current per-function results.…
