---
repo: "MarlonJD/web-debug-mcp"
name: "web-debug-mcp"
description: "Evidence-first local MCP debugger for React, Vite, Next.js, Chromium, and Safari: reproduce, inspect, replay, and verify web bugs in one bounded workflow."
readmeQualityOk: true
url: "https://github.com/MarlonJD/web-debug-mcp"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [75, 23]
topics: ["cdp", "chromium", "codex", "developer-tools", "mcp", "model-context-protocol", "nextjs", "playwright", "react", "safari"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-08-26T15:27:56Z"
lastCommitAt: "2026-08-28T12:23:02Z"
lastReleaseAt: "2026-08-28T12:18:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 49
maintainers: ["MarlonJD"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d60beeae7141de6950eb54ba35a9845d16ae3db7850b824569828e3aa5d9f5c/MarlonJD/web-debug-mcp"
---

# web-debug-mcp

An evidence-first, local MCP debugger for web applications.

`web-debug-mcp` gives Codex and other MCP clients one bounded workflow for reproducing a web issue, inspecting browser and framework runtime state, collecting redacted evidence, and verifying the same flow after a fix. It covers the browser, frontend runtime, dev server, and replay timeline through one small MCP surface.

## Install as an MCP server

The core package is a standalone MCP server. The repository also includes an optional Web Debug plugin for Codex and ChatGPT: the MCP server provides callable debugging tools, while the bundled skill provides workflow guidance. Claude Code and other MCP clients can continue using the standalone server.

The published npm package runs locally over stdio and does not require a hosted service.

### Codex CLI, desktop app, and IDE extension

From a terminal:

```bash
codex mcp add web-debug-mcp -- npx -y web-debug-mcp@0.3.2
codex mcp list
```

The Codex desktop app and IDE extension share the same MCP configuration. You can also open Settings → MCP servers → Add server, choose **STDIO**, use `npx` as the command, and add these arguments:

```text
-y…
