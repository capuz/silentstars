---
repo: "ClickHouse/nerve"
name: "nerve"
description: "Self-hosted AI agent runtime — personal assistants, autonomous workers, and everything in between. Built on the Claude Agent SDK."
readmeQualityOk: true
url: "https://github.com/ClickHouse/nerve"
homepage: "https://github.com/ClickHouse/nerve"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [79, 21]
topics: ["ai-agents", "autonomous-agents", "claude", "self-hosted"]
stars: 105
forks: 36
openIssues: 15
closedIssues: 9
watchers: 3
contributors: 77
recentReleases: 0
createdAt: "2026-03-11T20:39:49Z"
lastCommitAt: "2026-11-07T16:11:58Z"
status: "thriving"
tags: []
healthScore: 84
undervaluedScore: 35
maintainers: ["alex-clickhouse", "pufit", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b065eed279fe475e0c2d137dc8648713a250d1f3e015de90df2c42b995d8184/ClickHouse/nerve"
---

Self-hosted AI agent runtime — personal assistants, autonomous workers, and everything in between.

---

Nerve is a self-hosted runtime for AI agents, built around the [Claude Agent SDK](https://github.com/anthropics/claude-agent-sdk). It gives agents everything they need to be useful long-term: persistent memory, scheduled execution, task management, learnable skills, and channels to reach you through — web UI, Telegram, Slack, or autonomous cron jobs.

Ship a **personal assistant** that develops a personality, remembers your preferences, and manages your inbox. Or deploy a **worker agent** that monitors your CI, reviews PRs, and fixes flaky tests — all plan-driven with human approval. Same engine, different mission.

## Quick Start

```bash
curl -fsSL https://raw.githubusercontent.com/ClickHouse/nerve/main/install.sh | bash
```

The installer puts the dependencies in place (Python, Node.js, uv), clones the repo and runs `nerve init`. That asks three questions in the terminal — server or Docker, where the files live, which port and address — then starts Nerve and prints the address of the setup page with a one-time setup token. Everything else (your account, personal assistant or…
