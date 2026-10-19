---
repo: "disnet/skyreader"
name: "skyreader"
description: "An RSS reader for the AT Protocol"
readmeQualityOk: true
url: "https://github.com/disnet/skyreader"
homepage: "https://skyreader.app/"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [73, 25]
topics: ["atproto", "atprotocol", "rss", "rss-reader"]
stars: 90
forks: 2
openIssues: 5
closedIssues: 53
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-09T02:05:12Z"
lastCommitAt: "2026-10-19T09:14:07Z"
lastReleaseAt: "2026-01-27T19:00:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 41
maintainers: ["disnet", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7042be9ad1cb05a83e63deb2aa2b0d2c8a4e69ae3ce5d2b43a4bdb69842e574/disnet/skyreader"
fundingLinks: ["GITHUB:https://github.com/disnet"]
discussionCount: 1
---

# Skyreader

A reading app that helps you make sense of what you read. Subscribe to everything — RSS,
newsletters, social, YouTube, the Atmosphere — read it in one calm place, and turn it into
understanding with highlights, margin notes, and a linkblog. Built on the open AT Protocol, so
your reading life stays portable and yours.

> **Read everything from everywhere. Make sense of it all.**

## Repository Structure

```
skyreader/
├── frontend/       SvelteKit PWA
├── backend/        Cloudflare Workers API
├── admin/          SvelteKit admin dashboard (Cloudflare Pages)
├── feed-proxy/     Feed caching proxy (Fly.io)
├── pdf-extractor/  PDF → reader HTML (Cloudflare Worker, called by the proxy)
├── e2e/            Playwright end-to-end tests
└── scripts/        Development scripts
```

## Getting Started

```bash
git clone https://github.com/disnet/skyreader.git
cd skyreader
```

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Bun](https://bun.sh) (for the feed proxy)
- Install dependencies:
  ```bash
  cd backend && npm install
  cd frontend && npm install
  cd feed-proxy && bun install
  ```
- Create `backend/.dev.vars`:
  ```
  FRONTEND_URL=http://127.0.0.1:5173…
