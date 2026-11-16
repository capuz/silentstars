---
repo: "TianLin0509/ai-hub-huawei"
name: "ai-hub-huawei"
description: "AI HUB-Huawei: CodeAgent desktop workbench"
originalDescription: "AI HUB-Huawei：CodeAgent 桌面工作台"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/TianLin0509/ai-hub-huawei"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
stars: 11
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-28T11:26:53Z"
lastCommitAt: "2026-11-16T04:24:51Z"
lastReleaseAt: "2026-10-31T06:54:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 55
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/e58b78e2e210358bb61feb49c85dee6f87e72d88d7589b05bd7dbedead79e7de/TianLin0509/ai-hub-huawei"
---

# AI HUB-Huawei · Internal Beta Pioneer Edition (CodeAgent)

Puts the company intranet's **Code Agent CLI** into a Windows desktop workbench: separate sessions, multi-AI group chats, card view, hibernation recovery, history search, and automatic naming. This is the company edition of AI Hub (product name AI HUB-Huawei, internal beta pioneer edition). The current version is **v5.6.35**, synced from upstream **1.6.738** (see `community-edition.json` for the specific commit).

It uses the same codebase as the public community edition. The only difference is that the default behavior is set up for the company intranet:

- **Uses CodeAgent by default if it is installed**: new sessions preselect CodeAgent and place it first; new group chats default to two CodeAgent members (GLM-5.2-WX-Auto and MiniMax-M2.7).
- **New folders are trusted and run without confirmation by default**: on startup it passes `--skip-safe-check` and pre-writes trust; the permission mode defaults to `bypassPermissions`; it passes `--disable-update`, so upgrade prompts won't block it.
- **Models follow the local CodeAgent**: the model list is read from the local CodeAgent configuration (GLM, MiniMax, DeepSeek, etc.,…
