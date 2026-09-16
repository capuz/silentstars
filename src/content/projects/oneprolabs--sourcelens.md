---
repo: "oneprolabs/sourcelens"
name: "sourcelens"
description: "Harness-based Agentic RAG: search, understand, and answer questions over documents and code using an AI coding agent harness (Cursor, Claude Code, Codex, etc.) in a sandbox — no embeddings, no vector DB."
readmeQualityOk: true
url: "https://github.com/oneprolabs/sourcelens"
language: "Python"
languages: ["Python", "Vue"]
languagePcts: [60, 25]
stars: 21
forks: 3
openIssues: 28
closedIssues: 254
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-05-28T10:46:53Z"
lastCommitAt: "2026-09-16T08:46:57Z"
lastReleaseAt: "2026-08-07T08:35:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 51
maintainers: ["fengren", "zhanghang0915"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ce6ca0e3dadddf40be221fc8206c2fc0f7fb90e4abb0456cbd84e429cdba477/oneprolabs/sourcelens"
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="frontend/public/brand/logo_with_text_dark.png">
</picture>

[English](https://github.com/oneprolabs/sourcelens/blob/HEAD/README.md) | [中文](https://github.com/oneprolabs/sourcelens/blob/HEAD/README.zh-CN.md)

**Harness-based Agentic RAG** — no embeddings, no vector DB, no pre-indexing

</div>

**SourceLens** is Agentic RAG built on an AI coding agent harness — the same kind of harness behind tools like Cursor, Claude Code, or Codex, not those products themselves — running inside a sandboxed environment. Instead of embedding your files into a vector index ahead of time, SourceLens hands them directly to the agent harness, which reads, searches, and reasons over the file system on demand — turning any pile of documents or code into something you can just ask questions of.

Instead of vector embeddings or keyword indexes, SourceLens uses AI coding agents running in a sandbox to directly read, navigate, and reason over the file system. This means the retrieval understands code structure, cross-file relationships, and semantic intent — not just surface-level text matching.

## Background

Our first attempts at RAG used…
