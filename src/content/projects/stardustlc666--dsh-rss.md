---
repo: "STARDUSTLC666/dsh-rss"
name: "dsh-rss"
description: "DSH RSS / Atom workbench: categorized source directory, subscription reading, search, and OPML import/export, with sources chosen by the user. Issues and PRs are welcome."
originalDescription: "DSH RSS / Atom 工作台：分类来源目录、订阅读取、搜索与 OPML 导入导出，由用户选择来源。欢迎提交 issues 和 PR。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/STARDUSTLC666/dsh-rss"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [65, 35]
topics: ["dsh-plugin", "atom", "deepseek-harness", "rss", "news-aggregator", "opml"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-14T09:33:46Z"
lastCommitAt: "2026-11-13T18:34:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 47
maintainers: ["STARDUSTLC666"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e840fcde57d78147c564b4da5a93564c2ba0ba9c0fa31e3e82e85a1a4486b0a/STARDUSTLC666/dsh-rss"
---

**Simplified Chinese** · [English](https://github.com/STARDUSTLC666/dsh-rss/blob/HEAD/README.en.md)

# RSS

**Choose your own sources, and organize subscriptions into a feed that's easy to read.**

**[Installation](#安装) · [Usage flow](#开始使用) · [Full documentation](https://github.com/STARDUSTLC666/dsh-rss/blob/master/docs/REFERENCE.zh.md)**

## Features

- Start from five categories of source directories, or add your own addresses.
- Preview before subscribing; browsing the directory does not add sources automatically.
- Read by category, unread status, or keyword, and export an OPML backup.

## Installation

Install `dsh-rss` from the "Plugins" panel in the DSH desktop app. If the command line is already configured, you can also use:

```bash
dsh plugin --profile desktop add dsh-rss
```

For the web version, change `desktop` to `web`. After installing, restart the corresponding DSH. The host's requirement follows the package declaration `>=0.2.2-rc.3`.

## Getting Started

1. From the left sidebar, open "RSS Subscriptions," then pick sources by category from the recommended directory, or prepare your own RSS / Atom address or OPML file.
2. Preview the sources first, then…
