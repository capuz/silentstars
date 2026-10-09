---
repo: "aradix85/straightjacket"
name: "straightjacket"
description: "AI-powered narrative solo RPG engine — forcing AI to narrate, not decide"
readmeQualityOk: true
url: "https://github.com/aradix85/straightjacket"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-06T16:57:07Z"
lastCommitAt: "2026-10-09T18:56:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 43
maintainers: ["aradix85"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e7148c31367e698747b15f6cc5cda5ee31d1c3f2559aab9b8d1aa37d35cb2d1/aradix85/straightjacket"
---

# Straightjacket

> *Forcing AI to narrate, not decide.*

AI-powered narrative solo RPG engine. You write the action. Dice determine outcomes. AI writes the world. NPCs remember you, threats and clocks advance on their own, stories have structure.

The AI is the narrator — constrained by mechanics, handed its facts by the engine, never in control of the rules. Config-driven, provider-independent, screen reader accessible.

---

## Quick Start

```bash
git clone https://github.com/aradix85/straightjacket.git
cd straightjacket
python run.py
```

Creates a venv, installs dependencies, downloads any game data file that is missing from `data/`, starts the server at **http://localhost:8081**. Set the API key of every provider a cluster uses as an environment variable: each provider under `ai.providers` in `config.yaml` names its variable in `api_key_env`, and a provider no cluster uses needs no key. On startup the server checks that every configured model is offered by its provider and stops with a clear message if one is not.

---

## How It Works

You type what your character does. An AI classifier reads it and picks the move and stat, choosing only from the moves the engine allows in…
