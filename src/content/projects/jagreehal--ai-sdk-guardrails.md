---
repo: "jagreehal/ai-sdk-guardrails"
name: "ai-sdk-guardrails"
description: "Middleware for the Vercel AI SDK that adds safety, quality control, and cost management to your AI applications by intercepting prompts and responses."
url: "https://github.com/jagreehal/ai-sdk-guardrails"
homepage: "https://www.npmjs.com/package/ai-sdk-guardrails"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai", "guardrails"]
stars: 24
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2025-07-16T20:34:03Z"
lastCommitAt: "2026-07-02T06:33:54Z"
lastReleaseAt: "2026-06-28T13:40:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 75
undervaluedScore: 41
maintainers: ["jagreehal", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/458b8601e98ba74245fe1a8c65cf5801ceeee22f1eb4f805df552b1b1f040513/jagreehal/ai-sdk-guardrails"
---

# AI SDK Guardrails

A monorepo for AI SDK Guardrails - input and output safety controls for the [Vercel AI SDK](https://ai-sdk.dev).

📚 **[Documentation](https://jagreehal.github.io/ai-sdk-guardrails/)** | 📦 **[npm Package](https://www.npmjs.com/package/ai-sdk-guardrails)** | 🛡️ **[Package README](./packages/ai-sdk-guardrails/README.md)**

## Quick Start

```bash
npm install ai-sdk-guardrails
```

```ts
import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';
import {
  withGuardrails,
  piiDetector,
  promptInjectionDetector,
} from 'ai-sdk-guardrails';

const model = withGuardrails({
  model: openai('gpt-4o'),
  inputGuardrails: [piiDetector(), promptInjectionDetector()],
});

const { text } = await generateText({
  model,
  prompt: 'Write a friendly email',
});
```

See the **[full documentation](https://jagreehal.github.io/ai-sdk-guardrails/)** and **[package README](./packages/ai-sdk-guardrails/README.md)** for detailed usage.

## Repository Structure

This is a pnpm monorepo containing:

```
ai-sdk-guardrails/
├── packages/
│   ├── ai-sdk-guardrails/    # Main library package (published to npm)
│   └── examples/              # 60+ usage examples
├──…
