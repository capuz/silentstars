---
repo: "Fuuzetsu/tenchu-shinobi-gaisen-pc"
name: "tenchu-shinobi-gaisen-pc"
description: "Native port of the Tenchu: Shinobi Gaisen PS1 game."
readmeQualityOk: true
url: "https://github.com/Fuuzetsu/tenchu-shinobi-gaisen-pc"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 11
forks: 0
openIssues: 19
closedIssues: 28
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-28T04:48:42Z"
lastCommitAt: "2026-11-01T22:58:21Z"
lastReleaseAt: "2026-10-30T13:03:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 82
undervaluedScore: 51
maintainers: ["Fuuzetsu"]
openGraphImageUrl: "https://opengraph.githubassets.com/352992aa6f7921178e66f8b7fb2a0ecc0112d07e3894839d9e34bb708b3c62c6/Fuuzetsu/tenchu-shinobi-gaisen-pc"
---

# Tenchu: Shinobi Gaisen PC

A portable Rust port of **Tenchu: Shinobi Gaisen (SLPS-019.01)**: all ten missions,
training, original menus, endings and the mission editor. Faithful game logic at its original rate,
with optional modern graphics and smooth rendering. No PlayStation BIOS needed.

**Bring your own original game disc:** select its **`.cue`** and keep all referenced
**`.bin` files** beside it. Original game data is not included. Other Tenchu releases are not
supported. Startup checks the game/menu executables and base artwork with SHA-256.

## Download and play

Open [Releases](https://github.com/Fuuzetsu/tenchu-shinobi-gaisen-pc/releases).
Choose a versioned release for normal play, or
[HEAD (development)](https://github.com/Fuuzetsu/tenchu-shinobi-gaisen-pc/releases/tag/head)
for the latest successful `master` build. Download your platform's archive under
**Assets** and extract it completely.
The [workflow](https://github.com/Fuuzetsu/tenchu-shinobi-gaisen-pc/blob/HEAD/.github/workflows/build.yml) publishes version tags and refreshes
HEAD on `master`; release downloads do not have the Actions artifact expiry.
[What's…
