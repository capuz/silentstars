---
repo: "SweetRetry/flowpocus"
name: "flowpocus"
description: "Real-time collaborative canvas that humans and AI agents edit together. React Flow + Yjs + Hocuspocus, with an MCP server, a CLI, and typed server-owned canvas commands."
readmeQualityOk: true
url: "https://github.com/SweetRetry/flowpocus"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["ai-agents", "canvas", "collaborative-editing", "crdt", "drizzle-orm", "hocuspocus", "hono", "mcp", "mcp-server", "model-context-protocol"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-24T07:59:05Z"
lastCommitAt: "2026-11-17T12:20:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 57
undervaluedScore: 47
maintainers: ["SweetRetry"]
openGraphImageUrl: "https://opengraph.githubassets.com/51fee6a8728708150612619dbd74a33a571a96a589813dd21a3011508303fa32/SweetRetry/flowpocus"
---

# Flowpocus

Real-time collaborative canvas that humans and AI agents edit together. People work in the browser; agents
connect through an MCP server, a CLI, or HTTP, and every change goes through the same typed, server-owned
canvas commands. Built on React Flow, Yjs, and Hocuspocus.

## Features

- **Real-time Collaboration** - Multiple users can edit the same canvas simultaneously
- **Conflict-free Sync** - Powered by Yjs CRDT for seamless concurrent editing
- **User Presence** - See other users' cursors and selections in real-time, and watch agents move their own cursor as they edit
- **Scoped Undo/Redo** - Each user has independent undo history
- **Node Types** - Text, image, and video nodes
- **Agent Access** - Typed server-owned commands over HTTP, a local CLI, and an MCP endpoint
- **Horizontal Scaling** - Each canvas lives on one owner instance behind a database lease, with fenced writes; Redis Pub/Sub is available as an alternative mode
- **Light and Dark Themes** - Follows the system color scheme, canvas controls included

## Tech Stack

| Layer | Technology |
|-------|------------|
| Node Editor | [React Flow](https://reactflow.dev/) |
| Real-time Sync |…
