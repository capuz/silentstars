---
repo: "neuromancer/wc2-re"
name: "wc2-re"
description: "Wing Commander 2 source reconstruction and SDL2 port"
readmeQualityOk: true
url: "https://github.com/neuromancer/wc2-re"
language: "C"
languages: ["C"]
languagePcts: [77]
topics: ["dos-gaming", "reverse-engineering", "source-code-recovery", "wing-commander"]
stars: 38
forks: 7
openIssues: 13
closedIssues: 25
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-08-17T08:42:45Z"
lastCommitAt: "2026-11-06T13:19:47Z"
lastReleaseAt: "2026-09-05T19:57:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 89
undervaluedScore: 43
maintainers: ["neuromancer"]
openGraphImageUrl: "https://opengraph.githubassets.com/88ac85332420c61ca22bf4ec2407d15e6e7861ee03e2d298af5a592558ac8112/neuromancer/wc2-re"
fundingLinks: ["GITHUB:https://github.com/neuromancer"]
---

# Wing Commander II source reconstruction and SDL2 port

This project recreates the source of **Wing Commander II** as shipped in *Wing
Commander: The Kilrathi Saga* (1996). The reconstructed game core is C, the
`ix` audio library is C++, and the reference build uses Microsoft Visual C++
4.1 under [`wibo`](https://github.com/neuromancer/wibo) to reproduce the
original Win32 `WC2.EXE`.

A native SDL2 port and optional graphical launcher are available for Windows,
Linux, and macOS. They support Kilrathi Saga data and have partial support for
the original DOS game data.

No retail game data files are included.

If you find this project useful, you can [support its development through
GitHub Sponsors](https://github.com/sponsors/neuromancer).

## Status

The reference build produces a **byte-identical `WC2.EXE`**: all 714,752 bytes
match the Kilrathi Saga retail executable, including code, data, padding, and
PE/debug metadata. `make compare-bytes` verifies the complete files without
normalization and fails on any difference.

The build uses the original MSVC 4.1 toolchain, a reproducible PDB seed, and
the retail link timestamp. `make report` and `make compare-functions` provide…
