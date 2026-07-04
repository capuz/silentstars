---
repo: "ptobey/local-memory-mcp"
name: "local-memory-mcp"
description: "Persistent local memory for Claude and ChatGPT. No cloud, no subscription. Self-hosted RAG over MCP."
url: "https://github.com/ptobey/local-memory-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["chatgpt", "chromadb", "claude", "llm", "local-first", "mcp", "memory", "python", "rag", "self-hosted"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-12T17:48:46Z"
lastCommitAt: "2026-07-04T06:13:17Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 28
maintainers: ["ptobey"]
openGraphImageUrl: "https://opengraph.githubassets.com/80e10133d12c1224e735377b82a4b70c78013375d450a949dcc562c950ea0f8c/ptobey/local-memory-mcp"
---

# local-memory-mcp

**AI assistants forget everything when the conversation ends. This fixes that - locally.**

No cloud. No subscription. No account. Your data stays on your machine.

`local-memory-mcp` gives Claude, ChatGPT, and other MCP-compatible assistants a persistent memory layer powered by local vector search (ChromaDB). Tell it something once. It remembers across sessions.

---

## The problem it solves

Every new Claude or ChatGPT session starts blank. Your preferences, your project context, your decisions - gone. You re-explain yourself constantly.

local-memory-mcp is a local MCP server that lets your AI assistant:

- Store things worth remembering ("my deep work block is 6:30–9 AM")
- Retrieve relevant context at the start of any new session
- Version and supersede memories as your situation changes
- Never send your data anywhere

It's the memory layer AI assistants should have built in, but don't.

---

## Quickstart (Docker - 2 minutes)

```bash
git clone https://github.com/ptobey/local-memory-mcp.git
cd local-memory-mcp
docker compose up --build -d
```

Then point your MCP client at `http://localhost:8000/mcp`. Done.

→ [Claude Desktop…
