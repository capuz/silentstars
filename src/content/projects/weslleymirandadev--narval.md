---
repo: "weslleymirandadev/narval"
name: "narval"
description: "Uma linguagem de programação"
readmeQualityOk: true
url: "https://github.com/weslleymirandadev/narval"
language: "C++"
languages: ["C++"]
languagePcts: [82]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2025-11-10T02:51:04Z"
lastCommitAt: "2026-09-19T01:17:48Z"
lastReleaseAt: "2026-09-17T00:21:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 67
maintainers: ["weslleymirandadev"]
openGraphImageUrl: "https://opengraph.githubassets.com/89cfa1126d2f0826bf00cc2539e60f8d5f4c13d56bdccbc79bec500b747a5627/weslleymirandadev/narval"
---

# Narval

A high-performance, multiparadigm compiled programming language with inferred typing that uses implicit and inferred Ownership & Borrowing concepts (YES, without explicit annotations, without borrow errors in the user's face). The compiler assumes responsibility for memory, parallelism, and safety — without imposing a new mental model on the programmer.

Narval transfers the operational responsibility of the code to the compiler, while preserving predictability, performance, and control when needed. If it can be proven safe, Narval does it automatically. Unlike Rust, Narval does not try to teach the programmer how to write correct code; it tries to make ordinary code behave like expert code.

## Install

Binaries are published per platform on the [releases page](https://github.com/weslleymirandadev/narval/releases). Unpack the archive anywhere and put `narval` on your `PATH`.

The archive holds a single executable: the runtime object the compiler links against and the standard library modules travel inside it, so nothing has to be installed next to the binary. The first run writes them to a per-user directory — `~/.cache/narval/<version>` on Linux,…
