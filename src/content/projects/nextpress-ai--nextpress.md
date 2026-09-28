---
repo: "nextpress-ai/nextpress"
name: "nextpress"
description: "All of WordPress on JavaScript."
readmeQualityOk: true
url: "https://github.com/nextpress-ai/nextpress"
homepage: "https://nextpress.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["ai", "caddy", "cms", "wordpress"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 4
createdAt: "2025-07-29T19:58:46Z"
lastCommitAt: "2026-09-28T10:06:09Z"
lastReleaseAt: "2026-08-27T18:27:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 77
maintainers: ["Hussseinkizz", "pabloh3"]
openGraphImageUrl: "https://opengraph.githubassets.com/fbf55c8b46e5c93ef8ad0679e1e03637fe86ed30ea50d69c9e4623f54ae8c8ed/nextpress-ai/nextpress"
---

# Nextpress Beta

A self-hostable WordPress-compatible CMS built in JavaScript/TypeScript.

## Packages

Published npm packages from this monorepo:

| Package | npm | Description | Docs |
|---------|-----|-------------|------|
| **SDK** | [`@nextpress-org/sdk`](https://www.npmjs.com/package/@nextpress-org/sdk) | TypeScript client for pages, posts, blocks, and editor workflows | [`packages/sdk/README.md`](https://github.com/nextpress-ai/nextpress/blob/HEAD/packages/sdk/README.md) · [SDK guides](https://github.com/nextpress-ai/nextpress/blob/HEAD/docs/sdk/README.md) |
| **MCP** | [`@nextpress-org/mcp`](https://www.npmjs.com/package/@nextpress-org/mcp) | MCP server for Cursor and Claude — agents edit content through the SDK | [`packages/mcp/README.md`](https://github.com/nextpress-ai/nextpress/blob/HEAD/packages/mcp/README.md) |

```bash
pnpm add @nextpress-org/sdk    # programmatic CMS API
npx @nextpress-org/mcp         # MCP server for Cursor / Claude
```

## Quick Start

Get started quickly with local development:

```bash
git clone https://github.com/nextpress-ai/nextpress nextpress
pnpm install
pnpm dev
```

This uses [PGlite](https://pglite.dev/) (embedded PostgreSQL) for…
