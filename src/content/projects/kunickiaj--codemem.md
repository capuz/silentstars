---
repo: "kunickiaj/codemem"
name: "codemem"
description: "A lightweight persistent-memory companion for OpenCode & Claude"
readmeQualityOk: true
url: "https://github.com/kunickiaj/codemem"
homepage: "https://codemem.sh"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["memory", "opencode", "ai", "ai-agents", "ai-memory", "ai-memory-system", "p2p", "claude", "claude-ai", "claude-code"]
stars: 61
forks: 9
openIssues: 10
closedIssues: 9
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-13T21:51:11Z"
lastCommitAt: "2026-08-13T05:17:28Z"
lastReleaseAt: "2026-02-14T23:47:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 36
maintainers: ["kunickiaj", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/194ba20adca3d4f912f29909dda32e8216a069489a1598f023ead31eb6b1e0b9/kunickiaj/codemem"
---

# codemem

Persistent memory for [OpenCode](https://opencode.ai) and [Claude Code](https://claude.ai/code). codemem captures what you work on across sessions, retrieves relevant context using hybrid search, and injects relevant context automatically in OpenCode.

- **Local-first** — everything lives in SQLite on your machine
- **Hybrid retrieval** — FTS5 BM25 lexical search + sqlite-vec semantic search, merged and re-ranked
- **Automatic injection** — the OpenCode plugin injects context into every prompt, no manual steps
- **Claude Code plugin support** — install from the codemem marketplace source
- **Built-in viewer** — browse memories, sessions, and observer output in a local web UI
- **Peer-to-peer sync** — replicate memories across machines without a central service

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/images/codemem-dark.png">
</picture>

## Quick start

**Prerequisites:** Node.js 24+ and npm (or pnpm)

### OpenCode

1. Install the OpenCode plugin and MCP config:

```text
npx -y codemem setup --opencode-only
```

2. Restart OpenCode.

The OpenCode plugin manages backend execution automatically — no separate global install is required.

3.…
