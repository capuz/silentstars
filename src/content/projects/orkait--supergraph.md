---
repo: "orkait/supergraph"
name: "supergraph"
description: "Memory infrastructure for AI agents: store, recall by meaning or association, ingest documents, and track beliefs in one Python library."
readmeQualityOk: true
url: "https://github.com/orkait/supergraph"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["agent-memory", "ai-agents", "bm25", "embeddings", "graph-database", "hnsw", "hybrid-search", "information-retrieval", "knowledge-graph", "llm"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-18T09:20:32Z"
lastCommitAt: "2026-10-04T10:00:44Z"
lastReleaseAt: "2026-04-20T07:25:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 49
maintainers: ["KailasMahavarkar"]
openGraphImageUrl: "https://opengraph.githubassets.com/39e8ef8dbe75f65bf3760e655f3c1787d4af9bc3e4d04204481e2ab84ac1c91f/orkait/supergraph"
---

# supergraph

**A memory database for AI agents**

---

An embedded memory database for AI agents. Facts get written with confidence scores, expire, get contradicted, decay by recency. Retrieval fuses vector similarity, BM25, graph structure, and recency in one call. Everything goes through a typed DSL. Runs in-process, persists to SQLite.

Status: v0.7.0, alpha. This is the substrate (`import supergraph`); the terminal agent that uses it as memory lives in [orkait/superbot](https://github.com/orkait/superbot).

## 📦 Install

```bash
pip install supergraphdb
```

The distribution is `supergraphdb`; the import package is `supergraph`. The
plain name was already taken on PyPI by an unrelated project.

`supergraphdb` is not published yet, so the `pip install` lines below describe the
extras rather than a command that works today. Install from the repository until it
is: `uv pip install 'supergraphdb[<extra>] @ git+https://github.com/orkait/supergraph'`.

Core ships with [model2vec](https://github.com/MinishLab/model2vec) as the default embedder. Swap for Jina v5, bge-*, EmbeddingGemma, or any ONNX / GGUF model via `supergraph install-embedder`. PDFs, images, audio, GPU, and the web…
