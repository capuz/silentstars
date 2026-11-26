---
repo: "WaterDJiang/wtt-dsh-plugin"
name: "wtt-dsh-plugin"
description: "An open-source creative canvas for DeepSeek Harness. Put PPTs, images, videos, and project files into editable workflows, with the WTT project assistant collaborating across canvases."
originalDescription: "DeepSeek Harness 的开源创作画布。把 PPT、图片、视频和项目文件放进可编辑的工作流，由 WTT 项目助手跨画布协作。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/WaterDJiang/wtt-dsh-plugin"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["dsh-plugin", "ai-canvas", "deepseek-harness", "pptx", "video-creation", "workflow-automation"]
stars: 9
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-11-07T14:09:25Z"
lastCommitAt: "2026-11-26T12:58:28Z"
lastReleaseAt: "2026-11-19T18:06:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 64
maintainers: ["WaterDJiang"]
openGraphImageUrl: "https://opengraph.githubassets.com/f03b6d8bb4362f87656db189d0e5f780b09a84c5b0d0fdaa1c5e272f1bcbd232/WaterDJiang/wtt-dsh-plugin"
---

# WTT DSH Plugins

| Plugin | Purpose |
| --- | --- |
| [WTT 创作工作台 (WTT Creation Workbench)](https://github.com/WaterDJiang/wtt-dsh-plugin/blob/HEAD/plugins/dsh-creation-workbench/) | Organize projects, materials, and creative outputs on an AI canvas |
| [WTT 股票分析 (WTT Stock Analysis)](https://github.com/WaterDJiang/wtt-dsh-plugin/blob/HEAD/plugins/dsh-wanalysis/) | View A-share market data in a local SQLite database, run indicator calculations, and view archived financials |

The two plugins can be installed separately. [WTT Plugin Market Index (WTT 插件市场索引)](https://github.com/WaterDJiang/wtt-dsh-plugin/blob/HEAD/market/index.json)

## WTT Creation Workbench (WTT 创作工作台)

## 0.59.4-rc.1 Release Candidate (候选版本)

小瓦's Codex text reports are launched by the DSH process service. It uses the local Codex login session and runs in a temporary directory in read-only mode. Users who previously used Codex only through an environment-variable API key can log in to Codex locally first, or choose a DSH model before authorizing. Regular document conversion and preview use a separate environment-variable allowlist.
