---
repo: "Jason-XII/clash-royale-simulator"
name: "clash-royale-simulator"
description: "A clash royale simulator that supports multiplayer playing  and RL training in realtime"
readmeQualityOk: true
url: "https://github.com/Jason-XII/clash-royale-simulator"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 51
forks: 12
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-19T02:26:33Z"
lastCommitAt: "2026-08-21T04:10:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 35
maintainers: ["Jason-XII"]
openGraphImageUrl: "https://opengraph.githubassets.com/95f50968886f41d8fe55bfc2d498fbe266a68d8edddc963e1f50ea1c806a11c3/Jason-XII/clash-royale-simulator"
---

# Clash Royale Simulator 

项目完整介绍视频：https://www.bilibili.com/video/BV1n3uZ6WE5P/

This project simulates a Clash-Royale like environment and provides a reinforcement learning interface for agent training.

Why I created this repository: I like clash royale and want to train a RL agent to play the game. 
However, a simulator is needed to speed up training. I searched on GitHub and the only usable project I found
was samdickson22's [repository](https://github.com/samdickson22/clash-simulator). I noticed that the code is almost completely written by AI, which is hard to read and impossible for humans to make improvements on the code.

In the end, I realized that the only way to make all of this work is to re-implement the whole game from scratch, without any vibe-coding.

Now, I present this functioning simulator that implemented 47 cards including troops,
buildings and spells (complete list below) and can reach the simulation speed of 83 microseconds per tick.
This means that the simulator can play more than 1000 games (with itself) within an hour.

I also designed a RL training environment compatible with gymnasium and stable-baselines3, supporting out-of-the-box training.
I used a…
