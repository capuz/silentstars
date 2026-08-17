---
repo: "xmutfyh/dsh-plugin-writing-guard"
name: "dsh-plugin-writing-guard"
description: "Deterministic manuscript integrity guard for AI-assisted academic revision - protects scientific facts, claim strength (causal & evidential), negation, scope and citations during polishing while flagging mechanical AI writing (Scholarship Lock + Epistemic Lock, zero LLM)"
readmeQualityOk: true
url: "https://github.com/xmutfyh/dsh-plugin-writing-guard"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [58, 42]
topics: ["academic-writing", "ai-detection", "deepseek-harness", "dsh-plugin", "llm-writing", "manuscript", "paper-writing", "proofreading", "writing-style", "defensive-writing"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-15T03:41:44Z"
lastCommitAt: "2026-08-17T04:15:45Z"
lastReleaseAt: "2026-08-16T12:15:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 44
maintainers: ["xmutfyh"]
openGraphImageUrl: "https://opengraph.githubassets.com/97717382312e0645ba6ab297295c11ad1bd2363874c52b2f0c8450c38d3c27fc/xmutfyh/dsh-plugin-writing-guard"
---

# DSH Writing Guard

> DeepSeek Harness (DSH) 论文写作守卫：在论文撰写和修改过程中自动检查常见 AI 写作风格、
> 修改残留、防御性表达与机械化句式，并在润色时保护科研事实与科学主张完整性
> （Scholarship Lock + Epistemic Lock——数字、引用、主张强度、否定/零结果、scope 边界都不许被语言修改悄悄改变）。

**适用于：中文论文、英文论文、SCI manuscript、毕业论文、学术写作与论文润色。**

如果你正在寻找：

- DSH 论文去 AI 味插件
- DeepSeek Harness 学术写作插件
- AI writing style checker for academic papers
- academic writing guard / manuscript proofreading
- 论文 AI 痕迹检查
- SCI 写作 AI 味检查

这个插件的定位不是在论文写完之后进行一次"大规模 Humanize"，而是：

**写作前提供规则 → 写作过程中自动守卫 → 修改后自动审计。**

它提供四个 DSH 原生工具：

- `writing_rules`：写作前加载学术写作纪律
- `writing_audit`：检查论文中的 AI-style patterns、revision residue、defensive writing、LLM 高频表达及结构化写作痕迹；v0.6 起支持 Scholarship Lock（传 `original` 对比润色前后科研事实）与作者风格档案（`styleProfile`）；v1.4 起支持 Journal Profile（`journalProfile`）做目标期刊写作契合度；v0.8 起自动路径直接启用双锁（见下）
- `writing_style_profile`：从作者历史论文统计写作风格指标（句长/密度），零 LLM
- `writing_journal_profile`：从目标期刊代表论文蒸馏写作分布（Journal Profile），零 LLM

并支持在 `.md` / `.tex` / `.txt` 论文文件被 `write` / `edit` 修改后自动执行审计（v0.5 增量模式），
将高风险问题反馈给 Agent。**v0.8 起自动审计自动捕获修改前的文本**（`tools/pre-execute` 快照 +
持久化基线缓存），每次写入后直接运行 Scholarship Lock + Epistemic Lock——不需要手动传 `original`。

> 定位：不是 "AI 检测器"，而是一个知道自己在检查什么文档、能解释"为什么报"的写作 linter。
>…
