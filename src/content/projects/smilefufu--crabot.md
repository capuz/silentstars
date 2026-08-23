---
repo: "smilefufu/crabot"
name: "crabot"
description: "Crabot - 你的硅基伙伴"
readmeQualityOk: true
url: "https://github.com/smilefufu/crabot"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 11
forks: 3
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-03-23T06:33:58Z"
lastCommitAt: "2026-08-23T04:09:44Z"
lastReleaseAt: "2026-04-29T13:02:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 52
maintainers: ["smilefufu", "Sincere-68"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ec12513fb7b979801ae365f1118afb87574a477f3c0c2fd0d2f2a3044f91096/smilefufu/crabot"
---

# Crabot

模块化硅基伙伴。将 AI 智能体连接到消息渠道（Telegram、微信等），通过 Web UI 或 CLI 管理，让它们自主处理任务。

## 架构

```
                    +-------------------+
                    |   Admin WebUI     |  :3000
                    |   + REST API      |
                    +--------+----------+
                             |
              +--------------+--------------+
              |                             |
     +--------v--------+          +--------v--------+
     |  Module Manager  |  :19000 |    CLI (crabot)  |
     |  (crabot-core)   |         |  REST API 客户端  |
     +--------+---------+         +-----------------+
              |
    +---------+---------+---------+
    |         |         |         |
 Agent    Channel    Channel   Memory
 :19002+  Host       Telegram  (Python)
          :19010+    :19020+
```

**模块一览：**

| 模块 | 语言 | 说明 |
|------|------|------|
| `crabot-core` | TypeScript | Module Manager — 进程生命周期、端口分配、RPC 路由 |
| `crabot-admin` | TypeScript | Admin WebUI + REST API + 编排层 |
| `crabot-agent` | TypeScript | AI 智能体，多格式 LLM 引擎（Anthropic/OpenAI/Gemini） |
| `crabot-memory` | Python | 长短期记忆（LanceDB + 向量嵌入） |
| `crabot-channel-telegram` | TypeScript | Telegram 渠道 |
| `crabot-channel-wechat`…
