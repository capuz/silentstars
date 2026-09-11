---
repo: "z7ping/agent-lens"
name: "agent-lens"
description: "看清 AI 编码智能体的每一次可观察行动。 ·  Trace your agents, down to every tool and MCP."
readmeQualityOk: true
url: "https://github.com/z7ping/agent-lens"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["agent-observability", "agent-tracing", "ai-agents", "cordis", "cordis-plugin", "developer-tools", "llm-agents", "local-first", "mcp", "typescript"]
stars: 5
forks: 0
openIssues: 12
closedIssues: 55
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-12T16:20:28Z"
lastCommitAt: "2026-09-11T08:15:46Z"
lastReleaseAt: "2026-08-13T11:29:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 96
undervaluedScore: 61
maintainers: ["z7ping"]
openGraphImageUrl: "https://opengraph.githubassets.com/23806417df0c3507994d2381623fe1f49b8ec0b372a0a253dd2e51bf348e1d86/z7ping/agent-lens"
---

</p>

<h1 align="center">AgentLens | 智能体透镜</h1>

</p>

</p>

> [!IMPORTANT]
> AgentLens 1.0 目前处于 Alpha 阶段。1.0 是一次 Clean Rebuild，以 Canonical Observation + Evidence 为核心；0.x 仅作为经过验证的行为和设计参考，不进入 1.0 运行时。

## 为什么需要 AgentLens

Codex、Claude Code、Pi、Hermes、OpenCode 等工具把会话、工具调用和能力配置分散在 JSONL、SQLite、Hook 与配置目录中。AgentLens 把这些**可观察事实**整理成统一、可追溯的视图，帮助你回答：

- 智能体刚才做了什么，在哪一步失败？
- 一次长任务经历了哪些轮次、工具调用和生命周期事件？
- 某条结论来自历史记录、原生尾读还是 Runtime Hook？
- 本机安装了哪些 Skill、MCP、Plugin；哪些真正被调用过？
- 哪些数据完整、哪些只有部分覆盖、哪些来源当前不可用？

AgentLens 展示的是来源能够证明的行为，不声称读取隐藏思维，也不会把推测包装成事实。

## 30 秒开始使用

### 桌面版

前往 [GitHub Releases](https://github.com/z7ping/agent-lens/releases) 下载与你的平台和架构匹配的安装包：

- Windows x64：`AgentLens-<version>-Setup-x64.exe`
- macOS：Apple Silicon / Intel 对应的 DMG
- Linux：x64 / arm64 对应的 AppImage 或 DEB

桌面版和 npm 版共用同一套 Runtime、默认数据目录与数据模型；同时安装也不会创建第二套数据库。

### npm / CLI

需要 Node.js 22.23.0 或更高版本：

```bash
npm install -g @z7ping/agent-lens
agent-lens setup
agent-lens service start
```

然后打开 <http://127.0.0.1:56789>。

`setup` 只完成一次性初始化，不会自动启动长期 Daemon，也不会默认开启登录自启。需要前台调试时使用 `agent-lens start`。

检查运行状态：

```bash
agent-lens status
agent-lens doctor
```

## 你会看到什么

| 页面 | 用途 |
| --- | --- |
| **任务复盘** |…
