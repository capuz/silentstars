---
repo: "Dooders/AgentFarm"
name: "AgentFarm"
description: "AgentFarm is an open-source research platform for simulations of complex systems"
url: "https://github.com/Dooders/AgentFarm"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["computational-modeling", "multi-agent-systems", "neural-networks", "neuroevolution", "simulation"]
stars: 7
forks: 8
openIssues: 52
closedIssues: 197
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2024-07-13T21:04:37Z"
lastCommitAt: "2026-06-25T01:39:00Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 88
maintainers: ["csmangum", "Copilot", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a7dc97cff0434702efe0b70b876f334cf6ce716e17e27f93ea6cd41658cec8e/Dooders/AgentFarm"
discussionCount: 1
---

# AgentFarm

![Project Status](https://img.shields.io/badge/status-in%20development-orange)

Simulation and analysis platform for agent-based modeling, reinforcement learning experiments, and complex adaptive systems research in the [Dooders](https://github.com/Dooders) project.

> **Note:** Active development — APIs may change between releases. See [CHANGELOG](CHANGELOG.md).

## Features

- Multi-agent simulations with configurable genomes, actions, and spatial indexing
- Experiment runner, SQLite-backed metrics, and analysis pipeline
- RL/decision stack (DQN, distillation, evolution experiments)
- REST/WebSocket API and structured logging with `structlog`

## Quick start

```bash
git clone https://github.com/Dooders/AgentFarm.git && cd AgentFarm
python -m venv venv && source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt && pip install -e .
python run_simulation.py --environment development --steps 1000
```

Results appear under `simulations/`. See [Installation](docs/getting-started/installation.md) and [First simulation](docs/getting-started/first-simulation.md) for more.

## Documentation

- **Docs site:**…
