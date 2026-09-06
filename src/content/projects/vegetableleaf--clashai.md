---
repo: "vegetableleaf/ClashAI"
name: "ClashAI"
description: "An AI DL model that learns how to play Clash Royale."
readmeQualityOk: true
url: "https://github.com/vegetableleaf/ClashAI"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [76, 24]
stars: 123
forks: 18
openIssues: 4
closedIssues: 0
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2026-07-25T17:47:05Z"
lastCommitAt: "2026-09-06T08:04:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 22
maintainers: ["vegetableleaf"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd1d6978447c2041320e3c3926e09bdac225e9348ea608e80d0f226caf12b19d/vegetableleaf/ClashAI"
---

# ClashAI

> Homemade bots that learn to play **Clash Royale** on PC (through Google Play Games) — a hobby /
> research project about getting an agent to *actually play* a live real-time game.

The bot never sees the game's internal state. It gets what a person gets: **a picture of the arena
and its hand of cards.** From that it decides *which card to play and where to drop it* — or to wait.

> [!WARNING]
> **Please use this responsibly.** Automating Clash Royale violates Supercell's Terms of Service.
> This project exists as a learning exercise. If you run it, use a throwaway account. I am not
> responsible for any lost accounts.

> [!TIP]
> **New here?** Read **[icebow/Instructions.txt](https://github.com/vegetableleaf/ClashAI/blob/HEAD/icebow/Instructions.txt)** first — a complete,
> plain-English, from-scratch walkthrough of the original pipeline (prerequisites, install, screen
> calibration, recording, training, playing). No coding experience needed.

> [!NOTE]
> **The training pipeline is being rebuilt (September 2026).** The first version — a hand-written
> simulator, a pixel CNN, reinforcement learning from win/loss — was measured over ~60 experiment
> loops and did not…
