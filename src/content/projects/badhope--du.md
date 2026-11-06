---
repo: "badhope/DU"
name: "DU"
description: "Tianji (DU) — a local-only Chinese metaphysics master arena. Two verified schools answer one question, you score blind, then methods are revealed and dated claims are tracked on your own device. No backend, no upload, no telemetry; 12 public-domain classics (1.87M chars) ship in-repo with verbatim citation checking. | Tianji: a local metaphysics master evaluation platform that does not upload data."
originalDescription: "Tianji (DU) — a local-only Chinese metaphysics master arena. Two verified schools answer one question, you score blind, then methods are revealed and dated claims are tracked on your own device. No backend, no upload, no telemetry; 12 public-domain classics (1.87M chars) ship in-repo with verbatim citation checking. | 天机台：不上传数据的本地玄学大师测评平台。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/badhope/DU"
homepage: "https://gitcode.com/badhope/DU"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [75]
topics: ["typescript", "vite", "bazi", "divination", "vue3", "chinese-metaphysics", "local-first", "offline-first", "privacy"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 6
createdAt: "2026-03-21T03:29:51Z"
lastCommitAt: "2026-11-06T02:44:47Z"
lastReleaseAt: "2026-11-04T18:19:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 73
undervaluedScore: 34
maintainers: ["badhope", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cd834fd4aa8f89e34d98749f79a65825024fdc2e1821461b9b47c4e01a8bbea/badhope/DU"
discussionCount: 0
---

# Tianji · DU <sub>v0.5.2</sub>

Two schools read the same question, you vote blind, and only then is it revealed who answered. Dated claims go into a prediction ledger that you fill in yourself.

[Chinese](https://github.com/badhope/DU/blob/HEAD/README.zh-CN.md) · [Roadmap](https://github.com/badhope/DU/blob/HEAD/ROADMAP.md) · [Changelog](https://github.com/badhope/DU/blob/HEAD/CHANGELOG.md)

| Ask | Blind match | After voting |
| --- | --- | --- |
|  |  |  |

## Install

```bash
# CLI
npm ci && npm run build:all
node build/cli.mjs ask "我要不要换工作" --domain career

# Desktop (Windows, no Node needed)
build/install.cmd
tianji serve                 # http://127.0.0.1:7317

# MCP (Claude / VS Code / Cursor)
{ "mcpServers": { "tianji": { "command": "tianji", "args": ["mcp"] } } }
```

## What it does

| | |
| --- | --- |
| Ask once | Write down your question. You may add your birth date and time (required for 子平 and 紫微斗数 charts) |
| Blind match | Two anonymous answers. Before voting, you cannot see names, schools, or chart layouts |
| Reveal | After voting, you see who answered and the citation sources |
| Backfill | A week later, come back and say whether the claim was accurate |

Core…
