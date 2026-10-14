---
repo: "VeraTools/vera"
name: "vera"
description: "Local code search combining BM25, vector similarity, and cross-encoder reranking. Parses 60+ languages with tree-sitter, runs entirely offline, and returns structured results with file paths, line ranges, and symbol metadata. Built in Rust."
readmeQualityOk: true
url: "https://github.com/VeraTools/vera"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["bm25", "cli", "code-search", "code-search-engine", "cross-encoder", "embeddings", "local", "mcp", "mcp-server", "onnx"]
stars: 120
forks: 15
openIssues: 0
closedIssues: 117
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2026-03-22T05:41:30Z"
lastCommitAt: "2026-10-14T08:58:11Z"
lastReleaseAt: "2026-03-27T00:20:56Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 34
maintainers: ["lemon07r", "devin-ai-integration[bot]", "citron07r"]
openGraphImageUrl: "https://opengraph.githubassets.com/4de293714237259e64d123e90bbb5b391ef7df767cb4fc5c669eeda86fdbaf49/VeraTools/vera"
---

# Vera

[Docs](https://github.com/VeraTools/vera/blob/HEAD/docs/README.md)
·
[Install Guide](https://github.com/VeraTools/vera/blob/HEAD/docs/installation.md)
·
[Features](https://github.com/VeraTools/vera/blob/HEAD/docs/features.md)
·
[Query Guide](https://github.com/VeraTools/vera/blob/HEAD/docs/query-guide.md)
·
[Benchmarks](https://github.com/VeraTools/vera/blob/HEAD/docs/benchmarks.md)
·
[How It Works](https://github.com/VeraTools/vera/blob/HEAD/docs/how-it-works.md)
·
[Models](https://github.com/VeraTools/vera/blob/HEAD/docs/models.md)
·
[Supported Languages](https://github.com/VeraTools/vera/blob/HEAD/docs/supported-languages.md)

**Local, symbol-aware code search for developers and AI agents.**

Describe the behavior you need, then get ranked code chunks with file paths, line ranges, and symbols. Vera combines keyword and vector search across 65 languages, with optional reranking. The index stays on your machine.

## Quick Start

**1. Install**

```bash
bunx @vera-ai/cli install   # or: npx -y @vera-ai/cli install / uvx vera-ai install
```

**2. Set up and index**

Use the default local CPU model. Setup downloads its assets, then indexes the current project:

```bash
vera…
