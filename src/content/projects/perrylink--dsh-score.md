---
repo: "PerryLink/dsh-score"
name: "dsh-score"
description: "Multi-dimensional quality scoring for DeepSeek Harness plugins: scores a repo or npm package across install success (consuming dsh-test-drive results), maintenance activity, documentation completeness, security scan, and protocol compliance — every conclusion backed by real CLI evidence with audit timestamps."
readmeQualityOk: true
url: "https://github.com/PerryLink/dsh-score"
homepage: "https://www.npmjs.com/package/dsh-score"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [75]
topics: ["cordis", "deepseek", "deepseek-harness", "dsh", "dsh-plugin", "leaderboard", "quality-score", "supply-chain", "plugin-scoring", "ai-agent"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-08-17T01:48:05Z"
lastCommitAt: "2026-11-15T11:20:22Z"
lastReleaseAt: "2026-09-04T14:03:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 51
maintainers: ["PerryLink", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/476a712455b4f67196b753b8a81fbcc1b7352a39d00086d2b035806d964ee522/PerryLink/dsh-score"
discussionCount: 1
---

# dsh-score

**给任意仓库或 npm 包打一张带证据链接的五维质量评分卡——安装、维护、文档、安全、合规，每一分都能追溯。**

面向 DeepSeek Harness 的本地评分器：只调 `gh api` 与 `npm view` 采证，不安装、不构建、不执行被评对象；证据缺失时如实记 `no-evidence`，绝不编数字。

[安装](#三步上手) · [配置](#配置) · [FAQ](#faq) · [简体中文](https://github.com/PerryLink/dsh-score/blob/HEAD/README.md) · [English](https://github.com/PerryLink/dsh-score/blob/HEAD/README.en.md) · [Español](https://github.com/PerryLink/dsh-score/blob/HEAD/README.es.md) · [Português](https://github.com/PerryLink/dsh-score/blob/HEAD/README.pt.md) · [हिन्दी](https://github.com/PerryLink/dsh-score/blob/HEAD/README.hi.md)

```sh
dsh plugin --profile <name> add dsh-score
```

## 它是什么

`dsh-score` 是 DeepSeek Harness 的本地质量评分器：给它一个 GitHub 仓库或 npm 包，它跑完安装成功率、维护、文档、安全、合规五个维度，输出一张结构化评分卡（`schema: "dsh-score/v1"`）或一份 JSON + Markdown 排行榜。所有结论都来自真实的 `gh`/`npm` 输出，每条证据都带 `source`、脱敏后的 `detail` 与 `observedAt`；某个维度采不到证据就如实记 `no-evidence`（0 分、不参与加权），绝不用估算数字填空。评分完全按需，不安装、不构建、不运行被评对象。本插件是本地按需评分器；公开证据层在 [`dsh-attention-index`](https://github.com/PerryLink/dsh-attention-index)。

## 三步上手

1. **安装**（二选一）：

   ```sh
   # git 通道（最新 main；等价于 git+https://github.com/PerryLink/dsh-score.git）
   dsh plugin --profile web add…
