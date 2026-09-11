---
repo: "dream-num/documentation"
name: "documentation"
description: "The Univer documentation website"
readmeQualityOk: true
url: "https://github.com/dream-num/documentation"
language: "TypeScript"
languages: ["TypeScript", "MDX"]
languagePcts: [53, 36]
stars: 17
forks: 12
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2025-05-29T11:43:11Z"
lastCommitAt: "2026-09-11T08:14:27Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 97
undervaluedScore: 76
maintainers: ["jikkai", "wpxp123456", "zsq1234"]
openGraphImageUrl: "https://opengraph.githubassets.com/b70e92de86cd1ff31a87dbcc296a5ab6693057e9190e688e7ab04120fd5c0eb9/dream-num/documentation"
discussionCount: 0
---

# Univer Office SDK Documentation

This is the official documentation site for Univer Office SDK, which includes Web SDK, Server SDK, and AI SDK, built with [Next.js](https://nextjs.org/), Fumadocs headless content tooling, and project-owned UI.

## Prerequisites

- [Node.js](https://nodejs.org/) >= 22.18
- [pnpm](https://pnpm.io/) >= 12

## Local Development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

The site will be available at `http://localhost:3030`.

Build for production:

```bash
pnpm build
```

The Icons preview, MCP endpoint, and downloadable metadata use `public/assets/icons/catalog.json`. To refresh it from a matching `univer-icons` checkout, run `node scripts/sync-icons-catalog.mjs ../univer-icons`. The sync checks that the source and installed package versions match and that every exported icon is covered. Production builds use the committed catalog.

The read-only Icons MCP runs at `/mcp/icons` in the existing Next.js Node server. It exposes `search_icons` and `get_icon` over Streamable HTTP without a model API key or separate process. Its Host/Origin allowlist covers `docs.univer.ai` and loopback hosts;…
