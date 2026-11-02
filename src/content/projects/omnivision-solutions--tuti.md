---
repo: "omnivision-solutions/tuti"
name: "tuti"
description: "Open-source feature voting & product feedback platform"
readmeQualityOk: true
url: "https://github.com/omnivision-solutions/tuti"
homepage: "https://tuti.so"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 81
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-01T10:57:05Z"
lastCommitAt: "2026-11-02T15:18:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 26
maintainers: ["pkpio"]
openGraphImageUrl: "https://opengraph.githubassets.com/df396227aff4ab188c867b04599d3da8656820a50dae220ffc809cc9d72b8e27/omnivision-solutions/tuti"
---

# Tuti

Open-source feature voting & product feedback. Collect feature requests, let users vote, and close the loop.

Each project gets a public portal on its own subdomain (boards, posts, votes, comments,
sign-in through your app with JWT SSO) and a dashboard for the team (statuses, merging
duplicates with AI suggestions, boards, team roles). Next up: GitHub, so merged PRs and
releases close the feedback they fix and draft your changelog. See [the plan](https://github.com/omnivision-solutions/tuti/blob/HEAD/docs/plan.md).

## Stack

| | |
|---|---|
| Monorepo | [Turborepo](https://turborepo.com) + pnpm workspaces |
| Web | [Next.js 16](https://nextjs.org) (App Router), Tailwind CSS 4 |
| Auth | [Better Auth](https://better-auth.com) (email + password for now) |
| Database | PostgreSQL via [Prisma 7](https://www.prisma.io) (`@prisma/adapter-pg`) |
| Background jobs | [Hatchet](https://hatchet.run) (Hatchet Cloud or self-hosted), or inline |
| Language | TypeScript 6 |

## Layout

```
apps/
  web/        Next.js app (UI, server actions, Better Auth routes)
  worker/     Hatchet worker (background tasks)
packages/
  db/         Prisma schema, migrations and the shared client
  jobs/…
