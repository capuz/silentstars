---
repo: "fabiospalla9-tech/RoyaleFish"
name: "RoyaleFish"
description: "Open, community-driven Clash Royale AI: like Stockfish, but for Clash Royale. Offline training and models."
readmeQualityOk: true
url: "https://github.com/fabiospalla9-tech/RoyaleFish"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 73
forks: 15
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-11-11T03:04:54Z"
lastCommitAt: "2026-11-24T01:59:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 26
maintainers: ["fabiospalla9-tech"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d2c3590e024ee0549a19b452ec9410cf10b6263b55106d891831ad668614782/fabiospalla9-tech/RoyaleFish"
---

# RoyaleFish

A Clash Royale AI built from scratch by an independent developer. The idea is simple: something like Stockfish, but for Clash Royale. A strong engine that anyone can download, play against offline and study.

Everything runs offline, in a local simulation.

## New models (24 Nov 2026)

A new generation trained **from random weights**, with no earlier checkpoint: first on real high-ladder replays, then in a self-play league in RoyaleSim at about **23,000-30,000 games per hour**. From random weights to the published Furnace specialist took **about 40 hours**.

| File | Role | Replays | Self-play games | Win rate vs frozen B (400 games) |
|---|---|---|---|---|
| `models/C-furnace-graveyard-v862.pt` | Furnace Graveyard specialist | 5,500 + 4,873 | about 221,000 | **66.0% ± 4.6** |
| `models/H-minion-giant-28-v342.pt` | Minion Giant 2.8 specialist | 3,169 | about 88,000 | **68.2% ± 4.6** |
| `models/B-general-12m-424k.pt` | Meta generalist | 56,049 | 424,192 | reference |
