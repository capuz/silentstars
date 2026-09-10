---
repo: "Rui-Huang-dotcom/tcm-ai-skill-hub"
name: "tcm-ai-skill-hub"
description: "TCM AI Skill Hub｜一次安装 8 个公开中医 AI Skill，按学习任务自动选用、按来源回答。"
readmeQualityOk: true
url: "https://github.com/Rui-Huang-dotcom/tcm-ai-skill-hub"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["agent-skills", "ai", "ai-agents", "claude-code", "openclaw", "skills", "tcm", "traditional-chinese-medicine"]
stars: 7
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-25T02:24:02Z"
lastCommitAt: "2026-09-10T08:19:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 29
maintainers: ["Rui-Huang-dotcom"]
openGraphImageUrl: "https://opengraph.githubassets.com/6086a4af34f3da1f279b7e441f4d1ca95e871522ede6a735f990de235791aace/Rui-Huang-dotcom/tcm-ai-skill-hub"
---

# TCM AI Skill Hub｜中医 AI 学习总入口

> **一次安装，让 7 个公开中医 AI Skill 进入同一个学习入口：默认从全部来源智能合看，需要时再精确限定。**

很多中医 AI Skill 是按作者或单一任务拆开的。最容易让人困惑的是：有两个倪海厦相关项目，也有两个 TCM 相关项目；另有胡希恕、黄元御、吴鞠通、李可等不同医家的资料。它们并不冲突，只是资料用途不同；但用户没必要在每次提问前先研究该选哪一个。

**TCM AI Skill Hub 的价值，是把全部已安装来源放进同一个候选资料池。** 用户先说学习问题，Hub 再从相关来源中选用资料、标注资料范围；不会为了“凑齐来源”而把无关来源强行写进答案，也不会把不同医家的观点混成一个结论。

## 默认模式：直接问，Hub 从全部来源智能合看

这是大多数人唯一需要的用法。你不必写项目名、内部 ID，也不需要分辨两个倪海厦相关来源。Hub 会先把全部已安装来源作为候选，再优先使用和问题真正相关的资料。

| 你直接怎么问 | Hub 默认优先关注什么 |
|---|---|
| `桂枝汤与麻黄汤的学习重点是什么？` | 教材、经典、方证相关资料；只让有直接关系的来源进入答案 |
| `请用倪海厦解释桂枝汤与麻黄汤。` | 优先关注倪海厦课程出处与体系学习；需要时再参考其他相关来源 |
| `按胡希恕体系解释方证差异。` | 优先使用胡希恕资料；不自动混入其他医家观点 |

如果答案同时使用多类资料，Hub 应分开标注“教材/经典依据”“课程出处”“某医家体系观点”等，而不是写成没有来源边界的一段话。

> **默认模式的原则：全部来源参与判断，只有相关来源进入答案。**

## 想让 7 个来源逐一检查？加一句全量覆盖要求

通常不需要让七个来源都逐一出场。若你正在做学习综述、资料地图或多体系对照，只要在问题后面加一句：

```text
请把全部 7 个已安装来源逐一检查；有相关资料的分别说明，没有相关资料的明确写“不适用”。
```

Hub 此时应先列出本次实际检查的来源和安装状态，再分别呈现教材/经典依据、课程资料、医家体系观点、可比较之处与不能直接合并之处。

> **全量覆盖要求的原则：逐一检查，不等于逐一硬凑答案。**

## 精确模式：需要严谨时，再主动收窄资料范围

如果你正在做原话核验、课程笔记或严格的资料研究，只要在问题里加一句范围限制即可。仍然不需要记住仓库名。

| 你想要的结果 | 直接这样说 |
|---|---|
| 只找倪海厦课程原话与页码 | `只查倪海厦课程原话、课次、截图或 PDF 页码；不要做体系化解释。` |
| 只按倪海厦体系学习 | `只按倪海厦体系解释，并标注为课程体系观点。` |
| 只查 TCM 教材与经典出处 |…
