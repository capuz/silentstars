---
repo: "juspay/neurolink"
name: "neurolink"
description: "One TypeScript interface for 24+ LLM providers — swap providers without rewriting. MCP-native (connect any MCP server), voice (TTS/STT/realtime), RAG, memory, file processors. Production-origin: powers Tara, Yama, and Clairvoyance at Juspay."
readmeQualityOk: true
url: "https://github.com/juspay/neurolink"
homepage: "https://neurolink.ink"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["ai", "ai-development", "ai-platform", "automation", "developer-tools", "llm", "mcp", "model-context-protocol", "agents", "local-first"]
stars: 123
forks: 125
openIssues: 54
closedIssues: 337
watchers: 4
contributors: 85
recentReleases: 0
createdAt: "2025-05-31T15:05:42Z"
lastCommitAt: "2026-08-24T04:20:54Z"
lastReleaseAt: "2025-07-06T22:33:15Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "fork_magnet"]
healthScore: 97
undervaluedScore: 55
maintainers: ["murdore"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/993805781/24ad8594-ddb9-4c8d-a4f9-15c3f72f9390"
discussionCount: 2
---

# NeuroLink

**The pipe layer for the AI nervous system.**

AI intelligence flows as streams — tokens, tool calls, memory, voice, documents.
NeuroLink is the vascular layer that carries these streams from where they are
generated (LLM providers: the neurons) to where they are needed (connectors: the organs).

```typescript
import { NeuroLink } from "@juspay/neurolink";

const pipe = new NeuroLink();

// Everything is a stream
const result = await pipe.stream({ input: { text: "Hello" } });
for await (const chunk of result.stream) {
  if ("content" in chunk) {
    process.stdout.write(chunk.content);
  }
}
```

**[→ Docs](https://docs.neurolink.ink) · [→ Quick Start](https://docs.neurolink.ink/docs/getting-started/quick-start) · [→ npm](https://www.npmjs.com/package/@juspay/neurolink)**

---

## 🧠 What is NeuroLink?

**NeuroLink is the universal AI integration platform that unifies 30+ AI providers and 100+ models under one consistent API.**

Extracted from production systems at Juspay, NeuroLink provides a practical, TypeScript-first way to integrate AI into any application. Whether you're building with OpenAI, Anthropic, Google, AWS Bedrock, Azure, or any of our 30+ supported…
