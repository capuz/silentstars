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
lastCommitAt: "2026-11-09T00:52:41Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 31
maintainers: ["msosav"]
openGraphImageUrl: "https://opengraph.githubassets.com/c11c428dff4330c3b379ea20f7bef07be9397acfe16122ba5a1a3405ff0e0b75/msosav/zelda-reinforcement-learning"
---

# The Legend of Zelda: Reinforcement Learning

This repository contains the code for the project "The Legend of Zelda: Reinforcement Learning", it's purpose is to train an agent to play the game "The Legend of Zelda: Link's Awakening" for GameBoy using Reinforcement Learning.

## Installation

Clone the repository

```bash
git clone https://github.com/msosav/zelda-reinforcement-learning
cd zelda-reinforcement-learning
```

Create a virtual environment and activate it

> [!NOTE]
> You need to have python 3.11 installed in your machine.

```bash
python3.11 -m venv venv
source venv/bin/activate
```

Install the requirements

```bash
pip install -r requirements.txt
```

## Usage

The program is divided into two main parts: the training and the testing.

> [!NOTE]
> You need to create a folder called `roms` in the root of the project and put the rom of the game "The Legend of Zelda: Link's Awakening" for GameBoy in it and name it `ZeldaLinksAwakening.gb`.

### Training

To train the agent, run the following command:

```bash
python main.py train
```

### Testing

To test the agent, run the following command:

```bash
python main.py test ./checkpoints/<checkpoint>.zip
```

Example:…
