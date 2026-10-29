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
stars: 79
forks: 44
openIssues: 2
closedIssues: 70
watchers: 0
contributors: 18
recentReleases: 0
createdAt: "2026-01-18T16:00:36Z"
lastCommitAt: "2026-10-29T14:06:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 49
maintainers: ["wingedsheep", "klapi85", "vlad2135"]
openGraphImageUrl: "https://opengraph.githubassets.com/99d7d1c281603072422666fdd554549f39ab5091fac524e7993f966a6590c5c7/wingedsheep/argentum-engine"
---

# Argentum Engine

*Before the oil. Before the corruption. There was only perfection.*

An unofficial Magic: The Gathering rules engine and online play platform. Not affiliated with, endorsed, sponsored, or specifically approved by Wizards of the Coast LLC.

**[Play now at magic.wingedsheep.com](https://magic.wingedsheep.com)** · **[Join our Discord](https://discord.gg/dy6eSRPWzu)**

**Want to help?** Missing a card from your deck? Run `just contribute` and let Claude Code or Codex build it — see [Contributing](#contributing).

---

## Overview

Argentum Engine is a modular MTG implementation composed of:

- **Rules Engine** — A deterministic Kotlin library implementing MTG comprehensive rules
- **Game Server** — Spring Boot backend for online multiplayer
- **Web Client** — Browser-based UI
- **Gym** — An RL/MCTS environment wrapper around the rules engine, with an HTTP transport for Python training loops
- **Argentum Assay** — A bidirectional Oracle-text parser that measures, card by card, how much of Magic the card SDK can express

## Implementation Progress

**[Live set completion tracker → magic.wingedsheep.com/set-completion](https://magic.wingedsheep.com/set-completion)** —…
