---
repo: "AnLifeX/CodexDesktop-Rebuild"
name: "CodexDesktop-Rebuild"
description: "Unofficial cross-platform rebuild of Codex Desktop: Chinese localization, a Windows installer with smart incremental auto-update, Win10 compatibility, and client feature enhancements."
originalDescription: "Codex Desktop 跨平台重构版：中文本地化、Windows 安装包与智能增量自动更新、Win10 兼容及客户端功能增强。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/AnLifeX/CodexDesktop-Rebuild"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
stars: 19
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-02T15:02:29Z"
lastCommitAt: "2026-10-27T09:16:46Z"
lastReleaseAt: "2026-07-13T15:13:13Z"
status: "thriving"
tags: []
healthScore: 79
undervaluedScore: 39
maintainers: ["AnLifeX", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4c67e93188e256e24518015352d57a4645addf488aafa1e42d0c5eb5f419f7c/AnLifeX/CodexDesktop-Rebuild"
---

# Codex Desktop Rebuild

An unofficial project that rebuilds and enhances the official OpenAI Codex Desktop installer. It provides Windows builds, automatic updates, and local build support for macOS and Linux.

- Repository: [AnLifeX/CodexDesktop-Rebuild](https://github.com/AnLifeX/CodexDesktop-Rebuild)
- Download: [GitHub Releases](https://github.com/AnLifeX/CodexDesktop-Rebuild/releases/latest)
- Windows update source: [windows-update-feed](https://github.com/AnLifeX/CodexDesktop-Rebuild/releases/tag/windows-update-feed)

## Core Optimizations

- **Standalone Windows auto-update**: Uses this repository's own update source, with resumable downloads, download verification, and proxy acceleration.
- **Smart residual updates**: Plans the complete residual chain during the query phase. It is used only if the chain is complete and its total size is smaller than the full package; otherwise the full package is selected directly.
- **Chinese localization**: Enables the Chinese interface, fills in missing translations, and translates native menus and hard-coded titles.
- **Windows 10 compatibility**: Fixes compatibility issues with the Computer Use screenshot interface and provides a…
