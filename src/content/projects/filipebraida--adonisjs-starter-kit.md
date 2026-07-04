---
repo: "filipebraida/adonisjs-starter-kit"
name: "adonisjs-starter-kit"
description: "Starter kit for AdonisJS projects using a monorepo setup"
readmeQualityOk: true
url: "https://github.com/filipebraida/adonisjs-starter-kit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["adonisjs", "monorepo", "react", "shadcn-ui", "tailwindcss"]
stars: 87
forks: 10
openIssues: 0
closedIssues: 7
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2025-02-25T14:55:52Z"
lastCommitAt: "2026-07-04T22:20:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 46
maintainers: ["filipebraida", "MaximeMRF"]
openGraphImageUrl: "https://opengraph.githubassets.com/2da4f7f8a55e0a9687e2e8d36421927b2fcdf92012570770d2cf7c0296ab1781/filipebraida/adonisjs-starter-kit"
---

# AdonisJS Starter Kit

AdonisJS Starter Kit is a monorepo-based template for developing full-stack applications with AdonisJS. It combines AdonisJS, Inertia.js, Tuyau, a shared UI package based on shadcn/ui, Tailwind CSS, and PostgreSQL to help you bootstrap production-ready applications faster.

</p>

## Why this exists

Personal starter kit I use to prototype projects with coding agents, and that my students use for their capstone projects. The idea: clone it and you already have auth, UI, i18n, RBAC, layout shells, tests, and CI wired up — go straight to the interesting part. Every decision here optimizes for **starting clean** over configuring at runtime; the pieces a given project doesn't need (say, the admin dashboard) come off by deletion, not by refactor.

## What's inside

**Backend** — AdonisJS 7 with session auth + Bouncer authorization + Lucid ORM + VineJS validation, rate limiting (`@adonisjs/limiter`), mail, drive, file uploads with derived variants (`@jrmc/adonis-attachment`), social auth (`@adonisjs/ally`) with Google preconfigured, API tokens for programmatic access.

**Frontend** — Inertia + React 19, Tuyau for type-safe URLs and API calls, shared UI package…
