---
repo: "Atraeau/WoW-Addons"
name: "WoW-Addons"
description: "WoW: Forever addon dev environment — multi-addon workspace with deploy/scaffold tooling and a generated API reference for the modern (12.0) client."
readmeQualityOk: true
url: "https://github.com/Atraeau/WoW-Addons"
homepage: "https://atraeau.github.io/WoW-Addons/"
language: "Lua"
languages: ["Lua", "HTML"]
languagePcts: [73, 25]
topics: ["addon", "api-documentation", "game-modding", "lua", "world-of-warcraft", "wow", "wow-addon", "wow-api", "wow-forever"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-20T19:59:37Z"
lastCommitAt: "2026-10-31T15:58:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 52
maintainers: ["Atraeau"]
openGraphImageUrl: "https://opengraph.githubassets.com/1781990c2003ec548ca32b4919b4f85eb89463d22e57747735d5033f56af25e8/Atraeau/WoW-Addons"
---

# WoW-Addons

A development environment for building **multiple** World of Warcraft addons against
**WoW: Forever** (codename *Camelot*, product `wow_classic_beta`, **Interface `16001`** —
a modern **12.0**-based engine), plus a generated reference for that client's whole API.

Each addon lives under [`src/`](https://github.com/Atraeau/WoW-Addons/blob/HEAD/src); one deploy script junction-links them into the live
game, so you edit here and the game reads your source directly — no copying per change.

**📖 Live API reference:** https://atraeau.github.io/WoW-Addons/ — searchable, browsable, and
machine-readable (tools can fetch [`api.json`](https://atraeau.github.io/WoW-Addons/api.json)).

## Repository map

| Path | What's there |
| --- | --- |
| [`src/`](https://github.com/Atraeau/WoW-Addons/blob/HEAD/src) | Your addons — one folder each (source of truth) |
| [`KingsGambit/`](https://github.com/Atraeau/WoW-Addons/blob/HEAD/KingsGambit/README.md) | A self-contained addon project (its addon is in `KingsGambit/src/`) |
| [`vendor/`](https://github.com/Atraeau/WoW-Addons/blob/HEAD/vendor) | Tracked third-party addons (patched for this client) |
|…
