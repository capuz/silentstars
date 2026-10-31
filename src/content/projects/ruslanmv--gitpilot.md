---
repo: "ruslanmv/gitpilot"
name: "gitpilot"
description: "GitPilot is a production-ready agentic AI assistant for your GitHub repositories with a comprehensive admin console, multi-LLM provider support, and visual workflow insights."
readmeQualityOk: true
url: "https://github.com/ruslanmv/gitpilot"
homepage: "http://ruslanmv.com/gitpilot/"
language: "Python"
languages: ["Python"]
languagePcts: [68]
topics: ["ai-code-assistant", "ai-coding-agent", "ai-devops", "ai-programming", "autonomous-coding", "code-automation", "dev-productivity", "developer-tools", "ruslanmv", "gitpilot"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2025-11-15T01:33:25Z"
lastCommitAt: "2026-10-31T07:45:41Z"
lastReleaseAt: "2026-08-29T20:00:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 71
maintainers: ["ruslanmv", "github-actions[bot]", "trustabl-kathrina"]
openGraphImageUrl: "https://opengraph.githubassets.com/49cb413689e27b0b4408921a78dbd1b271b5a4b9b9d64e568cf12d40865fe30b/ruslanmv/gitpilot"
---

# GitPilot

### The first open-source multi-agent AI coding assistant.

Ten specialized agents — Explorer, Planner, Coder, Reviewer and six more — collaborate on every task, coordinated by a router that picks the right ones for the request. By default, GitPilot requests confirmation before executing high-impact actions. Switch to Auto or Plan mode at any time.

[**Get Started**](#get-started) &nbsp;·&nbsp; [VS Code](#vs-code-extension) &nbsp;·&nbsp; [Web App](#web-app) &nbsp;·&nbsp; [How It Works](#how-it-works) &nbsp;·&nbsp; [Providers](#supported-ai-providers)

---

## Why GitPilot?

Most AI coding tools are a **single model behind a chat box**. GitPilot is fundamentally different: a **request router** inspects each task and dispatches it to the specialists that fit — just like a real engineering team.

> **Matrix‑native:** GitPilot is the worker for [Matrix Builder](https://github.com/agent-matrix/matrix-builder) — it runs a signed Matrix Bundle under contract via `POST /api/v1/gitpilot/runs` (A2A‑secured), returns a controlled diff, and never approves or commits its own work.

### The agent roster

Ten specialists. Which ones run depends on the request and the…
