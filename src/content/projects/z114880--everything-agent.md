---
repo: "z114880/everything-agent"
name: "everything-agent"
description: "An intelligent AI agent system powered by LLM, designed to be a proactive personal assistant that helps with music recommendations, email management, task analysis, and personalized suggestions."
originalDescription: "An intelligent AI agent system powered by LLM, designed to be a proactive personal assistant that helps with music recommendations, email management, task analysis, and personalized suggestions."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/z114880/everything-agent"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 28
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-01-02T05:32:53Z"
lastCommitAt: "2026-09-22T08:41:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 41
maintainers: ["z114880"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6e2c9937537f36c4adfd317c550f71e9a655cad097e9b9e477c810d089fade3/z114880/everything-agent"
---

# Everything Agent

## Quick Start

Environment requirements: Node.js 24.12 or higher. The backend runs `src/` directly through Node.js native TypeScript type erasure, while the frontend is still handled by Vite. Memory uses Node.js built-in `node:sqlite`, and verifies FTS5 availability on startup; Session and Semantic FTS share nodejieba Chinese search tokenization, identifier whole-word and constituent-word indexing.

```bash
pnpm install
pnpm run dev:web
```

`pnpm run dev:web` is the main command to start Everything Agent local console, Engine and Agent bridge interface. After startup, open the local address in your browser according to terminal output, and enter the "Configuration" page to set up your model.

Before submitting changes, you can run full checks and examples:

```bash
pnpm run typecheck
pnpm test
pnpm run example
```

When you need a batch of local test data, you can use a mock model to drive the real Runtime to generate and merge into the existing data directory, without consuming model quota or requiring internet:

```bash
pnpm run mock-data
```

Data is merged into `.everything/` by default, previously written datasets will not be rewritten, model…
