---
repo: "tang730125633/huangque-main-site"
name: "huangque-main-site"
description: "黄雀主站建设 — 抖音评论区获客 + AI 内容工作台官网"
readmeQualityOk: true
url: "https://github.com/tang730125633/huangque-main-site"
language: "Python"
languages: ["Python"]
languagePcts: [73]
stars: 5
forks: 2
openIssues: 0
closedIssues: 103
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-06-15T03:46:57Z"
lastCommitAt: "2026-08-28T12:22:27Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 62
maintainers: ["kong74007-ui", "LU-003", "yuelei-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab383ca8aa87774e11d74a1dec10e437f98ac3d37f0790593c0d6b3bb33b067c/tang730125633/huangque-main-site"
---

</p>

# 黄雀 AI 创智 · 主站

**评论区获客 + AI 内容生产的一站式工作台。** 黄雀把内容采集、意图筛选、文案、作图、配音、视频、资产与运营管理串成一条可交付的生产线。

> 私有生产仓库，请勿公开。生产站：[huangquechuanmei.com](https://huangquechuanmei.com) · 运营后台：`/admin-console`

[AI 协作规则](https://github.com/tang730125633/huangque-main-site/blob/HEAD/AGENTS.md) · [团队 Git 规矩](https://github.com/tang730125633/huangque-main-site/blob/HEAD/docs/团队Git协作规矩.md) · [视觉规范](https://github.com/tang730125633/huangque-main-site/blob/HEAD/DESIGN.md) · [生产与恢复手册](https://github.com/tang730125633/huangque-main-site/blob/HEAD/deploy/生产环境清单与还原手册.md)

---

## 产品闭环

1. **发现需求** — 从抖音、小红书、视频号采集内容与评论，筛出有明确意图的客户线索。
2. **生产内容** — 用文案、图片、音频、数字人与视频能力完成创作。
3. **沉淀资产** — 统一保存形象、音色、素材与生成结果，方便复用和交付。
4. **运营管理** — 用点数、任务、渠道健康、日志和充值审批控制成本与风险。

平台统一使用账号与点数体系：任务提交时预扣，失败自动退点；生成任务进入异步队列，完成后回到资产库。

## 核心工作台

前端唯一正本位于 [`site/workbench/`](https://github.com/tang730125633/huangque-main-site/blob/HEAD/site/workbench/)；`huangque-web/` 是历史副本，不再作为修改入口。

| 场景 | 页面 | 主要能力 |
|---|---|---|
| 今日行动 | `dashboard.html` | 工作台概览、任务与经营状态 |
| 内容生产 | `script.html` · `banana.html` · `audio.html` · `video.html` | 文案、作图、配音、数字人与多类视频 |
| 采集获客 | `collect.html` · `leads.html` | 内容采集、转写、评论意图筛选与客户名单 |
| 资产交付 | `assets.html` ·…
