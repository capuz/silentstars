---
repo: "QuickerHub/quicker-rpc"
name: "quicker-rpc"
description: "QuickerAgent: AI desktop assistant for Quicker. Monorepo with QuickerRpc plugin + qkrpc CLI — headless action create/edit/run via MCP, HTTP, or JSON CLI (StreamJsonRpc named pipe)."
readmeQualityOk: true
url: "https://github.com/QuickerHub/quicker-rpc"
homepage: "https://github.com/QuickerHub/quicker-rpc/blob/main/docs/quicker-agent.md"
language: "TypeScript"
languages: ["TypeScript", "C#"]
languagePcts: [52, 30]
topics: ["cli", "quicker", "streamjsonrpc", "ai-agent", "automation", "csharp", "electron", "mcp", "model-context-protocol", "typescript"]
stars: 14
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-30T19:57:15Z"
lastCommitAt: "2026-10-27T09:16:26Z"
lastReleaseAt: "2026-06-01T05:03:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 45
maintainers: ["ceastld"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6f34229d8084402a66b74b20b1d527e02288b085976aedc56e62f328222e493/QuickerHub/quicker-rpc"
---

# quicker-rpc

> 仓库：[QuickerHub/quicker-rpc](https://github.com/QuickerHub/quicker-rpc)

本 monorepo 包含三件紧密相关的东西：

| 组件 | 面向谁 | 一句话 |
|------|--------|--------|
| **[QuickerAgent](https://github.com/QuickerHub/quicker-rpc/blob/HEAD/docs/quicker-agent.md)** | Quicker 终端用户 | 桌面 AI 副驾：找 / 跑 / 改 / 发动作，全局快捷键秒开 |
| **QuickerRpc 插件** | 同上（随动作安装） | 在 Quicker 进程内托管 RPC 服务 |
| **`qkrpc` CLI** | 开发者、脚本、第三方 Agent | 命令行 + MCP + HTTP，无头读写 Quicker 动作 |

底层统一：**命名管道 + StreamJsonRpc**，CLI 作客户端连插件内的 `IQuickerRpcService`。

**完整文档索引** → [docs/README.md](https://github.com/QuickerHub/quicker-rpc/blob/HEAD/docs/README.md) · **产品能力与规划** → [docs/product/README.md](https://github.com/QuickerHub/quicker-rpc/blob/HEAD/docs/product/README.md)

---

## 选你的入口

| 我想… | 怎么做 |
|-------|--------|
| 用 AI 管理 Quicker 动作 | 安装 [QuickerAgent](https://github.com/QuickerHub/quicker-rpc/releases/latest)，见 [docs/quicker-agent.md](https://github.com/QuickerHub/quicker-rpc/blob/HEAD/docs/quicker-agent.md) |
| 在 Cursor / Claude / VS Code 里写动作 | 安装 `qkrpc` 后 `qkrpc agent setup`，或 [Cursor 插件从仓库安装](https://github.com/QuickerHub/quicker-rpc/blob/HEAD/cursor-plugin/quicker-rpc/README.md)，见…
