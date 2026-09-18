---
repo: "dpkg-s/ai-memory-template"
name: "ai-memory-template"
description: "Cross-AI shared memory vault - MCP server for persistent memory across AI tools"
readmeQualityOk: true
url: "https://github.com/dpkg-s/ai-memory-template"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-07-22T08:29:00Z"
lastCommitAt: "2026-09-18T08:26:11Z"
lastReleaseAt: "2026-09-18T08:07:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 47
maintainers: ["dpkg-s"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e58ef55cba4e64629dd7e2ef4e15f3d190695c333432e7b57382b95c5104602/dpkg-s/ai-memory-template"
---

# ai-memory-template

**让所有 AI 工具共用同一个长期记忆。**

基于 [MCP](https://modelcontextprotocol.io/)（Model Context Protocol）的跨工具共享记忆库：纯 Markdown 存储、零外部依赖、Obsidian 可视化。WorkBuddy / Codex CLI / Claude Desktop / Cursor 等任何支持 MCP 的客户端即插即用。

---

## 目录

- [为什么需要它](#为什么需要它)
- [特性](#特性)
- [快速开始](#快速开始)
- [实际使用效果](#实际使用效果)
- [23 个工具速查](#23-个工具速查)
- [自定义配置](#自定义配置)
- [用 Obsidian 可视化记忆网络](#用-obsidian-可视化记忆网络)
- [多设备同步与版本控制](#多设备同步与版本控制)
- [技术栈与架构](#技术栈与架构)
- [项目结构](#项目结构)
- [测试与 CI](#测试与-ci)
- [常见问题](#常见问题)

---

## 为什么需要它

你同时用多个 AI 工具吗？它们各有独立的上下文窗口，互相不知道对方做过什么。于是：

- 同一个偏好，你要对每个 AI 重复交代一遍
- A 工具刚修好的坑，B 工具下一轮又从零排查
- 对话一结束，上下文清空，项目决策随之丢失

**ai-memory-template** 给所有 AI 接上同一个记忆库。一个 AI 写进去的知识，其余 AI 全部可读。

| 场景 | 没有共享记忆 | 有共享记忆 |
|------|------------|-----------|
| 你告诉 AI「我用 VS Code、偏好 Python」 | 下次对话又问一遍 | AI 从记忆库读到，直接记住 |
| WorkBuddy 修了一个 bug | Codex 不知道，可能重复排查 | Codex 一查记忆库就明白 |
| 项目架构决策 | 上下文一清就丢 | 永久留在项目页，跨对话保持 |
| 多 AI 协作 | 各自为政，信息割裂 | 共享同一份知识库 |

---

## 特性

### 零外部依赖

只要 Python 3.10+ 和一个 `pip install mcp`。不需要数据库服务、不需要容器、不需要云账号。

> **关于 SQLite 索引**：`memory_read` / `memory_list` 的标题定位走 Python 内置的 `sqlite3`（标准库自带，不是外部依赖），把 O(n) 全库扫描降为 O(1)。索引只是运行时自动生成的**缓存文件**，仅镜像 frontmatter 元数据 —— 正文永不入库、始终实时读盘，**md…
