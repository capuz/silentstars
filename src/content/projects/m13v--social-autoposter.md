---
repo: "m13v/social-autoposter"
name: "social-autoposter"
description: "Automated social posting pipeline for Reddit, X/Twitter, and LinkedIn"
url: "https://github.com/m13v/social-autoposter"
homepage: "https://s4l.ai"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [59, 22]
stars: 50
forks: 7
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-02-15T00:18:40Z"
lastCommitAt: "2026-06-28T02:00:53Z"
lastReleaseAt: "2026-06-17T22:10:59Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 70
undervaluedScore: 41
maintainers: ["m13v"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8393b1b3d7f9d4c5e3b99d0f8f301c646a859bf7f3c00de086bdaf57b9ca0b3/m13v/social-autoposter"
---

# social-autoposter

Open-source repo behind **[S4L (s4lai)](https://s4l.ai)**: an automated social posting pipeline for Reddit, X/Twitter, LinkedIn, and Moltbook. Ships as a Claude Code skill plus a set of standalone Python helpers and macOS launchd jobs.

> The hosted managed version is **S4L** (written `s4lai`, domain `s4l.ai`): done-for-you Reddit and Twitter brand-awareness, $1/1K impressions, $50/1K site visits. See https://s4l.ai.

State (posts, replies, candidates, stats) is read and written through the hosted S4L HTTP API (`AUTOPOSTER_API_BASE` + an install key in `~/social-autoposter/.env`); no database to provision. Each platform drives its own persistent Playwright MCP browser profile, so logins survive across runs.

## Prerequisites

A new machine needs all of these before the pipeline can run end to end:

- **macOS** (the launchd plists are mac-only; Linux users can crib the cron snippets from `setup/SKILL.md` Step 7)
- **Node.js 16+** (for `npx`, the installer, and `@playwright/mcp` at runtime)
- **Python 3.9+** with `pip3` (helper scripts; deps auto-installed by the installer)
- **Claude Code CLI** on `PATH` (the cron scripts shell out to `claude -p` with a…
