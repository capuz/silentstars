---
repo: "KarpelesLab/teamclaude"
name: "teamclaude"
description: "Multi-account Claude proxy with automatic quota-based rotation"
readmeQualityOk: true
url: "https://github.com/KarpelesLab/teamclaude"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["anthropic", "claude", "claude-code", "load-balancer", "multi-account", "nodejs", "oauth", "proxy"]
stars: 163
forks: 51
openIssues: 7
closedIssues: 15
watchers: 0
contributors: 13
recentReleases: 9
createdAt: "2026-03-24T14:49:08Z"
lastCommitAt: "2026-07-22T06:09:44Z"
lastReleaseAt: "2026-07-12T20:04:07Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 88
undervaluedScore: 33
maintainers: ["MagicalTux", "imnuke", "wolph"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d98077cceeb03920da3c302193960c0ca868ca05666be3cb61d7d613044a3de/KarpelesLab/teamclaude"
fundingLinks: ["GITHUB:https://github.com/MagicalTux"]
---

# TeamClaude

Multi-account Claude proxy with automatic quota-based rotation for [Claude Code](https://claude.ai/claude-code).

Sits transparently between Claude Code and the Anthropic API, managing multiple Claude Max (or API key) accounts and automatically switching when one approaches its session or weekly quota limit.

## Features

- **Automatic account rotation** — switches to the next account when session (5h) or weekly (7d) quota reaches the configured threshold (default 98%)
- **Model-aware routing** — the per-model weekly cap (e.g. Fable) is tracked separately, so an account whose Fable quota is spent is skipped **only** for Fable requests and still serves Opus/Sonnet. Requests are routed by their `model` (read exactly from the request body, in both base-URL and MITM modes). Optional **[model routes](#model-routes)** pin model patterns to a specific set of accounts (config, `teamclaude route`, or the TUI settings screen → Manage routing). Advisor requests (Claude Code's `/advisor`) carry a **second** model nested in the tools array; routing sees it too, so the request lands on an account eligible for both the main model and the advisor (falling back to main-model-only…
