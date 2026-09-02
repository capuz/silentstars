---
repo: "zhengjinjun1975/codeagent-minimal"
name: "codeagent-minimal"
description: "手搓代码审查智能体：给需要审代码但不写代码的人。纯标准库零依赖，静态分析(语法/复杂度/安全) + 可选LLM审查，0-100分。"
readmeQualityOk: true
url: "https://github.com/zhengjinjun1975/codeagent-minimal"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["code-agent", "code-review", "security", "static-analysis"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-08-06T03:29:20Z"
lastCommitAt: "2026-09-02T08:05:17Z"
lastReleaseAt: "2026-08-23T13:04:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 42
maintainers: ["zhengjinjun1975"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ecafae94b2f5623b3c07fc7f589004bfdd0b945489349e2fbe9f909f52b5905/zhengjinjun1975/codeagent-minimal"
---

# CodeAgent Minimal — 原子化可组装代码质量治理 Agent

> ⭐ **觉得有用就给我们一个 Star** —— 你的 Star 让这个项目被更多人看见，支持我们持续迭代。
> [](https://github.com/zhengjinjun1975/codeagent-minimal)

> **v0.3.0 · 原子化重构** — 把代码审查 / 测试 / 依赖漏洞 / 变异 / 模糊 / 回归 / 自进化等能力拆成 **32 个可独立运行、可任意组装的原子智能体**，由统一运行时编排、统一入口 `codeagent` 驱动。
> **开源内核 + 闭源编排**：本仓库开源 32 原子 + 统一运行时/入口（Apache-2.0）；重型闭源编排（assembler / orchestrator / CodeMode）位于独立工作区，不随本仓库分发。

**它能帮你**：一键代码审查、自动化测试、依赖漏洞扫描、变异测试、模糊测试、回归验证——32 个原子智能体，任意组装，零第三方依赖，数据不出厂。

---

## 文档导航

| 文档 | 说明 |
|------|------|
| **[docs/PROMOTION.md](https://github.com/zhengjinjun1975/codeagent-minimal/blob/HEAD/docs/PROMOTION.md)** | 开源宣传文案：场景痛点 / 方法论 / 诚实边界（为什么是「极简 + 本地 + 原子化」） |
| **[docs/CAPABILITY.md](https://github.com/zhengjinjun1975/codeagent-minimal/blob/HEAD/docs/CAPABILITY.md)** | 能力域与优势：8 大能力域 + 5 大优势 + 定位一句话 |
| **[docs/ATOMS_GUIDE.md](https://github.com/zhengjinjun1975/codeagent-minimal/blob/HEAD/docs/ATOMS_GUIDE.md)** | 32 原子逐个指南：能力 / 入参 / 返回信封 `{ok,data}` / 示例代码（真实信封核实），含独立运行 + 统一入口两种调用 |
| **[docs/INTEGRATION_GUIDE.md](https://github.com/zhengjinjun1975/codeagent-minimal/blob/HEAD/docs/INTEGRATION_GUIDE.md)** | 对接传统框架（LangChain / CrewAI / AutoGen / OpenAI Agents SDK / Claude Code）：作为…
