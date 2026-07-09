---
repo: "NimbleBrainInc/nimblebrain"
name: "nimblebrain"
description: "Self-hosted platform for MCP Apps and agent automations — tools, interactive UIs, scheduled runs, multi-agent delegation."
readmeQualityOk: true
url: "https://github.com/NimbleBrainInc/nimblebrain"
homepage: "https://nimblebrain.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["agent", "agent-automation", "agent-runtime", "ai-agents", "anthropic", "bun", "claude", "ext-apps", "llm", "mcp"]
stars: 5
forks: 7
openIssues: 96
closedIssues: 79
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-03-24T23:30:28Z"
lastCommitAt: "2026-07-09T20:44:59Z"
lastReleaseAt: "2026-06-23T18:12:29Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 89
undervaluedScore: 76
maintainers: ["mgoldsborough", "buyicoder", "MFA-G"]
openGraphImageUrl: "https://opengraph.githubassets.com/85fafa6960678a0f6effd3d8045ae500bec71e01a7b6cd410b2a03d228fe51cc/NimbleBrainInc/nimblebrain"
discussionCount: 0
---

# NimbleBrain

A self-hosted platform for [MCP Apps](https://modelcontextprotocol.io/extensions/apps/overview) and agent automations. Install an MCP bundle and you get more than tools — you get an interactive UI in the sidebar with live agent-UI data sync, and the ability to run the agent on demand or on a cron schedule. Full [ext-apps](https://apps.extensions.modelcontextprotocol.io/api/) host support on top of an agentic loop with skill-driven prompt composition and multi-agent delegation.

Ships as container images on GHCR (`ghcr.io/nimblebraininc/nimblebrain`, `ghcr.io/nimblebraininc/nimblebrain-web`). Also exposes itself as an MCP server via Streamable HTTP so external MCP clients can consume the aggregated toolset.

## Quick Start

### Option 1: Docker (recommended)

```bash
# Prerequisites: Docker
export ANTHROPIC_API_KEY=sk-ant-...

docker compose up
# Pulls ghcr.io/nimblebraininc/nimblebrain + nimblebrain-web
# Web UI:  http://localhost:27246
# API:     http://localhost:27246/v1/health
```

Open `http://localhost:27246` in your browser. Auth is configured via `instance.json` (see Configuration).

To build from source instead of pulling (e.g. when developing against local…
