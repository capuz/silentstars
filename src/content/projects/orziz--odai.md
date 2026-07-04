---
repo: "orziz/odai"
name: "odai"
description: "AI agent governance skill for intent alignment, scope control, acceptance, handoffs, implementation, review, and delegation."
originalDescription: "AI agent治理入口：意图对齐、边界授权、验收真实性、跨阶段接力与实现/审查/下放防呆 - AI agent governance skill for intent alignment, scope control, acceptance, handoffs, implementation, review, and delegation."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/orziz/odai"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 55
forks: 8
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-19T01:32:22Z"
lastCommitAt: "2026-07-04T22:50:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 32
maintainers: ["orziz"]
openGraphImageUrl: "https://opengraph.githubassets.com/ebdb0e21af0db589836e16216213f92baf57e234b7e5ba8b2f22038a4c8ce67f/orziz/odai"
---

**English** · [中文](README.zh-CN.md)

# odai

`odai` is a single governance entry point for AI agent work. It does not try to teach the model generic reasoning, searching, reading, coding, or summarizing again; it defines the parts an agent should not decide alone: real intent, boundaries, authorization, acceptance, handoffs, evidence, and stopping conditions.

Inside, `道` ("the Way") acts as the orchestrator. It aligns the goal and risk, chooses the module chain when needed, lets simple tasks move quickly, and asks only when a missing decision would change the path, scope, authorization, acceptance, risk, or stop line.

- **Just want to get stuff done?** One entry point: `odai`.
- **Maintaining this repo?** There's a separate `skill-author` tool. See [MAINTAINING.md](MAINTAINING.md).

> The `main` branch ships this unified entry point. If you prefer the older "one skill per ability" layout, install the `old` branch (see [Install](#install)).

## 30-second start

1. Drop `odai` into your environment:

```bash
npx skills add https://github.com/orziz/odai --skill odai
```

(Want the whole repo, the slim version, or the old layout? See [Install](#install).)

2. Hand your task straight…
