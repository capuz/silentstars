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
stars: 62
forks: 7
openIssues: 8
closedIssues: 8
watchers: 7
contributors: 3
recentReleases: 10
createdAt: "2026-08-08T18:21:23Z"
lastCommitAt: "2026-10-29T12:25:34Z"
lastReleaseAt: "2026-08-20T05:58:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 35
maintainers: ["neuromancer"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa8eae51d0ef2f809431bc374093cc4eb9a87ff79fe519b405e3a8d46e206496/neuromancer/wc1-re"
fundingLinks: ["GITHUB:https://github.com/neuromancer"]
---

# Wing Commander source reconstruction and SDL2 port

This project recreates the source of **Wing Commander** as shipped in *Wing
Commander: The Kilrathi Saga* (1996). The reconstructed game core is C, the
`ix` audio library is C++, and the reference build uses Microsoft Visual C++
4.20 to reproduce the original Win32 executable.

A native SDL2 port is available for Windows, Linux, and macOS. It supports
Kilrathi Saga data and has partial support for the original DOS game data.

No copyrighted game data is included.

If you find this project useful, you can [support its development through
GitHub Sponsors](https://github.com/sponsors/neuromancer).

## Status

The reference build matches the original executable byte for byte: all
518,656 bytes are identical. The final three register-encoding differences
are resolved by a four-instruction inline assembly block in the guarded
allocator. This is a documented matching workaround; it does not establish
that the original source used assembly there. See the
[allocator matching exception](https://github.com/neuromancer/wc1-re/blob/HEAD/docs/PATTERNS.md#guarded-allocator-inline-assembly).

The [workaround removal…
