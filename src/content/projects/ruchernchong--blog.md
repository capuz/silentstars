---
repo: "ruchernchong/blog"
name: "blog"
description: "Portfolio built with Contentlayer, Next.js, Tailwind CSS Typescript (T3 Stack), and deployed through Vercel"
readmeQualityOk: true
url: "https://github.com/ruchernchong/blog"
homepage: "https://ruchern.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["nextjs", "portfolio", "blog", "react", "tailwindcss", "typescript", "vercel", "neon", "redis", "upstash"]
stars: 8
forks: 2
openIssues: 16
closedIssues: 128
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2022-12-19T06:19:42Z"
lastCommitAt: "2026-11-21T13:27:04Z"
lastReleaseAt: "2024-11-29T07:31:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 82
maintainers: ["ruchernchong", "semantic-release-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a531bc9e8ce443ecc1abdbf1cd5fc2f7b276ce654a7a36fac5acbc09bb22905/ruchernchong/blog"
---

# ruchern.dev

A personal portfolio and blog built with Next.js 16, React 19, and TypeScript.

## Quick Start

```bash
pnpm install         # Install dependencies
pnpm dev             # Start dev server
pnpm test            # Run tests
pnpm build           # Build for production
```

## Tech Stack

### Core Stack
- **Framework**: Next.js 16.4 with App Router and React 19.3
- **Language**: TypeScript 7 (strict mode)
- **Styling**: Tailwind CSS v4 (PostCSS-only config)
- **UI Components**: HeroUI v3 (Pro + OSS) with HugeIcons
- **Animation**: Motion, React Spring, View Transitions API

### Backend & Data
- **Database**: Neon PostgreSQL with Drizzle ORM
- **Cache**: Upstash Redis for analytics and stats
- **Storage**: Cloudflare R2 for media assets
- **MCP Worker**: Cloudflare Workers runtime for the remote MCP server
- **MCP Vercel**: Hono on Vercel Functions (Fluid compute, sin1) serving the remote MCP server
- **Auth**: Better Auth with OAuth (GitHub, Google)

### Content & Editor
- **Content**: Database-backed MDX with next-mdx-remote
- **CMS**: Built-in Content Studio at /studio
- **Rich Text**: MDXEditor for content authoring
