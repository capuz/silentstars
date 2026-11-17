---
repo: "lisniuse/tgb-cli"
name: "tgb-cli"
description: "Command-line tool for Taogubar (tgb.cn): browse, search, quotes, themes, live trading competitions, post and reply, and export. Written in TypeScript + Bun."
originalDescription: "淘股吧 (tgb.cn) 命令行工具：浏览/搜索/行情/题材/实盘比赛/发帖回帖/导出，TypeScript + Bun。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lisniuse/tgb-cli"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["a-share", "bun", "cli", "stock", "stock-market", "taoguba", "terminal", "tgb", "typescript", "tgb-cli"]
stars: 20
forks: 6
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-02-16T08:46:37Z"
lastCommitAt: "2026-11-17T14:37:20Z"
lastReleaseAt: "2026-11-17T14:32:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 21
maintainers: ["lisniuse"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ed99fad1b0d18fbdb59db7ca49a7b93dc0cf0f94e421d34f66627cc29d2cb02/lisniuse/tgb-cli"
---

# tgb-cli

Command-line tool for Taogubar ([tgb.cn](https://www.tgb.cn/)). Written in **TypeScript + Bun**. All data is fetched directly through HTTP APIs, without browser automation.

- Browse homepage recommendations, forums, essence posts, and the lifestyle forum
- View post bodies and replies, view only the original poster, paginate or fetch all pages
- Search posts, users, and stocks
- Stock quotes, hot stock rankings, hot user rankings
- User profiles, latest threads, following list, favorites list, message notifications
- After logging in: post, reply, like, favorite, follow
- Export posts to Markdown / HTML / JSON
- Batch-fetch the homepage or forums and generate daily reports (Markdown / HTML / JSON)

Login config is saved in `~/.tgb-cli/config.json` (on Windows, `C:\Users\<you>\.tgb-cli\config.json`).

## Installation

Requires [Bun](https://bun.sh/):

```bash
bun install
bun run src/index.ts --help      # run directly with Bun
```

Compile into a single-file executable:

```bash
bun run build                    # outputs dist/tgb(.exe)
```

Copy `dist/tgb` (on Windows, `dist\tgb.exe`) into a directory on your PATH to use it globally, for example:

```bash
# Windows (Git…
