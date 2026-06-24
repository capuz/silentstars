---
repo: "BicameralAI/bicameral-mcp"
name: "bicameral-mcp"
description: "Agent-facing Bicameral MCP tools for ingest, preflight, binding, and review commands"
url: "https://github.com/BicameralAI/bicameral-mcp"
homepage: "https://try.bicameral-ai.com/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agentic-workflows", "codebase-intelligence", "context-engineering", "decision-ledger", "developer-tools", "drift-detection", "knowledge-graph", "mcp", "model-context-protocol", "semantic-search"]
stars: 9
forks: 1
openIssues: 40
closedIssues: 142
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-03-30T00:24:07Z"
lastCommitAt: "2026-06-24T00:20:39Z"
lastReleaseAt: "2026-03-30T08:13:42Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 95
undervaluedScore: 61
maintainers: ["jinhongkuan", "Knapp-Kevin", "devin-ai-integration[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/54776d38272f09819a75b673313e5d25d50cb5c149739d6cba96a979ffa4f1f2/BicameralAI/bicameral-mcp"
---

# Bicameral MCP

`bicameral-mcp` is the MCP transport client for the local `bicameral-bot`
daemon. It exposes agent-friendly tools, maps them into canonical
`ToolRequest` envelopes, sends those requests to the daemon, and returns daemon
`ToolResponse` payloads.

MCP is not the Bicameral daemon, Decision Ledger, code graph, dashboard,
integration runtime, setup wizard, telemetry sink, or governance engine.

## Current Contract

The cutover target is the bot-owned ToolRequest protocol:

```text
MCP tool call
  -> ToolRequest(command + AuthorityContext)
  -> bicameral-bot daemon validation and governance policy
  -> ToolResponse(status + result + governance_result)
```

MCP performs a daemon capability handshake at startup. It refuses to start when
the daemon's ToolRequest protocol version is unsupported. After protocol
compatibility is established, individual commands may still return daemon
capability errors while bot parity is being implemented.

## Configuration

Set the bot daemon endpoint with:

```bash
export BICAMERAL_DAEMON_URL=http://127.0.0.1:37373
```

Optional context:

```bash
export BICAMERAL_ACTOR_ID="$(whoami)"
export BICAMERAL_WORKSPACE="$PWD"
export…
