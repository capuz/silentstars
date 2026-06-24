---
repo: "int2t05/OpsMind"
name: "OpsMind"
description: "私有部署的 AI 运维数字员工 — 自建 Go RAG 引擎，BM25+向量混合检索，SSE 流式问答，申告全流程管理，Docker Compose 一键部署。"
url: "https://github.com/int2t05/OpsMind"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [75, 22]
topics: ["rag", "docker", "go", "it-operations", "knowledge-base", "postgresql", "rbac", "self-hosted", "ai-assistant", "bm25"]
stars: 6
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-05-15T14:47:29Z"
lastCommitAt: "2026-06-24T00:21:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 57
maintainers: ["int2t05", "scutmmq", "Ch111rO"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1239889035/1f5fb028-cb66-413d-b2af-4912f7331f49"
---

</p>

<h1 align="center">OpsMind</h1>

</p>

---

## 这是什么？

企业运维团队每天被重复性咨询淹没——密码重置、权限申请、系统报障。这些工作消耗运维人员 40% 以上的时间，却无法沉淀为可复用的知识。

OpsMind 不是另一个 ChatGPT 套壳。它是一个**从检索管道到业务流程都自建**的运维数字员工系统：

- **自建 RAG 引擎** — BM25 + 向量混合检索 + RRF 融合 + 重排序，全程可控可审计
- **知识资产化** — 每次问答、每条申告处理记录都可转化为知识库文章，审核后发布
- **数据不出域** — 全部存储在自有 PostgreSQL + pgvector，支持本地 llama.cpp 推理

```mermaid
graph LR
    A["👤 用户提问"] --> B["🔍 RAG 检索"]
    B --> C["📚 知识库"]
    B --> D["🤖 LLM 生成"]
    D --> E["📝 答案"]
    E -->|"置信度低"| F["🎫 自动转申告"]
    F --> G["👷 运维处理"]
    G -->|"沉淀"| C
```

## 核心能力

```mermaid
flowchart LR
    Q["🧠 智能问答"] -->|"低置信度转申告"| T["🎫 申告管理"]
    T -->|"沉淀经验"| K["📚 知识库"]
    K -->|"向量检索"| Q

    style Q fill:#e8f0fe,stroke:#1a56db,color:#1a56db
    style T fill:#fef3c7,stroke:#d97706,color:#92400e
    style K fill:#f0fdf4,stroke:#16a34a,color:#166534
```

| 🧠 智能问答 | 📚 知识管理 | 🎫 申告管理 | 🔐 权限看板 |
|:---|:---|:---|:---|
| 自建 7 步 RAG 管道 | 手动录入 / 文档上传 | 完整状态机流转 | JWT 双令牌 + RBAC |
| SSE 流式逐 token 输出 | 草稿→审核→发布→停用 | 站内消息实时通知 | 4 个预设角色，菜单动态渲染 |
| 失败自动降级，不中断 | 发布自动向量化到 pgvector | 7 天无操作自动关闭 | 实时统计卡片 + 趋势图 |
| 多轮对话 + 会话管理 | 支持 PDF · DOCX · MD · TXT | 处理记录 → 知识候选 | 敏感操作全量审计日志 |

## 架构

```mermaid
graph TB…
