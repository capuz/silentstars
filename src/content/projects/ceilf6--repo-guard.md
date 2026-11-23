---
repo: "ceilf6/repo-guard"
name: "repo-guard"
description: "AI-powered GitHub Actions bot for automated PR code review and issue quality assessment"
readmeQualityOk: true
url: "https://github.com/ceilf6/repo-guard"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 0
closedIssues: 13
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-20T07:59:24Z"
lastCommitAt: "2026-11-23T10:20:28Z"
lastReleaseAt: "2026-05-21T09:26:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 21
maintainers: ["ceilf6"]
openGraphImageUrl: "https://opengraph.githubassets.com/0446bc716b74ef1ba881775033c81fc8c71a95b40747bcd11c64e7113a24f3a5/ceilf6/repo-guard"
---

# Repo Guard

**智能体开发闭环 issue → PR → CR 中的评审环节**，以 GitHub Action 形态交付，已上架 GitHub Marketplace。

AI-powered review bot for GitHub Issues and Pull Requests, built as the CR stage of an agent-driven development loop.

## 为什么造这个轮子

社区不缺 AI review bot，但它们大多面向**人类协作**：评审意见写给人看，流程的终点是 approve 按钮。而在智能体驱动的开发方式里，评审是**循环的一环**——智能体按 issue 开发、提 PR，CR 给出结论与行级意见，智能体消费这些反馈进入下一轮修复，直到质量门放行：

```
issue → dev → PR → CR ──批准──→ merge
         ↑            │
         └─── fix ←───┘ 请求修改
```

repo-guard 是为这个闭环造的 CR 环节：输出稳定的结论契约与可定位的行级意见——既给人看，也让下一轮智能体能稳定消费。

> repo-guard 是我 Harness 工程实践中的 CR 环节；要在一个新仓库里快速冷启动整套 Harness 环境，见 [harness-kit](https://github.com/ceilf6/harness-kit)。

## 设计决策

1. **知识层 / 执行层分离** — 评审标准（system prompt、评审框架、评分规则）沉淀在独立的 [ceilf6-skills](https://github.com/ceilf6/ceilf6-skills) 仓库，本仓库只做运行时：事件监听、数据获取、LLM 调用、评论发布。迭代评审标准不需要动一行运行时代码。
2. **输出即契约** — 评审结论是固定的中文枚举（`批准` / `评论` / `请求修改` / `需要人工判断`）加结构化行级意见；解析器与下游智能体都依赖这份契约，评测中对契约稳定性做断言。
3. **评审质量本身也过质量门** — `npm run eval:quality` 用真模型跑 4 个固定评审场景，断言输出契约、行级定位与可操作性。给评审 bot 装上它给别的仓库装的东西。

---
