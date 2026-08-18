---
repo: "lobu-ai/lobu"
name: "lobu"
description: "Open-source control plane and runtime for organisational agents: shared company context, isolated execution, approvals and MCP."
readmeQualityOk: true
url: "https://github.com/lobu-ai/lobu"
homepage: "https://lobu.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["agent", "chatbot", "clawdbot", "openclaw", "personal-assistant", "agent-infrastructure", "agent-memory", "ai-agents", "event-sourcing", "knowledge-graph"]
stars: 208
forks: 27
openIssues: 43
closedIssues: 268
watchers: 0
contributors: 40
recentReleases: 0
createdAt: "2025-07-27T03:49:12Z"
lastCommitAt: "2026-08-18T04:09:03Z"
lastReleaseAt: "2026-02-20T04:51:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 42
maintainers: ["buremba"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a6e140958719f1fd1f8768b981393c929bc2f821f7697c22d5cbb560c59fac4/lobu-ai/lobu"
discussionCount: 1
---

# Lobu — Shared company context for every AI agent

**Lobu is an open-source shared context layer for AI agents.** Giving every agent direct access to company tools does not give the company shared memory. Each agent still reconstructs what happened inside one model session, then loses what it learned when that session ends.

Connect your company stack once. Claude Code, Codex, ChatGPT, and your own agents get one permission-aware memory of the company while keeping their existing interface, model, and runtime. When a responsibility should persist beyond the current chat, they can discover and hand work to a Lobu specialist over MCP.

## Start with the agent you already use

Point any MCP client at Lobu. No Lobu agent runtime or `lobu.config.ts` is required.

```bash
# Claude Code
claude mcp add --transport http lobu https://lobu.ai/mcp

# Codex
codex mcp add lobu --url https://lobu.ai/mcp
```

Complete OAuth when prompted, connect the company sources you want to share, and ask your agent to use Lobu when it needs organizational context.

The same MCP endpoint works with **ChatGPT, Claude Desktop, Gemini CLI, Cursor**, and custom MCP clients. `lobu memory init` detects Claude…
