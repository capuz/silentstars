---
repo: "open-ace/open-ace"
name: "open-ace"
description: "Self-hosted enterprise AI workspace and governance platform"
readmeQualityOk: true
url: "https://github.com/open-ace/open-ace"
homepage: "https://www.open-ace.com"
language: "Python"
languages: ["Python"]
languagePcts: [82]
topics: ["ai-governance", "ai-workspace", "claude-code", "enterprise-ai", "self-hosted", "codex-cli", "qwen-code", "zcode-app"]
stars: 45
forks: 7
openIssues: 35
closedIssues: 1329
watchers: 0
contributors: 10
recentReleases: 3
createdAt: "2026-03-20T12:13:31Z"
lastCommitAt: "2026-08-26T04:16:59Z"
lastReleaseAt: "2026-07-14T14:07:11Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 99
undervaluedScore: 47
maintainers: ["open-ace-bot", "richardhuang", "blueberry521"]
openGraphImageUrl: "https://opengraph.githubassets.com/5490f86a822bd76ba49c30dc0029f84b1d3af39ffa69e8cd51bd2d01b8db4504/open-ace/open-ace"
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

**Open ACE** 是一个开源的**自托管 AI Coding Agent 工作台、远程执行层与治理控制面**：开发者可以在浏览器里统一使用 Claude Code、Qwen Code、Codex、ZCode、OpenClaw 等 AI 编码工具，并把它们运行在团队自己的远程机器上；管理员可以集中管理 API Key、权限、成本、配额、审计和合规；团队还可以把 GitHub Issue 驱动的 AI 自主开发工作流纳入同一套平台。

它适合已经把 AI Coding Agent 引入真实研发流程的组织，尤其适合需要私有化部署、内网远程机器、统一密钥代理、团队配额和可追溯审计的研发团队、IT 团队和 AI 平台团队。

| 问题 | 解决方案 |
|------|----------|
| 🤖 **团队同时使用多个 AI Coding Agent** | 多 CLI 工作台统一 Claude Code、Qwen Code、Codex、ZCode、OpenClaw 等工具 |
| 🖥️ **Agent 需要跑在内网、测试机或 GPU 机器上** | Remote Agent 让 AI CLI 直接在目标机器执行 |
| 🔑 **API Key 不该散落在个人电脑和远程机器上** | API Key Proxy 把真实密钥留在服务端，只下发短生命周期、可回收的代理令牌 |
| 🔄 **希望 AI 能围绕 Issue 持续开发，而不只是单次对话** | AI 自主开发工作流支持 Issue 解析、规划、执行、PR、评论与人工中断后继续 |
| 📊 **成本、配额、风险和审计需要可见** | Manage 模式提供用量、成本、配额、异常、审计和合规视图 |

**你可以用 Open ACE 做什么：**

- 给团队一个统一入口，管理本地/远程 AI coding 会话、提示词、历史记录和项目上下文
- 通过 Remote Agent 把 Claude Code、Qwen Code、Codex、ZCode、OpenClaw 等 CLI 跑在团队自己的开发机、测试机或 GPU 机器上
- 围绕 GitHub Issue 创建 AI 自主开发任务，让工作流完成规划、编码、提交 PR、批注和人工接管/恢复
- 加密保存 LLM API Key，通过短生命周期、可回收的代理令牌给本地和远程会话安全调用模型
-…
