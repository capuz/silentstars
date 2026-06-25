---
repo: "blissito/easybits"
name: "easybits"
description: "files api: https://www.easybits.cloud"
url: "https://github.com/blissito/easybits"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 6
forks: 1
openIssues: 2
closedIssues: 1
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2025-01-06T16:15:56Z"
lastCommitAt: "2026-06-25T01:31:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 68
maintainers: ["blissito"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0bd50832cdcc6564bff5a077366cbf96124dc5d276bb392acd0657f464366a9/blissito/easybits"
---

# EasyBits

Agentic-first file storage — AI agents store, manage, and consume files via SDK, MCP, and REST API.

[easybits.cloud](https://www.easybits.cloud)

## MCP Server

```bash
npx -y @easybits.cloud/mcp
```

30+ tools for uploading, transforming, optimizing and serving files — images, documents, websites, presentations, landing pages and more.

## SDK

```bash
npm install @easybits.cloud/sdk
```

## Get your API key

1. [Sign up](https://www.easybits.cloud/login) for a free EasyBits account
2. Go to the [Developer Dashboard](https://www.easybits.cloud/dash/developer) → **API Keys** → **Create Key**
3. Your key looks like `eb_sk_live_...` — copy it and store it safely. You won't see it again.

Use the key as a Bearer token (REST API), via `EASYBITS_API_KEY` env var (MCP), or in the SDK constructor. Full docs at [easybits.cloud/docs](https://www.easybits.cloud/docs).

## AI Landing Generator

```bash
npm install @easybits.cloud/html-tailwind-generator
```

AI-powered landing page generator with Tailwind CSS — canvas editor, streaming generation (Claude), image enrichment (DALL-E / Pexels), one-click deploy. [README →](./packages/html-tailwind-generator/README.md)…
