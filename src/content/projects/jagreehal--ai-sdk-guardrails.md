---
repo: "jagreehal/ai-sdk-guardrails"
name: "ai-sdk-guardrails"
description: "Middleware for the Vercel AI SDK that adds safety, quality control, and cost management to your AI applications by intercepting prompts and responses."
readmeQualityOk: true
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
recentReleases: 3
createdAt: "2025-07-16T20:34:03Z"
lastCommitAt: "2026-09-20T08:46:25Z"
lastReleaseAt: "2026-08-12T22:22:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 72
maintainers: ["github-actions[bot]", "dependabot[bot]", "jagreehal"]
openGraphImageUrl: "https://opengraph.githubassets.com/105c8105d95a5c689718dd8632134706da5f01cc70808ac567f454525902a0b1/jagreehal/ai-sdk-guardrails"
---

# AI SDK Guardrails

A monorepo for AI SDK Guardrails - input and output safety controls for the [Vercel AI SDK](https://ai-sdk.dev).

📚 **[Documentation](https://jagreehal.github.io/ai-sdk-guardrails/)** | 📦 **[npm Package](https://www.npmjs.com/package/ai-sdk-guardrails)** | 🛡️ **[Package README](https://github.com/jagreehal/ai-sdk-guardrails/blob/HEAD/packages/ai-sdk-guardrails/README.md)**

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

See the **[full documentation](https://jagreehal.github.io/ai-sdk-guardrails/)** and **[package README](https://github.com/jagreehal/ai-sdk-guardrails/blob/HEAD/packages/ai-sdk-guardrails/README.md)** for detailed usage.

## Repository Structure

This is a pnpm monorepo containing:

```
ai-sdk-guardrails/
├── packages/
│   ├──…
