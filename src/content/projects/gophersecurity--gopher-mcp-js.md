---
repo: "GopherSecurity/gopher-mcp-js"
name: "gopher-mcp-js"
description: "JS bindings for Cross-Language MCP Orchestrator, think of LangChain + Vercel AI kit but for MCP"
readmeQualityOk: true
url: "https://github.com/GopherSecurity/gopher-mcp-js"
homepage: "https://gopher.security"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["agent-framework", "agentic-ai", "ai-agents", "composable", "cross-language", "ffi", "langchain", "langgraph", "llm", "mcp"]
stars: 7
forks: 1
openIssues: 14
closedIssues: 2
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-01-27T20:46:26Z"
lastCommitAt: "2026-11-16T11:50:35Z"
lastReleaseAt: "2026-04-21T13:06:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 58
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/8f1f8a53cfc3c3d481b6b2cb8f258bd0ba58cae587a61d58f0888bf58b66e43b/GopherSecurity/gopher-mcp-js"
---

# @gopher.security/gopher-mcp-js

TypeScript SDK for AI Agent orchestration with MCP (Model Context Protocol) support.

## Features

- **Multi-Provider LLM Support** - Anthropic, OpenAI, Google, Azure, and more
- **MCP Protocol** - Full Model Context Protocol client support
- **Native Performance** - Powered by C++ core with TypeScript bindings
- **Tool Orchestration** - Execute tools across multiple MCP servers
- **Type Safety** - Full TypeScript support with strict mode

## Supported LLM Providers

| Provider | Models |
|----------|--------|
| Anthropic | Claude 3.5 Sonnet, Claude 3 Haiku, Claude 3 Opus |
| OpenAI | GPT-4o, GPT-4o-mini, GPT-4 Turbo |
| Google | Gemini 2.5 Flash, Gemini 2.0 Pro |
| Azure OpenAI | GPT-4o, GPT-4 (via Azure deployment) |

## Installation

```bash
npm install @gopher.security/gopher-mcp-js
```

SDK versions use `X.Y.Z-N`: `X.Y.Z` matches the native `gopher-orch` version,
and `N` identifies an SDK revision. Bare `X.Y.Z` SDK releases are not published
under this policy. npm treats these versions as prereleases, so ordinary stable
caret or `>=` ranges exclude them. Pin an exact SDK version or use `@latest`:

```bash
npm install --save-exact…
