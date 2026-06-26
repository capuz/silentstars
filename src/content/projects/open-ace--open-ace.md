---
repo: "open-ace/open-ace"
name: "open-ace"
description: "Self-hosted enterprise AI workspace and governance platform"
url: "https://github.com/open-ace/open-ace"
homepage: "https://www.open-ace.com"
language: "Python"
languages: ["Python"]
languagePcts: [77]
topics: ["ai-governance", "ai-workspace", "claude-code", "codex", "enterprise-ai", "self-hosted", "qwen-code-cli"]
stars: 22
forks: 2
openIssues: 36
closedIssues: 602
watchers: 0
contributors: 7
recentReleases: 1
createdAt: "2026-03-20T12:13:31Z"
lastCommitAt: "2026-06-26T06:47:08Z"
lastReleaseAt: "2026-06-02T11:06:01Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 49
maintainers: ["richardhuang", "cfh1113", "blueberry521"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6a1f5ae4664630b1543fb4a9a3c02c884a5f8a6e16a217bbe30683ddd3be116/open-ace/open-ace"
discussionCount: 2
---

</p>

<h1 align="center">Open ACE</h1>

  <strong>AI Computing Explorer</strong><br>
  <em>自托管 AI Coding Agent 工作台与治理控制面</em>
</p>

</p>

</p>

</p>

---

## 🎯 这是什么？

**Open ACE** 是一个开源的**自托管 AI Coding Agent 工作台与治理控制面**：开发者可以在浏览器里统一使用 Claude Code、Qwen Code、Codex、OpenClaw 等 AI 编码工具，并把它们运行在团队自己的远程机器上；管理员可以集中管理 API Key、权限、成本、配额、审计和合规。

它适合已经把 AI Coding Agent 引入真实研发流程的组织，尤其适合需要私有化部署、内网远程机器、统一密钥代理、团队配额和可追溯审计的研发团队、IT 团队和 AI 平台团队。

| 问题 | 解决方案 |
|------|----------|
| 🤖 **团队同时使用多个 AI Coding Agent** | 多 CLI 工作台统一 Claude Code、Qwen Code、Codex、OpenClaw 等工具 |
| 🖥️ **Agent 需要跑在内网、测试机或 GPU 机器上** | Remote Agent 让 AI CLI 直接在目标机器执行 |
| 🔑 **API Key 不该散落在个人电脑和远程机器上** | API Key Proxy 把真实密钥留在服务端，只下发短期代理令牌 |
| 📊 **成本、配额、风险和审计需要可见** | Manage 模式提供用量、成本、配额、异常、审计和合规视图 |

**你可以用 Open ACE 做什么：**

- 给团队一个统一入口，管理本地/远程 AI coding 会话、提示词、历史记录和项目上下文
- 通过 Remote Agent 把 Claude Code、Qwen Code、Codex、OpenClaw 等 CLI 跑在团队自己的开发机、测试机或 GPU 机器上
- 加密保存 LLM API Key，通过短期代理令牌给本地和远程会话安全调用模型
- 给管理者一套控制面板，查看 Token、成本、异常、配额、审计、合规报告和 ROI
- 在自己的网络里部署，保留企业数据边界，并逐步接入 SSO、飞书/钉钉和 Kubernetes

## 🔥 近期功能亮点

| 功能 | 为什么重要 |
|------|------------|
| AI Coding Agent 控制面 | 把团队已在使用的多个 AI CLI 纳入统一入口、权限、成本和审计体系 |
| 远程工作区与 Remote Agent |…
