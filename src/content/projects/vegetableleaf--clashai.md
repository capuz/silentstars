---
repo: "vegetableleaf/ClashAI"
name: "ClashAI"
description: "An AI DL model that learns how to play Clash Royale."
readmeQualityOk: true
url: "https://github.com/vegetableleaf/ClashAI"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 105
forks: 13
openIssues: 4
closedIssues: 0
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2026-07-25T17:47:05Z"
lastCommitAt: "2026-08-17T04:19:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 23
maintainers: ["vegetableleaf"]
openGraphImageUrl: "https://opengraph.githubassets.com/127081ff3f417319ac956b53f4e004913e2d01c0b4e63dc1f9f71430c8241ed3/vegetableleaf/ClashAI"
---

# ClashAI

Homemade bots that learn to play **Clash Royale** on PC (through Google Play
Games). This is a hobby / research project about getting an agent to *actually
play* a live real-time game.

There are two very different agents in this repo:

| Folder | Bot | Approach |
| ------ | --- | -------- |
| [`icebow/`](https://github.com/vegetableleaf/ClashAI/blob/HEAD/icebow/) | **Learning bot** — the main project | Watches *you* play and copies you (imitation learning), then improves by trial-and-error (reinforcement learning), rewarded for taking towers, defending its own, and winning. Follows a DDQN architecture. _**NOTE**: this folder is called "icebow" because I am having it run an icebow deck. You can rename it to anything depending on what deck you want to choose for the AI._|
| [`trol/`](https://github.com/vegetableleaf/ClashAI/blob/HEAD/trol/) | **Scripted bot** — the first experiment | Hand-written rules plus a DQN scaffold. Kept for reference, but you can ignore it. |

> ⚠️ **Please use this responsibly.** Automating Clash Royale violates Supercell's
> Terms of Service. This project only exists as a learning exercise. If you run
> it, use a throwaway account. I am not…
