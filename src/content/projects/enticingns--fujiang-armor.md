---
repo: "enticingns/fujiang-armor"
name: "fujiang-armor"
description: "Fujiang Armor: DeepSeek Harness prompt kernel injection plugin (compatible with DSH 0.2.1 / 0.2.2-rc.1, with isolated instance and injection self-check)"
originalDescription: "富江破甲：DeepSeek Harness 提示词内核注入插件（适配 DSH 0.2.1 / 0.2.2-rc.1，含隔离实例与注入自检）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/enticingns/fujiang-armor"
language: "JavaScript"
languages: ["JavaScript", "PowerShell"]
languagePcts: [62, 31]
stars: 131
forks: 45
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2026-11-06T04:49:48Z"
lastCommitAt: "2026-11-25T03:14:50Z"
lastReleaseAt: "2026-11-25T02:56:21Z"
status: "newborn"
tags: []
healthScore: 67
undervaluedScore: 15
maintainers: ["enticingns", "linguo2625469"]
openGraphImageUrl: "https://opengraph.githubassets.com/dacef679a4365a9bb88b9e6db39dd47f1c644c9d80c48feec8eb3992502f544c/enticingns/fujiang-armor"
---

# Fujiang DSH Perfect Armor-Breaking

Fujiang Armor is a local plugin for DSH. It bundles prompt rules and provides one-click injection and one-click uninstall on Windows. After the plugin loads, "Fujiang Armor Activated" appears above the chat input box.

Current version: `0.9.0`. Plugin ID: `fujiang-armor`. Compatible with the full DSH `0.2.1` / `0.2.2` series (including `0.2.2-rc.1` ~ `0.2.2-rc.5`, tested on `0.2.2-rc.5`).

#workbuddy reverse proxy to the latest HY model has stopped working. The armor-breaking approach for cloud review will be confirmed later depending on the situation. 2026.11.22

## What 0.9.0 Does (runtime switches: master switch + mode toggle)

Two controls were added above the input box, next to the "Fujiang Armor Activated" badge:

- **Off / On**: global master switch. When off, the kernel is no longer injected, and in legacy / both modes the system segment is also removed.
- **user / legacy / both**: global injection mode. Takes effect immediately on click, with no reinstall or restart needed.

The three entry points share one implementation: the input-box switch, the slash command `/fujiang`, and the tool `fujiang_switch`.
