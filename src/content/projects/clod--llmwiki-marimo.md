---
repo: "Clod/llmwiki-marimo"
name: "llmwiki-marimo"
description: "Local-first LLM wiki — ingests your documents into a curated, citation-backed knowledge base you can read and chat with. Marimo + SQLite/FTS5, any OpenAI-compatible model, no cloud required."
readmeQualityOk: true
url: "https://github.com/Clod/llmwiki-marimo"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["fts5", "knowledge-base", "llm", "local-first", "marimo", "pydantic-ai", "python", "rag", "sqlite", "wiki"]
stars: 23
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-05-25T23:50:48Z"
lastCommitAt: "2026-10-31T19:01:49Z"
lastReleaseAt: "2026-10-13T22:37:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 40
maintainers: ["Clod"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1249662979/f3b62ecc-0239-440d-8f46-a35e90583920"
---

# LLM Wiki

**English** · [Español](https://github.com/Clod/llmwiki-marimo/blob/HEAD/README_ES.md)

A personal, local-first wiki that ingests your documents, builds a structured knowledge base, and lets you read and chat with it — all on your machine, no cloud required.

Inspired by [Karpathy's LLM Wiki idea](https://x.com/karpathy/status/2039805659525644595).
The PDF-extraction and a few low-level ingestion pieces are adapted from [Lucas Astorian's open-source LLM Wiki](https://github.com/lucasastorian/llmwiki)
(Apache-2.0); the rest is an independent local-first build on FastAPI, HTMX and SQLite. See [`NOTICE`](https://github.com/Clod/llmwiki-marimo/blob/HEAD/NOTICE).

*The **Read** tab on the finance example. The page index is on the left and the open page is in the middle. The conversation is on the right: under each answer, one line names the answering mode, the pages the answer cites, and the tokens of the turn and of the conversation. The buttons **Criterion**, **Sources** and **Model answer** open the audit of the last answer. The mode selector under the question field has three values: **Pre-retrieval** (code retrieves first and refuses before the model is called),…
