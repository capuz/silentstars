---
repo: "vertesia/llumiverse"
name: "llumiverse"
description: "Universal connector to LLMs for Node.js & Bun"
readmeQualityOk: true
url: "https://github.com/vertesia/llumiverse"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["genai", "llm", "llms", "product"]
stars: 30
forks: 6
openIssues: 4
closedIssues: 23
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2024-01-28T07:16:55Z"
lastCommitAt: "2026-11-09T00:53:08Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 60
maintainers: ["loopingz", "michaelva", "vertesia-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a357df845da90c4a675af0ddb5968b668aca5daa96e5e44c37f324f0baf9ac6/vertesia/llumiverse"
discussionCount: 1
---

# Llumiverse - The Universal, Lightweight LLM Driver

**Llumiverse** is the unified connectivity layer for the Large Language Model ecosystem. It provides a robust, modular, and strongly-typed interface for interacting with almost any AI provider in Node.js, Bun, and TypeScript environments.

> **Think of it as the "JDBC" or "ODBC" for LLMs.**

It solely focuses on **abstracting the connection and execution protocol**, letting you switch providers with zero code changes. It does **not** enforce prompt templating, rigid chain structures, or "magic" orchestration logic. You build the application; we handle the plumbing.

## Why Llumiverse?

-   **🚫 No Vendor Lock-in:** Switch from OpenAI to Vertex AI to Bedrock in minutes.
-   **🧩 Modular & Lightweight:** Install only what you need. Zero bloat.
-   **🛡️ Type-Safe:** First-class TypeScript support with normalized interfaces for completion, streaming, and tool use.
-   **⚡ Universal Support:** Works in Node.js, serverless functions, and Bun.

---

## Supported Platforms

| Provider              | Completion | Chat | Streaming | Multimodal | Tool Calling | Embeddings |
| :-------------------- | :--------: | :--: | :-------: |…
