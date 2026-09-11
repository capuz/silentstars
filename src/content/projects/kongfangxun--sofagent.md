---
repo: "KongFangXun/sofagent"
name: "sofagent"
description: "Audit-first governance layer for AI coding agents — 24 git-diff rules, HMAC tamper-evident chain, snapshot rollback (95 tools, 13 plugins)"
readmeQualityOk: true
url: "https://github.com/KongFangXun/sofagent"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [75]
topics: ["typescript", "agent-governance", "harness", "agent-audit", "agent-orchestration", "ai-safety", "enterprise-ai", "git-hooks", "prompt-injection", "compliance"]
stars: 43
forks: 5
openIssues: 4
closedIssues: 0
watchers: 2
contributors: 5
recentReleases: 10
createdAt: "2026-06-18T08:53:06Z"
lastCommitAt: "2026-09-11T08:09:50Z"
lastReleaseAt: "2026-06-25T16:30:34Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 33
maintainers: ["KongFangXun"]
openGraphImageUrl: "https://opengraph.githubassets.com/4fd019c33933d33fb2af0715d8797c1626b1a06635c14bd189471b5bc2f2f790/KongFangXun/sofagent"
discussionCount: 2
---

# sofagent

  
</p>

---

## 这是什么

> 💬 **一句话版本**：进场时它替你把业务摸清、写成文件；离场后你的数字员工每次改代码、动文件，都按文件过一道安检、留一份记录、存一个快照——出事能查、能回滚，这就是 sofagent 干的事。

**开源 FDE Harness 层。**一人公司 / 小企业的 AI 落地工程师——不睡觉、不离职、自带审计官。**横跨成熟 Agent（执行体：DSH / OpenClaw / WorkBuddy）、纵贯模型层（智力源：通用大模型 + 专属小模型 / 后训练模型）**，嵌在两者之间做治理。以 **FDE 插件 + Skill + MCP + CLI + Dashboard** 五种形态分发：进场，把业务流梳理清楚、把本体图谱构建起来、把 AI 节点部署到位；离场，审计每一次变更，持续优化。

sofagent 不造 Agent——执行能力交给成熟宿主（模型 + 工具 + 会话），它交付的是 **FDE Harness 层**：FDE 方法论 × Harness 工程，同一件事的两个阶段——**进场生成判断**（哪里该上 AI，写成机器可判定的文件），**离场驻留判断**（按文件 7×24 执行、审计每次变更）。约束层五种能力：注入 · 审计 · 回溯 · 沉淀 · 进化，装进任何已有 Agent；让任何模型（通用或专属）都被管住（注册/灰度/训练/部署全留痕）。两个阶段怎么咬合、为什么拆不开，见[下文专章](#什么是-fde-harness)。

> 🚂 **后训模块为什么在治理仓里**（30 秒答案）：治理的天花板是数据——审计发现的错误（哪些任务做砸了、哪种输出不合格）正是训练的燃料。后训模块把「审计出来的问题 → 修复问题的模型」这条闭环接通，让治理数据反哺模型层；训练资产本身走商业侧交付，治理仓只保留协议与接口（外部化 / 可配置）。

  <sub>零配置审计实拍：一行命令审计最近一次 commit，密钥泄漏当场拦截</sub>
</p>

<details>
<summary>🗺️ 系统架构总览（FDE Harness 五模块编制）</summary>

  <sub>约束 Agent 行为 · 审计每次变更 · 沉淀经验（五模块编制，治理/执行模块规划中；完整交互版见 <a href="./docs/ARCHITECTURE.md">ARCHITECTURE</a>）</sub>
</p>

</details>

> 🏞️ 大厂给你"水"（大模型）和"河床"（Agent 平台），但水是原水，你不敢直接喝。sofagent 是帮你把河里的水让整个城市用起来的工程——堤坝不让水泛滥、自来水厂把原水变直饮水、管网把水送到每家每户的水龙头。模型给 90%…
