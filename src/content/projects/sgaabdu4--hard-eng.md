---
repo: "sgaabdu4/hard-eng"
name: "hard-eng"
description: "Stateful agentic engineering workflow for local coding agents"
readmeQualityOk: true
url: "https://github.com/sgaabdu4/hard-eng"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [77, 23]
topics: ["agentic-workflow", "ai-agents", "codex", "engineering-workflow", "guardrails", "hard-eng"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 10
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-06-26T07:02:55Z"
lastCommitAt: "2026-09-19T08:14:04Z"
lastReleaseAt: "2026-09-06T10:09:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 64
maintainers: ["sgaabdu4"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1281036141/55c148fd-d759-473e-8700-6d333c889f51"
---

# Hard Eng

**An alpha workflow for one developer building with coding agents.**

Hard Eng adds planning skills, project checks, and delivery verification to your repository. It preserves project instructions and carries work through **Setup → Plan → Build → Ship**, with **Learn** when a lasting fix or decision is needed.

> **Alpha:** supported hooks and application acceptance still have limits. [Verified behavior and open gaps](https://github.com/sgaabdu4/hard-eng/blob/HEAD/DECISION.md#current-status).

[Setup](#1-setup-and-session-start) · [Plan](#2-plan) · [Build](#3-build) · [Ship](#4-ship) · [Learn](#5-learn) · [Checks](#the-gate-contract) · [Enforcement](#what-is-actually-enforced)

## 1. Setup and session start

Run this from the target repository's Git root:

```sh
curl -fsSL https://raw.githubusercontent.com/sgaabdu4/hard-eng/main/setup.sh | sh
```

| Starting point | What happens |
| --- | --- |
| Empty repository | Setup stops. The agent asks which project type to create (Python, Flutter, Next.js or OpenNext on Cloudflare) unless the request says, creates it, then reruns setup. New Flutter apps use Riverpod. |
| New project | Install the scaffold; establish…
