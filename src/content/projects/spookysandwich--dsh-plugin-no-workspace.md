---
repo: "SpookySandwich/dsh-plugin-no-workspace"
name: "dsh-plugin-no-workspace"
description: "DSH no-workspace plugin: start chatting without picking a workspace; standalone conversations are listed flat in the sidebar, and the native workspace interface stays unchanged."
originalDescription: "DSH 免工作区插件：不选工作区也能直接开始对话，独立会话在侧边栏平铺显示，原生工作区界面保持不变。Start chatting without picking a workspace; standalone conversations list flat in the sidebar."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/SpookySandwich/dsh-plugin-no-workspace"
homepage: "https://github.com/deepseek-ai/deepseek-harness"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["deepseek-harness", "dsh-plugin", "no-workspace", "workspace-free", "dsh"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 9
createdAt: "2026-08-22T19:42:26Z"
lastCommitAt: "2026-11-22T11:50:55Z"
lastReleaseAt: "2026-11-14T17:03:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 58
maintainers: ["SpookySandwich"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c442bb5123586e8ed78d5d39f60cf28474ad02ec83b0cc9496003d0f0420d63/SpookySandwich/dsh-plugin-no-workspace"
---

# No Workspace for DSH

**Keep conversations independent instead of forcing them into a folder.**

[English](https://github.com/SpookySandwich/dsh-plugin-no-workspace/blob/HEAD/README.en.md) · Simplified Chinese

Adds a true first-class “No Workspace” conversation state to DeepSeek Harness while preserving the native workspace experience.

*Choose “No Workspace” from the workspace selector; even if you then collapse the workspace, standalone conversations still appear directly in the sidebar.*

## What it solves

DSH originally placed every conversation in a workspace, or displayed it in an extra “Ungrouped” folder. This plugin makes “unbound from a workspace” a true first-class state: standalone conversations appear directly in the sidebar, no fictitious “Ungrouped” directory is shown, and they do not quietly inherit the current workspace.
