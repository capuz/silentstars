---
repo: "DaizeDong/buy-me-a-car"
name: "buy-me-a-car"
description: "Claude Code plugin: end-to-end used car buying — multi-site research, mass dealer outreach, OTD negotiation with 50-state fee data, CARFAX analysis, decision tracking"
readmeQualityOk: true
url: "https://github.com/DaizeDong/buy-me-a-car"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["ai-agent", "automotive", "car-buying", "carfax", "claude-code", "claude-plugin", "claude-skill", "used-car", "agent", "ai"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-12T01:22:00Z"
lastCommitAt: "2026-09-23T08:47:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 44
maintainers: ["DaizeDong", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/63f7b55256f19354503a4d60b2645ac4f85ab1aac3f5b006684ccf63f8523569/DaizeDong/buy-me-a-car"
---

# buy-me-a-car

A set of 16 skills for researching a US car purchase, comparing written offers,
preparing dealer replies and reviewing a decision dossier. A broad buying request
includes a market comparison and buyer research HTML/PDF by default. The agent
reuses known criteria and prepares the report input; buyers do not need to ask
again for a longer report, request a PDF separately or fill a JSON template.
The repository ships
an uninitialized tool with generated synthetic examples. Real purchase records
belong in a separate, verified private companion repository.

[中文说明](https://github.com/DaizeDong/buy-me-a-car/blob/HEAD/README_CN.md) · [Main skill](https://github.com/DaizeDong/buy-me-a-car/blob/HEAD/skills/orchestrator/SKILL.md) ·
[Roadmap](https://github.com/DaizeDong/buy-me-a-car/blob/HEAD/ROADMAP.md)

## What works locally

- OTD calculations use decimal arithmetic, dated state-rule evidence and explicit
  applicability checks. Unknown or unsupported profiles refuse calculation.
- Dealer replies are rendered from approved asks, supported anchors and an
  authorized offer. The private maximum is kept separate.
- Inbox imports retain stable account/message IDs, cursors and…
