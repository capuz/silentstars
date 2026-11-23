---
repo: "sashvat-bharat/agent-accelerator"
name: "agent-accelerator"
description: "High-performance SDK for AI agents with a unified API across AI providers. Optimized for high cache hit rates, observability, and seamless agent orchestration. Built to power production-grade agentic systems and harnesses for teams at any scale."
readmeQualityOk: true
url: "https://github.com/sashvat-bharat/agent-accelerator"
homepage: "https://sashvat.com/articles/agent-accelerator"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["agent-framework", "agent-harness", "agent-accelerator", "agent-accel", "agents-sdk"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 10
createdAt: "2026-08-26T08:41:57Z"
lastCommitAt: "2026-11-23T10:28:40Z"
lastReleaseAt: "2026-11-04T01:11:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 57
maintainers: ["akshat-dwivedi-52"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1347104310/37701d33-0540-4e0f-93c7-b635ad756939"
---

# Agent Accelerator

> **Stability notice:** Pre-1.0 and under active development. Public APIs, provider transports and configuration options may change in breaking ways between releases. Pin an exact version for production.

A small, typed SDK for building LLM agents in TypeScript. One `Agent` class works with Google Gemini, OpenAI, Anthropic, OpenRouter and any OpenAI-compatible service. It uses plain `fetch`. There are no provider SDKs, and the only dependency is `zod`.

```ts
import { Agent } from "agent-accelerator";

const agent = new Agent({
  model: "google/gemini-3.5-flash-lite",
  instructions: "You are a concise research engineer.",
});

const res = await agent.run("Explain HBM pricing in 3 bullets.");
console.log(res.text);
console.log(res.usage); // tokens and cost
```
