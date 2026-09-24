---
repo: "Shannon-Data/ShannonBase"
name: "ShannonBase"
description: "The Next-Gen Database for AI—an infrastructure designed for data and AI. As the MySQL of the AI era."
readmeQualityOk: true
url: "https://github.com/Shannon-Data/ShannonBase"
homepage: "https://www.shannonbase.org"
language: "C++"
languages: ["C++"]
languagePcts: [78]
topics: ["mysql", "ml-embeded", "htap", "in-memory-column-storage", "ai-native", "multi-model", "open-source-mysql-heatwave", "onnx-runtime", "rag", "embedding-vectors"]
stars: 192
forks: 24
openIssues: 30
closedIssues: 173
watchers: 12
contributors: 5
recentReleases: 0
createdAt: "2023-09-01T09:03:27Z"
lastCommitAt: "2026-09-24T08:42:26Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 96
undervaluedScore: 43
maintainers: ["ShannonBase", "RingsC", "zkmluck"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/685897222/64db3697-f71d-4eba-9fe4-027afc4b67d1"
discussionCount: 2
---

**Train ML models. Run LLMs. Search vectors. Build RAG pipelines. Run Native-Agent or User-defined Agents.
    All in SQL. Zero extra infrastructure.**

---

## 💡 Why ShannonBase?

Most AI application stacks look like this:

```
MySQL ──► ETL pipeline ──► Vector DB ──► Feature Store ──► Inference Server ──► App
```

Every hop means latency, operational burden, and data synchronization risk.

**ShannonBase collapses this into one engine:**

```
ShannonBase  ──────────────────────────────────────────────────────────────►  App
             (OLTP + OLAP + Vector + ML Training + LLM Inference + RAG)
```

| Capability | Typical Stack | ShannonBase |
|---|---|---|
| Vector Search | Pinecone / Weaviate / pgvector (separate deploy) | Native SQL — built into the engine |
| ML Training | Export data → Python → reimport model | `CALL sys.ML_TRAIN(...)` on live data |
| LLM Inference | External API or separate inference server | ONNX Runtime embedded — runs locally |
| RAG Pipeline | LangChain + vector DB + glue code | `CALL sys.ML_RAG(...)` — one call |
| **Agent Execution** | **LangGraph / AutoGen + orchestration layer + external tools** | **Built-in agent engine — define & run agents via…
