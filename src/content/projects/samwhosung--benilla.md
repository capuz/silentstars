---
repo: "samwhosung/benilla"
name: "benilla"
description: "A from-scratch World of Warcraft 1.12.1 client in Rust + Bevy"
readmeQualityOk: true
url: "https://github.com/samwhosung/benilla"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 47
forks: 14
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2026-07-24T05:31:27Z"
lastCommitAt: "2026-07-28T14:56:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 19
maintainers: ["samwhosung"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4ed85d6ab746e9ccf13abf3c76cffb0009bf24bf963c9ba5ffd5f707c6f4902/samwhosung/benilla"
---

# benilla

A from-scratch **World of Warcraft 1.12.1 client** in **Rust + [Bevy](https://bevy.org)**, speaking
the vanilla protocol to a [vmangos](https://github.com/vmangos/core) server. Every file format and
the network protocol are implemented from scratch — no original client code, no third-party WoW
crates, and no bundled game assets: benilla reads its data at runtime from your own 1.12.1 install.

## What works

- **Formats & assets** — in-repo readers for the full asset stack (MPQ patch chain, BLP, DBC,
  ADT/WDT/WDL, M2, WMO), wired into Bevy as an asset source, plus extraction CLI tools.
- **World** — streamed terrain with the distant horizon, portal-culled WMOs with interior lighting,
  doodads and ground clutter, swimmable liquids, sky and weather, and the client's own day/night
  lighting, fog, glow, and gamma passes.
- **Models & animation** — GPU-skinned M2s with the full animation controller (cross-fades,
  one-shots, fidgets), a near feature-complete particle system, ribbons, and animated gameobjects
  (doors, chests, mailboxes, lifts).
- **Characters** — customization end to end, the armor-region texture composite, held weapons and
  sheathing, and mounts.
-…
