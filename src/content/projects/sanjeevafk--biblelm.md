---
repo: "sanjeevafk/BibleLM"
name: "BibleLM"
description: "A Bible chatbot powered by Retrieval-Augmented Generation (RAG), designed to uphold fidelity to original language texts while delivering precise, citable references."
readmeQualityOk: true
url: "https://github.com/sanjeevafk/BibleLM"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [73]
topics: ["bible", "semantic-search", "aichatbot", "bm25", "hybrid-rag"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-20T03:58:57Z"
lastCommitAt: "2026-11-03T12:47:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 52
maintainers: ["sanjeevafk", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1d2a43ef861754921808fdbb8c976ffb74ac3168b130d42245f0f512716e76e/sanjeevafk/BibleLM"
---

# BibleLM: The Sola Scriptura Engine

**BibleLM** is a high-performance, text-first Retrieval-Augmented Generation (RAG) architecture designed to deliver uncompromising biblical search and original-language insights. 

Built to eliminate LLM "hallucination" and theological drift, BibleLM functions as a strict "Sola Scriptura" (Scripture Alone) engine. It forces base models to answer complex theological queries using raw, cited text and structural linguistics rather than external commentary or interpretive bias.

**Live Demo**: [https://biblelm.worksforme.tech](https://biblelm.worksforme.tech) (also served at [https://biblelm.strucker08.workers.dev](https://biblelm.strucker08.workers.dev))

---

## Architectural Deep-Dive

```text
┌──────────────┐      ┌──────────────────────────┐      ┌────────────────────┐
│  Client App  │      │ Cloudflare Worker (Hono) │      │    Primary LLM     │
│ (React / TS) ├─────►│  (worker/ + Rate Limit)  ├─────►│ (Groq: Llama 3.1)  │
└──────────────┘      └────────────┬─────────────┘      └──────────┬─────────┘
                                   │                               │
                                   ▼                               ▼…
