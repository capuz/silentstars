---
repo: "TianLin0509/ai-hub-huawei"
name: "ai-hub-huawei"
description: "AI HUB-Huawei: CodeAgent Desktop Workbench"
originalDescription: "AI HUB-Huawei：CodeAgent 桌面工作台"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/TianLin0509/ai-hub-huawei"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [90]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-28T11:26:53Z"
lastCommitAt: "2026-11-04T02:57:57Z"
lastReleaseAt: "2026-10-31T06:54:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 33
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/0bb8239486a6f8995e167dcac690081b7d61b144ea9a8e748f489e5120b0f0a8/TianLin0509/ai-hub-huawei"
---

# AI HUB-Huawei · Internal Beta Pioneer Edition (CodeAgent)

Puts the company intranet's **Code Agent CLI** into a Windows desktop workbench: separate sessions, multi-AI group chats, card view, sleep recovery, history search, and automatic naming. This is the company edition of AI Hub (product name AI HUB-Huawei, internal beta pioneer edition). The current version is **v5.5.3**, synced from upstream **1.6.738** (see `community-edition.json` for the specific commit).

It uses the same codebase as the public community edition. The only difference is that the default behavior is set up for the company intranet:

- **If Code Agent is installed, it is used by default**: new sessions select CodeAgent by default and rank it first. New group chats default to two CodeAgent members (GLM-5.2-WX-Auto and MiniMax-M2.7).
- **New folders are trusted and run without confirmation by default**: launched with `--skip-safe-check` and pre-written trust. The permission mode defaults to `bypassPermissions`. It runs with `--disable-update`, so upgrade prompts won't block it.
- **Models follow the local CodeAgent**: the model list reads the local CodeAgent configuration (GLM, MiniMax, DeepSeek, etc.,…
