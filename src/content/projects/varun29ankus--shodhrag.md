---
repo: "varun29ankuS/shodhRAG"
name: "shodhRAG"
description: "Private document intelligence for teams: ask questions across your folders and get answers cited to the exact page. Local-first desktop app in Rust + Tauri + LanceDB."
readmeQualityOk: true
url: "https://github.com/varun29ankuS/shodhRAG"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [63, 35]
topics: ["ai", "lancedb", "llm", "local-first", "mcp", "ollama", "rag", "rust", "tauri", "agentic-rag"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-02-21T17:53:01Z"
lastCommitAt: "2026-10-12T11:15:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 50
maintainers: ["varun29ankuS"]
openGraphImageUrl: "https://opengraph.githubassets.com/d55cd0c4c721648e104ec868f357f9ab0d8da9aaf4fc687237e7a9e02f88114f/varun29ankuS/shodhRAG"
---

---

**Shodh** (Sanskrit: शोध, "research") is a desktop app that reads the folders you point it at and answers questions about them. Each answer cites the file and page it came from.

- **Processing:** your documents are parsed, indexed and embedded on your computer.
- **Answers:** these come from the language model you choose. That can be a model running locally, or a cloud provider using your own API key.

> **Status: pre-release.** The core ask-your-files loop works. The enterprise-grade pieces are being built in the open and tracked in the [design spec](https://github.com/varun29ankuS/shodhRAG/blob/HEAD/docs/superpowers/specs/2026-10-02-folder-sources-grounded-answers-design.md): the agent harness, folder sync, the knowledge graph, evaluation, and server mode. This README describes only what works today. Everything else is listed under [In progress](#in-progress).

## What works today

**Ask your files**
- Answers stream in with numbered citations.
- Click a citation to see the source passage. PDF citations carry page numbers.
- A run summary shows what actually happened: elapsed time, search queries issued, passages retrieved, and tools called.
- Conversations are saved…
