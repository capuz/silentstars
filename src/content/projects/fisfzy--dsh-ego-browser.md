---
repo: "Fisfzy/dsh-ego-browser"
name: "dsh-ego-browser"
description: "DSH (DeepSeek Harness) plugin: connects the ego-lite browser (Chromium for AI agents) to HARNESS, with 13 structured ego_* tools (text semantic snapshots, semantic-locator clicks, form filling, screenshots, CDP control, task-space isolation), a built-in ego runtime, and out-of-the-box support on Linux + Chrome. No need to clone the official repo or build manually."
originalDescription: "DSH（DeepSeek Harness）插件：把 ego-lite 浏览器（给 AI Agent 用的 Chromium）接入 HARNESS——13 个结构化 ego_* 工具（文本语义快照、语义定位点击、表单填充、截图、CDP 控制、任务空间隔离），内置 ego 运行时，Linux + Chrome 开箱即用，无需克隆官方仓库或手动构建。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Fisfzy/dsh-ego-browser"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [54, 46]
topics: ["agent-browser", "browser-automation", "dsh-plugin", "ego-lite", "dshx", "dsh-better-sidebar", "cordis", "deepseek-harness", "dsh", "dshfind"]
stars: 283
forks: 44
openIssues: 4
closedIssues: 37
watchers: 0
contributors: 12
recentReleases: 6
createdAt: "2026-08-07T08:13:54Z"
lastCommitAt: "2026-10-22T08:51:30Z"
lastReleaseAt: "2026-10-22T05:06:19Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 95
undervaluedScore: 31
maintainers: ["Fisfzy", "HuanLinOTO", "InkshadeWoods"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0c4368c858c16272ca4e2e44cab50c4081978e4b15084a44535075ca6c7dc09/Fisfzy/dsh-ego-browser"
---

# ego-browser — A Visible Agent Browser

> **Repository**: `github.com/Fisfzy/dsh-ego-browser`｜Current version **v0.8.7**｜Version history: [CHANGELOG.md](https://github.com/Fisfzy/dsh-ego-browser/blob/HEAD/CHANGELOG.md)｜Details page: [dshfind](https://dshfind.com/zh/plugins/Fisfzy/ego-browser)

### Version Compatibility Matrix

| Dependency | Minimum Version | Recommended Version | Notes |
|---|---|---|---|
| **DSH** (DeepSeek Harness) | `0.1.2-rc.1` | `≥ 0.1.2-rc.1` (adapted to 0.1.7 settings since v0.8.6; verified through 0.1.7) | `engines.dsh` declares the floor; the peer dependency syncs the lock to `>=0.1.2-rc.1`. For 0.1.0-rc.x / 0.1.1-rc.x, use v0.8.0 or earlier |
| **dsh-better-sidebar** | `0.12.2` (optional) | `≥ 0.17.1` | Automatically falls back to a floating observation ball if not installed; `< 0.12.2` can run, but external link interception (`urlTarget`) silently degrades |
| **Node.js** | `22` | — | Bundled in the harness environment |

**DSH full-version adaptation notes**: v0.8.7 has been verified on DSH `0.1.2-rc.1` through `0.1.7` (including the 0.1.7 settings path on the 0.2.0-rc.x desktop client). Core APIs (`defineTool`, `ctx.tools.register`,…
