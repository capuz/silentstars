---
repo: "insanekrishnna/pratham_portfoilio"
name: "pratham_portfoilio"
description: "prathm.me"
readmeQualityOk: true
url: "https://github.com/insanekrishnna/pratham_portfoilio"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 23
forks: 5
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-12-22T18:00:37Z"
lastCommitAt: "2026-08-28T14:34:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 40
maintainers: ["insanekrishnna", "vercel[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/04c74a5ed4a00b6f3e41b9b4892206f744437fd430bb400c506d69409d7c19cb/insanekrishnna/pratham_portfoilio"
---

# pratham.dev

Personal portfolio of Pratham Yadav — Full Stack Developer.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **Tailwind CSS v4** with a two-anchor token system (`--base` / `--base-foreground`)
- **Motion** (framer-motion) for interaction and layout animation
- **Lenis** for smooth scrolling on pointer-fine devices
- **Nodemailer** for the contact form relay

## Structure

```
app/                  routes: / , /projects , /contact , /api/*
components/layout/    container, rails, rules, nav, footer — the design system
components/home/      one file per home-page section
components/projects/  project card, grid and searchable list
components/ui/        shadcn primitives actually in use
lib/content/          all site content as typed data (single source of truth)
hooks/                interaction feedback (sound + haptics)
```

Content lives in `lib/content/`. Editing a project, role or link there updates
every place it appears — the home page, `/projects`, the command menu and the
JSON-LD structured data.

## Design system

The whole theme derives from two colour anchors, so light and dark stay in step
without per-colour edits. Layout is one 715px column…
