---
repo: "zylc369/OpenSecurity"
name: "OpenSecurity"
description: "AI 驱动的多领域安全分析 Agent 平台 —— 让 LLM 端到端完成安全分析"
url: "https://github.com/zylc369/OpenSecurity"
language: "Python"
languages: ["Python"]
languagePcts: [72]
topics: ["ai-agent", "apk-analysis", "frida", "ida-pro", "llm-security", "opencode", "reverse-engineering", "security", "vulnerability-research", "web-security"]
stars: 25
forks: 6
openIssues: 7
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-14T06:09:27Z"
lastCommitAt: "2026-06-28T01:45:59Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 69
undervaluedScore: 23
maintainers: ["zylc369"]
openGraphImageUrl: "https://opengraph.githubassets.com/d48a49f3318f07e491f5488be087ca57803f0d17f4d30df18a7461c9970ae818/zylc369/OpenSecurity"
discussionCount: 0
---

# OpenSecurity

> **中文** | [English](README.en.md)

> AI 驱动的多领域安全分析 Agent 平台 —— 让 LLM 真正像一个研究员团队那样工作。

## 这是什么

OpenSecurity 让 LLM 端到端地完成一次安全分析：拿到目标文件，自己编排工具链（IDA Pro、Frida、apktool……），一步步推进，最后产出一份可验证的报告。不是问一句答一句，不是停在"我建议你用 IDA 看看"，而是真的把工具跑起来、读输出、做推理、再决定下一步。

覆盖四个安全分析领域 + 一个编排器 + 一个自我进化引擎：

| Agent | 负责什么 |
|-------|---------|
| `security-coordinator` | 复合安全任务拆分 + 分发到专业 Agent |
| `binary-analysis` | 二进制逆向：算法还原、壳检测、漏洞挖掘 |
| `mobile-analysis` | 移动端逆向：APK/IPA 反编译与 Java/Native 分析 |
| `web-analysis` | Web 安全：URL/源码的漏洞审计与攻击链构造 |
| `ai-security-analysis` | AI 应用安全：LLM 应用的提示注入与越狱 |
| `security-analysis-evolve` | 自我进化：从实战复盘中沉淀脚本与知识库 |

## 核心架构

```
.opencode/
├── agents/                  # 6 个 Agent 的主 prompt（LLM 的工作守则）
├── agents-rules/            # 跨 Agent 共享的 prompt 片段（Plugin 自动展开）
├── plugins/
│   └── security-analysis.ts # Plugin：上下文持久化、session 管理、工具拦截
├── binary-analysis/         # 各领域的工具脚本 + 知识库
├── mobile-analysis/
├── web-analysis/
└── ai-security-analysis/
```

**三层分离**：
- **AI 编排层** — Agent prompt（何时调用什么工具、如何推理），由 LLM 执行
- **工具层** — Python/Bash 脚本（query.py、update.py、initial_analysis.py……），工程师维护
- **知识库层** — 按需加载的 Markdown（壳处理策略、Unicorn 模板、Frida 速查……），evolve Agent 持续沉淀

关键决策：**LLM…
