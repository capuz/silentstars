---
repo: "gr8monk3ys/lscaturchio.xyz"
name: "lscaturchio.xyz"
description: "My personal website where some of my ideas are at"
readmeQualityOk: true
url: "https://github.com/gr8monk3ys/lscaturchio.xyz"
homepage: "https://lscaturchio.xyz"
language: "TypeScript"
languages: ["TypeScript", "MDX"]
languagePcts: [59, 36]
topics: ["blog", "nextjs", "personal-website", "portfolio", "react"]
stars: 9
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-04-21T23:55:11Z"
lastCommitAt: "2026-07-11T05:55:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 67
undervaluedScore: 45
maintainers: ["gr8monk3ys"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f7d394b4f950f59da9c37358bdba7b464ae101c0df4643414813c603cf3ea3c/gr8monk3ys/lscaturchio.xyz"
---

# lscaturchio.xyz

Personal site and publishing platform built with Next.js 16, React 19, TypeScript, and Tailwind CSS. The repo powers a portfolio, long-form MDX blog, AI chat with retrieval over site content, engagement APIs, localized routes, and a set of maintenance scripts for content, audio, and deployment checks.

## What This Repo Includes

- Marketing and portfolio pages under the App Router
- MDX blog posts with shared metadata, tags, series, and JSON-LD
- AI chat with OpenAI, OpenRouter, and Ollama fallbacks
- Neon/Postgres-backed engagement and content retrieval features
- Pre-generated text-to-speech audio and an audio manifest pipeline
- CI quality gates for linting, type-checking, tests, build, and Lighthouse

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS
- Neon/Postgres
- OpenAI, OpenRouter, and Ollama
- Playwright, Vitest, ESLint, Lighthouse CI
- Vercel deployment

## Quick Start

Examples below use `npm`, but the repo also keeps a Bun lockfile and CI uses Bun.

```bash
git clone https://github.com/gr8monk3ys/lscaturchio.xyz.git
cd lscaturchio.xyz
cp .env.example .env.local
npm install
npm run dev
```

Open `http://localhost:3000`.

For…
