---
repo: "a00012025/ai-poker-wizard"
name: "ai-poker-wizard"
description: "AI-powered poker tournament analysis tool combining GTO Wizard data with LLM coaching"
originalDescription: "AI-powered poker tournament analysis tool combining GTO Wizard data with LLM coaching"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/a00012025/ai-poker-wizard"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-02-13T15:45:00Z"
lastCommitAt: "2026-07-13T06:38:50Z"
lastReleaseAt: "2026-07-12T16:27:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 48
maintainers: ["a00012025"]
openGraphImageUrl: "https://opengraph.githubassets.com/85cf1ec429d2bfc9f0ee18f2f294d6863b6a4b7b00947160665ae925b0f64568/a00012025/ai-poker-wizard"
---

# AI Poker Wizard

GTO Poker Coach — Combines GTO Wizard solver data with Gemini LLM to provide real-time hand analysis, strategy teaching, and batch deviation comparison.

**Direct Use:** [t.me/ai_poker_wizard_bot](https://t.me/ai_poker_wizard_bot)

## Features

### Hand Analysis
- Describe hands in natural language, automatically parse and query GTO solver strategies
- Supports Chip EV and ICM (MTT tournament) modes
- Multi-street analysis (preflop → flop → turn → river)
- Displays action frequencies, EV, and combo-level suit differences

### Screenshot Recognition
- Upload poker replay screenshots, automatically recognize hand information and analyze GTO strategies

### Hand History Batch Analysis
- Upload GGPoker hand history (.txt or .zip), batch compare GTO deviations
- Automatically detect ICM stages (bubble, final table, etc.)
- Classify deviation reports by severity
- Supports follow-up: reply with hand ID to view detailed analysis of that hand

### AI Coach
- Gemini Pro provides personalized coaching feedback
- Multi-round dialogue — can ask follow-up questions about range details, compare different play styles
- LLM can instantly query solver for follow-up questions…
