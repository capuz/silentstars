---
repo: "iftahs/claude-dashboard"
name: "claude-dashboard"
description: "Beautiful local dashboard for Claude Code usage — 5h blocks, weekly trends, model & tool breakdown, activity heatmap. Reads ~/.claude logs, no API key."
url: "https://github.com/iftahs/claude-dashboard"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 10
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-29T14:42:56Z"
lastCommitAt: "2026-06-26T21:31:19Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 53
maintainers: ["iftahs", "github-actions[bot]", "iftah-saar"]
openGraphImageUrl: "https://opengraph.githubassets.com/931b0896550588dedcd06113672c0a42b22b8d91ba347684f826474979f7410b/iftahs/claude-dashboard"
---

# Claude Dashboard

A beautiful, **local-first** dashboard for your [Claude Code](https://claude.com/claude-code) usage. It reads the JSON logs Claude Code already writes to `~/.claude` and visualizes them — no API key, no account login. Your usage logs never leave your machine.

Two features are optional and opt-in network paths, both privacy-hardened: **anonymous product analytics** (PostHog — feature-usage events only, switchable off) and **AI Insights** (sends *aggregates only* — never transcripts or file paths — to a model you choose). See [Privacy & telemetry](#privacy--telemetry).

## Interactive Features & Tour

The dashboard is organized as a left **sidebar** with ten destinations. Views are deep-linkable (e.g. `/agents`, `/workflows`, `/ai`), live badges on the sidebar show running agents, the current 5-hour block %, and in-flight workflows, and **toast notifications** surface update-available, connection, and account-mode notices.

### 1. ⚡ Live Usage
* **Burn Rate Indicator**: Shows your current tokens/hour pace and time-to-limit countdown projection.
* **Plan Usage**: Tracks both your **5-hour active session limit** and your **weekly limit** utilisation percentage,…
