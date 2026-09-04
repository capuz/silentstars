---
repo: "Mattral/RAG-Multimodal-Financial-Doc-Analysis-and-Recall"
name: "RAG-Multimodal-Financial-Doc-Analysis-and-Recall"
description: "Production-grade multimodal RAG for financial document intelligence. Chart understanding · hybrid retrieval · numeric guardrails · multi-tenancy · full observability."
readmeQualityOk: true
url: "https://github.com/Mattral/RAG-Multimodal-Financial-Doc-Analysis-and-Recall"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["async-processing", "document-intelligence", "enterprise-ai", "financial-ai", "llama-index", "llm", "machine-learning", "multimodal", "observability", "production-system"]
stars: 81
forks: 21
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 4
recentReleases: 1
createdAt: "2024-02-01T04:46:37Z"
lastCommitAt: "2026-09-04T08:09:40Z"
lastReleaseAt: "2026-06-17T05:11:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 53
maintainers: ["Mattral", "Samuel-Taylor-Homes", "allosaurus04"]
openGraphImageUrl: "https://opengraph.githubassets.com/c36d8198be6cdc6e2601dc173521e1954b6717a2397da157d6e1ae835407ebca/Mattral/RAG-Multimodal-Financial-Doc-Analysis-and-Recall"
---

# RAG Financial Multimodal — Enterprise v2.0

> **Production-grade multimodal RAG for financial document intelligence.**
> Chart understanding · hybrid retrieval · numeric guardrails · multi-tenancy · full observability.

---

## System Architecture

*Ingestion (top) and query (bottom) pipelines. Every component is pluggable — switch provider by changing one config value.*

---

## Why This System

Financial documents are mixed-media: narrative text, tables, charts, footnotes, cross-references. Standard RAG pipelines fail on charts and hallucinate numbers.

| Problem | Solution |
|---|---|
| Charts contain the most important data but RAG ignores them | GPT-4o / Gemini / Qwen2-VL vision extraction — every chart yields exact axis values |
| Exact figures like `$23.35B` or `TSLA` miss semantic search | Hybrid RRF: dense embeddings + BM25 keyword fused with Reciprocal Rank Fusion |
| LLMs fabricate financial numbers | Numeric grounding guardrail — every stated number verified against source context |
| PII in analyst queries leaks to APIs | Presidio + CUSIP/ISIN/account number redaction before any external call |
| One broken vendor = full outage | Fallback chains — primary →…
