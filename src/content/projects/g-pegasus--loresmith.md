---
repo: "G-Pegasus/LoreSmith"
name: "LoreSmith"
description: "Muti-Agent 生成网络小说"
url: "https://github.com/G-Pegasus/LoreSmith"
language: "Python"
languages: ["Python"]
languagePcts: [63]
stars: 11
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-16T11:28:05Z"
lastCommitAt: "2026-07-03T12:39:59Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 42
maintainers: ["G-Pegasus", "YuStriving"]
openGraphImageUrl: "https://opengraph.githubassets.com/19c8e3caf3844c42ca7aacfb568315c025e07c48e60245b68375b762e4573b4d/G-Pegasus/LoreSmith"
---

# ainovel-py

一个面向长篇小说创作的多模块项目，当前由三个主要部分组成：

- **frontend-web**：前端工作台
- **java-platform**：平台层 API，当前主要承接 story 元数据与基础平台接口
- **ainovel_py**：Python Agent Runtime，负责写作运行时、workspace、上下文组装、评审与流式事件输出

## 当前架构

```text
frontend-web
  ├─ /api/v1/...      -> java-platform (Spring Boot)
  └─ /internal/v1/... -> ainovel_py internal API (FastAPI)

java-platform
  └─ stories / health / 平台层基础能力

ainovel_py
  └─ runs / workspace / SSE stream / Agent orchestration / local store
```

### 前后端职责边界

#### Frontend
前端负责工作台 UI、故事管理入口、workspace 编辑与运行状态展示。

当前 API 分流如下：

- **Stories 相关接口走 Java**
  - 见 [frontend-web/src/lib/api/stories.ts](frontend-web/src/lib/api/stories.ts)
- **Runs / Workspace / Stream 相关接口走 Python**
  - 见 [frontend-web/src/lib/api/runs.ts](frontend-web/src/lib/api/runs.ts)
  - 见 [frontend-web/src/lib/api/workspace.ts](frontend-web/src/lib/api/workspace.ts)
  - 见 [frontend-web/src/lib/api/pythonClient.ts](frontend-web/src/lib/api/pythonClient.ts)
- Vite 开发代理：
  - `/api` -> `127.0.0.1:8080`
  - `/internal` -> `127.0.0.1:8000`
  - 见 [frontend-web/vite.config.ts](frontend-web/vite.config.ts)

#### Java Platform
Java 层当前是**平台层后端**，主要负责：

- stories 基础 CRUD
- health 等平台基础接口
-…
