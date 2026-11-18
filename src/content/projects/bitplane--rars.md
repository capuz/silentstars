---
repo: "bitplane/rars"
name: "rars"
description: "RAR implementation in Rust"
readmeQualityOk: true
url: "https://github.com/bitplane/rars"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["compression", "file-format", "cli"]
stars: 99
forks: 18
openIssues: 14
closedIssues: 47
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2026-04-28T06:15:10Z"
lastCommitAt: "2026-11-18T11:08:23Z"
lastReleaseAt: "2026-07-20T21:24:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 33
maintainers: ["bitplane", "mnightingale", "burntout76"]
openGraphImageUrl: "https://opengraph.githubassets.com/b89f044989559491e106e2d2686f1184af97cb93dc47f09407231bded7a5329d/bitplane/rars"
---

# rars

A Rust implementation of RAR.

* 🏠 [home](https://bitplane.net/dev/rust/rars)
* 📦 [downloads](https://github.com/bitplane/rars/releases)
  * 🦀 [crates](https://crates.io/crates/rars)
  * 🐍 [pypi](https://pypi.org/project/rars)
  * 📜 [npm](https://www.npmjs.com/package/@bitplane/rars)
* 🐱 [source](https://github.com/bitplane/rars)
  * 📃 [spec](https://github.com/bitplane/rar-research)

`rars` is free software for compression, decompression and recovery of RAR
archives. It supports all the archive types I could find - from the early `RE~^`
ones from the DOS days all the way through to RAR 7. It comes with a Rust
library, a CLI, Python and TypeScript bindings.

It started as an
[agentic development experiment](https://bitplane.net/log/2026/05/rars/), and
has since matured as it gained some users. It's still a bit slower than WinRAR,
uses more memory and has slightly worse compression. It could use more testing
at volume, too. Other than that it's in pretty good shape.
