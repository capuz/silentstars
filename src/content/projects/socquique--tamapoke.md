---
repo: "socquique/TamaPoke"
name: "TamaPoke"
description: "A Pokemon Gen-1 Tamagotchi for the Waveshare ESP32-S3-Touch-AMOLED-1.75 round display — open firmware + one-click web installer. Case remixed from yoyothechicken's Pokeball."
readmeQualityOk: true
url: "https://github.com/socquique/TamaPoke"
homepage: "https://socquique.github.io/TamaPoke/web/"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [58, 25]
stars: 137
forks: 65
openIssues: 2
closedIssues: 10
watchers: 8
contributors: 3
recentReleases: 0
createdAt: "2026-06-10T19:55:42Z"
lastCommitAt: "2026-09-22T08:46:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 35
maintainers: ["socquique", "allenst486db"]
openGraphImageUrl: "https://opengraph.githubassets.com/66e08b84bfc6730c40680d83c17bd7347eb5428f7b3ab538d296456c63d558c5/socquique/TamaPoke"
---

# TamaPoke

A gen-1-Pokémon-inspired tamagotchi for the
**Waveshare ESP32-S3-Touch-AMOLED-1.75** (round 466×466 AMOLED, CO5300 driver
over QSPI, CST9217 touch over I2C). Raise any of the 151, evolve it, train it
and complete them all (shinies included).

> **Personal, non-commercial fan project.** Code is MIT; the sprites are from
> PMD SpriteCollab (CC BY-NC, Pokémon © Nintendo/Game Freak), and the 3D case is
> CC BY-NC-SA. See **[License](#license)** and **Credits**.

🔴 **3D-printed Pokéball case + print profiles → [on MakerWorld](https://makerworld.com/es/models/2937822-tamapoke-a-pokemon-pokeball-tamagotchi)** · flash it in your browser → **[web installer](https://socquique.github.io/TamaPoke/web/)**

## Status

Running on hardware. Implemented: the 151 + shinies animated from microSD, full
life cycle (egg by rarity → evolution → farewell/release/runaway, each gated
behind a decision dialog), bred-Pokédex with gallery, battle stats (genes +
training), retention hooks (streak / bond / medals / name), biome + real-time
backgrounds, ball minigame, training bag, animated bath, RTC with offline
progression, battery (AXP2101) and PWR button, anti-burn-in dimming,
**sound…
