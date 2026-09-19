---
repo: "ParticleLight/dsh-all-usage"
name: "dsh-all-usage"
description: "DeepSeek Harness 用量看板 / Usage dashboard: tokens, cache, model/provider/workspace analytics, DeepSeek balance, heatmap, and CSV export."
readmeQualityOk: true
url: "https://github.com/ParticleLight/dsh-all-usage"
homepage: "https://github.com/ParticleLight/dsh-all-usage#readme"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["dsh-plugin", "analytics", "cache", "csv-export", "deepseek-harness", "dsh", "token-usage", "usage-dashboard"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-17T12:07:54Z"
lastCommitAt: "2026-09-19T02:47:51Z"
lastReleaseAt: "2026-08-29T12:16:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 56
maintainers: ["ParticleLight", "Make0209"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2fcb74b26dfb7edfac08736d262f83cf6b84d0eb9b490006c64fd95f927ad92/ParticleLight/dsh-all-usage"
discussionCount: 0
---

# dsh-all-usage

[中文](#中文) · [English](#english)

## 中文

DeepSeek Harness 全量用量看板：按模型、供应商、工作区和时间范围分析 Token、缓存与账户余额。

### 功能

- **热力图**：53 周使用热力图；按工作区筛选并查看每日回合与 Token 明细
- **模型统计**：支持混合查看、按模型合并、按供应商汇总三种维度，展示调用次数、各类 Token 与缓存命中率；模型行与筛选下拉显示真实厂商品牌 SVG 图标（未知/混牌保持中性）
- **摘要与工作区**：Token 用量、缓存命中、估算成本、账户余额、连续使用、工作区 Token 分布和明细
- **成本统计**：从 models.dev 同步模型价格；按输入、输出、缓存读取和缓存写入四个桶计算，保存价格快照，明确区分已计价、免费模型和未计价调用
- **导出**：按当前时间范围和模型聚合方式导出 CSV
- **时间范围**：今日、近 30 天、近 90 天、全部，或在全部可扫描历史日数据中自定义起止日期；热力图始终展示最近 53 周
- **工作区别名**：在侧栏入口打开看板后管理，持久化保存到 $DSH_HOME/storages 的 KV 单元 `all_usage_aliases`
- **界面语言**：在看板顶部切换中文与 English；选择会保存到浏览器本地
- **完整历史与增量重建**：基线扫描全部可读历史会话；独立用量账本同时作为每会话游标——未变化的会话直接复用账本，新增事件只增量回填，长历史重启不再全量重建
- **重启免读**：用持久化日志的 revision 作为每会话的变更信号（只读头部行 + stat，不读全量）——日志未变的会话重启时连事件都不读，直接从账本复用；仅日志变化（新增/修改）的会话才做增量读取
- **数据健康与按需刷新**：扫描完成后浏览器只检查轻量状态版本，只有用量、别名或同步状态变化时才拉完整历史；显示本次数据更新时间、历史扫描健康、revision 免读、实际读取、账本恢复和失败，网络异常保留上次成功数据并可重试
- **工作区注册同步**：监听 DSH 的 `domain/changed` 事件自动跟随工作区注册表——注册表一有改动（创建/删除/重命名/重排/归档/成员变化）就重读 `workspaceRegistry.list()`；只对新增/删除的工作区做增量处理，未变化的已有工作区直接复用已计算账本（零重扫）。统计严格限定已注册工作区：未注册 cwd（含存在但未登记目录）一律忽略
- **性能优化**：Host 在 ingest 时维护 local/UTC 的日期、工作区、模型身份日级 cube 与单日小时桶；scope 查询按 bucket…
