---
repo: "pouramin/TL-Studio"
name: "TL-Studio"
description: "Fast local development workspace with AI built in."
readmeQualityOk: true
url: "https://github.com/pouramin/TL-Studio"
homepage: "https://pouramin.dev/TL-Studio/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [60, 26]
topics: ["agentic-ai", "ai", "ai-agents", "ai-coding", "code-agent", "coding-agent", "developer-tools", "developer-tools-ai-agent", "go", "javascript"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-09T14:39:15Z"
lastCommitAt: "2026-10-09T10:50:57Z"
lastReleaseAt: "2026-09-15T10:44:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 68
maintainers: ["pouramin"]
openGraphImageUrl: "https://opengraph.githubassets.com/27dbb0e5c2ad3a982122938781d2ab3f4a86b7a6d79d3b123699e80cdcecfbfe/pouramin/TL-Studio"
---

[English](https://github.com/pouramin/TL-Studio/blob/HEAD/README.md) · [فارسی](https://github.com/pouramin/TL-Studio/blob/HEAD/README.fa_IR.md)

  Edit, search, run, preview, chat, use tools, and connect models — all from one TL Studio workspace on your own machine.

---

## What is TL Studio?

**TL Studio** is a standalone local development environment built around a native coding agent.

It combines a browser-based workspace with a Go backend that owns the Agent loop, sessions, tools, permissions, providers, credentials, terminal processes, project files, Preview, Plugins/MCP, and semantic events.

TL Studio executes coding sessions through its own Native Agent and Tool Executor.

Your project stays on your machine. Model traffic goes directly to the provider you configure.

## Quick start

### Run with npm

If Node.js and npm are installed, open a terminal inside your project directory and run:

```bash
npx --yes tl-studio
```

The npm package is a lightweight launcher for the matching **stable** TL Studio release. It downloads the official binary for your platform, verifies its SHA-256 checksum, caches it locally, and starts TL Studio with the current directory selected.

To…
