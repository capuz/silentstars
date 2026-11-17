---
repo: "Ekoda/Monolith"
name: "Monolith"
description: "A starting point for rapid web development - a full-stack monolith using Next.js, Prisma, and SQLite."
readmeQualityOk: true
url: "https://github.com/Ekoda/Monolith"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["fullstack", "fullstack-development", "monolith", "monorepo", "nextjs", "rapid-development", "sqlite", "template", "typescript"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-10-04T12:53:11Z"
lastCommitAt: "2026-11-17T14:42:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 35
maintainers: ["Ekoda"]
openGraphImageUrl: "https://opengraph.githubassets.com/00e415709a0879e08fce7c721f7df329046c85cd1c17bbb05003086c6252461a/Ekoda/Monolith"
---

# Monolith

A full-stack starter for shipping an idea as a single app: Next.js (pages router) for the frontend and API, PostgreSQL + Prisma for data, NextAuth for sign-in, and MUI with a token-driven theme for the UI. Frontend, backend and database schema live in one repository and deploy as one unit.

**Stack:** Next.js · React · TypeScript · Prisma · PostgreSQL · NextAuth · MUI · Jest

## Quick start

You need Node 20+ and Docker (for the local database).

```bash
bash setup.sh
```

```bash
npm run dev
```

`setup.sh` installs dependencies, writes `.env.local`, starts Postgres in Docker, runs the migrations and asks for your Google OAuth keys (you can skip those). Then open [http://localhost:3000](http://localhost:3000).

1. `npm install`
2. Create `.env.local`:
   ```env
   DATABASE_URL=postgresql://monolith:monolith@localhost:5432/monolith
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=   # openssl rand -base64 32
   GOOGLE_ID=
   GOOGLE_SECRET=
   ```
3. `npm run db:up` to start Postgres, then `npm run migrate:dev` to apply the migrations.
4. `npm run dev`

### Google sign-in

The app runs without it: every page is public unless it asks for a signed-in user. To turn…
