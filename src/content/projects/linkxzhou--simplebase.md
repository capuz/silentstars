---
repo: "linkxzhou/SimpleBase"
name: "SimpleBase"
description: "LessDB a serverless SQLite service designed to simplify the use of cloud-based MySQL, PostgreSQL, and other databases."
readmeQualityOk: true
url: "https://github.com/linkxzhou/SimpleBase"
homepage: "https://less-db.vercel.app"
language: "Go"
languages: ["Go", "Vue"]
languagePcts: [68, 21]
topics: ["serverless", "cloud", "sqlite"]
stars: 362
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-04-09T03:58:41Z"
lastCommitAt: "2026-09-18T08:25:53Z"
lastReleaseAt: "2024-04-21T13:12:46Z"
status: "thriving"
tags: []
healthScore: 82
undervaluedScore: 34
maintainers: ["cursoragent", "linkxzhou"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc5f5e04fd87749d8e23425389d96a49875f93bcbcdd7277d117072c80fd693b/linkxzhou/SimpleBase"
---

# SimpleBase

基于 DuckLake、S3 在线持久层与 Go 构建的云端数据库服务，并集成 LLM Gateway 与 Cloud Agent。

## 架构概览

```text
 Clients / SDK / CLI
          │
          ▼
┌─────────────────────────────────────────────────────┐
│ SimpleBase Server（首期唯一可写实例）              │
│                                                     │
│ API Gateway                                         │
│ ├─ Auth / Project / Quota / Audit                   │
│ ├─ Database Management API                          │
│ ├─ SQL Query API                                    │
│ └─ LLM Gateway API                                  │
│                                                     │
│ Database Runtime                 LLM / Agent Runtime │
│ ├─ DB Registry（每库唯一 writer）├─ litellm Router   │
│ ├─ DuckLake / DuckDB             ├─ Cloud Agent      │
│ ├─ Local Cache Manager           ├─ Streaming        │
│ └─ System DuckLake catalog       └─ Usage Metering   │
└───────────────┬──────────────────────────┬──────────┘
                │                          │
                ▼                          ▼
       S3 Compatible Storage        LLM Providers
       在线持久数据与元数据          OpenAI/Anthropic/...
```

### 核心设计

- **S3…
