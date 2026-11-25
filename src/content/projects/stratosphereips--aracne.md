---
repo: "stratosphereips/aracne"
name: "aracne"
description: "A 100% autonomous AI agent that attacks, defends, admins and acts on SSH connections"
readmeQualityOk: true
url: "https://github.com/stratosphereips/aracne"
homepage: "https://www.stratosphereips.org/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["agents", "security"]
stars: 20
forks: 7
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2025-10-17T11:19:48Z"
lastCommitAt: "2026-11-25T13:18:35Z"
lastReleaseAt: "2025-10-23T12:45:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 60
maintainers: ["eldraco", "MariaRigaki"]
openGraphImageUrl: "https://opengraph.githubassets.com/f52b6802249e68f6a1feba4c2694b0441df001e2f68cf7434f4a3efdb39795f1/stratosphereips/aracne"
---

# ARACNE: Autonomous LLM-based Pentesting Agent

ARACNE is an SSH-driven pentesting agent orchestrated by LLMs. It can plan, execute, and adapt attack chains while recording detailed telemetry across multiple logs. It supports both cloud-hosted and local (Ollama) models with per-role configuration.

## Table of Contents

- [Setup](#setup)
- [Configuration](#configuration)
- [Usage](#usage)
- [Goals](#goals)
- [Logs](#logs)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Setup

### Requirements

- Python 3.10+
- `pip`
- Optional: Docker, Ollama daemon

### Installation

```bash
git clone https://github.com/stratosphereips/aracne.git
cd aracne

python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

pip install -r requirements.txt
cp env_EXAMPLE .env
```

Populate `.env` with `CESNET_API_KEY` for the default CESNET models and `BOT1_SSH_PASSWORD` for the default SSH target. SSH target profiles are configured in `agent/config/AttackConfig.yaml`; `OPENAI_API_KEY` is needed when an enabled role uses OpenAI (for example, when summaries are enabled with the default summarizer).
