---
repo: "Julian-dev28/pathiel"
name: "pathiel"
description: "Autonomous multi-market trading agent for Hyperliquid"
readmeQualityOk: true
url: "https://github.com/Julian-dev28/pathiel"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 34
forks: 10
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-05-12T04:57:37Z"
lastCommitAt: "2026-10-25T02:46:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 31
maintainers: ["Julian-dev28"]
openGraphImageUrl: "https://opengraph.githubassets.com/88708911684a3602efde86ab0b5642eeacd869ba1335d64fc7f4be6e73105e7c/Julian-dev28/pathiel"
---

# Pathiel

> A headless trading desk on live Hyperliquid. Claude places every trade
> through an MCP server (`scripts/pathiel-mcp-server.py`, 59 tools over
> stdio); there is no autonomous bot and no standing process that trades on
> its own. Pure Python, FastAPI dashboard, real money.

## Read this first

- **Headless since 2026-10-23.** The autonomous scan/research/execute
  engine, the seven strategy books it ran, and the DSL exit loop are all
  deleted. Claude is the only trader on the wallet, calling `place_bracket`
  and `bracket_sweep` through the MCP server. See **What was removed**
  below.
- **One position per account.** The operator's live risk profile
  (`.agent-config.json`) sets `max_open_positions: 1`. `place_bracket`
  refuses to stack a second position or a second resting order on the same
  coin (`pathiel/agents/bracket.py`).
- **The trading loop is a Claude Code skill, not a script.** `.claude/skills/desk-tick/SKILL.md`,
  run on a schedule (`/loop 15m /desk-tick oil`, 30 minutes for metals, ai
  and gas). Nothing trades between ticks; nothing trades if no Claude
  session is running the tick.
- **No kill switch, no status pill, no operator-token UI.** All three…
