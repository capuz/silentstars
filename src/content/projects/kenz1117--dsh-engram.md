---
repo: "kenz1117/dsh-engram"
name: "dsh-engram"
description: "Local-first cross-session long-term memory for DeepSeek Harness — 22 narrow tools, hybrid FTS5 + local-vector retrieval, evidence gate, provenance audit, SM-2 review. Zero external services, zero API keys."
originalDescription: "Local-first cross-session long-term memory for DeepSeek Harness — 22 narrow tools, hybrid FTS5 + local-vector retrieval, evidence gate, provenance audit, SM-2 review. Zero external services, zero API keys."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/kenz1117/dsh-engram"
homepage: "https://kenz1117.github.io/dsh-engram/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["agent", "awesome-dsh-plugin", "deepseek-harness", "dsh", "dsh-plugin", "embeddings", "memory", "sqlite", "agent-memory", "context-engineering"]
stars: 34
forks: 9
openIssues: 3
closedIssues: 17
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-09-01T08:00:04Z"
lastCommitAt: "2026-10-25T08:40:28Z"
lastReleaseAt: "2026-09-21T07:02:28Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 50
maintainers: ["kenz1117", "dsv180", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1353296006/f6e05b2d-e085-4022-90e3-753f52bcab8f"
---

# dsh-engram · Memory Palace

Pure local SQLite cross-session long-term memory: <b>zero external services · zero API keys · zero Docker</b>, installed with one command and ready to use.<br>
23 narrow-parameter tools · hybrid retrieval (FTS5 + local vector RRF) · evidence gate · full-chain audit · SM-2 spaced-repetition review · panel available in Chinese, English, and Russian.</p>

Chinese | [English](https://github.com/kenz1117/dsh-engram/blob/HEAD/README.en.md)

- [Quick Start](#快速开始)
- [Why This One](#为什么是它)
- [How Memory Flows](#记忆怎么流动)
- [Interface Overview](#界面速览)
- [Palace Structure: Directories Are Rooms, Paths Are Routes](#宫殿结构目录即房间路径即路线)
- [Features](#特性)
- [Tools (23, Narrow Parameters)](#工具23-个窄参数)
- [Configuration](#配置)
- [How It Works](#工作原理)
- [Web Admin Panel](#web-管理面板)
- [Development](#开发)
- [Model Experience](#model-experience)
- [Known Limitations and Deferred Work](#known-limitations-and-deferred-work)
- [Roadmap](#路线图)
- [Acknowledgments](#致谢)
- [License](#许可证)

---

## Quick Start

```sh
dsh plugin --profile web add @kenz1117/dsh-engram
```

After installation, it works without any configuration (the default database and model cache live in `~/.dsh/engram`,…
