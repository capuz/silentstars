---
repo: "MichengAI/dsh-codex-ui"
name: "dsh-codex-ui"
description: "DSH Codex UI — 为 DeepSeek Harness Web 提供 Codex 风格侧栏、工作区会话树、全局搜索和轮次导航 · A Codex-style sidebar, workspace session tree, global search, and turn navigation for DSH Web"
readmeQualityOk: true
url: "https://github.com/MichengAI/dsh-codex-ui"
homepage: "https://dsh-codex-desktop.micheng.dev"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [59, 41]
topics: ["deepseek", "deepseek-harness", "dsh", "dsh-plugin", "dsh-plugins"]
stars: 178
forks: 15
openIssues: 3
closedIssues: 43
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-08-14T15:58:13Z"
lastCommitAt: "2026-10-20T08:49:15Z"
lastReleaseAt: "2026-08-25T13:42:45Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 98
undervaluedScore: 35
maintainers: ["MichengAI", "github-actions[bot]", "geekyfoxlab"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1334346564/fcf1e924-0c7c-44ab-af24-0cab532acfce"
---

# DSH Codex UI

  **Organize projects, find conversations, and revisit long chats more easily in DSH Web**

  [简体中文](https://github.com/MichengAI/dsh-codex-ui/blob/HEAD/README.zh-CN.md) · [Changelog](https://github.com/MichengAI/dsh-codex-ui/blob/HEAD/CHANGELOG.md) · [Apache-2.0](https://github.com/MichengAI/dsh-codex-ui/blob/HEAD/LICENSE)

> DSH Codex UI is a community-maintained interface plugin for DeepSeek Harness (DSH), not an official DeepSeek AI product.

Working across several projects and conversations in DSH Web? DSH Codex UI helps you organize the sidebar, find tasks quickly, and jump back to earlier questions in long chats. It offers a Codex-style interface with light and dark themes.

## Host compatibility

Version `1.1.42` explicitly declares support for DSH `0.2.0-rc.1`, `0.2.0-rc.2`, `0.2.1-rc.1`, and `0.2.1-rc.2` (dropping obsolete pre-0.2.0 hosts to align with in-house plugin standards). Development dependencies are pinned to `0.2.1-rc.2`. Compatibility declarations do not imply that every supported host received a fresh live test in this release.

**Do not enable Codex UI and `ds-bot` together.** Both redesign the sidebar and conversation interface, so their…
