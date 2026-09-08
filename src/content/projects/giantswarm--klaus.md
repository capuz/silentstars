---
repo: "giantswarm/klaus"
name: "klaus"
description: "A Go wrapper around claude-code to orchestrate AI agents within Kubernetes"
readmeQualityOk: true
url: "https://github.com/giantswarm/klaus"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 7
forks: 0
openIssues: 14
closedIssues: 63
watchers: 0
contributors: 19
recentReleases: 0
createdAt: "2026-02-06T12:22:52Z"
lastCommitAt: "2026-09-08T08:17:08Z"
lastReleaseAt: "2026-02-14T09:00:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 54
maintainers: ["renovate[bot]", "giantswarm-align-files[bot]", "teemow"]
openGraphImageUrl: "https://opengraph.githubassets.com/411b9dcbfd77bb63413a2b6124e86028e4f318391dca8e7faaa9c90969428e7e/giantswarm/klaus"
---

# klaus

An [MCP](https://modelcontextprotocol.io/) server that wraps [Claude Code](https://docs.anthropic.com/en/docs/claude-code) to run AI coding agents inside Kubernetes.

## Overview

Klaus runs the Claude Code CLI as a managed subprocess and exposes it over HTTP as a Streamable HTTP MCP endpoint. This allows orchestrating AI coding agents in Kubernetes with proper lifecycle management, health checks, and optional OAuth authentication.

```
MCP Client --> /mcp --> MCP Server --> Prompter --> Claude Code CLI (subprocess)
```

### MCP Tools

| Tool | Description |
|------|-------------|
| `prompt` | Send a task to the Claude agent. Non-blocking by default (set `blocking=true` to wait for completion). |
| `status` | Query agent state, progress, and result. Returns `completed` with result when a non-blocking task finishes. |
| `stop` | Terminate the running agent |
| `result` | Get full untruncated result and message history from the last run (debugging tool) |

### Extension system

Klaus supports the full Claude Code extension surface, configured via Helm values, klausctl config, or operator CRDs:

-…
