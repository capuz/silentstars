---
repo: "RobinKa/warcraftsim"
name: "warcraftsim"
description: "Headless Warcraft III (Legacy TFT 1.29) under Wine for reinforcement learning: the real game stepped from Python, with PufferLib 5 training, behavior cloning and a training dashboard."
readmeQualityOk: true
url: "https://github.com/RobinKa/warcraftsim"
language: "Python"
languages: ["Python"]
languagePcts: [78]
topics: ["behavior-cloning", "game-ai", "gymnasium", "jass", "ppo", "pufferlib", "reinforcement-learning", "rts", "self-play", "warcraft-iii"]
stars: 26
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-23T20:11:13Z"
lastCommitAt: "2026-11-01T10:44:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 36
maintainers: ["RobinKa"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1384142204/6b4903a4-5b67-4428-bbfb-e9f9b3f83125"
---

# warcraftsim

> **Blog post:** [Beating Warcraft III's insane AI with self-play reinforcement learning on one desktop](https://warlock.ai/blog/warcraftsim-1/), the story of how the agent learned, with videos and diagrams.

Reinforcement learning on the **real Warcraft III** (Legacy TFT 1.29.2) under Wine on Linux, driven step by step from Python. Nothing is reimplemented: the game's own engine runs every unit, spell, building and AI script, headless and many times faster than real time.

The agent plays the **whole game** (economy, buildings, tech, armies, heroes) on the ladder map **Echo Isles** under the game's own rules. It wins **~97% of its games against the built-in AI at its hardest setting** (insane, no handicap), about twice the built-in AI's own record in the same matchups. It expands, creeps, techs, hires tavern heroes, picks up items and revives its heroes. Now it learns to play many strategies: given a target build order (from the AI's games or people's replays) it wins ~68% against insane, and the work is on following the target closely.

*A training game, played back in the real game client: the learner (night elf, red) breaks the insane orc AI's main base at 8½…
