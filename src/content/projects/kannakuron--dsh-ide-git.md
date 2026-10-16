---
repo: "KannaKuron/dsh-ide-git"
name: "dsh-ide-git"
description: "DSH plugin: an IDE-grade Git tool window as a native dsh-better-sidebar tab — branch tree, commit graph, changes, commit details, JetBrains-style actions, in the right sidebar and the bottom panel."
originalDescription: "DSH plugin: an IDE-grade Git tool window as a native dsh-better-sidebar tab — branch tree, commit graph, changes, commit details, JetBrains-style actions, in the right sidebar and the bottom panel. | DSH 插件:IDE 级 Git 工具窗口,以 dsh-better-sidebar 原生 Tab 挂载——分支树 / 提交图谱 / 变更与提交详情 / JetBrains 风格操作,右侧栏与底部面板双布局自适应。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/KannaKuron/dsh-ide-git"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["cordis", "deepseek", "deepseek-harness", "dsh", "dsh-better-sidebar", "dsh-plugin", "git", "git-gui", "sidebar", "source-control"]
stars: 6
forks: 3
openIssues: 0
closedIssues: 10
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-09-14T03:07:17Z"
lastCommitAt: "2026-10-16T08:26:06Z"
lastReleaseAt: "2026-09-22T09:05:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 69
maintainers: ["KannaKuron", "sitns", "pardSun"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfab3cc779000e36a80853594cffed3dd5357d71a385b785380822e9e6a3798c/KannaKuron/dsh-ide-git"
---

# dsh-ide-git

Simplified Chinese | [English](https://github.com/KannaKuron/dsh-ide-git/blob/HEAD/README_EN.md)

> Adds an **IDE-grade Git tool window** to the sidebar of [DeepSeek Harness (DSH)](https://github.com/deepseek-ai/deepseek-harness): a branch tree on the left, a commit graph in the middle, and changes and commit details on the right. Operations are aligned with the Git panels of JetBrains IDEs. It is registered as a native tab of [dsh-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) and works in both the right sidebar and the bottom panel. Since v0.13.0 it can also be mounted in the **main conversation area** (a Git tab next to "Conversation / Trace", which can be turned off in settings).

DSH's built-in Git panel covers "stage / commit / restore / view history". `dsh-ide-git` adds the layer that IDE users expect: **branch tree + right-click branch actions + commit graph + commit details + changes list + commit box**.

## What it solves

- **Branch management has no tree**: the built-in panel has only a branch dropdown. Here you get a grouped tree of `HEAD (current branch) / Local / Remote / Tags`, where each branch shows ahead/behind badges, its…
