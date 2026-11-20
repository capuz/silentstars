---
repo: "cthit/chalmers.it"
name: "chalmers.it"
description: "A 2023/2024 rewrite of the main website of the Software Engineering (IT) student division at Chalmers"
readmeQualityOk: true
url: "https://github.com/cthit/chalmers.it"
homepage: "https://chalmers.it"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
stars: 5
forks: 5
openIssues: 26
closedIssues: 61
watchers: 6
contributors: 39
recentReleases: 0
createdAt: "2020-11-19T17:42:27Z"
lastCommitAt: "2026-11-20T11:58:54Z"
lastReleaseAt: "2025-09-24T20:37:57Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 81
maintainers: ["olillin", "Goosetaf", "Portals"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b81a6c3bbc14d076b0685fe083fa32bdd758e0a936409b97a04da8ef92f161a/cthit/chalmers.it"
---

# chalmers.it

A rewrite and redesign of [chalmersit-rails](https://github.com/cthit/chalmersit-rails) in Next.js

## Suggestions and Contributions

Suggestions are very welcome, and if you wish to create one, please create an issue using one of the templates.
Contributions are also welcome, feel free to create a pull request with your changes.

# Building and Running

## Prerequisites

A few things are required to run the project:

1. [Node.js](https://nodejs.org/en/) v24 for running the web server
2. Docker for running other services
3. pnpm 12.3.4 (installed with `npm install -g pnpm@12.3.4`)

## Development

In order to run the project in development mode, a few steps are required:

1. Install packages with `pnpm install`
2. Start services by running `docker compose up -d`
3. Set up the database by running `pnpm prisma generate` and `pnpm prisma db push`
4. Seed the database with `pnpm prisma db seed` (adds sample news posts and navbar items)
5. Run `pnpm run dev` to start the development server

If you wish to modify anything in the database, the recommended way to go is to use Prisma Studio, which can be started by running `pnpm prisma studio`.
