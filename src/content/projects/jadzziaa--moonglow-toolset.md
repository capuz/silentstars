---
repo: "jadzziaa/moonglow-toolset"
name: "moonglow-toolset"
description: "A cross-platform reimplementation of the Neverwinter Nights: Enhanced Edition Aurora Toolset (Rust, egui, wgpu)"
readmeQualityOk: true
url: "https://github.com/jadzziaa/moonglow-toolset"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
stars: 17
forks: 6
openIssues: 13
closedIssues: 18
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-01T11:52:28Z"
lastCommitAt: "2026-10-30T10:19:48Z"
lastReleaseAt: "2026-10-03T20:30:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 51
maintainers: ["jadzziaa"]
openGraphImageUrl: "https://opengraph.githubassets.com/79d4c1b2cc1882297cd02b9a7b2dbd1f4240f940bae4710505f6d98bda4d5bdc/jadzziaa/moonglow-toolset"
---

A module toolset for <strong>Neverwinter Nights: Enhanced Edition</strong>, rebuilt from scratch.<br>
  Everything Aurora does, natively on Linux, Windows and macOS, and a good deal it doesn't.

## What it is

Moonglow is a reimplementation of BioWare's Aurora Toolset, written in Rust
with an [egui](https://github.com/emilk/egui) interface and a
[wgpu](https://wgpu.rs) renderer.
- **It edits what Aurora edits and writes what Aurora writes.** Modules it
  saves behave the same in the game. Its behavior is checked against Aurora
  itself (run off-screen under Wine), the game's server and client, and
  neverwinter.nim's tools.
- **It runs natively** on Linux, Windows and macOS: no Wine, no 32-bit memory
  limits, no `temp0` folder.
- **It never loses data.** Fields Aurora doesn't know are kept, untouched files
  are written back as they were, and unsaved work is kept in recovery copies.

Moonglow contains no game data. It reads the game's files from your
installation, so you need Neverwinter Nights: Enhanced Edition.

## Everything Aurora does

Every row of the [parity checklist](https://github.com/jadzziaa/moonglow-toolset/blob/HEAD/docs/parity/checklists.md) is done,
deliberately…
