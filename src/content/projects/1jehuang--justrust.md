---
repo: "1jehuang/justrust"
name: "justrust"
description: "Fast Rust compile for coding agents"
readmeQualityOk: true
url: "https://github.com/1jehuang/justrust"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
stars: 13
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-07T05:03:22Z"
lastCommitAt: "2026-10-19T09:15:09Z"
lastReleaseAt: "2026-10-12T03:46:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 55
maintainers: ["1jehuang"]
openGraphImageUrl: "https://opengraph.githubassets.com/98c325cac6cbd9c148e2d785e00b7e2ba6898117e44873201a7534ccde20a126/1jehuang/justrust"
---

# justrust

**Rust compile as a service.**

A faster, vertically integrated Rust build toolchain optimized for agents.

[Website](https://jcode.sh/rust) · [Install](#install) · [Use](#use) · [Remote builds](#remote-builds) · [Goal](#goal) · [Findings](https://github.com/1jehuang/justrust/blob/HEAD/FINDINGS.md) · [Changelog](https://github.com/1jehuang/justrust/blob/HEAD/CHANGELOG.md)

---

> **Note:** `main` is the clean-room compiler rewrite (`jr-rust`), which supports
> only a small Rust subset so far ([COMPILER.md](https://github.com/1jehuang/justrust/blob/HEAD/COMPILER.md)). The client and
> service described below are released from the
> [`stable`](https://github.com/1jehuang/justrust/tree/stable) branch.

justrust vertically integrates and optimizes the Rust build toolchain to make
the entire edit, check, and test loop faster. Use it locally or with our remote
build service.

Your coding agents spend valuable time waiting for Rust checks, builds, and
tests. Running those operations locally can slow down your machine, drive up
CPU usage, temperature, and RAM consumption, and fill your disk with build
artifacts. Our remote service offloads compilation, test execution, and…
