---
repo: "kubosho/blog.kubosho.com"
name: "blog.kubosho.com"
description: "My tech blog."
readmeQualityOk: true
url: "https://github.com/kubosho/blog.kubosho.com"
homepage: "https://blog.kubosho.com"
language: "TypeScript"
languages: ["TypeScript", "Astro"]
languagePcts: [60, 29]
topics: ["blog", "astro", "tech"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 20
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2018-05-02T02:56:49Z"
lastCommitAt: "2026-10-19T09:15:01Z"
lastReleaseAt: "2020-12-25T16:19:03Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 100
undervaluedScore: 76
maintainers: ["renovate[bot]", "kubosho", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/37e2b5c7c465dd269f12702e4ec15e5c43dc40fb2a4a8449236ce93f82421453/kubosho/blog.kubosho.com"
---

# blog.kubosho.com

The source files for [blog.kubosho.com](https://blog.kubosho.com).

## Requirements

- Node.js
- Wrangler CLI (for Cloudflare development)

## Installation

```bash
pnpm install
```

The `articles` directory is a git submodule referencing [kubosho/articles](https://github.com/kubosho/articles). Initialize it after cloning.

```bash
git submodule update --init
```

## Development Setup

### Environment Variables Configuration

#### API Environment Variables

Create `.dev.vars` for secrets:

```bash
# Edit .dev.vars as needed
```

For development without Wrangler, create `.env`:

```bash
cp .env.example .env
# Edit .env with your values
```

### Development Modes

This mode uses the standard Astro development server.

```bash
pnpm run dev
```

Access the application at: <http://localhost:4321>

## Deployment

Automatically deployed to Cloudflare Workers on push to the main branch.
