---
repo: "ddong8/memento"
name: "memento"
description: "A shared brain for your AI coding tools — collects conversations, plans and memory from Claude Code / Cursor / Codex / Obsidian / Antigravity, self-hosted, cross-device, MCP-ready"
readmeQualityOk: true
url: "https://github.com/ddong8/memento"
homepage: "https://mem.ihasy.com"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [53, 31]
topics: ["ai-memory", "claude-code", "developer-tools", "fastapi", "knowledge-graph", "mcp", "memento", "nextjs", "pgvector", "self-hosted"]
stars: 22
forks: 3
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-21T16:28:18Z"
lastCommitAt: "2026-09-12T08:06:49Z"
lastReleaseAt: "2026-05-12T02:03:24Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 35
maintainers: ["ddong8", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/afd59b2b9d9c1740804f3c4d44eb7cfbab87ae3e49e86e57719d0d0eb51bdc3b/ddong8/memento"
---

# Memento

**给你的 AI 工具建个共享大脑**

跨设备、跨工具自动采集 AI 编程对话与记忆,自建后端汇总,Web + MCP 统一查看、搜索、召回。

[快速开始](#-快速开始) · [架构](#️-架构) · [支持的工具](#-支持的-ai-工具) · [自部署](#-自托管部署) · [MCP 接入](#-mcp-记忆服务)

🌐 **Languages**: [中文](https://github.com/ddong8/memento/blob/HEAD/README.md) · [English](https://github.com/ddong8/memento/blob/HEAD/README.en.md)

</div>

---

## ✨ 它能做什么

- 🧠 **跨设备同步对话** — Mac / Linux / Windows 上的 Claude Code / Codex / Cursor / Antigravity 等工具,聊过的内容统一汇总
- 🔍 **混合检索** — BGE-M3 向量 + jieba 分词的全文索引,中英文都能搜
- 🕸️ **知识图谱** — LLM 自动从对话抽实体(项目 / 工具 / 技术 / 人物 / 概念)、关系、观察;超过 7 天的老观察自动压缩成 summary
- 🔗 **MCP 接入** — 8 个 tool(找:`memory_search` / `memory_recall` / `memory_context`;钻:`memory_open` / `memory_conversation` / `memory_graph`;写:`memory_store`;总览:`daily_summary`)外加 4 个 resources;任何 AI IDE 都能直接查、读、改你的记忆
- 📅 **AI 日报** — Celery 每天 23:30 跑两阶段:先为每篇文档生成摘要,再聚合成跨工具每日 digest
- 🔒 **入队前脱敏** — Collector 本地就过 14 类密钥正则(OpenAI / Anthropic / GitHub / Slack / Telegram / AWS / Bearer / 私钥 / URL 内嵌凭证 …),磁盘上 SQLite 队列也安全
- 🌐 **公开分享** — 项目时间线 / 日报一键生成 share 链接,带 GeoIP 访客统计、有效期、随时撤销
- 🛡️ **完全自托管** — Docker Compose 一键起,Postgres + Redis + MinIO 全在你机器上,数据不出门
- 🔐 **多租户隔离** — 多用户独立空间,owner / admin / viewer 三级角色 +…
