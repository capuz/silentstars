---
repo: "timurgaleev/memex"
name: "memex"
description: "Self-hosted personal AI knowledge brain -- hybrid (vector + keyword + entity-graph) search over your notes and code, served to any MCP agent (Claude Code, Cursor, Codex). One AWS account, zero telemetry, MIT."
readmeQualityOk: true
url: "https://github.com/timurgaleev/memex"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["bun", "claude", "knowledge-base", "mcp", "model-context-protocol", "pgvector", "rag", "second-brain", "self-hosted", "vector-search"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-11T19:48:10Z"
lastCommitAt: "2026-09-19T01:18:36Z"
lastReleaseAt: "2026-06-01T06:40:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 43
maintainers: ["timurgaleev"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1235933050/05a84234-1dc0-4a85-8f24-df119dcf8acb"
---

# memex

### Long-term memory for your AI agent &mdash; that never leaves your cloud.

Self-hosted on your own AWS. memex indexes your notes and code and lets **any
MCP agent** (Claude Code, Cursor, Codex) search it and **cite the source**.
No SaaS, no telemetry &mdash; your second brain stays yours.

</div>

---

## What is memex?

You write a lot &mdash; notes, decisions, docs, code. Six months later you can't
find any of it, and your AI assistant has no idea it exists.

**memex is a personal knowledge brain you run in your own cloud.** It reads your
markdown notes and your code, turns them into a searchable index, and hands that
search to your AI agent over the
[Model Context Protocol (MCP)](https://modelcontextprotocol.io). Now your agent
answers *"what did I decide about X?"* with **your own words, cited back to the
exact note** &mdash; instead of guessing.

It's a second brain for you, and long-term memory for your AI.

## See it work

</div>

memex returns the **evidence**, cited to the exact file. Your agent writes the
answer. (The brain retrieves &mdash; it doesn't chat.)

## Why it exists

- **Your knowledge is private.** Most "AI memory" tools upload everything to…
