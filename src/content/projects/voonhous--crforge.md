---
repo: "voonhous/crforge"
name: "crforge"
description: "Headless game accurate Clash Royale simulator in Java for RL/AI training, with LibGDX debug visualizer"
readmeQualityOk: true
url: "https://github.com/voonhous/crforge"
language: "Java"
languages: ["Java"]
languagePcts: [98]
topics: ["ai-training", "clash-royale", "game-simulator", "gymnasium", "java", "libgdx", "reinforcement-learning"]
stars: 14
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 1
createdAt: "2026-01-24T05:01:48Z"
lastCommitAt: "2026-10-29T05:50:44Z"
lastReleaseAt: "2026-10-27T09:57:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 53
maintainers: ["voonhous", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3500a9a88432cad49fe0bfeb66757a00ab25a6125c0eb1771191edeeea8a739/voonhous/crforge"
---

# crforge

A deterministic Clash Royale battle simulator in Java. Its battle core plays a battle in 50 ms steps on the game's own tables of one data version, and is held tick by tick to battles recorded in the game. A LibGDX debug visualizer plays battles by hand and replays recorded ones. A reinforcement learning environment steps a vector of battles behind flat buffers a Python trainer reads without a copy ([docs/environment.md](https://github.com/voonhous/crforge/blob/HEAD/docs/environment.md)).

- **Tick-exact**: held tick for tick, with no tolerance, to battles recorded in the game on every data version it supports. CI replays all of them on each change and fails if any outcome moves; the outcome of each is listed in `conformance/reference-expectations/<version>.json` ([conformance](https://github.com/voonhous/crforge/blob/HEAD/conformance/README.md)). The battles of the current reference client, 16.635.1, are not recorded yet ([compatibility](https://github.com/voonhous/crforge/blob/HEAD/docs/compatibility.md))
- **Fast**: about 104,000 steps a second on one thread on real Ladder replays, about 5,000 times the game's own 20 steps a second, headless…
