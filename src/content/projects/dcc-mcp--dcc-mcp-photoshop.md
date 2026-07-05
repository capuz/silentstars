---
repo: "dcc-mcp/dcc-mcp-photoshop"
name: "dcc-mcp-photoshop"
description: "Adobe Photoshop adapter for the DCC Model Context Protocol (MCP) ecosystem — bridges MCP tools to Photoshop via UXP WebSocket"
readmeQualityOk: true
url: "https://github.com/dcc-mcp/dcc-mcp-photoshop"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["adobe", "ai", "dcc", "llm", "mcp", "model-context-protocol", "photoshop", "uxp"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-04-15T18:35:45Z"
lastCommitAt: "2026-07-05T20:54:36Z"
lastReleaseAt: "2026-06-09T09:43:35Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 94
undervaluedScore: 57
maintainers: ["loonghao"]
openGraphImageUrl: "https://opengraph.githubassets.com/9af51a9341ebe182c4b58dddc8789e736f20ebd09349267c4a521ea489e9b5a2/dcc-mcp/dcc-mcp-photoshop"
---

# dcc-mcp-photoshop

Bring Adobe Photoshop to MCP-native AI agents.

`dcc-mcp-photoshop` turns Photoshop into a standards-compliant **MCP Streamable HTTP** backend via the [adobepy](https://github.com/dcc-mcp/adobepy) Rust broker and UXP bridge. Agents can inspect documents, create and edit layers, apply text, filters, smart objects, selections, export images, and automate Photoshop workflows through typed tools instead of brittle ad-hoc scripts.

The Python MCP server communicates with Photoshop through the adobepy Rust broker (port 47391), which proxies between the Python SDK and the UXP bridge running inside Photoshop.

## Why Use It

| What you get | Why it matters |
|---|---|
| **40+ typed Photoshop tools** across 8 bundled skill packages | Agents can call validated tools for document, layer, image, text, selection, filter, smart object, and script operations. |
| **adobepy Rust broker** | High-performance local proxy between Python SDK and UXP bridge. |
| **Sidecar isolation** | Python MCP server runs outside Photoshop's UI thread; adobepy broker handles all host communication. |
| **Gateway compatible** | Works with `dcc-mcp-server` sidecar for multi-DCC deployments…
