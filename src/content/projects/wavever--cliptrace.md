---
repo: "wavever/ClipTrace"
name: "ClipTrace"
description: "Local-first clipboard history for macOS — offline semantic search, OCR, content protection, and a built-in MCP server for AI tools. 本地优先的 macOS 剪贴板管理器"
readmeQualityOk: true
url: "https://github.com/wavever/ClipTrace"
homepage: "https://wavever.github.io/ClipTrace/"
language: "Swift"
languages: ["Swift"]
languagePcts: [98]
topics: ["ai-tools", "clipboard-history", "clipboard-manager", "local-first", "macos", "mcp", "menubar-app", "model-context-protocol", "privacy", "productivity"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-05-09T08:37:36Z"
lastCommitAt: "2026-07-08T04:48:28Z"
lastReleaseAt: "2026-06-10T09:19:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 69
undervaluedScore: 60
maintainers: ["wavever"]
openGraphImageUrl: "https://opengraph.githubassets.com/63f7b5636a131bfab69cde4f657972cd3eeb82dd5236c1dd91f30fdec0c2d71c/wavever/ClipTrace"
---

</p>

<h1 align="center">ClipTrace</h1>

  <strong>English</strong> · <a href="README.zh-CN.md">中文</a>
</p>

  Local-first clipboard history for macOS and AI tools.
</p>

</p>

ClipTrace is an open-source macOS clipboard manager with offline semantic search and a built-in [Model Context Protocol](https://modelcontextprotocol.io/) server. It lets you search clipboard history locally, organize useful clips, and optionally let AI clients such as Claude Desktop, Claude Code, or Cursor query your clipboard without uploading it to a cloud service.

## Why ClipTrace?

- **Local-first by default** - clipboard history, OCR text, tags, and embeddings stay on your Mac.
- **Offline semantic search** - Apple `NLEmbedding` powers meaning-based search without hosted embedding APIs.
- **AI-native workflow** - the app binary can run as an MCP stdio server with searchable and writable clipboard tools.
- **Native macOS utility** - menu bar app, global hotkeys, Quick Paste, previews, snippets, and SwiftUI interface.
- **Content protection** - sensitive values such as phone numbers and API keys are redacted across the UI, exports, and MCP by default, while the original stays on your Mac for reuse.
-…
