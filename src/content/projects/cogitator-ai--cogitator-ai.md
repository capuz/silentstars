---
repo: "cogitator-ai/Cogitator-AI"
name: "Cogitator-AI"
description: "AI agents that survive production. Self-hosted TypeScript runtime: multi-provider LLMs, tools with approvals, memory & RAG, durable workflows, multi-agent swarms, sandboxed execution, MCP and A2A."
readmeQualityOk: true
url: "https://github.com/cogitator-ai/Cogitator-AI"
homepage: "https://cogitator.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["agent", "agentic-ai", "agentic-framework", "agentic-workflow", "ai", "ai-framework", "gemini", "llm", "mcp", "openai"]
stars: 41
forks: 9
openIssues: 10
closedIssues: 15
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2025-12-29T22:04:18Z"
lastCommitAt: "2026-10-21T23:35:56Z"
lastReleaseAt: "2026-10-03T23:38:29Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 54
maintainers: ["eL1fe", "github-actions[bot]", "bhushan4work"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1124938076/c279914e-15d4-4485-b963-e6e1eba8beb3"
discussionCount: 0
---

# Cogitator

### Self-hosted agents, swarms and workflows in TypeScript.

Built for engineers who trust their agents to run while they sleep.

[Quick Start](#quick-start) · [Examples](https://github.com/cogitator-ai/Cogitator-AI/blob/HEAD/examples) · [Docs](https://cogitator.app/docs) · [Cookbook](https://cogitator.app/cookbook) · [Discussions](https://github.com/cogitator-ai/Cogitator-AI/discussions)

Coding agents can read the docs as Markdown: [`cogitator.app/llms.txt`](https://cogitator.app/llms.txt) (index) and [`cogitator.app/llms-full.txt`](https://cogitator.app/llms-full.txt) (everything in one file).

---

---

## What is Cogitator?

Cogitator is a TypeScript runtime for LLM agents that runs on your own infrastructure. Start with one agent and a couple of tools, then grow into multi-agent swarms, durable workflows and agents served over HTTP, MCP or A2A, with the same `Agent`, `tool()` and `Cogitator` you started with.

It works with 12 providers, from OpenAI, Anthropic and Google to local models through Ollama, and `@cogitator-ai/core` has 7 dependencies.

```typescript
import { Cogitator, Agent, tool } from '@cogitator-ai/core';
import { z } from 'zod';

const weather =…
