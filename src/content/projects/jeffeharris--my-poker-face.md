---
repo: "jeffeharris/my-poker-face"
name: "my-poker-face"
description: "A poker game with LLMs where you can define who you are playing against and have a conversation with them while you play."
url: "https://github.com/jeffeharris/my-poker-face"
language: "Python"
languages: ["Python"]
languagePcts: [78]
stars: 5
forks: 0
openIssues: 6
closedIssues: 4
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2023-07-13T02:34:40Z"
lastCommitAt: "2026-06-23T23:17:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 67
maintainers: ["jeffeharris", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1c57c6a285c27a6c39f14e7a3dd7142594971a7afa4aff2a919a3c857d02e51/jeffeharris/my-poker-face"
---

---
purpose: Project overview, quickstart, and entry-point doc links
type: guide
created: 2025-01-01
last_updated: 2026-05-22
---

# My Poker Face

A poker game with AI personalities — and an experimentation platform for testing LLM capabilities at scale.

## The Game

Play Texas Hold'em against AI characters like Gordon Ramsay, Batman, and Eeyore. Each has unique speech patterns, playing styles, and dynamic behaviors that evolve during gameplay.

**Play now**: [mypokerfacegame.com](https://mypokerfacegame.com) — new? read the [Quick Guide for New Players](docs/user/QUICK_GUIDE.md)

## The Experiment Manager

Run automated AI tournaments to compare models, test prompt variations, and analyze decision quality. Features include:

- **Multi-provider support**: OpenAI, Anthropic, Groq, DeepSeek, Mistral, Google, xAI
- **A/B testing**: Compare models head-to-head with deterministic seeding
- **Decision analysis**: Evaluate AI choices against optimal play (equity, EV)
- **Cost tracking**: Per-call usage logging with detailed breakdowns

## Quick Start

```bash
cp .env.example .env    # Add your API keys
make up                 # Start with Docker
```

Open…
