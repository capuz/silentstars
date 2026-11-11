---
repo: "bymayanksingh/connect4"
name: "connect4"
description: "🎮 It is a two-player connection game in which the players first choose a color and then take turns dropping one colored disc from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column, user wins by forming row of four of same color"
readmeQualityOk: true
url: "https://github.com/bymayanksingh/connect4"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["python", "pygame", "numpy", "connect-four", "board-game"]
stars: 22
forks: 27
openIssues: 0
closedIssues: 17
watchers: 4
contributors: 16
recentReleases: 0
createdAt: "2019-01-26T14:10:22Z"
lastCommitAt: "2026-11-11T19:43:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 56
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/167696016/6b6b3780-17f0-11ea-9cb2-bf487c08b401"
---

# Connect Four

**Production-Grade Connect 4 Engine, Multi-Algorithm AI Suite & Headless Visualizer**

---

## 📖 Overview

**Connect 4** is a modernized, production-ready implementation of the classic vertical connection game, engineered for high performance, modularity, and algorithmic depth.

Originally conceived as a Pygame application by [Mayank Singh](https://github.com/bymayanksingh), this repository integrates community PRs, academic research from Columbia University on Markov Decision Processes (MDPs), and production software engineering practices:

- **Decoupled Architecture**: Domain rules, board state, AI engines, terminal CLI, and Pygame presentation are separated into dedicated modules under `connect4/`.
- **Multi-Modal AI Suite**:
  - **Random Agent**: Uniform random sampling over legal open columns.
  - **Heuristic Agent**: Fast tactical 1-ply immediate win execution, threat blocking, and center preference.
  - **Minimax Agent**: Deep tree search with **$\alpha\text{-}\beta$ pruning**, center-first move ordering, and an **Odd-Even strategy heuristic**.
  - **Dynamic Programming (MDP) Agent**: Finite-horizon value iteration and exact **linear system solving** ($(I -…
