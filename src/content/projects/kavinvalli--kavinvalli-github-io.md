---
repo: "kavinvalli/kavinvalli.github.io"
name: "kavinvalli.github.io"
description: "A Terminal based portfolio website"
readmeQualityOk: true
url: "https://github.com/kavinvalli/kavinvalli.github.io"
homepage: "https://kavin.me"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["portfolio", "html", "javascript", "css", "nextjs"]
stars: 66
forks: 5
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2020-09-12T17:42:09Z"
lastCommitAt: "2026-08-14T05:13:32Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 59
undervaluedScore: 32
maintainers: ["kavinvalli", "replicas-dev[bot]", "replicas-connector[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4dc40de3e8f65bd37a65346aa252ae8777bf66916b480cc815a2a15c871034c3/kavinvalli/kavinvalli.github.io"
---

# kavin.me

My personal site — [kavin.me](https://kavin.me). Next.js (App Router), deployed on Vercel.

## Structure

- `app/page.js` — home (about, projects, recent writing)
- `app/writing` — the blog: index + `[slug]` article pages
- `content/writing/*.mdx` — articles (frontmatter: `title`, `description`, `date`, `draft`)
- `lib/` — shared data (`projects`, `socials`) and the MDX loader
- `app/s/[shortlink]/route.js` — Airtable-backed URL shortener
- `app/api/*` — projects/contacts JSON endpoints

## Writing

Drop an `.mdx` file in `content/writing/`. Newest `date` sorts first; `draft: true` hides it in production.

## Develop

```bash
pnpm install
pnpm dev
```
