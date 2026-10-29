---
repo: "gosha70/document-assistant"
name: "document-assistant"
description: "RAG (Retrieval-Augmented Generation) framework of merging private vector databases storing unstructured document with LLM, and providing Chat/QA application which can be run locally."
readmeQualityOk: true
url: "https://github.com/gosha70/document-assistant"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 9
forks: 0
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-12-08T21:54:41Z"
lastCommitAt: "2026-10-29T12:25:14Z"
lastReleaseAt: "2026-03-13T03:06:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 69
maintainers: ["dependabot[bot]", "gosha70"]
openGraphImageUrl: "https://opengraph.githubassets.com/80e3560d015794c4eaa5d89f3dff559bb5d93c9c222fec318c79816b596a4313/gosha70/document-assistant"
---

# Document Assistant — D.O.T. (Document Of Things)

A **Retrieval-Augmented Generation (RAG)** framework with a FastAPI backend, a browser-based chat UI, a full-featured admin console, and a configurable query pipeline. Designed for local-first, private deployments: with a local LLM backend (e.g., Ollama) and a local vector store, all data stays on your machine. When an external LLM backend is configured (`llm.backend: openai`), queries and retrieved context are sent to that endpoint.

---

## Features at a Glance

| Area | Highlights |
|------|------------|
| **Ingestion** | 17 file types · PDF, Markdown, HTML, CSV, Excel, JSON, YAML, XML, SQL, Java, JS, Python, RTF, DDL, XSL · Duplicate handling (check / replace / add / skip) |
| **Chunking** | Configurable token-aware splitting · Late Chunking (long-context pooling) · Contextual Augmentation (LLM-generated per-chunk context) |
| **Retrieval** | Hybrid search (dense + BM25 sparse, fused via RRF) · CrossEncoder reranking · Four optional query pipeline stages |
| **Query Pipeline** | Query Decomposition · HyDE (Hypothetical Document Embeddings) · Corrective Retrieval · Answer Verification |
| **LLM Backends** | Ollama (local) ·…
