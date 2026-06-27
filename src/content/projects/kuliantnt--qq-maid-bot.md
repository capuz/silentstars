---
repo: "kuliantnt/qq-maid-bot"
name: "qq-maid-bot"
description: "QQ 官方机器人本地版 Rust 服务"
url: "https://github.com/kuliantnt/qq-maid-bot"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["low-memory", "qq-bot", "rag"]
stars: 13
forks: 3
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-06-17T12:26:12Z"
lastCommitAt: "2026-06-27T00:48:15Z"
lastReleaseAt: "2026-06-25T13:13:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 58
maintainers: ["kuliantnt"]
openGraphImageUrl: "https://opengraph.githubassets.com/500bd9d4dd3928de254ac8a52cc8b79901f1f3c02f9491eeb6f6f8fc95c7172f/kuliantnt/qq-maid-bot"
---

<h1>QQ Maid Bot</h1>
  <p><strong>一个会聊天、会记事，也会主动办事的自托管 QQ AI 助手。</strong></p>
  <p>
  </p>
  <p><sub>22 MiB 可执行文件 · 24 MiB 常驻内存 · 3 个线程 · 以及持续膨胀的代码量</sub></p>
</div>

QQ Maid Bot 使用 Rust 构建，通过 QQ 官方机器人接口运行。它不只是把消息转发给大模型，而是将长期会话、受控记忆、Todo、RSS、知识检索、联网查询和主动推送整合进同一个长期在线的机器人中。

> Rust 单进程 · QQ 官方接口 · 受控长期记忆 · 主动推送 · 模型自动降级

## 项目亮点

### 🧠 不只是一次性聊天

会话可以新建、恢复、重命名和压缩，机器人能够持续维护上下文，而不是每条消息都从零开始。

长期记忆采用确认式流程：普通聊天不会偷偷写入记忆，只有用户明确提交并确认后才会保存。

### 📬 不只是等人发消息

内置 Todo、每日提醒、RSS / Atom 订阅和主动推送能力。

机器人既可以回答问题，也可以在任务到期、订阅更新时主动发送消息。

### 🛡️ 不把稳定性押在一个模型上

独立的 Rust LLM 层支持模型候选链、错误分类和自动降级。

当主模型或流式接口临时不可用时，可以根据配置尝试后备模型或兼容接口，而不是直接让整个机器人停止工作。

### 🦀 为长期在线运行而设计

运行时只需一个 `qq-maid-bot` 进程，主要业务状态统一保存在 SQLite。

项目提供部署脚本、服务控制、健康检查、链路诊断和运行日志，适合部署在个人服务器上持续运行。

## 为什么又造了一个 QQ 机器人？

最开始只是想写一个 Todo。

后来有了：

- RSS
- 天气
- LLM
- 多模型降级
- SQLite
- RAG
- 记忆系统
- Markdown 渲染
- 独立 LLM 抽象层

现在它有四万多行 Rust。

## 它能做什么

| 场景    | 能力                                      |
| ----- | --------------------------------------- |
| 日常聊天  | 多轮会话、自动标题、上下文压缩和历史恢复                    |
| 长期记忆  | 生成记忆草稿，确认后保存，可查看和修改                     |
| 任务管理  | Todo 增删改查、每日提醒、火车行程校验                   |
| 信息订阅  | RSS / Atom 轮询、去重、翻译和主动推送…
