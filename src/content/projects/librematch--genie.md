---
repo: "librematch/genie"
name: "genie"
description: "genie - deterministic reimplementation of the Age of Empires II: Definitive Edition engine as a Rust library, plus readers and writers for the game's file formats."
readmeQualityOk: true
url: "https://github.com/librematch/genie"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 8
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-10-15T00:15:51Z"
lastCommitAt: "2026-10-26T18:04:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 49
maintainers: ["simonsan"]
openGraphImageUrl: "https://opengraph.githubassets.com/943264c805c6ed276abdbdc68cc3c5ff08ca11fe0817b6ee51f1e9dcdaed0495/librematch/genie"
discussionCount: 3
---

# genie

A deterministic reimplementation of the Age of Empires II: Definitive Edition engine as a Rust
library, plus readers and writers for the game's file formats.

Work in progress. Home: https://github.com/librematch/genie. See `NOTICE` for the origin and
licences of the crates.

## Why genie

Age of Empires II: Definitive Edition lives in a large ecosystem of tools around the game itself.
Modders change its units, technologies and civilizations with Advanced Genie Editor. CaptureAge
lets spectators and casters follow tournament matches with views the game does not offer.
Community sites read recorded games to build statistics, ratings and match analyses. All of these
tools need to understand the same rules and the same data as the game. Today each of them carries
its own partial copy of that knowledge, and often has to reverse-engineer the file formats again
before it can start on its actual purpose.

genie wants to be the one place where that knowledge lives: an open, deterministic implementation
of the game's engine that every tool can build on, and that the community maintains together. With
it, a tool can:

- **replay recorded games** and inspect the complete game state…
