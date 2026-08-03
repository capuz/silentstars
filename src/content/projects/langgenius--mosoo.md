---
repo: "langgenius/mosoo"
name: "mosoo"
description: "Open-source, Cloudflare-native agent runtime for Codex, Claude Agent SDK, and OpenCode—with API endpoints, isolated sandboxes, and inspectable runs."
readmeQualityOk: true
url: "https://github.com/langgenius/mosoo"
homepage: "https://mosoo.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["agent-observability", "agent-runtime", "agent-sandbox", "ai-agents", "codex", "coding-agent", "mcp", "opencode", "agent-control-plane", "claude-agent-sdk"]
stars: 95
forks: 15
openIssues: 27
closedIssues: 41
watchers: 1
contributors: 13
recentReleases: 2
createdAt: "2026-06-13T02:18:02Z"
lastCommitAt: "2026-08-03T06:43:28Z"
lastReleaseAt: "2026-07-31T07:26:58Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 91
undervaluedScore: 35
maintainers: ["Yevanchen", "RockChinQ", "AsperforMias"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d4643ca04aa901a0f4410fd6d873a6068a2b5051750777015b1c94cd496b5fd/langgenius/mosoo"
---

</p>

<h1 align="center">mosoo</h1>

  <strong>An open-source agent runtime for coding agents.</strong><br />
  Run OpenAI Codex, Claude Agent SDK, and OpenCode behind API endpoints in isolated AI agent sandboxes.
</p>

</p>

</p>

mosoo provides a Cloudflare-native control plane to stream tool activity, inspect Run history, and keep Threads and files across executions. It is self-hostable in your own account.

Your application remains yours. Its backend owns product behavior and end-user access. mosoo focuses on Agent execution and lifecycle; App Deployment is a separate Alpha surface, not the core product contract.

## How It Works

```text
configure Agent + Skills + MCP + provider
  -> preview and publish an Agent version
  -> call it from a backend or the mosoo console
  -> stream events, handle permission requests, inspect files and usage
  -> continue a durable Thread across Runs
```

## Features

What works today across the Agent runtime and API:

- **Agent runtime and control plane.** Configure and run OpenAI Codex, Claude Agent SDK, and OpenCode behind one normalized runtime protocol.
- **Agent API.** Start, follow, continue, stop, archive, and delete Agent work from a…
