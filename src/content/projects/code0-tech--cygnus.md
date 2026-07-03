---
repo: "code0-tech/cygnus"
name: "cygnus"
description: "The official product landing page."
url: "https://github.com/code0-tech/cygnus"
homepage: "https://codezero.build/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["cool", "landing-page", "nextjs", "react", "typescript", "webapp", "website"]
stars: 11
forks: 1
openIssues: 5
closedIssues: 28
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2024-04-29T09:07:30Z"
lastCommitAt: "2026-07-03T12:21:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 75
maintainers: ["mvriu5", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/60f1c3a47668e12fc36460c09fa90a8ce2aa7d4bba76a38c50e094a9c1e5e552/code0-tech/cygnus"
---

# Next.js Standalone Start

`npm run build` automatically prepares standalone assets via `postbuild` (`.next/static` and `public` are copied into `.next/standalone`).

## Database migrations

If you connect the project to a fresh or different Postgres database, run the Payload migrations before building or starting the standalone server.

Check migration status:

```powershell
npm run migrate:status
```

Apply all pending migrations:

```powershell
npm run migrate
```

Create a new migration after schema/config changes:

```powershell
npm run migrate:create your-migration-name
```

Notes:

- `npm run dev` can be more forgiving during development, but `npm run standalone` expects the Payload tables to exist.
- `/admin` requires the Payload auth tables such as `users` to exist.
- Run migrations against the same database that is configured in `DATABASE_URL`.

## 1) Build

After the database schema exists, build the app:

```powershell
npm run build
```

## 2) Start the standalone server

```powershell
npm run standalone
```

Recommended order for a fresh database:

```powershell
npm run migrate
npm run build
npm run standalone
```

## Data source

Content is loaded directly from the…
