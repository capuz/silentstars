---
repo: "dream-num/documentation"
name: "documentation"
description: "The Univer documentation website"
readmeQualityOk: true
url: "https://github.com/dream-num/documentation"
language: "TypeScript"
languages: ["TypeScript", "MDX"]
languagePcts: [56, 44]
stars: 17
forks: 11
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2025-05-29T11:43:11Z"
lastCommitAt: "2026-09-02T08:03:20Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 97
undervaluedScore: 73
maintainers: ["jikkai", "wpxp123456", "zsq1234"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b0444eca21392f25d367dc8118f56070516c5b912dff364b42ca6362bf302b8/dream-num/documentation"
discussionCount: 0
---

# Univer Documentation

This is the official documentation site for [Univer](https://github.com/dream-num/univer), built with [Next.js](https://nextjs.org/), Fumadocs headless content tooling, and project-owned UI.

## Prerequisites

- [Node.js](https://nodejs.org/) >= 20.9
- [pnpm](https://pnpm.io/) >= 10

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

## Project Structure

```
├── app/              # Next.js application routes and layouts
├── components/       # React components for the documentation site
├── content/          # Documentation content (MDX)
│   ├── blog/         # Blog posts
│   ├── guides/       # User guides (docs, sheets, slides, pro, recipes)
│   ├── icons/        # Icons reference
│   └── reference/    # API reference
├── examples/         # Framework integration examples (React, Vue, Angular, Astro)
├── lib/              # Utility libraries
├── public/           # Static assets
└── scripts/          # Build and automation scripts
```

## Contributing

We welcome contributions to…
