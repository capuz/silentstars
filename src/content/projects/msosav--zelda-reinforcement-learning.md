---
repo: "msosav/zelda-reinforcement-learning"
name: "zelda-reinforcement-learning"
description: "This project applies Reinforcement Learning to the classic game The Legend of Zelda: Link's Awakening (Game Boy version) to create an AI capable of autonomously navigating and solving the challenges within the game."
readmeQualityOk: true
url: "https://github.com/msosav/zelda-reinforcement-learning"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["gameboy", "reinforcement-learning", "the-legend-of-zelda"]
stars: 15
forks: 0
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-06-22T14:56:49Z"
lastCommitAt: "2026-11-16T04:26:47Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 37
maintainers: ["msosav"]
openGraphImageUrl: "https://opengraph.githubassets.com/91a6a87adf40c56f2cb3d9cd1b34b3a8fbed6b897910bbd1f05a0b03e9b403a8/msosav/zelda-reinforcement-learning"
---

# The Legend of Zelda: Reinforcement Learning

This repository contains the code for the project "The Legend of Zelda: Reinforcement Learning", it's purpose is to train an agent to play the game "The Legend of Zelda: Link's Awakening" for GameBoy using Reinforcement Learning.

## Installation

Clone the repository

```bash
git clone https://github.com/msosav/zelda-reinforcement-learning
cd zelda-reinforcement-learning
```

Create a virtual environment

> [!NOTE]
> You need to have [uv](https://docs.astral.sh/uv/) installed in your machine. It will fetch Python 3.11 if needed.

```bash
uv venv --python 3.11
```

Install the requirements

```bash
uv pip install -r requirements.txt
```

## Usage

The program is divided into two main parts: the training and the testing.

> [!NOTE]
> You need to create a folder called `roms` in the root of the project and put the rom of the game "The Legend of Zelda: Link's Awakening" for GameBoy in it and name it `ZeldaLinksAwakening.gb`.

Startup waits for each menu to be ready, creates a new game in the first empty save slot with the name `A`, and stops at Marin's first dialogue after Link wakes up. The agent advances the dialogue and gets Link out…
