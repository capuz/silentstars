---
repo: "zengweicheng666/dsh-svn-tools"
name: "dsh-svn-tools"
description: "SVN (Subversion) tools for DeepSeek Harness: 33 svn_* agent tools with UTF-8 Chinese commit logs, plus an SVN panel that renders in DSH's built-in right Sidebar or dsh-better-sidebar - switchable in Settings (DSH 0.1.0-rc.6+ / 0.2.x)."
originalDescription: "SVN (Subversion) tools for DeepSeek Harness: 33 svn_* agent tools with UTF-8 Chinese commit logs, plus an SVN panel that renders in DSH's built-in right Sidebar or dsh-better-sidebar - switchable in Settings (DSH 0.1.0-rc.6+ / 0.2.x)."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/zengweicheng666/dsh-svn-tools"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["dsh-plugin", "deepseek-harness", "dsh", "plugin", "sidebar", "subversion", "svn", "version-control"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-08-29T13:39:18Z"
lastCommitAt: "2026-10-19T09:11:33Z"
lastReleaseAt: "2026-10-19T09:15:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 52
maintainers: ["zengweicheng666"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6b3d2d26ce21e74a3f32696a494bfacef490e2e5b4e42682cb77b18257e51c5/zengweicheng666/dsh-svn-tools"
---

**Simplified Chinese** · [English](https://github.com/zengweicheng666/dsh-svn-tools/blob/HEAD/README.en.md)

# dsh-svn-tools

> **Subversion tools and sidebar panel, built for DeepSeek Harness.**
> Gives the agent a complete set of `svn_*` tools, and gives people an SVN panel that sits in **DSH's built-in right sidebar** (or dsh-better-sidebar). Both share the same execution core.

**No prerequisites**: the panel host is switchable and can be left unregistered entirely (agent tools only). The plugin does not run any scripts at install time.

---

## Contents

- [Features](#特性)
- [Installation](#安装)
- [Quick Start](#快速上手)
- [Sidebar Panel](#侧边栏面板)
  - [Host](#载体) · [Changes](#变更页) · [Commit](#提交页) · [History](#历史页) · [Online / Offline / Read-only](#在线--离线--只读)
- [Agent Tools (33)](#agent-工具33-个)
- [Settings (10 items)](#设置10-项)
- [DSH Version Compatibility](#与-dsh-的版本兼容)
- [Updates and Install Forms](#更新与安装形态)
- [Security Model](#安全模型)
- [Self-check and Development](#自检与开发)
- [FAQ](#常见问题)
- [License](#许可)

---

## Features

| | |
|---|---|
| **33 `svn_*` agent tools** | Covers the full subcommand surface: status, diff, history, properties, branch/merge, locking, changelists,…
