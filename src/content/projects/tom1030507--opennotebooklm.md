---
repo: "tom1030507/OpenNotebookLM"
name: "OpenNotebookLM"
description: "Self-hosted alternative to Google's NotebookLM: import PDFs, web pages and YouTube transcripts, then get answers with citations back to the source. Hybrid dense + BM25 retrieval over a local SQLite database, with Claude, any OpenAI-compatible provider, or a model on your own machine."
readmeQualityOk: true
url: "https://github.com/tom1030507/OpenNotebookLM"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [67, 33]
topics: ["bm25", "embeddings", "fastapi", "hybrid-search", "llm", "nextjs", "notebooklm", "rag", "retrieval-augmented-generation", "self-hosted"]
stars: 69
forks: 8
openIssues: 23
closedIssues: 37
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2025-08-11T18:19:18Z"
lastCommitAt: "2026-10-25T09:01:24Z"
lastReleaseAt: "2026-08-25T14:33:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 89
undervaluedScore: 49
maintainers: ["tom1030507"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f44305b4c63d1a1496e4fce554a6a49af43bee06c120e3e718e107e20bd23be/tom1030507/OpenNotebookLM"
---

Import your documents, ask questions about them, and get answers with citations
  back to the source — on your own machine, in your own database.

---

Documents, embeddings and conversations live in a local SQLite database. The only
thing that ever leaves your machine is the prompt sent to whichever LLM provider
you configure — and you can point that at a model running on the same machine.

## ✨ Features

| | Feature | What it does |
|---|---|---|
| 📚 | **Bring your own sources** | PDF, Word, PowerPoint, Excel, EPUB, `.txt` and `.md` files, web pages and YouTube transcripts, extracted into Markdown, chunked along the document's own headings, and embedded locally. |
| 🔍 | **Hybrid retrieval** | Persistent sqlite-vec dense candidates and FTS5/BM25 keyword candidates run over the same document scope and are fused by reciprocal rank. The lexical terms include CJK character bigrams, so Chinese text is searchable too. |
| 💬 | **Answers with citations** | Every answer names the chunks behind it, with the document and the section path they came from. Conversations are multi-turn and persisted per project. |
| 🔌 | **Any LLM, or none** | Claude, OpenAI, anything speaking the OpenAI…
