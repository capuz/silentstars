---
repo: "qa296/astrbot_plugin_memora_connect"
name: "astrbot_plugin_memora_connect"
description: "A plugin that mimics the biological hippocampus, building a memory network from \"concept nodes\" and \"relationship links\". It supports memory formation, retrieval, forgetting, and consolidation, reviews chats using a \"bimodal\" time distribution, and can save memories periodically."
originalDescription: "一款模仿生物海马体、通过“概念节点”与“关系连接”构成记忆网络，具备记忆形成、提取、遗忘、巩固功能且采用“双峰”时间分布回顾聊天，记忆可被定期保存的插件。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/qa296/astrbot_plugin_memora_connect"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 35
forks: 4
openIssues: 4
closedIssues: 17
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-08-16T09:34:34Z"
lastCommitAt: "2026-11-17T14:47:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 34
maintainers: ["qa296"]
openGraphImageUrl: "https://opengraph.githubassets.com/d47dc8a3eda3c266929645fc967eb4dd7d38bb2cb56cdf5bc3b7ebaf20c51f88/qa296/astrbot_plugin_memora_connect"
---

# AstrBot Memora Connect

**A hippocampus-mimicking AI memory plugin that gives chatbots persistent memory**

---

## Project Overview

Memora Connect gives AstrBot human-like memory. The LLM automatically extracts memories, people, places, and relationships from conversations and writes them into a single SQLite database (partitioned by chat). Before each LLM request, it recalls relevant memories by relevance and injects them.

```
Conversation → idle/threshold-triggered LLM analysis → memories/entities/relations/impressions UPSERT into database
                                            ↓
LLM request → keyword + graph association (+ semantic vectors) three-way recall fusion → context injection
```

## Core Capabilities

| | |
|---|---|
| 🧠 Memory formation | After 60s of idle time or once a threshold number of messages accumulates, a single LLM call batch-analyzes the session, producing memories, entities, relations, and impressions |
| 🔍 Three-way recall | Keyword (FTS5 trigram) · graph association (entity inverted index + adjacency) · semantic vectors (optional, requires an embedding provider) |
| 🌐 Knowledge graph | Entity nodes + edges with semantic relations, each edge…
