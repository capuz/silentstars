---
repo: "Vanszs/AntiSlopUI"
name: "AntiSlopUI"
description: "Anti-AI Slop UI/UX steering skills — filter, palette, and research tool for Kiro, Claude Code, Cursor, Windsurf, Copilot, and more. Build intentional, branded, accessible interfaces."
readmeQualityOk: true
url: "https://github.com/Vanszs/AntiSlopUI"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["accessibility", "ai-skills", "anti-slop", "antigravity", "claude", "claude-code", "codex", "copilot", "cursor-ai", "design-systems"]
stars: 30
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-19T07:57:39Z"
lastCommitAt: "2026-11-14T10:49:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 55
undervaluedScore: 22
maintainers: ["Vanszs"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e1a35e443a79d2a02a222c27e47649074c3a2060e4a9e200ff719596759ad02/Vanszs/AntiSlopUI"
---

# AntiSlopUI

Three skills for AI coding agents that remove "AI slop" from generated UI and replace it
with intentional, branded, accessible work — plus a mechanical gate that fails the build
when a banned default slips through.

> If you could swap the logo with a competitor and nobody would notice — it's slop.

## What problem this solves

LLMs generate UI by averaging training data dominated by Tailwind docs, shadcn/ui examples,
abandoned repos with unchanged defaults, and 2020–2024 Dribbble SaaS shots. Output collapses
toward the visual mean: purple gradients, Inter everywhere, centered dual-CTA heroes, 3-card
grids, glass navbars, "Supercharge your workflow" copy.

That is structural. Every decision left unspecified gets the most probable token. The cure is
deliberate, content-specific variation — enforced, not suggested.

## Which skill loads when

Routing is the part most skill suites get wrong. These three descriptions are disjoint on
purpose; load order is stated inside the descriptions because a router never reads a README.

| Skill id | Load when | Do not load for |
|---|---|---|
| `anti-ai-slop-ui-ux` | **First**, before any UI code is written or reviewed. Owns the ban…
