---
repo: "omnivision-solutions/tuti"
name: "tuti"
description: "Self updating help center docs and support portal for your customers powered by ai agents"
readmeQualityOk: true
url: "https://github.com/omnivision-solutions/tuti"
homepage: "https://tuti.so"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 33
forks: 1
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-01T10:57:05Z"
lastCommitAt: "2026-11-07T22:51:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 40
maintainers: ["pkpio"]
openGraphImageUrl: "https://opengraph.githubassets.com/12caf9eef2db2d7f66e9835032bfbb763fdfbb4bf43421e8305562565a259f99/omnivision-solutions/tuti"
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
