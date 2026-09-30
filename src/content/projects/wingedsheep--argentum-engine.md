---
repo: "wingedsheep/argentum-engine"
name: "argentum-engine"
description: "Magic: The Gathering rules engine + online play platform, in Kotlin"
readmeQualityOk: true
url: "https://github.com/wingedsheep/argentum-engine"
homepage: "https://magic.wingedsheep.com"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [94]
topics: ["ecs", "kotlin", "magic-the-gathering", "mtg", "rules-engine"]
stars: 69
forks: 33
openIssues: 3
closedIssues: 43
watchers: 1
contributors: 15
recentReleases: 0
createdAt: "2026-01-18T16:00:36Z"
lastCommitAt: "2026-09-30T09:56:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 47
maintainers: ["wingedsheep"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d083211ebfaf8b6aa3d178abbfc263e097077cb42daf5e3b3725ccd284c09cf/wingedsheep/argentum-engine"
---

# Argentum Engine

*Before the oil. Before the corruption. There was only perfection.*

An unofficial Magic: The Gathering rules engine and online play platform. Not affiliated with, endorsed, sponsored, or specifically approved by Wizards of the Coast LLC.

**[Play now at magic.wingedsheep.com](https://magic.wingedsheep.com)** · **[Join our Discord](https://discord.gg/dy6eSRPWzu)**

---

## Overview

Argentum Engine is a modular MTG implementation composed of:

- **Rules Engine** — A deterministic Kotlin library implementing MTG comprehensive rules
- **Game Server** — Spring Boot backend for online multiplayer
- **Web Client** — Browser-based UI
- **Gym** — An RL/MCTS environment wrapper around the rules engine, with an HTTP transport for Python training loops
- **Argentum Assay** — A bidirectional Oracle-text parser that measures, card by card, how much of Magic the card SDK can express

## Implementation Progress

**[Live set completion tracker → magic.wingedsheep.com/set-completion](https://magic.wingedsheep.com/set-completion)** —
per-set coverage, and every card in a set marked implemented, missing, or not planned. Missing cards
that [Argentum…
