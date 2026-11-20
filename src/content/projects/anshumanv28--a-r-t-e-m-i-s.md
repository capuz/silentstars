---
repo: "Anshumanv28/A.R.T.E.M.I.S"
name: "A.R.T.E.M.I.S"
description: "Multi-agent RAG system with a Supervisor architecture — search, ingest, and manage knowledge bases via natural language."
readmeQualityOk: true
url: "https://github.com/Anshumanv28/A.R.T.E.M.I.S"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["agent", "groq", "langgraph", "llm", "multi-agent", "openai", "python", "qdrant", "rag"]
stars: 6
forks: 1
openIssues: 6
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-02T11:16:28Z"
lastCommitAt: "2026-11-20T12:03:58Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 68
undervaluedScore: 46
maintainers: ["Anshumanv28", "pd241008"]
openGraphImageUrl: "https://opengraph.githubassets.com/929ce30a33750c6b0423585ac47189b50f236ca9b9436e19b03112a15a53f91f/Anshumanv28/A.R.T.E.M.I.S"
---

# A.R.T.E.M.I.S. 🏹

**Adaptive Retrieval & Tool-Enabled Multimodal Intelligence System**

> **A multi-agent RAG system that routes natural language queries to specialist agents — search your knowledge base (semantic, keyword, hybrid, or multi-hop graph), ingest documents, search the web, and manage collections, with optional multi-tenant auth and conversation memory, all via a single interface.**

---

## Screenshots

**Chat with Supervisor trace** — a query routed to the `rag_search` sub-agent, with the expanded tool-call trace showing the real retrieval result.

**Ops dashboard** — live system status, collections, and the latest automated eval run (routing accuracy, tool-selection accuracy, token usage, cost).

**API docs (Swagger/OpenAPI)** — the FastAPI backend's interactive API reference.

---

## What is A.R.T.E.M.I.S.?

A.R.T.E.M.I.S. is a **Supervisor-based multi-agent RAG framework** built on LangGraph. It takes a user query, classifies it with a lightweight LLM call, and dispatches it to the right specialist agent — each with its own focused toolset and system prompt.

**Four specialist agents, one Supervisor:**
