---
repo: "woojubb/robota"
name: "robota"
description: "TypeScript framework for building AI agents — multi-provider (Anthropic, OpenAI, Google), tool calling, permissions, hooks, streaming, and CLI coding assistant"
readmeQualityOk: true
url: "https://github.com/woojubb/robota"
homepage: "https://robota.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["agent", "agent-workflow", "agentic-ai", "ai", "ai-agent", "claude", "openai", "anthropic", "cli", "function-calling"]
stars: 19
forks: 2
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-05-18T13:19:51Z"
lastCommitAt: "2026-07-12T06:17:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 69
maintainers: ["woojubb"]
openGraphImageUrl: "https://opengraph.githubassets.com/e778b3d0e3c1be8e72e42acfd228e6d77a94f40cab43fd49ea7764d940f4df4e/woojubb/robota"
discussionCount: 0
---

# Robota — Composable AI Agent Libraries

Robota is a **composable TypeScript library collection for building AI agents** — strict types,
multi-provider, tool calling, and an extensible plugin/event architecture. You assemble agents
from neutral building blocks; `@robota-sdk/agent-cli` (an AI coding assistant) is a **reference
app built from these same libraries**, not the product itself.

> Evaluating with an AI agent? Start at [`llms.txt`](https://github.com/woojubb/robota/blob/HEAD/llms.txt) — the consumer map (identity,
> minimal package set, capability matrix, behavior contracts).

## Quick Start — Embed the Library

The minimal set is three packages: `agent-core` + `agent-provider` + `agent-tools`.

```typescript
import { Robota } from '@robota-sdk/agent-core';
import { AnthropicProvider } from '@robota-sdk/agent-provider-anthropic';

const agent = new Robota({
  name: 'MyAgent',
  aiProviders: [new AnthropicProvider({ apiKey: process.env.ANTHROPIC_API_KEY })],
  defaultModel: {
    provider: 'anthropic',
    model: 'claude-sonnet-4-6',
  },
  systemMessage: 'You are a helpful assistant.',
});

const response = await agent.run('Hello!');
```

Any OpenAI-compatible endpoint…
