---
repo: "LEVOGNE/airust"
name: "airust"
description: "A modular Rust knowledge engine: lexical search, text matching, optional semantic retrieval and reranking"
readmeQualityOk: true
url: "https://github.com/LEVOGNE/airust"
homepage: "https://docs.rs/airust"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["bm25", "full-text-search", "knowledge-base", "llm", "mcp", "pdf", "rag", "reranking", "retrieval", "rust"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2025-03-29T13:34:52Z"
lastCommitAt: "2026-11-23T10:19:00Z"
lastReleaseAt: "2026-11-17T01:19:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 74
maintainers: ["LEVOGNE"]
openGraphImageUrl: "https://opengraph.githubassets.com/902c82cfc2e0d51f03383981ebde0f2826f69c0a64c4f31bb52e078f11545132/LEVOGNE/airust"
discussionCount: 0
---

# AIRust 0.4.16

**A Modular Knowledge Intelligence Engine**

AIRust is a Rust library for finding information, comparing text, and suggesting possible connections. Give it entries with IDs, text, and optional metadata. Your application decides how to display and store the results.

**Earlier 0.4.4 comparison, not a superiority claim:** a completed local experiment used the same Qwen model for 400 answers over 100 document-derived reference questions. AIRust hybrid found the reference passage in the first six results for 64/88 answerable questions; SQLite FTS5 plus the same embeddings found 66/88, simple keyword search 58/88, and AIRust BM25 alone 69/88. These are authored questions, not logged user questions. The run demonstrates no AIRust hybrid answer-quality advantage over SQLite and no material token saving. Read the [honest comparison, answer checks, timings, RAM, failures and proposed improvements](https://github.com/LEVOGNE/airust/blob/HEAD/docs/HONEST-COMPARISON-0.4.4.md). That report evaluated 0.4.4 and did not publish a new version.
