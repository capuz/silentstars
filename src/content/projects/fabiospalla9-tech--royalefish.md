---
repo: "fabiospalla9-tech/RoyaleFish"
name: "RoyaleFish"
description: "Open, community-driven Clash Royale AI: like Stockfish, but for Clash Royale. Offline training and models."
readmeQualityOk: true
url: "https://github.com/fabiospalla9-tech/RoyaleFish"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 10
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-11T03:04:54Z"
lastCommitAt: "2026-11-16T04:29:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 29
maintainers: ["fabiospalla9-tech"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fe99eb653608cd5cb4a05a6e0fb04eeffaa05acc7d1343bb298b636cae75059/fabiospalla9-tech/RoyaleFish"
---

# RoyaleFish

An open, community-driven Clash Royale AI. The idea is simple: something like Stockfish, but for Clash Royale. A strong engine that anyone can download, play against, study and make stronger. When someone trains a better model, it gets added here and becomes the new baseline for everyone.

Everything runs offline, in a local simulation.

> [!IMPORTANT]
> **Benchmarking or comparing models? Run every model on the same 16.635 card data.**
> All current models are trained on game data **16.635** (the tables in `data_16635/`, with the patch in `patches/native_runner_16635.diff`). A model trained on the older 15.535 tables reads cards in a different order, so if one side of a match uses the old tables and the other the new ones, one of them is effectively seeing the wrong cards and the result means nothing.
> - Convert older models to 16.635 first (a conversion script is coming to this repo soon), then run both sides on a 16.635 native engine.
> - Don't run the new models on an older engine/data version either. They were trained on the current balance (30+ card balance changes since the old data), so on old stats they play cards that no longer behave as they learned.

##…
