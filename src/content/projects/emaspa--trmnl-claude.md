---
repo: "emaspa/trmnl-claude"
name: "trmnl-claude"
description: "Advanced Claude Code usage dashboard for TRMNL e-ink displays"
readmeQualityOk: true
url: "https://github.com/emaspa/trmnl-claude"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [69, 31]
stars: 14
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-04T07:45:58Z"
lastCommitAt: "2026-09-17T08:50:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 79
undervaluedScore: 21
maintainers: ["emaspa"]
openGraphImageUrl: "https://opengraph.githubassets.com/508cca0eeeeeafb47619b412f904d0f9294ad0a4ad90216ae3a64074cce3a282/emaspa/trmnl-claude"
fundingLinks: ["GITHUB:https://github.com/emaspa", "BUY_ME_A_COFFEE:https://buymeacoffee.com/emaspa"]
---

# claude-trmnl

Advanced Claude Code usage dashboard for [TRMNL](https://usetrmnl.com) e-ink displays.

Reads local Claude Code session data and pulls live usage limits from the API's rate-limit headers. Several machines can share one display and have their numbers added up. Cross-platform (Windows, macOS, Linux). Stdlib only. The fallback usage scraper needs `pywinpty` (Windows) or `pexpect` (Unix).

## What it shows

| Metric | Description |
|--------|-------------|
| **Subscription** | Plan type (Pro/Max) and rate limit tier (5x/20x) |
| **Usage limits** | Session %, weekly % and any per-model cap, with progress bars and reset time |
| **Active sessions** | Currently running Claude Code instances |
| **Today's tokens** | Input, output, cache read, cache write breakdown |
| **API-equivalent cost** | What today's usage would cost at API prices |
| **Session & message counts** | How many sessions and messages today |
| **Model breakdown** | Per-model usage with percentage bars (7-day) |
| **Weekly totals** | Tokens, cost, sessions for the current week |
| **7-day sparkline** | Visual activity trend |
| **Usage streak** | Consecutive days of Claude Code usage |
| **Top project** |…
