---
repo: "Xiaxin1235/WhaleMaid"
name: "WhaleMaid"
description: "DeepSeek Harness plugin: Autopilot automatic advancement and companion character 大肥鱼 (Big Fat Fish)"
originalDescription: "DeepSeek Harness 插件：Autopilot 自动推进与陪伴角色大肥鱼"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Xiaxin1235/WhaleMaid"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["dsh-plugin"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-25T12:22:19Z"
lastCommitAt: "2026-11-12T05:40:03Z"
lastReleaseAt: "2026-11-12T05:12:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 47
maintainers: ["Xiaxin1235", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ebcce754ebc19be392725bb001945fd919469c68e5a600885c7f5ce12456441b/Xiaxin1235/WhaleMaid"
---

# WhaleMaid

Chinese | [English](https://github.com/Xiaxin1235/WhaleMaid/blob/HEAD/README.en.md)

WhaleMaid is the project auto-advancement plugin for DeepSeek Harness (DSH). It plans and executes tasks within the scope you confirm, independently verifies the results, and asks you when a decision is needed.

**1.6.1** documentation. The target host is DSH Desktop **0.2.x from 0.2.1-rc.2 onward**. Building from source requires Node.js ≥22.19. For preview-version limitations, see the [usage guide](https://github.com/Xiaxin1235/WhaleMaid/blob/HEAD/docs/usage.md).

## What it can do now

| Feature | How to use |
| --- | --- |
| Goals and authorization | Draft a goal in natural language, then confirm item by item in the panel: project directory, protected items, actions, exact acceptance commands, and budget. |
| Auto-advancement and independent acceptance | Git projects run dependent tasks in an independent worktree. The host independently runs the confirmed acceptance commands and, based on the evidence, continues, stops, or requests a decision. |
| Notifications and decisions | The notification center and DSH native prompts carry pending decisions. Supports Do Not Disturb, mute,…
