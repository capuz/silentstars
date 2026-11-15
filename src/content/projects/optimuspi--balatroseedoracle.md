---
repo: "OptimusPi/BalatroSeedOracle"
name: "BalatroSeedOracle"
description: "Powerful Seed Searching and Filtering Tools for Balatro"
readmeQualityOk: true
url: "https://github.com/OptimusPi/BalatroSeedOracle"
language: "C#"
languages: ["C#"]
languagePcts: [93]
topics: ["balatro", "balatro-tools"]
stars: 19
forks: 4
openIssues: 8
closedIssues: 1
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-07-26T05:48:31Z"
lastCommitAt: "2026-11-15T08:19:19Z"
lastReleaseAt: "2025-08-15T18:18:37Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 80
undervaluedScore: 55
maintainers: ["OptimusPi", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/101370e70a864add393ebe3bb626d0d145f2bbc2a59f5df3bc11062603b50e0a/OptimusPi/BalatroSeedOracle"
discussionCount: 0
---

# Balatro Seed Oracle

A desktop app for finding and reading Balatro seeds. You describe the seed you want in JAML
(Jimbo Ante Markup Language), and the Motely engine sweeps the seed space for it with SIMD.
Built with Avalonia on .NET 10.

Not affiliated with LocalThunk or Playstack. [Buy Balatro](https://www.playbalatro.com/).

## What it does

- **Search** — pick a filter, then sweep every seed (resumable), or check a single seed. Matches
  stream into a results grid and are also written to disk as they're found.
- **Designer** — build a filter visually (jokers, tarots, spectrals, vouchers, tags, bosses,
  playing cards, with editions, seals and stickers) or write it in the JAML editor, which has
  completions, error and warning underlines, hover help and folding, all from the engine itself.
- **Analyzer** — enter a seed and see each ante: boss, voucher, skip tags, the shop queue and
  every booster pack, with the game's sprites.
- **Music and sound** — the main-menu music stems loop in sync; volume and mute persist.

## Run it

```sh
git clone --recurse-submodules https://github.com/OptimusPi/BalatroSeedOracle
cd BalatroSeedOracle
dotnet run --project src/BalatroSeedOracle
```…
