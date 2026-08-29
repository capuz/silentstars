---
repo: "ptrlrd/spire-codex"
name: "spire-codex"
description: "A project for decompiling Slay the Spire 2 and making an API with it"
readmeQualityOk: true
url: "https://github.com/ptrlrd/spire-codex"
homepage: "https://spire-codex.com"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [61, 34]
topics: ["portfolio"]
stars: 276
forks: 49
openIssues: 5
closedIssues: 110
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2026-03-07T21:59:04Z"
lastCommitAt: "2026-08-29T17:28:17Z"
lastReleaseAt: "2026-05-28T22:08:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 30
maintainers: ["ptrlrd"]
openGraphImageUrl: "https://opengraph.githubassets.com/ebca169358bba17255bef293a189eb01a2f3890b6ee5f0ed5fe4a629b6d82db0/ptrlrd/spire-codex"
discussionCount: 1
---

</p>

</p>

# Spire Codex

A comprehensive database and API for **Slay the Spire 2** game data, built by reverse-engineering the game files. Supports all **15 languages** shipped with the game.

**Live site**: [spire-codex.com](https://spire-codex.com)

**Steam App ID**: 2868840

## How It Was Built

Slay the Spire 2 is built with Godot 4 but all game logic lives in a C#/.NET 8 DLL (`sts2.dll`), not GDScript. The data pipeline:

1. **PCK Extraction** - [GDRE Tools](https://github.com/bruvzg/gdsdecomp) extracts the Godot `.pck` file to recover images, Spine animations, and localization data (~9,947 files).

2. **DLL Decompilation** - [ILSpy](https://github.com/icsharpcode/ILSpy) decompiles `sts2.dll` into ~3,300 readable C# source files containing all game models.

3. **Data Parsing** - 22 Python regex-based parsers extract structured data from the decompiled C# source, outputting per-language JSON to `data/{lang}/`:
   - **Cards**: `base(cost, CardType, CardRarity, TargetType)` constructors + `DamageVar`, `BlockVar`, `PowerVar<T>` for stats
   - **Characters**: `StartingHp`, `StartingGold`, `MaxEnergy`, `StartingDeck`, `StartingRelics`
   - **Relics/Potions**: Rarity, pool,…
