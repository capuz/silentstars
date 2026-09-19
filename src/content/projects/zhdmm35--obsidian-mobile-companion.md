---
repo: "zhdmm35/obsidian-mobile-companion"
name: "obsidian-mobile-companion"
description: "Android companion for Markdown vaults stored on GitHub, with Obsidian rendering, offline reading, conflict-safe editing, and an optional desktop sync helper."
readmeQualityOk: true
url: "https://github.com/zhdmm35/obsidian-mobile-companion"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [94]
topics: ["android", "jetpack-compose", "kotlin", "markdown", "obsidian", "offline-first"]
stars: 59
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-09-16T02:36:43Z"
lastCommitAt: "2026-09-19T08:07:42Z"
lastReleaseAt: "2026-09-17T10:01:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 20
maintainers: ["zhdmm35"]
openGraphImageUrl: "https://opengraph.githubassets.com/4352c39041335ac200f44c0c1dfb543fec96a8cb6d1270d1ffcdb9d90ae045d8/zhdmm35/obsidian-mobile-companion"
---

# Obsidian Mobile Companion

An independent Android companion app for Markdown vaults stored in GitHub repositories. Browse and search your notes, render common Obsidian syntax, read cached notes offline, and edit existing notes with explicit conflict handling. Ships with `tools/vaultsync`, a small desktop daemon that keeps a PC-side vault directory in sync with the same GitHub repository.

一个独立的 Android 应用，用于浏览和编辑托管在 GitHub 仓库中的 Markdown 知识库。支持浏览与搜索笔记、渲染 Obsidian 常用语法、离线阅读已缓存笔记、编辑保存并显式处理冲突。另附 PC 端 `tools/vaultsync` 小工具，可将本地 Vault 目录与同一个 GitHub 仓库保持同步。

> **Status / 状态:** v0.1.1 release candidate（预发布候选）。A signed v0.1.1 APK is available from the [v0.1.1 Release](https://github.com/zhdmm35/obsidian-mobile-companion/releases/tag/v0.1.1) for testing. Releases remain pre-release until the first stable feedback cycle is complete. v0.1.1 已提供签名 APK，正式稳定版会在第一轮真实用户反馈完成后发布。This project is not affiliated with or endorsed by Obsidian.md. 本项目与 Obsidian.md 无任何关联或背书关系。

## Project positioning / 项目定位

This project is a GitHub Markdown knowledge-base mobile workflow, not only an Obsidian reader. It connects four pieces into one auditable loop:

- mobile offline reading for cached notes;
- safe…
