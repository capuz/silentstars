---
repo: "geekhuashan/get-to-obsidian"
name: "get-to-obsidian"
description: "A plugin that syncs Get笔记 to Obsidian, supporting incremental sync, automatic sync, attachment import, and timeline display."
originalDescription: "将 Get笔记同步到 Obsidian 的插件，支持增量同步、自动同步、附件导入与时间线展示。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/geekhuashan/get-to-obsidian"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [46, 46]
topics: ["pkm"]
stars: 32
forks: 13
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-01-11T15:49:48Z"
lastCommitAt: "2026-10-30T08:36:25Z"
lastReleaseAt: "2026-01-12T06:17:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 69
undervaluedScore: 20
maintainers: ["geekhuashan"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b96f03a784b8f026be5e1b1210bcfa5c6e9569af89ebb7be36a03c1ec4c361a/geekhuashan/get-to-obsidian"
---

# 📓 Get笔记 Importer for Obsidian

A plugin that syncs content from [Get笔记](https://www.biji.com/) to Obsidian. It supports incremental sync, automatic sync, and multiple visualization methods.

[Features](#-功能特性) • [Installation](#-安装) • [Usage Guide](#-使用指南) • [FAQ](#-常见问题) • [Contributing](#-贡献)

---

## 🎉 Version 2.0 Major Update

### ✨ New Features

- **🔇 Silent background sync**: The export runs silently in the background and no longer opens a browser window
- **📁 Simplified attachment structure**: Changed from `get picture/file/日期/用户ID/文件名` to `get attachment/日期/文件名`
- **🔄 Smart content update detection**: Automatically detects note changes in Get笔记 and re-imports updated content
- **🗑️ Reset sync history**: Added a reset button in settings to clear sync history and re-import
- **⚙️ Dynamic path configuration**: Attachment paths automatically follow the "Get笔记 main directory" setting

---

## ✨ Features

### Core Features

- ✅ **Incremental sync**: Intelligently identifies already-synced notes and imports only new content, avoiding duplicates
- ✅ **Smart update detection**: Automatically identifies notes modified in Get笔记 and re-imports them
- ✅ **Multiple sync…
