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
stars: 77
forks: 42
openIssues: 4
closedIssues: 68
watchers: 0
contributors: 18
recentReleases: 0
createdAt: "2026-01-18T16:00:36Z"
lastCommitAt: "2026-10-26T03:03:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 48
maintainers: ["wingedsheep", "klapi85", "bolav"]
openGraphImageUrl: "https://opengraph.githubassets.com/e40b7444c321d6aeede558b7d6350f2b9b8b832427e3b9439052c0b6de7422cd/wingedsheep/argentum-engine"
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
