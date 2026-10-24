---
repo: "jwvanderstam/LocalChat"
name: "LocalChat"
description: "local chat application"
readmeQualityOk: true
url: "https://github.com/jwvanderstam/LocalChat"
language: "Python"
languages: ["Python"]
languagePcts: [84]
stars: 6
forks: 1
openIssues: 0
closedIssues: 14
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2025-12-28T00:15:48Z"
lastCommitAt: "2026-10-24T08:07:41Z"
lastReleaseAt: "2026-10-23T15:32:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 79
maintainers: ["jwvanderstam", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/de9878d4ce05720fb18f337bf41488c0f797370e7b6655f7f3cbb3286272b2da/jwvanderstam/LocalChat"
discussionCount: 3
---

# LocalChat

Chat with your own documents, using a language model that runs on your own hardware.
Upload PDF, DOCX, PPTX, XLSX, TXT, Markdown, email (`.eml`), source code (`.py`, `.js`, `.ts`) or
images; LocalChat chunks and embeds them into PostgreSQL with
pgvector, and answers questions from what it retrieves. Nothing leaves the machine unless
you enable web search or a cloud fallback.

Built with FastAPI, Ollama, PostgreSQL + pgvector and Redis. Hybrid semantic and lexical
retrieval, a cross-encoder reranker, tool calling, streaming answers, per-workspace
document isolation, and RAG parameters tunable at runtime.

> **Hardened beta, for a specific thing.** LocalChat is a single-node, self-hosted
> appliance for a small team of up to 25 users — see [ADR-1](https://github.com/jwvanderstam/LocalChat/blob/HEAD/docs/ADR.md). All eight exit
> criteria in the [production plan](https://github.com/jwvanderstam/LocalChat/blob/HEAD/docs/history/PRODUCTION_PLAN.md) are met and that hardening
> gate was lifted on 2026-08-31: fail-closed boot, authorisation enforced by default in CI,
> a concurrency budget, a mutation-tested security core, restore proven in CI, a
> reproducible tagged…
