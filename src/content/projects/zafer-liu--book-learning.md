---
repo: "Zafer-Liu/book-learning"
name: "book-learning"
description: "书内 BOOKNOTE · Multi-account textbook RAG learning assistant — every answer must cite the original text: C/W dual-citation verification, annotation reader, automatic long-conversation compression, optional web-search supplement (MCP)"
originalDescription: "书内 BOOKNOTE · 多账户教材 RAG 学习助手 —— 回答必引原文:C/W 双引用校验、批注阅读器、长对话自动压缩、可选联网补充(MCP)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Zafer-Liu/book-learning"
language: "Python"
languages: ["Python"]
languagePcts: [73]
topics: ["education", "embeddings", "flask", "fts5", "mcp", "rag", "self-hosted", "sqlite", "study-assistant", "textbook"]
stars: 43
forks: 4
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2026-04-23T15:41:05Z"
lastCommitAt: "2026-09-21T09:14:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 55
undervaluedScore: 16
maintainers: ["Zafer-Liu"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb845be5e4edcbc7816ee5c69e9d9af9acc46c6d7c36096c22e5b8cd5aa2c6be/Zafer-Liu/book-learning"
---

# 书内 · Book Learning

**English** · [中文](https://github.com/Zafer-Liu/book-learning/blob/HEAD/README.zh-CN.md)

**Put your textbooks on the shelf — and let every answer lead you back to the original text.**

Book Learning (「书内」, a.k.a. BOOKNOTE) is a self-hostable, multi-account textbook study workspace: upload Markdown / TXT / DOCX textbooks, switch between Q&A, chapter explanation, key-point outlining and self-testing, and get answers whose every claim carries an expandable citation back to the source text. It ships with an annotation reader, automatic long-conversation compaction, and an opt-in web-search supplement. All data is scoped by account and by book — one book per retrieval context, no cross-book leakage.

---

## Diagrams

### Diagram 1 · System architecture

A single-instance Flask service (one Gunicorn worker); SQLite holds all state. The only external dependencies are model / embedding / search services — each optional, each degradable:

```mermaid
flowchart LR
    B["Browser<br/>vanilla JS · no build"] -->|"HTTPS + SSE"| G["Gunicorn · Flask<br/>1 worker · gthread"]
    subgraph DATA["Persistence · Volume /data"]
        DB[("SQLite ·…
```
