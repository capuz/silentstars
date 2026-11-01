---
repo: "Atraeau/WoW-Addons"
name: "WoW-Addons"
description: "WoW: Forever addon dev environment — multi-addon workspace with deploy/scaffold tooling and a generated API reference for the modern (12.0) client."
readmeQualityOk: true
url: "https://github.com/Atraeau/WoW-Addons"
homepage: "https://atraeau.github.io/WoW-Addons/"
language: "Lua"
languages: ["Lua", "HTML"]
languagePcts: [72, 26]
topics: ["addon", "api-documentation", "game-modding", "lua", "world-of-warcraft", "wow", "wow-addon", "wow-api", "wow-forever"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-09-20T19:59:37Z"
lastCommitAt: "2026-11-01T22:59:20Z"
lastReleaseAt: "2026-11-01T21:06:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 57
maintainers: ["Atraeau", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b30843fd948782388d69149e69c16d84a1dec2f80276e7c540a6f33b97f55cf0/Atraeau/WoW-Addons"
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
| [`src/`](https://github.com/Atraeau/WoW-Addons/blob/HEAD/src) | Your addons — one folder each, holding **everything** about that addon: game code, tests, simulators, docs (source of truth) |
| `AddOns/` | **Build output** (gitignored): `src/<Addon>` built into exactly the files the client loads, mirroring the game's `Interface/AddOns` folder. See [Building and releases](#building-and-releases) |
|…
