---
repo: "Aditya-0011/portfolio-website"
name: "portfolio-website"
description: "My portfolio website"
url: "https://github.com/Aditya-0011/portfolio-website"
homepage: "https://adityapunmiya.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["mongodb", "nextjs", "nextjs-app-router", "nextjs-server-actions", "tailwindcss", "typescript", "nextjs-ssr", "portfolio-website", "zod", "nextjs-server-side-rendering"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-08-28T19:02:41Z"
lastCommitAt: "2026-06-28T08:43:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 68
maintainers: ["Aditya-0011", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a77ee84b58007646000a60c6ec05aacaf3e2906abee7b70b000851be1437ae6d/Aditya-0011/portfolio-website"
---

# Portfolio Website

The public portfolio frontend for the platform.

## Overview

The portfolio website acts as the public-facing presentation layer for the platform. It interfaces securely with the `gateway` API via a long-lived API key to fetch dynamic profiles, experiences, projects, and technologies from the headless CMS (`manager` service).

## Architecture

This section explains the technologies and physical layout of the portfolio website.

- **Framework**: Built with React 19 and Next.js 16 (App Router)
- **Package manager**: Managed and executed using `bun`
- **Styling**: Styled with Tailwind CSS v4 and `lucide-react` icons
- **State**: Uses Next.js Server Components and aggressive server-side caching for data fetching. Uses `@tanstack/react-form-nextjs` for complex form handling.
- **Routing**: Server-side and client-side navigation handled natively by Next.js App Router

### Project structure

- `app/`: Next.js App Router pages, layouts, and global styles
- `components/`: Reusable React components for UI elements
- `data/`: Server-side data fetching and integration logic
- `lib/`: Utility functions and Zod schemas
- `public/`: Static assets

## Features

This section…
