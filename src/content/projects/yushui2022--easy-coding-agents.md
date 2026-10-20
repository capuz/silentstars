---
repo: "yushui2022/easy-coding-agents"
name: "easy-coding-agents"
description: "One of the early China-built lightweight Claude Code-inspired terminal coding agents, with autonomous execution, tool calling, custom agents, task control, and evidence-gated memory."
originalDescription: "One of the early China-built lightweight Claude Code-inspired terminal coding agents, with autonomous execution, tool calling, custom agents, task control, and evidence-gated memory."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yushui2022/easy-coding-agents"
language: "Python"
languages: ["Python"]
languagePcts: [72]
stars: 57
forks: 14
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 2
recentReleases: 1
createdAt: "2026-02-02T08:02:44Z"
lastCommitAt: "2026-10-20T08:49:20Z"
lastReleaseAt: "2026-10-20T08:45:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 64
undervaluedScore: 33
maintainers: ["yushui2022"]
openGraphImageUrl: "https://opengraph.githubassets.com/29e145714ae50ae6f194a261f1985949fee2211248fcd6fcfa1ab9278c1d9499/yushui2022/easy-coding-agents"
---

**ECA Desktop 0.34.1 Windows Preview**: The desktop project is located in `desktop/` and supports multiple projects and concurrent sessions, a main conversation with side-chat attachments, web preview, an interactive PowerShell terminal, and on-demand modification review. It shares the Python core and project data with the CLI. [Installation, development, and acceptance notes](https://github.com/yushui2022/easy-coding-agents/blob/HEAD/docs/desktop/README.md). The npm launcher provides both `eca` and the compatible command `ecs`.

A new agent taking over should first read the [complete handoff document](https://github.com/yushui2022/easy-coding-agents/blob/HEAD/HANDOFF.md). It covers local machine paths, the status of uncommitted code, dependencies, the G-drive cache, packaging and updates, testing, and the terracotta UI conventions.

The main agent has no default limit on response turns or on output-truncation recovery attempts; you can interrupt it with Ctrl+C. Explicit limits in older configurations remain in effect. To remove both limits, run `ecs --max-turns 0 --output-recovery-limit 0`. For the difference between the per-response model output limit, sub-agent limits, and…
