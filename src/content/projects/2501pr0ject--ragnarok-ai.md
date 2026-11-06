---
repo: "2501Pr0ject/RAGnarok-AI"
name: "RAGnarok-AI"
description: "Local-first RAG evaluation framework for LLM applications. 100% local, no API keys required."
readmeQualityOk: true
url: "https://github.com/2501Pr0ject/RAGnarok-AI"
homepage: "https://ra-gnarok-ai-q3an.vercel.app"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai", "evaluation", "langchain", "llm", "local-first", "ollama", "python", "rag", "retrieval-augmented-generation", "testing"]
stars: 15
forks: 3
openIssues: 0
closedIssues: 52
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-24T18:13:25Z"
lastCommitAt: "2026-11-06T12:19:38Z"
lastReleaseAt: "2026-01-27T13:29:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 63
maintainers: ["2501Pr0ject"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3b5c9742a2452097d5e4f85b65f6d8f8bb2749dae1891b7616b0f63138eaede/2501Pr0ject/RAGnarok-AI"
discussionCount: 1
---

Evaluate, benchmark, and monitor your RAG pipelines — 100% locally, no API keys required.

---

## The Problem

Building RAG systems is easy. **Knowing if they actually work is hard.**

A pipeline can have a good retriever but a bad generator, great faithfulness but poor relevance, or a beautiful score that quietly degrades in production. And when the answer matters — medical, legal, internal data — you often **can't send your documents to an external API just to evaluate them**.

**ragnarok-ai is designed from the ground up for local, private, reproducible RAG evaluation:**

- Runs 100% locally (Ollama, local models) — your data never leaves your machine
- Pins the judge's sampling options (temperature 0, fixed seed, explicit 8192-token context window) and warns when Ollama probably truncated a prompt — the same inputs give the same judgment on the same machine and Ollama version
- Checkpoints long batch evaluations — after a crash, resume: every query already evaluated is restored, only the rest is recomputed
- Tells you *why* quality is low (root-cause diagnosis), not just *that* it is
- Lets you calibrate the judge against your own labels — trust the scores, or know you can't…
