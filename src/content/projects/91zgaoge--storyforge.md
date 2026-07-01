---
repo: "91zgaoge/StoryForge"
name: "StoryForge"
description: "🌿 StoryForge (草苔) — AI导演式小说创作系统。Tauri+Rust驱动的桌面写作软件，集成知识图谱、伏笔追踪、StyleDNA风格引擎、协同编辑、7阶段全自动创作工作流。让AI成为你的创作搭档，越写越懂你。"
url: "https://github.com/91zgaoge/StoryForge"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [71, 25]
topics: ["ai-writing-assistant", "collaborative-editing", "creative-writing", "desktop-app", "fiction-writing", "knowledge-graph", "llm", "markdown-editor", "narrative-design", "novel-writing"]
stars: 44
forks: 12
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-04-11T02:58:27Z"
lastCommitAt: "2026-07-01T07:04:26Z"
lastReleaseAt: "2026-04-30T09:08:59Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 41
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/1d26fda02581a433e5118c770527102c8d7edba5670db309320e5ffede3ba5b2/91zgaoge/StoryForge"
---

</p>

# StoryForge (草苔) — AI 辅助小说创作系统

> 🌿 越写越懂的 AI 小说创作桌面应用
>
> 专为小说作者打造的创作工作台：幕后管理故事/角色/场景/世界观，幕前沉浸式写作，AI 在需要时随行辅助。

**最新动态**：v0.23.74 场景优先架构迁移——`scenes.content` 为唯一叙事真相源，Chapter 降级为只读出版容器。创世提示词场景化（目标→冲突→转折），幕前编辑器纯正文无缝拼接。v0.23.73 全文重复根治。

> **上一版**：v0.22.4 异星球末世生存复合题材创作流程优化（GenreResolver 题材解析 + 意图图资产发现 + 模型网关资产标签调度 + TimeSliced 次要题材补强）。v0.22.0 TimeSliced 全资产注入 + Inspector 全资产注入 + 意图调度接线 + 算力档案消费 + 资产→生成参数规则映射。

> 🐛 v0.13.0 引入**分时介入架构**，解开 AI 长篇小说创作中「质量与速度不可兼得」的根本矛盾：

> 🌿 第一性原理：**把大灾难变成即时可见的小债务。** 蚂蚁搬家，不积巨石。

AI 写长篇小说，强化专业资产（合同/伏笔/Inspector/记忆）就慢，放松就崩。v0.13.0 把"写"和"审"解耦成三条独立时间线：

1. **写作时刻（< 15s 秒出正文）**：`WriteTimeBundle` 只带最小约束（合同红线 + 角色核心 + 场景大纲 + 题材反模式），直连 LLM 单轮生成，立即返回。不跑 Preflight 补合同、不跑 Inspector、不跑 Rewrite。
2. **审计时刻（后台 30-90s）**：正文返回后，`AuditExecutor` 在后台异步跑 7 维 Inspector，发现的问题以 **inline 标注**（ai_audit 类型，按 severity 红黄蓝着色）回流到编辑器。用户当场处理小债，不让它滚成大灾难。
3. **洞察时刻（每 5 段深度报告）**：`InsightExecutor` 汇总追读力趋势 + 追读债务 + 标注盘点，产出整体健康度报告，在「叙事分析」页呈现。

顶栏新增**债务指示器**，实时显示未处理标注数，超阈值红色警告。

**Phase 0 实测验证**（qwen3.6-35b，3 场景 A/B 盲测）：最小约束 vs 全量资产平均质量差距仅 **7.9%**（< 30% 阈值），且会被后台审计追平。证实"慢的根源不是资产量，而是同步链路堆叠的 Inspector/Rewrite"。

设计文档见…
