---
repo: "damiandelmas/flex"
name: "flex"
description: "vector database clubhouse for ai agents (no humans allowed)"
readmeQualityOk: true
url: "https://github.com/damiandelmas/flex"
homepage: "https://getflex.dev"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["claude-code", "embeddings", "knowledge-base", "mcp", "numpy", "rag", "retrieval", "semantic-search", "sqlite", "vector-search"]
stars: 13
forks: 4
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-02-25T03:32:01Z"
lastCommitAt: "2026-07-15T05:54:44Z"
lastReleaseAt: "2026-03-05T07:42:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 52
maintainers: ["damiandelmas", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/29994b5edca909fa8caf068869f8ac00f590963d4ae6b79f153e66924e551d96/damiandelmas/flex"
---

</p>

# flex

**SQLite knowledge and memory for AI agents**

Retrieval was built for a human at a search box — hide the complexity, return ten
links. Your agent is a different consumer: it can read structure, write queries,
and compose operations. flex gives it a knowledge base shaped for that consumer
instead of the old one.

flex compiles coding-agent sessions, markdown vaults, and other sources into local
SQLite databases, then exposes them through one MCP tool with keyword search,
semantic search, and SQL. Your whole knowledge base is one file on your machine —
no hosted service, no new tool per source, just `flex_search`.

## install

Claude Code:

```bash
curl -sSL https://getflex.dev/install.sh | bash -s -- claude-code
```

Codex CLI:

```bash
curl -sSL https://getflex.dev/install.sh | bash -s -- codex
```

Obsidian / Markdown:

```bash
curl -sSL https://getflex.dev/install.sh | bash
flex init --module filesystem --path /path/to/vault --obsidian
```

Any mixed folder or repository:

```bash
flex init --module filesystem --path /path/to/folder
```

This walks Markdown, Python, JS/TS, and readable text into one watched cell.
Embeddings default on; add `--no-embed` for the…
