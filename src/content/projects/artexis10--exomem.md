---
repo: "Artexis10/exomem"
name: "exomem"
description: "Self-hosted MCP server that makes your Obsidian/markdown vault searchable — text, PDFs, Office docs, images, audio — from any MCP client. Hybrid retrieval over a typed, governed corpus, sub-second at 50k notes; your files stay plain markdown."
readmeQualityOk: true
url: "https://github.com/Artexis10/exomem"
homepage: "https://substratesystems.io/exomem"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["agent-memory", "ai-agents", "claude", "hybrid-search", "knowledge-base", "markdown", "mcp", "mcp-server", "obsidian", "rag"]
stars: 9
forks: 2
openIssues: 76
closedIssues: 72
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-05-18T16:34:03Z"
lastCommitAt: "2026-10-27T12:40:11Z"
lastReleaseAt: "2026-07-05T15:55:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 49
maintainers: ["Artexis10", "exomem-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/90b52c9705f1379268f04e97cf659ccc66b09ceaad3602243b52bb03d2564f55/Artexis10/exomem"
fundingLinks: ["GITHUB:https://github.com/substrate-systems"]
---

# exomem

Durable memory with sources, proof, history, and review for MCP-capable agents.

exomem turns an owned Markdown/Obsidian vault into a local knowledge substrate
for Codex, Claude Code, Cursor, chatbots, CLI agents, and any client that can
call MCP tools. Your files stay plain, local, portable, and editable outside the
server.

```text
agent -> MCP tools -> exomem -> your Markdown / Obsidian vault
```

## Prove it in 30 seconds

```bash
uvx exomem demo
```

One command, no install, no config, no vault of your own needed:

```text
exomem demo — bundled sample vault, keyword mode, fully local
vault: /tmp/exomem-demo-XXXXXX

1. doctor: PASS (0.8s)
2. find "retrieval": PASS (0.1s)
   - Knowledge Base/Sources/Sessions/2026-06-30-sample-session.md
   - Knowledge Base/Notes/Insights/retrieval-needs-owned-files.md
3. get retrieval insight: PASS (0.0s)
   - title: Retrieval needs owned files
   - type: insight
   - excerpt: Local-first knowledge tools should retrieve from files the user already owns.
4. audit: PASS (0.0s)

demo PASS — total 1.0s. This is your proof: agents search files you own.
Next: connect your own vault with `exomem setup`
```

Runs fully local and read-only…
