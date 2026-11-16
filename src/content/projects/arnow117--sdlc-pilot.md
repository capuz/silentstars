---
repo: "arnow117/sdlc-pilot"
name: "sdlc-pilot"
description: "A self-consistent, portable, always-current SDLC skill family: a driver, 6 process skills, role cards, and a validate mode, distilled from superpowers/gstack/GSD/agency-agents"
originalDescription: "自洽/可移植/时用时新的 SDLC 技能族:driver + 6 流程 skill + 角色卡 + validate 模式,蒸馏自 superpowers/gstack/GSD/agency-agents"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/arnow117/sdlc-pilot"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-06-04T15:18:16Z"
lastCommitAt: "2026-11-16T11:33:23Z"
lastReleaseAt: "2026-10-21T08:40:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 58
maintainers: ["arnow117"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6daaea2dd10d3bc6f6eb4e87b4761c216a14e32b8004917b2aebfc3175fb44d/arnow117/sdlc-pilot"
---

# sdlc-pilot

> A lightweight, portable, plain-file SDLC skill family: advance work with stage skills, add professional perspectives with role cards, and share state and context through Git.

## Core model

1. **Product context** uses Markdown to record the problem, scope, behavioral scenarios, domain judgments, the sources of the currently bound decisions, and acceptance criteria.
2. **Engineering context** uses Markdown to record the design, Task breakdown, and plan verification within one currently valid plan. Actual verification, review, and release evidence use existing independent sections or references.
3. **Shared progress** is written only to the target repository's `.sdlc-v1/state.json`.
4. **Collaboration and history** use ordinary Git branches, commits, push, and pull/merge. No second version history is maintained.
5. **Long-term engineering context** can come from the repository's own `AGENTS.md`, architecture/product docs, and an optional repo-context index. SDLC only records verified paths in `project.md`; it does not copy their body text or state.

Once in the lifecycle, the main Agent uses `next` to select a stage, define the complete work contract, dispatch one…
