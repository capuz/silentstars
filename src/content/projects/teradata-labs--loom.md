---
repo: "teradata-labs/loom"
name: "loom"
description: "A fully featured, enterprise grade multi-agent harness with full observability, natural language agent creation, and intelligent context management."
url: "https://github.com/teradata-labs/loom"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 44
forks: 9
openIssues: 9
closedIssues: 16
watchers: 4
contributors: 9
recentReleases: 0
createdAt: "2025-12-23T16:38:21Z"
lastCommitAt: "2026-06-25T01:39:12Z"
lastReleaseAt: "2026-02-24T04:14:04Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 90
undervaluedScore: 35
maintainers: ["dependabot[bot]", "ilsiepotamus", "d-padmanabhan"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1121842487/a33e0465-1136-401e-aa46-d8272598bde3"
discussionCount: 1
---

# Loom

An LLM agent framework for Go. Create agents from natural language, orchestrate them with workflow patterns, and improve them through pattern-guided learning.

**Version**: v1.3.0

---

## Quick Start

```bash
# 1. Install
git clone https://github.com/teradata-labs/loom && cd loom
./quickstart.sh          # macOS/Linux (handles Go, Buf, patterns)
# .\quickstart.ps1       # Windows (PowerShell)

# 2. Set your LLM provider
export ANTHROPIC_API_KEY="your-key"    # or Bedrock, Ollama, OpenAI, etc.

# 3. Start the server
looms serve              # gRPC :60051, HTTP :5006

# 4. Launch the TUI
loom                     # Opens with Guide agent
loom --thread weaver     # Or go straight to the Weaver
```

The **Weaver** is a meta-agent that creates other agents from natural language:

```
You: Create a Teradata query optimizer that analyzes EXPLAIN plans
Weaver: Analyzing requirements... selecting patterns... activating agent.
```

**API endpoints** after `looms serve`:
- **gRPC**: `localhost:60051` (127 RPCs)
- **HTTP/REST**: `localhost:5006` (with SSE streaming)
- **Swagger UI**: `localhost:5006/swagger-ui`
- **MCP Apps**: `localhost:5006/apps/`

---

## How It Works

Instead of…
