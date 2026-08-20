---
repo: "zp-home/dsh-recommend"
name: "dsh-recommend"
description: "DSH 插件生态透明排行与推荐：每日自动抓取 dsh-plugin 话题 + 公开评分模型 + 排行/推荐插件与静态站"
readmeQualityOk: true
url: "https://github.com/zp-home/dsh-recommend"
homepage: "https://github.com/zp-home/dsh-recommend"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [68, 27]
topics: ["deepseek-harness", "dsh-plugin", "plugin", "rankings", "recommendations"]
stars: 17
forks: 1
openIssues: 0
closedIssues: 22
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-08-13T21:56:48Z"
lastCommitAt: "2026-08-20T04:08:21Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 49
maintainers: ["actions-user", "zp-home", "123caiji"]
openGraphImageUrl: "https://opengraph.githubassets.com/89719c16418e7d6c18695611c446356340baf437fbea0bab3a4f985a7d1c85db/zp-home/dsh-recommend"
---

# 🐋 dsh-recommend

> DSH 插件生态的**透明排行与推荐**：每 5 小时自动抓取全 GitHub 的 `dsh-plugin` 话题仓库，按公开的评分模型打分排序；DSH 插件与静态站消费同一份数据。

<p>
</p>

[设计文档](https://github.com/zp-home/dsh-recommend/blob/HEAD/docs/DESIGN.md) · [评分模型](https://github.com/zp-home/dsh-recommend/blob/HEAD/docs/scoring.md) · [路线图](https://github.com/zp-home/dsh-recommend/blob/HEAD/docs/roadmap.md) · [数据](https://github.com/zp-home/dsh-recommend/blob/HEAD/data/rankings.json) · [中文](https://github.com/zp-home/dsh-recommend/blob/HEAD/README.zh.md)

## ✨ 特性

- **透明**：评分公式、权重、全部原始数据都公开在这个仓库里，任何人 `clone` 后跑一遍 `node scripts/sync.mjs` 即可复算——这是排行类项目信任的基石
- **可信**：官方本体/非插件 denylist（`scripts/exclude-list.json`）+ 榜单前 200 名**深扫插件性验证**（`scripts/scan.mjs` 检测 `dsh` 声明 / `@deepseek-ai/*` 依赖 / cordis 配置 / skills 特征），未检出特征的仓库排除出榜并透明标注；hub 目录抓取失败会让 CI 红，信号源健康度随时可见
- **安全提示（仅供参考）**：市场 GitHub Actions 以公开的只读规则扫描源码和发布 bundle，规则、版本、上限与已知盲区见 [静态安全扫描算法](https://github.com/zp-home/dsh-recommend/blob/HEAD/docs/security-scanning.md)。未命中规则不等于安全，提示不构成安全认证，也不影响评分或安装资格
- **可审计全量**：GitHub Search 单查询超过 1000 条时，采集器按创建日期、仓库大小与 Star 的无重叠闭区间递归分片；`topic-coverage.json` 记录每个叶子查询的 `total_count`、去重数、重试与溢出。任一叶子不完整即终止全量发布，不以部分数据更新榜单
- **自动化**：GitHub Actions 每 5 小时全量重算并提交…
