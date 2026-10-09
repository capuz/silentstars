---
repo: "warpdotdev/docs"
name: "docs"
description: "Open-source docs for Warp, the open platform for automating development."
readmeQualityOk: true
url: "https://github.com/warpdotdev/docs"
homepage: "https://docs.warp.dev"
language: "MDX"
languages: ["MDX"]
languagePcts: [73]
stars: 44
forks: 26
openIssues: 3
closedIssues: 9
watchers: 1
contributors: 35
recentReleases: 0
createdAt: "2026-04-30T18:30:15Z"
lastCommitAt: "2026-10-09T18:56:40Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 44
maintainers: ["warp-agent-staging[bot]", "warp-factories[bot]", "hongyi-chen"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3700af61975cddfdf9e1a50577ca58d26e18bcc7c638c395be0dbee91e0bc2a/warpdotdev/docs"
---

# Warp Docs

Source content for [docs.warp.dev](https://docs.warp.dev), the documentation site for [Warp](https://www.warp.dev) and the [Oz](https://oz.warp.dev) agent platform.

  ·
  ·
  ·
  ·
  ·

## About

Warp is an agentic development environment, born out of the terminal. This repository contains the public documentation for Warp's terminal, editor, agents, collaboration features, API, and support content.

The site is built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build). Content is written in MDX and organized under `src/content/docs/`.

## Building the project

Node.js 20.19+, 22.12+, or 24 is required. The supported versions match Astro 6's runtime requirements and are enforced in `package.json`.

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to preview the docs site locally.

## Environment variables

The site runs without local environment variables. To enable optional integrations like the Ask AI button, copy `.env.example` to `.env` and fill in the public values:

```bash
cp .env.example .env
```

## Repository…
