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
stars: 10
forks: 1
openIssues: 48
closedIssues: 65
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-05-18T16:34:03Z"
lastCommitAt: "2026-09-23T08:46:41Z"
lastReleaseAt: "2026-07-05T15:55:56Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 56
maintainers: ["Artexis10", "exomem-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3c8a907a96e397992a7df8dd05a8175c3a966d11de346e99636bc96ab08da9f/Artexis10/exomem"
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
