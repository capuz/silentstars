---
repo: "mrubens/jevcraft"
name: "jevcraft"
description: "Jev-powered Minecraft bot"
readmeQualityOk: true
url: "https://github.com/mrubens/jevcraft"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 8
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-09-18T17:29:24Z"
lastCommitAt: "2026-10-26T09:14:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 57
maintainers: ["mrubens"]
openGraphImageUrl: "https://opengraph.githubassets.com/39135a009459c80aa6e38dfcde6d127f98592b82d4c3dddcf5152bb489ecfbe1/mrubens/jevcraft"
---

# jevcraft

**A Minecraft bot that beat the game with a model that never writes a word.**

On 2026-10-24, from a fresh Survival world and an empty inventory, jevcraft killed the Ender Dragon after about 107 hours of play; a second fresh run did it on 2026-10-26 ([the wins](#the-wins)). Every judgement along the way, about 25,700 of them, was made by [Jev](https://typesafe.ai/), a small [System One](https://docs.typesafe.ai/concepts/system-one) model from TypeSafe: a classifier that is given a list of options and returns a probability for each, in about 0.2 seconds. Jev's part of the whole run cost about $4.30.

Jev never generates text, plans or code. **Code lists what the bot can really do right now, with what each option costs and gains. Jev picks one.** The bot is built on [mineflayer](https://github.com/PrismarineJS/mineflayer). When Jev chose badly, the cause was almost always a wrong price or a missing option on the menu, not bad judgement, and most of what this README teaches follows from that.

The next goal is time. A good human speedrun takes about eleven minutes.

[The loop](#the-loop) · [One decision](#one-decision) · [The wins](#the-wins) · [What we…
