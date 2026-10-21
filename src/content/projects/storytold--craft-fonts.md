---
repo: "storytold/craft-fonts"
name: "craft-fonts"
description: "Fonts for the Crafting Apps"
readmeQualityOk: true
url: "https://github.com/storytold/craft-fonts"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 381
forks: 627
openIssues: 1
closedIssues: 0
watchers: 6
contributors: 7
recentReleases: 0
createdAt: "2026-10-06T13:44:10Z"
lastCommitAt: "2026-10-21T20:00:56Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 63
undervaluedScore: 18
maintainers: ["echelon", "dylanmtaylor", "bflatastic"]
openGraphImageUrl: "https://opengraph.githubassets.com/e90179253820733fb8c988affef9a93f32f91726474db240e49979bee5e50b06/storytold/craft-fonts"
---

craft-fonts
===========

Reusable fonts for the Crafting Apps.

This library is meant to have the following:

1. Reusable font assets. These may be large files, and since we're using a separate repo for storing them,
   We're not afraid of potentially having to do a git reset to purge stale assets. It won't impact the other
   repos with core app and library functionality.

2. Additional cross-cutting Rust libraries for dealing with fonts. It's uncertain whether it's better to
   have code packages as individual repos as one classically does, or whether we should take a
   more "biology-inspired" approach of copying innovations between repos as a form of lateral code/information
   exchange.

## What's here

| Path | What |
|---|---|
| `fonts/` | The font files, one directory per family, each with its licence. |
| `fonts/manifest.txt` | Machine-readable list of every font: family, style, file, scripts, licence, SHA-256, pinned source. |
| `ATTRIBUTION.md` | Authors, pinned sources and licences. |
| `crates/craft-fonts` | Rust: the manifest as a static table, finding a checkout (`CRAFT_FONTS_DIR`), loading it, and an `embed` feature that compiles the fonts in. |
|…
