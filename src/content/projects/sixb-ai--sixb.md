---
repo: "sixb-ai/sixb"
name: "sixb"
description: "Open-source TypeScript framework for building operational software used by humans and AI agents."
readmeQualityOk: true
url: "https://github.com/sixb-ai/sixb"
homepage: "https://docs.sixb.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["agents", "ai-agents", "bun", "enterprise-ai", "event-driven", "llm", "ontology", "typescript", "workflow-automation", "workflow-engine"]
stars: 98
forks: 4
openIssues: 26
closedIssues: 54
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2026-05-22T21:59:39Z"
lastCommitAt: "2026-09-29T08:11:17Z"
lastReleaseAt: "2026-09-20T01:20:27Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 36
maintainers: ["quentinnippert", "demattosanthony", "yashksaini-coder"]
openGraphImageUrl: "https://opengraph.githubassets.com/57d78147208ec503cccfd605b648772841ebbb9f51d005c028fe0434988cb20c/sixb-ai/sixb"
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/brand/sixb-wordmark-white.svg">
  <source media="(prefers-color-scheme: light)" srcset="docs/brand/sixb-wordmark-black.svg">
</picture>

# Model your domain. Put it to work.

A TypeScript framework for ontology-powered apps and AI.

Connect your data, define how it relates and changes, and build apps and AI that work with the same model.

[Documentation](https://docs.sixb.ai) · [Get started](#quickstart) · [Discord](https://discord.gg/rPSbZSRDzQ)

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/brand/architecture-dark.svg">
  </picture>
</a>

## Quickstart

With [Bun 1.4.2 or later](https://bun.sh/docs/installation):

```bash
bun create sixb my-app
cd my-app
bun install
bun run dev
```

No database setup or API keys required. Open your [app](http://localhost:3001),
[Atlas](http://localhost:3000), or the [API docs](http://localhost:3002/docs).

[Getting started →](https://docs.sixb.ai/get-started)

## One model, shared everywhere

Define your domain in TypeScript. Sixb provides the API, typed queries, and permissions around it.

```ts
// ontology/quote.ts
import { defineObjectType, prop,…
