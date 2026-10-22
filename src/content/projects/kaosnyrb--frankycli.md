---
repo: "kaosnyrb/FrankyCLI"
name: "FrankyCLI"
description: "CLI Tool for generating complex Starfield objects "
readmeQualityOk: true
url: "https://github.com/kaosnyrb/FrankyCLI"
language: "C#"
languages: ["C#"]
languagePcts: [93]
stars: 13
forks: 1
openIssues: 1
closedIssues: 1
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2024-01-16T14:43:41Z"
lastCommitAt: "2026-10-22T08:52:19Z"
lastReleaseAt: "2024-01-25T10:16:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 60
maintainers: ["kaosnyrb"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e9ea01dde1b918bbbce2f035cb4a529636668096aa87dc9686ea19766e4d4d4/kaosnyrb/FrankyCLI"
---

# FrankyCLI

Procedural dungeon and quest generation tool for Starfield, built on [Mutagen.Bethesda](https://github.com/Mutagen-Modding/Mutagen).

Generates interior space stations, planetary worldspaces, space cells, and quest chains by composing PackIn tiles, placing objects, writing Starfield records, and outputting a ready-to-load `.esm`.

---

## Project Structure

```
commands/           Gen command entry points, grouped by domain
  btd/              BTD terrain tools (flatten, inspect, test)
  quest/            Quest generation and dialogue tests
  ship/             Ship record tools (struct, flips, rotates)
  tools/            Dev utilities (inspect, report, placer, merger)
  upgrade/          Upgrade generator
  world/            Worldspace and cell tools (roompackin, cellfixer)
  gen_retrograde.cs Main Retrograde procedural generation entry point

Retrograde.Library/ Core library
  Core/             Shared infrastructure
    AI/             LLM prompt management, ElevenLabs speech synthesis
    Generation/     Dungeon gen internals: connectors, placement, scoring, math
    Tools/          Record lookup helpers: NPCs, ships, factions, FormKeys
  Models/           Shared…
