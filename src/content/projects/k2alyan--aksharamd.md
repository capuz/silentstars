---
repo: "K2alyan/aksharaMD"
name: "aksharaMD"
description: "LLM document ingestion pipeline with AI readiness scoring and structured Markdown/JSON output."
readmeQualityOk: true
url: "https://github.com/K2alyan/aksharaMD"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["llm", "markdown", "ocr", "pdf", "python", "rag", "cli", "document-ai", "document-ingestion", "vector-database"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 5
watchers: 1
contributors: 3
recentReleases: 8
createdAt: "2026-06-29T04:16:34Z"
lastCommitAt: "2026-07-12T06:17:26Z"
lastReleaseAt: "2026-07-07T17:07:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 58
maintainers: ["K2alyan", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c40aeb4cc698579bef2f70a8dc77d377c4bcea4ad890c8d2d4b630b97dbaf8fc/K2alyan/aksharaMD"
---

</p>

</p>

# AksharaMD

**An LLM document ingestion pipeline with a built-in quality gate.**

Every compilation returns a **0–100 AI Readiness Score** and per-block extraction confidence — so you know whether to trust the output before it reaches your vector store, not after your LLM gives a wrong answer.

AksharaMD takes any document — PDF, DOCX, XLSX, audio, image, archive, and more (40+ document categories, 118 registered extensions) — and produces structured, token-efficient Markdown designed to be fed directly to an LLM. The goal is not a visual replica of the source file. The goal is to give your LLM exactly what it needs to reason over the same content — at a fraction of the token cost — with a clear signal of how reliable that extraction actually is.

Runs entirely on-device. No cloud calls, no data leaving your machine, no API keys required.

---

## Why AksharaMD

### The problem no parser solves: you don't know if the output is trustworthy

Every parser returns text. None of them tell you whether that text is reliable enough to embed. A scanned PDF, a table-heavy report, or a document with garbled OCR can produce output that looks complete — until the LLM answers a…
