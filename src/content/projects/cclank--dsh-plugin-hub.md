---
repo: "cclank/dsh-plugin-hub"
name: "dsh-plugin-hub"
description: "DeepSeek Harness community plugin registry with evidence-based screening"
readmeQualityOk: true
url: "https://github.com/cclank/dsh-plugin-hub"
homepage: "https://dsh.lanshuagent.com/"
language: "TypeScript"
languages: ["TypeScript", "HTML", "JavaScript"]
languagePcts: [36, 32, 21]
stars: 16
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-14T13:09:45Z"
lastCommitAt: "2026-08-17T04:18:09Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 27
maintainers: ["cclank"]
openGraphImageUrl: "https://opengraph.githubassets.com/83c6f1dff5463cde1d3e0d41fbfd1470f027d862d7c3c32a1bab8a47b4df3738/cclank/dsh-plugin-hub"
---

</p>

<h1 align="center">DSH Plugin Hub</h1>

  面向 DeepSeek Harness 社区的插件目录、安装证据索引与轻量安全筛查站。
  <br />
  Discover community plugins with real GitHub metadata, manifest evidence, and transparent risk signals.
</p>

</p>

  ·
  ·
  ·
</p>

## 项目简介

DeepSeek Harness 的插件生态增长很快，但仓库描述、安装命令和真实权限边界经常散落在不同位置。DSH Plugin Hub 将这些公开证据汇总成一个可搜索目录，帮助用户在安装前先确认：

- 项目是否真的声明了 `dsh.bundle`、`dsh.plugin`、`dsh.profile` 或 `dsh.client`；
- 安装命令是否绑定到完成静态检查的不可变 Git commit；
- 仓库是否活跃、是否有许可证和锁文件；
- 是否存在生命周期脚本、网络访问、文件写入、凭据读取或动态代码执行信号；
- 当前结果来自自动发现、社区精选，还是离线快照。

本站是独立社区项目，与 DeepSeek 官方没有隶属关系。

## 核心能力

| 能力 | 说明 |
| --- | --- |
| 真实插件数据 | 合并社区精选列表、GitHub `topic:dsh-plugin` 元数据和仓库根目录 manifest。 |
| Codex 严选 | 收录巡检中经过源码、版本、安装路径和安全边界核验，并明确判断“现在值得试”的插件。每条严选绑定审核 commit。 |
| 自动收录 | Cloudflare Cron 每 12 小时发现新仓库、同步严选列表，候选进入 Queue 并行检查，结果写入 D1。 |
| 安装证据 | 只有在同一 Git commit 上完成 manifest 与入口源码检查后，才展示锁定 commit 的安装命令。 |
| 插件护照 | 每个 `仓库 + commit + 扫描器版本` 都有不可变证据页、原始 JSON 与检查文件清单。 |
| 版本变更雷达 | 自动比较依赖、生命周期脚本、外联域名、能力信号、维护者和 manifest 变化。 |
| 轻量筛查 | 检查许可证、锁文件、生命周期脚本和有限源码信号，并公开展示发现项。 |
| 插件浏览 | 支持搜索、分类、证据筛选、排序、卡片/列表视图和本地收藏。 |
| 双语与主题 | 支持中文、English、浅色和深色界面。 |
| 开放数据 | 提供动态 JSON API、运行状态接口和构建时静态快照。 |
| 访问热度 | D1…
