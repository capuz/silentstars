---
repo: "sammcj/ccu"
name: "ccu"
description: "A performant terminal dashboard for monitoring Claude Code usage"
readmeQualityOk: true
url: "https://github.com/sammcj/ccu"
language: "Go"
languages: ["Go"]
languagePcts: [95]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-01T03:30:05Z"
lastCommitAt: "2026-11-06T02:43:45Z"
lastReleaseAt: "2025-12-13T19:01:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 83
undervaluedScore: 50
maintainers: ["sammcj", "ross-w"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c28af6a98a96df74aed4bbe186033d539bc71556a73367fbab1da9c538fa668/sammcj/ccu"
fundingLinks: ["GITHUB:https://github.com/sammcj", "BUY_ME_A_COFFEE:https://buymeacoffee.com/sam.mcleod"]
---

# CCU - Claude Code Usage Monitor

A performant terminal dashboard for monitoring Claude Code usage, built in Go using the Charm family of packages (Bubbletea, Lipgloss, Bubbles).

## Features

- **Live Claude API Usage Data** - Near real-time usage stats from Anthropic's servers with exact reset times
- **5-Hour Session Tracking**: Monitor rolling 5-hour usage windows with OAuth utilisation percentage (Pro and Max5; Ultra has no session limit)
- **Weekly Limits**: Track 7-day rolling usage overall, plus a separate bar for each model Anthropic applies an individual weekly limit to
- **Real-time Dashboard**: Live updating terminal UI with colour-coded progress bars
- **Burn Rate Monitoring**: Dual burn rate display - tokens/minute and cost/hour with visual indicators
- **Intelligent Predictions**: Cost depletion time with colour-coded warnings (red if before reset, orange if close, green if safe)
- **Plan Support**: Pro, Max5, Ultra (formerly Max20)
- **Setup-Token Support**: `ccu statusline` captures plan usage from Claude Code's status line for `CLAUDE_CODE_OAUTH_TOKEN` users, who can't use the OAuth usage API
- **Automatic Fallback**: Uses OAuth when available, then status line…
