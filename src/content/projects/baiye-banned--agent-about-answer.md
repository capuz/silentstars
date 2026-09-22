---
repo: "baiye-banned/Agent_about_answer"
name: "Agent_about_answer"
description: "Enterprise Knowledge Base RAG Intelligent Q&A System"
originalDescription: "企业知识库 RAG 智能问答系统"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/baiye-banned/Agent_about_answer"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [68, 24]
stars: 48
forks: 3
openIssues: 6
closedIssues: 76
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-04-29T13:21:03Z"
lastCommitAt: "2026-09-22T08:46:10Z"
lastReleaseAt: "2026-09-22T01:01:03Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 42
maintainers: ["baiye678", "baiye-banned", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8422b30a147e8865358a862259eba837e5c3da5c8cb3b1be1d64e6ffab17e5d7/baiye-banned/Agent_about_answer"
---

# Enterprise Knowledge Base Advanced RAG Intelligent Q&A System

An enterprise knowledge base Q&A platform based on Vue 3 + FastAPI. The project supports login authentication, knowledge base management, file upload and parsing, multi-knowledge base isolated retrieval, image attachment Q&A, SSE streaming responses, multi-turn conversation memory, and RAGAS online evaluation.

## 1. Architecture Overview

### Overall Architecture

```text
Vue 3 Frontend
  -> Pinia / Vue Router / Element Plus
  -> Fetch SSE call /api/chat/stream
  -> FastAPI routing layer
  -> JWT authentication and user context parsing
  -> Conversation memory / image understanding / RAG routing decision
  -> retrieve_knowledge retrieval chain
  -> DeepSeek / DashScope / Milvus / MySQL
  -> SSE stream responses with answers, sources, Trace, and completion events
```

### Backend Layering

```text
backend/
  router/       API route mounting, responsible for routing HTTP requests to service
  service/      Business orchestration, such as chat flow, knowledge base upload, deletion rollback
  rag/          RAG core capabilities: LLM, Milvus, rerank, memory, Trace, RAGAS, vision understanding
  database/     SQLAlchemy…
