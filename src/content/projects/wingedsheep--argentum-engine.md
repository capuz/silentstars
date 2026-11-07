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
stars: 85
forks: 46
openIssues: 3
closedIssues: 71
watchers: 0
contributors: 19
recentReleases: 0
createdAt: "2026-01-18T16:00:36Z"
lastCommitAt: "2026-11-07T16:12:30Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 48
maintainers: ["wingedsheep", "github-actions[bot]", "takdiras"]
openGraphImageUrl: "https://opengraph.githubassets.com/7159f33f900d830a9674a396b19437c5d29424c8aa84cf5af8f12585262a9124/wingedsheep/argentum-engine"
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
