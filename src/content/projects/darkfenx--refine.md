---
repo: "DarkFenX/refine"
name: "refine"
description: "EVE online fitting engine implemented in Rust"
readmeQualityOk: true
url: "https://github.com/DarkFenX/refine"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [68, 32]
topics: ["eve-online", "mmo", "fitting", "theorycrafting", "rust"]
stars: 15
forks: 1
openIssues: 0
closedIssues: 1
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2020-05-09T10:34:07Z"
lastCommitAt: "2026-10-23T12:04:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 65
maintainers: ["DarkFenX"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b64fa6479e94f792af5402dde6821b6cc1c2a81381210345a04c03982c556ba/DarkFenX/refine"
---

# refine
Rust Eve FIttiNg Engine

The engine's purpose is validation of fits and calculation of item/fit/fleet stats. It does not do much else - i.e. there is no fit persistence, or anything related to UI (for instance, it is not aware of item/fit names).

# Crate Layout

### refine-core
Core calculation library with Rust interface.

Has synchronous interface, which allows to manipulate just what you want, and get just info you need.

### refine-edh
Data handlers for core library, which provide access to EVE data.

### refine-adc
Data cachers for core library, which allow it to store adapted data. Adapted data is EVE data which was processed for needs of the core library.

### refine-rs
High-level async Rust interface.

Interface is built to unify multiple smaller changes into commands and command batches, and return info objects filled with data. Main goal of that is to reduce overhead: under the hood, the library manages thread pools and multi-threading; workers receive commands, and return command responses and infos.

### refine-http
High-level HTTP interface built on top of `refine-rs`.

# Building
You will need nightly version of Rust to build it, the code makes use of…
