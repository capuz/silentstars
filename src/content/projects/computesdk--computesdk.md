---
repo: "computesdk/computesdk"
name: "computesdk"
description: "A free and open-source toolkit for running other people's code in your applications."
readmeQualityOk: true
url: "https://github.com/computesdk/computesdk"
homepage: "https://computesdk.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["agent", "ai", "ai-runtime", "ai-sandboxes", "code-execution", "development", "javascript", "python", "react", "sandbox"]
stars: 282
forks: 128
openIssues: 15
closedIssues: 5
watchers: 1
contributors: 72
recentReleases: 0
createdAt: "2025-07-08T19:07:12Z"
lastCommitAt: "2026-10-21T23:36:36Z"
lastReleaseAt: "2025-08-22T15:43:51Z"
status: "thriving"
tags: []
healthScore: 84
undervaluedScore: 38
maintainers: ["dtice25", "github-actions[bot]", "HeyGarrison"]
openGraphImageUrl: "https://opengraph.githubassets.com/6df1ed09013c16ca0f2fd169235892f295d8a1eb1b2efef61113c6f6741b8eda/computesdk/computesdk"
discussionCount: 1
---

---

## What is ComputeSDK?

ComputeSDK is the open, multi-provider benchmark harness for cloud infrastructure. It is the engine behind [ComputeSDK Benchmarks](https://www.computesdk.com/benchmarks) and a unified TypeScript SDK for running code in remote sandboxes.

The same API lets you:

- **Benchmark providers fairly** — run the same workload on E2B, Modal, Vercel, and dozens of others, then publish reproducible results.
- **Build provider-agnostic apps** — switch sandboxes without changing application code for AI agents, code-execution platforms, and developer tools.

Whether you're comparing infrastructure or running it, ComputeSDK provides one unified API.

**Perfect for:**
- 📊 Benchmarking infrastructure providers
- 🤖 AI code execution agents
- 📊 Data science platforms
- 🎓 Educational coding environments
- 🧪 Testing & CI/CD systems
- 🔧 Developer tools

## Quick Start

```bash
npm install computesdk @computesdk/e2b
```

Configure a provider and use the SDK:

```typescript
import { compute } from 'computesdk';
import { e2b } from '@computesdk/e2b';

compute.setConfig({
  provider: e2b({ apiKey: process.env.E2B_API_KEY }),
});

const sandbox = await…
