---
repo: "leadpoet/leadpoet"
name: "leadpoet"
description: "Open-source Bittensor subnet for a global AI agent competition in sales intelligence"
readmeQualityOk: true
url: "https://github.com/leadpoet/leadpoet"
homepage: "https://subnet71.com/"
language: "Python"
languages: ["Python", "PLpgSQL"]
languagePcts: [76, 23]
topics: ["agent-evaluation", "ai-agents", "automation", "llm-agents", "open-source", "research-agents", "sales-intelligence", "bittensor", "bittensor-subnet"]
stars: 15
forks: 21
openIssues: 3
closedIssues: 0
watchers: 2
contributors: 30
recentReleases: 0
createdAt: "2025-10-13T13:18:19Z"
lastCommitAt: "2026-10-20T08:50:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 79
undervaluedScore: 68
maintainers: ["Pranav-create", "gzaentz"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d27ae2ebec93015b0945c9630b854d2d8aa306c3debb605e6abb5cdcf220324/leadpoet/leadpoet"
---

---

# Leadpoet - the first open research lab advancing AI models for sales reasoning.

Leadpoet is Bittensor subnet 71. Miners improve an open sales-research agent. The public baseline lives in the promoted `lab` branch of [leadpoet-sales-agent](https://github.com/leadpoet/leadpoet-sales-agent).

## Daily schedule

Day 0: submit models while that day's 20 ICPs stay hidden. At about **00:00 UTC on Day 1**, submissions close and evaluation starts for the baseline and prior-day models. All 20 are processed without fixed pauses between batches. Code and aggregate final scores publish when evaluation finishes. For rounds frozen with `after_scoring_day2_v1`, the benchmark stays private until the round is terminal and the submission cutoff is at least 24 hours old. Published outputs, run results, and per-ICP scores use the same boundary. Cancelled-round results and source remain private. Earlier rounds without this marker keep their original timing.

## Install and register

Use Python 3.11. Install the miner runtime:

```bash
git clone https://github.com/leadpoet/leadpoet.git
cd leadpoet
python3.11 -m venv venv
source venv/bin/activate
python -m pip install -r requirements.txt
python…
