---
repo: "helgoboss/reaper-rs"
name: "reaper-rs"
description: "Rust bindings for the REAPER C++ API"
readmeQualityOk: true
url: "https://github.com/helgoboss/reaper-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
stars: 126
forks: 17
openIssues: 16
closedIssues: 44
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2020-01-28T18:29:40Z"
lastCommitAt: "2026-11-03T19:06:01Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "funded"]
healthScore: 76
undervaluedScore: 35
maintainers: ["helgoboss", "eureka-cpu"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3d4e71d14a5818a096dbb82eae66738d3281da62668d063d7d3c6f71d40faf8/helgoboss/reaper-rs"
fundingLinks: ["CUSTOM:https://paypal.me/helgoboss"]
discussionCount: 11
---

# reaper-rs

[Rust](https://www.rust-lang.org/) bindings for the [REAPER](https://www.reaper.fm/) C++ API.

**Important note:** If you want to use _reaper-rs_ for your own project, please use the master branch for the time
being, not the crates on [crates.io](https://crates.io/)! I push changes here pretty often, but I don't publish to
crates.io at the moment, so my crates there are *very* outdated. Rationale: As long as I'm the only consumer of this
library, this process is easier for me.

Here's the snippet:

```ignore
reaper-medium = { git = "https://github.com/helgoboss/reaper-rs.git", branch = "master" }
reaper-low = { git = "https://github.com/helgoboss/reaper-rs.git", branch = "master" }
reaper-macros = { git = "https://github.com/helgoboss/reaper-rs.git", branch = "master" }
```

## Table of Contents

- [Introduction](#introduction)
- [Example](#example)
- [Basics](#basics)
- [Usage](#usage)
- [Contribution](#contribution)
- [Background](#background)

## Introduction

_reaper-rs_ allows programmers to write plug-ins for the [REAPER](https://www.reaper.fm/) DAW (digital audio
workstation) in the [Rust](https://www.rust-lang.org/) programming language. It does so by…
