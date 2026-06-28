---
repo: "Root50199/Uiscias"
name: "Uiscias"
description: "A small collection of .it mods for Mabinogi."
url: "https://github.com/Root50199/Uiscias"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 13
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 9
createdAt: "2025-10-06T17:05:08Z"
lastCommitAt: "2026-06-28T02:03:16Z"
lastReleaseAt: "2026-06-26T01:12:39Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 65
maintainers: ["tekashi-side", "Root50199", "uiscias-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4051dc52fc8e16a1313356660f01bd7b8db2c8032a4d81ffe84969e1e009b620/Root50199/Uiscias"
discussionCount: 1
---

# Uiscias

A collection of `.it` mods for Mabinogi (North America). These mods are intended to increase accessibility and reduce frustration with the client—not to fundamentally change game mechanics.

> **Disclaimer:** All client modifications are against Nexon's Terms of Service. Use at your own risk.

## Installation

Releases contain packed `.it` files ready for use. Place them in `Mabinogi\appdata\package` to install; delete to uninstall.

Source files for building your own `.it` packages live in each mod folder at the repository root.

## Repository layout

Each mod is a top-level folder:

```
{ModName}/
  config.json   # mod metadata (see below)
  README.md     # mod-specific description and notes
  data/         # game files
  images/       # optional screenshots and examples
```

### Update types

Every mod's `config.json` includes an `updateType` field:

| Value      | Meaning                                                |
| ---------- | ------------------------------------------------------ |
| `stable`   | Rarely or never needs updating after patches (33 mods) |
| `volatile` | Likely needs updating after most patches (7 mods)      |

Mods that require maintenance…
