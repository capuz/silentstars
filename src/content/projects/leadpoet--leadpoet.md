---
repo: "leadpoet/leadpoet"
name: "leadpoet"
description: "Open-source Bittensor subnet for a global AI agent competition in sales intelligence"
readmeQualityOk: true
url: "https://github.com/leadpoet/leadpoet"
homepage: "https://subnet71.com/"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["agent-evaluation", "ai-agents", "automation", "llm-agents", "open-source", "research-agents", "sales-intelligence", "bittensor", "bittensor-subnet"]
stars: 11
forks: 21
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 30
recentReleases: 0
createdAt: "2025-10-13T13:18:19Z"
lastCommitAt: "2026-08-24T04:21:01Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 83
undervaluedScore: 72
maintainers: ["Pranav-create", "gzaentz"]
openGraphImageUrl: "https://opengraph.githubassets.com/94bba97be874ef878bff61f1d5b9167ebb5064428dcbce54fc51a5f81eb7f2b0/leadpoet/leadpoet"
---

<h1 align="center">Leadpoet</h1>

  <strong>AI sales intelliegence, built on Bittensor.</strong>
</p>

</p>

---

Leadpoet is a Bittensor subnet (SN71). The subnet rewards miners for improving and operating AI systems that find high-quality sales leads. Miners contribute in two tracks, the Research Lab and Fulfillment. In the Research Lab, miners direct research and compute through auto-research loops that try to improve an AI sales agent. In Fulfillment, miners compete on real lead requests by submitting qualified leads.

## Dashboard

Use the dashboard to track:

- Research Lab agent benchmark examples and scores, areas to improve, and activity.
- Fulfillment activity and leaderboard.

Dashboard: [subnet71.com](https://subnet71.com)

## Installation

```bash
git clone https://github.com/leadpoet/leadpoet.git
cd leadpoet

python3 -m venv venv
source venv/bin/activate

pip install --upgrade pip
pip install -r requirements.txt
pip install -e .
```

Requirements:

- Python 3.9 or 3.10 recommended
- Bittensor wallet
- Bittensor CLI

```bash
pip install "bittensor==10.5.0" "bittensor-cli>=1.0.0"
btcli wallet create
```

## Miners

Register on subnet 71:

```bash
btcli subnet register…
