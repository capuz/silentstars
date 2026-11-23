---
repo: "pkdxtools/pkdx"
name: "pkdx"
description: "A tool for using Claude Code/Codex to build Pokémon battle parties, calculate damage, search Pokémon information, and run battle simulations."
originalDescription: "Claude Code/Codexをつかってポケモン対戦用のパーティ構築・ダメージ計算・ポケモン情報の検索、対戦シミュレーションをするツール"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/pkdxtools/pkdx"
language: "C"
languages: ["C", "MoonBit"]
languagePcts: [73, 26]
stars: 56
forks: 114
openIssues: 0
closedIssues: 15
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-04-02T06:59:41Z"
lastCommitAt: "2026-11-23T10:23:50Z"
lastReleaseAt: "2026-04-13T00:40:21Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 93
undervaluedScore: 51
maintainers: ["ushironoko", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0d61ddf39b70a0cb187307fa04f80b8ce58068ee338d1bbc71e40c0e0231851/pkdxtools/pkdx"
---

# pkdx

A team-building support tool for Pokémon battles.
You can build teams, design movesets, calculate damage, and run battle simulations while chatting with Claude Code / Codex.

## Features

- **Team building**: Once you choose a core Pokémon, it interactively guides you through type coverage, speed tuning, and metagame counters. It proposes 6-Pokémon teams and 3-Pokémon selection patterns. You can also register teams from battle team screenshots in Champions.
- **Damage calculation**: Calculates random-roll damage including abilities, held items, weather, and Tera. It outputs practical KO numbers such as "guaranteed 2HKO" or "12/16 random 1HKO".
- **Training simulation**: Interactively sets nature, ability, held item, moves, and EVs, then calculates Lv50 actual stats. Completed builds can be saved to a file and used in team building.
- **Bulk/HP optimization**: Optimizes H/B/D EV distribution. Supports HP conditions (Berry / Sitrus Berry / Leftovers), physical/special weighting, and top-N candidate selection, and presents the distribution that maximizes the HBD value.
- **Pokémon search**: Searches Pokémon by conditions such as name, type, speed, and learnable moves.
