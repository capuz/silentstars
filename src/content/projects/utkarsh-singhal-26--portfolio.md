---
repo: "Utkarsh-Singhal-26/portfolio"
name: "portfolio"
description: "A modern, responsive personal portfolio built with Next.js, Tailwind CSS, and TypeScript to showcase projects, skills, and experience."
readmeQualityOk: true
url: "https://github.com/Utkarsh-Singhal-26/portfolio"
homepage: "https://utkarsh-singhal.is-a.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["tailwindcss", "typescript", "next-themes", "nextjs15", "portfolio-website", "prettier", "react", "shadcn", "vercel", "full-stack-developer"]
stars: 26
forks: 6
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-07-09T13:03:00Z"
lastCommitAt: "2026-11-22T11:49:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 67
maintainers: ["Utkarsh-Singhal-26", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f5c190fbc317f3de6f8a44639740bf6ccb392b89e6abce6b34a289205c9e49a/Utkarsh-Singhal-26/portfolio"
discussionCount: 0
---

# [utkarsh-singhal.is-a.dev](https://utkarsh-singhal.is-a.dev)

Personal portfolio of Utkarsh Singhal, a backend-leaning full-stack developer: shipped work, experience, open source contributions, and writing. It is also readable by agents: every page has a Markdown twin and the site serves a small read-only API.

## Stack

- [Next.js](https://nextjs.org) (App Router) with React 19 and TypeScript
- Tailwind CSS v4, `cmdk` command menu, `next-themes` (light/dark), and a visitor-selectable accent color (footer row or `⌘K`, saved in `localStorage`)
- Framer Motion, GSAP and Matter.js for motion
- Open source and contribution data fetched from the GitHub API and cached daily; all-time coding time from WakaTime, also cached daily
- A fill-in-the-blank contact form that sends as an email or opens the brief in Claude, ChatGPT or Grok
- Vercel Analytics, Speed Insights and (opt-in, consent-gated) Microsoft Clarity

## Run locally

Requires Node 22+ and Yarn 1.

```bash
yarn install
cp .env.sample .env
yarn dev
```

Open http://localhost:3000. Every variable below is optional locally:
