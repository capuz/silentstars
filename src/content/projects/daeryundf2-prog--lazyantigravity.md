---
repo: "daeryundf2-prog/LAZYANTIGRAVITY"
name: "LAZYANTIGRAVITY"
description: "AI agent orchestration plugin bringing LazyCodex-style skills, hooks, and maintainer workflows to Google Antigravity/Gemini CLI."
readmeQualityOk: true
url: "https://github.com/daeryundf2-prog/LAZYANTIGRAVITY"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [59]
topics: ["ai-agent", "antigravity", "automation", "developer-tools", "gemini-cli", "lazycodex", "typescript"]
stars: 14
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 9
createdAt: "2026-06-06T23:18:08Z"
lastCommitAt: "2026-09-13T08:29:04Z"
lastReleaseAt: "2026-08-14T06:47:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 49
maintainers: ["YeongYU", "daeryundf2-prog", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b6e78bf447f17cd8956af6d9120363926e419c8df3ddacc0b768e0a99677e58/daeryundf2-prog/LAZYANTIGRAVITY"
---

# LAZYANTIGRAVITY (v0.7.0)

AI agent orchestration plugin for [Google Antigravity (Gemini CLI)](https://github.com/google-gemini/antigravity).

It gives your coding agent durable workspace memory, evidence-bound work loops with quality gates, sandboxed local tools, and a review pipeline — everything local, no telemetry unless you opt in, no network egress by default. Built on ideas from [Ouroboros](https://github.com/Q00/ouroboros) and [lazycodex](https://github.com/code-yeongyu/lazycodex), tuned for **Gemini 3.8 Flash**.

## Install

```bash
# macOS / Linux
mkdir -p ~/.gemini/config/plugins
cd ~/.gemini/config/plugins
git clone https://github.com/daeryundf2-prog/LAZYANTIGRAVITY.git lazyantigravity

# Windows PowerShell
mkdir $env:USERPROFILE\.gemini\config\plugins -Force
cd $env:USERPROFILE\.gemini\config\plugins
git clone https://github.com/daeryundf2-prog/LAZYANTIGRAVITY.git lazyantigravity
```

Restart Antigravity. No build step — compiled artifacts are committed and verified against sources (`npm run verify:reproducible`).

## What happens in your first session

Five session-start hooks run in under a second and stay silent unless they have something useful to inject: project…
