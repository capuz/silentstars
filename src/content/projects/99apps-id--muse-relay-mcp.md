---
repo: "99apps-id/muse-relay-mcp"
name: "muse-relay-mcp"
description: "An MCP server that exposes your personal Muse at muse.ai as tools for other coding agents — terminal coding agents, IDEs, and other MCP hosts"
readmeQualityOk: true
url: "https://github.com/99apps-id/muse-relay-mcp"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 22
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-11-19T07:17:54Z"
lastCommitAt: "2026-11-21T12:22:49Z"
lastReleaseAt: "2026-11-20T17:34:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 26
maintainers: ["naracitrasolusindo"]
openGraphImageUrl: "https://opengraph.githubassets.com/e068a3f82431de79440d69e7949719cdf0d3eac5020939cf63d6f529fca66011/99apps-id/muse-relay-mcp"
---

An MCP server that exposes **your personal Muse at [muse.ai](https://muse.ai)** as tools for other coding agents — terminal coding agents, IDEs, and other MCP hosts. Questions travel through the **muse-relay** file relay: the server writes a request file, a polling hook on the Muse side wakes a Muse worker, and the answer comes back as a file that the server returns as the tool result.

> **Not an official Meta product.** Muse personal has no public API and cannot act as an MCP server natively — this bridge is the workaround. Answers come from your personal Muse, with its long-term memory of your projects, not from a raw model API.

> **Separate project.** This server is a standalone project, independent from the **Muse Companion** VS Code extension. The two share nothing but the relay folder: the extension does not contain this server, and this server does not need the extension — only the relay folders and the Muse-side polling hook (see [Requirements](#requirements)).

A real JSON-RPC session against `server.js` — handshake, tool list, an async question, and its answer arriving through the relay:
