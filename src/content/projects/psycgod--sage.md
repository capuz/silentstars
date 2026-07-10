---
repo: "PsYcGoD/sage"
name: "sage"
description: "SAGE — Save AI coding tokens by compressing terminal output, keeping raw logs local, and tracking real savings. 🧠S.A.G.E - Smart Agent Guidance Engine for AI coding assistants. by⚡ PsYc+GoD AI&ML 🤖"
readmeQualityOk: true
url: "https://github.com/PsYcGoD/sage"
language: "Python"
languages: ["Python"]
languagePcts: [78]
topics: ["ai-agents", "automation", "cli", "command-line", "developer-tools", "devops", "productivity", "python", "terminal", "token-savings"]
stars: 8
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-02T10:35:30Z"
lastCommitAt: "2026-07-10T07:00:32Z"
lastReleaseAt: "2026-07-08T02:14:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 90
undervaluedScore: 64
maintainers: ["PsYcGoD"]
openGraphImageUrl: "https://opengraph.githubassets.com/b645265055707fddb377ec73d1fc43c82aac4caaa73c3d90e9af95f219f90e7e/PsYcGoD/sage"
discussionCount: 1
---

# SAGE - Stop AI Coding Agents From Burning Tokens

A local-first CLI wrapper for Claude Code, Codex, Cursor, and other AI coding agents.

SAGE routes terminal commands through `sage run --`, compresses noisy output before it enters the agent context, keeps raw logs on your machine, and proves token savings with privacy-safe metrics.

## Live Proof

| Metric | Value |
|--------|------:|
| Commands processed | 10,574 |
| Tokens processed | 264.5M |
| Tokens saved | 256.1M |
| Compression rate | 96.8% |
| Estimated savings | $2,753.34 |
| Success rate | 94.6% |

Live dashboard: [sage.api.marketingstudios.in](https://sage.api.marketingstudios.in/)

### Proof at Full Context

SAGE is built for the moment when an AI agent is already near the edge of its context window. In a real Claude Desktop session, SAGE was still routing commands while the agent showed a full `200.0k / 200.0k (100%)` context window.

Provider-confirmed A/B tests show why this matters:

| Proof run | Raw input | SAGE input | Tokens saved | Reduction |
|---|---:|---:|---:|---:|
| Claude provider A/B | 64,833 | 91 | 64,742 | 99.86% |
| Codex provider A/B | 65,204 | 14,850 | 50,354 | 77.23% |

Even when context is…
