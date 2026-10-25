---
repo: "Remus3/Amberstone"
name: "Amberstone"
description: "Local real-time coaching for League of Legends and Teamfight Tactics. A deterministic engine does the item and damage math from the game's own numbers, and the AI coach only narrates what that math already decided. No win-rate scraping."
readmeQualityOk: true
url: "https://github.com/Remus3/Amberstone"
homepage: "https://remus3.github.io/Amberstone/atlas.html"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["agent-orchestration", "anthropic", "build-optimizer", "claude-code", "coaching", "damage-calculator", "game-companion", "league-of-legends", "llm-tooling", "multi-agent"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-09-07T19:47:07Z"
lastCommitAt: "2026-10-25T02:45:23Z"
lastReleaseAt: "2026-10-16T19:24:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 52
maintainers: ["Remus3"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1360610154/8d432042-ec7b-4b02-8f1c-a83992d92db0"
---

# Amberstone

A local, real-time coaching companion for League of Legends and Teamfight
Tactics. A deterministic engine does the item and damage math; the AI coach only
narrates what that math already decided.

It watches the match you are actually in through the Riot Live Client API and
turns it into short, situation-specific advice on a dashboard and an in-game
overlay.

It is a single-machine personal build: one Windows PC runs the game, the engine,
the coach and the overlay together, with no hosted version and no installer.

**[Explore the codebase as a map](https://remus3.github.io/Amberstone/atlas.html)**
draws the project's main components as one interactive page, with source files
orbiting the component they belong to. It runs in the browser and loads nothing
from the network.

## Contents

| | |
|---|---|
| [What makes it different](#what-makes-it-different) | why the math runs before the model, and what that buys |
| [What it does](#what-it-does) | the features, and the modes they run in |
| [Quickstart](#quickstart) | from a fresh clone to the dashboard on one Windows PC |
| [How it works](#how-it-works) | the pipeline in one diagram, plus the port map |
| [Daemon…
