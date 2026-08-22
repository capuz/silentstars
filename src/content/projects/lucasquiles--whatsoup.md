---
repo: "LucasQuiles/WhatSoup"
name: "WhatSoup"
description: "Multi-instance WhatsApp platform — passive listener, conversational chatbot, and autonomous AI agent runtimes behind Baileys v7. Fleet console, 162 MCP tools, durable message delivery, and WhatsApp poll-based decision bridge."
readmeQualityOk: true
url: "https://github.com/LucasQuiles/WhatSoup"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
stars: 8
forks: 4
openIssues: 40
closedIssues: 615
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2026-03-31T01:34:48Z"
lastCommitAt: "2026-08-22T04:06:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 58
maintainers: ["LucasQuiles"]
openGraphImageUrl: "https://opengraph.githubassets.com/914d992f198d6f1a8eb6a3834b7be3ba50bed4b563b9e2a7eb91ca32cad02f0b/LucasQuiles/WhatSoup"
---

# WhatSoup

A multi-instance WhatsApp platform that runs three fundamentally different runtimes — passive listener, conversational chatbot, and autonomous AI agent — behind one Baileys v7 connection per line. Ships with a fleet management console for provisioning, monitoring, and operating all instances from a single dashboard.

One process per instance. One SQLite database per instance. 168 MCP tools (165 always-registered + 3 conditionally-registered: `knowledge_search` when Pinecone config, credentials, and profiles are usable, `emit_heal_result` on non-sandboxed instances with at least one configured control-plane peer, and `memory_write` when a Pinecone key and index are configured). No backend build step — the runtime executes TypeScript directly via Node `--experimental-strip-types`; only the React console builds (to the repository-level `dist/`). Probably too many MCP tools.

## What It Does

Each WhatsApp number gets its own isolated process with its own runtime mode:

| Mode | What Happens | Use Case |
|------|-------------|----------|
| **passive** | Stores messages. Does nothing else. Manual read/reply via MCP tools. | Personal number — just want the data accessible |…
