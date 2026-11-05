---
repo: "cougargrades/web"
name: "web"
description: "📊 Monorepo that powers cougargrades.io"
readmeQualityOk: true
url: "https://github.com/cougargrades/web"
homepage: "https://cougargrades.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["react", "firebase", "university-of-houston", "typescript", "cloudflare", "cloudflare-pages", "cloudflare-r2", "cloudflare-workers", "hono", "tanstack-query"]
stars: 21
forks: 3
openIssues: 2
closedIssues: 94
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-07-18T05:54:38Z"
lastCommitAt: "2026-11-05T00:21:14Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 89
undervaluedScore: 52
maintainers: ["au5ton", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/648e9ce04b22ce1880f62ad52dd051911c668ff4fbfe7d64ca2d1391ca2e5cda/cougargrades/web"
fundingLinks: ["GITHUB:https://github.com/au5ton"]
discussionCount: 0
---

# CougarGrades Monorepo

**CougarGrades** is a comprehensive tool that helps students explore course evaluations, instructor ratings, historical GPA trends, and academic data for the University of Houston. This monorepo contains the complete full-stack application-frontend, backend API, shared packages, and data services.

## 📖 Table of Contents

- [What is included?](#what-is-included)
- [What isn't included?](#what-isnt-included)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Practices](#practices)
- [Contributing](#contributing)
- [Resources](#resources)
- [License](#license)

## What is included?

The monorepo includes:
- **Web App** (`@cougargrades/web`) - A static React application deployed to Cloudflare Pages
- **API** (`@cougargrades/api`) - An HTTP API (Cloudflare Workers with Hono) that powers the web app and serves third-party data
- **Shared Packages** - Core models, services, utilities, and vendor integrations used across the stack

## What isn't included?

⚠️ **None of the following are included in this monorepo**:
- The [web scraping](https://en.wikipedia.org/wiki/Web_scraping) scripts and source data acquired from the University of Houston.
  -…
