---
repo: "labring/fastgpt-home"
name: "fastgpt-home"
description: "fastgpt home page"
originalDescription: "fastgpt home page"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/labring/fastgpt-home"
homepage: "https://fastgpt.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
stars: 12
forks: 25
openIssues: 27
closedIssues: 39
watchers: 3
contributors: 23
recentReleases: 0
createdAt: "2023-11-23T04:14:33Z"
lastCommitAt: "2026-10-29T14:06:37Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 90
undervaluedScore: 80
maintainers: ["yangchuansheng", "c121914yu", "Nixieboluo"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f08243b9b60394351d1f4295fc95b9ad76cbc729d4fea1760ecb5f09b8bdaf4/labring/fastgpt-home"
---

# FastGPT Home

FastGPT official website home page, built with Next.js 16 + React 19.

🌐 https://fastgpt.io

## Tech Stack

- Next.js 16 (Turbopack)
- React 19
- TailwindCSS
- HeroUI
- Cloudflare Workers Static Assets

## Development

```bash
npm install
npm run dev
```

The business consultation form requires the CRM API address to be configured at build time (it must include `/api/v1`):

```bash
NEXT_PUBLIC_CRM_API_URL=https://crm.example.com/api/v1 npm run build
```

Also add the website domain to `CORS_ORIGINS` in the CRM service. If `NEXT_PUBLIC_CRM_API_URL` is not configured, the form will explicitly show a CRM-not-configured error and will not submit any data.

If the website form link itself does not carry `?source=...`, you can set Home's default business source with a build-time variable:

```bash
NEXT_PUBLIC_ATTRIBUTION_SOURCE=home \
NEXT_PUBLIC_CRM_API_URL=https://crm.example.com/api/v1 \
npm run build
```

An explicit `source` query parameter takes precedence over this default. If the variable is not configured, it falls back to `未知` (meaning "unknown"). This variable is public build configuration, so do not put keys or other sensitive information in it.

The…
