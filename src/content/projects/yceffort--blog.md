---
repo: "yceffort/blog"
name: "blog"
description: "yceffort.kr "
readmeQualityOk: true
url: "https://github.com/yceffort/blog"
homepage: "https://yceffort.kr/"
language: "HTML"
languages: ["HTML"]
languagePcts: [92]
topics: ["blog", "frontend", "tech", "yceffort-blog", "nextjs", "react", "vercel"]
stars: 100
forks: 8
openIssues: 3
closedIssues: 272
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2020-08-11T09:21:18Z"
lastCommitAt: "2026-10-17T08:00:00Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 49
maintainers: ["yceffort"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/286700649/45b57600-c932-11eb-8adf-652cd8ef8a39"
discussionCount: 0
---

# yceffort-monorepo

A monorepo containing yceffort's blog and research projects.

## Structure

```text
├── apps/
│   ├── blog/          # Main blog (yceffort.kr)
│   └── research/      # Research slides (research.yceffort.kr)
├── packages/
│   └── shared/        # Shared components and utilities
└── package.json       # Root workspace configuration
```

The `@yceffort/shared` package holds components used by both apps (Providers, MobileNav, EmphasizedTitle, SocialIcon, icons) and utilities (cookie, contact, title).

## Development

```bash
# Install dependencies
pnpm install

# Run both dev servers (blog: 3000, research: 3001)
pnpm dev

# Run individual dev servers
pnpm dev:blog      # http://localhost:3000
pnpm dev:research  # http://localhost:3001

# Build
pnpm build:blog
pnpm build:research

# Lint (oxlint, type-aware)
pnpm lint
pnpm lint:fix

# Format (oxfmt)
pnpm prettier
pnpm prettier:fix
```

## Deployment (Vercel)

This monorepo is deployed as two separate Vercel projects:

| Project  | Domain               | Root Directory  |
| -------- | -------------------- | --------------- |
| Blog     | yceffort.kr          | `apps/blog`     |
| Research | research.yceffort.kr |…
