---
repo: "robotostudio/turbo-start-sanity"
name: "turbo-start-sanity"
description: "Sanity + Next.js page-builder template"
readmeQualityOk: true
url: "https://github.com/robotostudio/turbo-start-sanity"
homepage: "https://sanity.robotostudio.com"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [62, 37]
topics: ["headless-cms", "nextjs", "page-builder", "sanity", "sanity-template", "starter-template", "turborepo"]
stars: 181
forks: 63
openIssues: 3
closedIssues: 45
watchers: 4
contributors: 22
recentReleases: 0
createdAt: "2025-01-08T10:27:08Z"
lastCommitAt: "2026-09-30T09:57:18Z"
lastReleaseAt: "2026-06-01T05:21:51Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 46
maintainers: ["anshroboto", "chiburoboto", "aayushroboto"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/913774574/64390535-c042-4b02-9f4f-5558115a84df"
discussionCount: 11
---

# Turbo Start Sanity

Turbo Start Sanity is an open-source Sanity template built as a `pnpm`
monorepo with Turborepo, a Next.js 16 frontend, and a Sanity Studio 6
workspace.

It is designed for teams that want a production-ready page-builder starter with
visual editing, shared packages, and a clear split between the web app and the
CMS.

## What is included

- `apps/web`: Next.js 16 App Router frontend with React 19, Tailwind CSS v4,
  Visual Editing, SEO routes, and Playwright smoke tests
- `apps/studio`: Sanity Studio 6 workspace with page, blog, FAQ, redirect, and
  singleton schemas
- `packages/sanity-blocks`: shared page-builder block schemas, GROQ fragments,
  React renderers, Markdown serializers, and tests
- `packages/sanity`: shared Sanity client, live query helpers, GROQ queries,
  the `urlFor` image URL helper, and the generated Sanity types
- `packages/ui`, `packages/tailwind-config`, `packages/env`,
  `packages/logger`, `packages/typescript-config`: shared workspace packages for
  UI, styling, env validation, logging, and TypeScript config

## Repo layout

```txt
apps/
  studio/   Sanity Studio
  web/      Next.js frontend
packages/
  env/
  logger/
  sanity/…
