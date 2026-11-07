---
repo: "aradix85/straightjacket"
name: "straightjacket"
description: "AI-powered narrative solo RPG engine — forcing AI to narrate, not decide"
readmeQualityOk: true
url: "https://github.com/aradix85/straightjacket"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 13
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-06T16:57:07Z"
lastCommitAt: "2026-11-07T16:12:42Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 46
maintainers: ["aradix85", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/11028e3ee6f480dc2782777cf110936a8fd50ba853e2e62725d5797cc2291bd4/aradix85/straightjacket"
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

`run.py` creates a virtual environment in `venv` and installs the dependencies, unless it already runs in one. It downloads any of the Datasworn, Mythic, and Adventure Crafter files that is missing from `data/` and starts the server at **http://localhost:8081**.

Set the API key of every provider a cluster uses as an environment variable: each provider under `ai.providers` in `config.yaml` names its variable in `api_key_env`, and a provider no cluster uses needs no key. On startup the server checks that every configured model is offered by its provider and stops with a clear message if one is not.

---

## How It Works

You type what your…
