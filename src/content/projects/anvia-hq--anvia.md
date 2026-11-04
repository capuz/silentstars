---
repo: "anvia-hq/anvia"
name: "anvia"
description: "Anvia is a TypeScript runtime for building provider-agnostic agents, tool workflows, and structured extraction inside your application code."
readmeQualityOk: true
url: "https://github.com/anvia-hq/anvia"
homepage: "https://anvia.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai-agents", "ai-framework", "tyepscript"]
stars: 58
forks: 6
openIssues: 7
closedIssues: 6
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-03T14:55:35Z"
lastCommitAt: "2026-11-04T02:56:21Z"
lastReleaseAt: "2026-05-29T05:37:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 34
maintainers: ["indrazm", "github-actions[bot]", "DeryFerd"]
openGraphImageUrl: "https://opengraph.githubassets.com/40c20628c89b91bad42086a975d4654c9afe7c41a15e3f31f2212138680ddfb3/anvia-hq/anvia"
discussionCount: 0
---

The complete agent stack, without giving up your stack.

Anvia is an open, TypeScript agent stack that gives developers everything they need to build production agents — without taking ownership of their stack.

Your application stays the system of record: it creates the provider models, typed tools, memory stores, and observers, and passes them into Anvia agents and runners. Anvia runs the model/tool loop — remove it and you keep your product.

## Why Anvia

- Provider-neutral clients for OpenAI-compatible APIs, Anthropic, Gemini, and Mistral — your agent architecture should not belong to your model provider.
- Agent and tool APIs that keep application behavior explicit and typed.
- Memory contracts for agent state and history, stored where you decide.
- Embeddable runtime contracts that keep provider, memory, observability, storage, and service choices in application code.
- Structured extraction and output schemas for turning model responses into usable data.
- Pipeline primitives for composing functions, agents, extractors, batches, and parallel branches.
- Retrieval adapters for in-memory search, local embeddings, ChromaDB, LanceDB, Milvus, pgvector, Pinecone, Qdrant, Redis,…
