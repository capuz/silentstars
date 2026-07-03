---
repo: "vertesia/llumiverse"
name: "llumiverse"
description: "Universal connector to LLMs for Node.js & Bun"
url: "https://github.com/vertesia/llumiverse"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["genai", "llm", "llms", "product"]
stars: 30
forks: 5
openIssues: 4
closedIssues: 23
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2024-01-28T07:16:55Z"
lastCommitAt: "2026-07-03T12:23:17Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 59
maintainers: ["loopingz", "michaelva", "LeonRuggiero"]
openGraphImageUrl: "https://opengraph.githubassets.com/1789096ada229c5090ea689835242b21b9c3b5011c4fa397554d3f1fe408a34f/vertesia/llumiverse"
discussionCount: 1
---

# Llumiverse - The Universal, Lightweight LLM Driver

**Llumiverse** is the unified connectivity layer for the Large Language Model ecosystem. It provides a robust, modular, and strongly-typed interface for interacting with almost any AI provider in Node.js, Bun, and TypeScript environments.

> **Think of it as the "JDBC" or "ODBC" for LLMs.**

It solely focuses on **abstracting the connection and execution protocol**, letting you switch providers with zero code changes. It does **not** enforce prompt templating, rigid chain structures, or "magic" orchestration logic. You build the application; we handle the plumbing.

### Why Llumiverse?

*   **🚫 No Vendor Lock-in:** Switch from OpenAI to Vertex AI to Bedrock in minutes.
*   **🧩 Modular & Lightweight:** Install only what you need. Zero bloat.
*   **🛡️ Type-Safe:** First-class TypeScript support with normalized interfaces for completion, streaming, and tool use.
*   **⚡ Universal Support:** Works in Node.js, serverless functions, and Bun.

---

### Supported Platforms

| Provider | Completion | Chat | Streaming | Multimodal | Tool Calling | Embeddings |
| :--- | :-: | :-: | :-: | :-: | :-: | :-: |
| **AWS Bedrock** | ✅ | ✅ | ✅…
