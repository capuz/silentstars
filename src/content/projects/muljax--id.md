---
repo: "Muljax/id"
name: "id"
description: "Muljax ID server, an open source serverless identity management platform, run entirely on the Cloudflare workers environment."
readmeQualityOk: true
url: "https://github.com/Muljax/id"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
stars: 7
forks: 1
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-08-30T18:57:28Z"
lastCommitAt: "2026-09-19T01:16:03Z"
lastReleaseAt: "2026-09-05T07:23:44Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 59
maintainers: ["thehazell", "github-actions[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8cff7f3e6a073a87f078e683ea9eb213beaf83bb6663342c02e90ffda3926aa/Muljax/id"
---

</div>
<br />

---

# Muljax Identity Platform

An open-source identity platform built on Cloudflare Workers.

</div>

---

> [!WARNING]
> Muljax Identity Platform is pre-1.0 and, as such, may ship breaking releases without a major semver bump.

## Overview

The project consists of two main applications, the [API](https://github.com/Muljax/id/blob/HEAD/apps/api) and the [dashboard](https://github.com/Muljax/id/blob/HEAD/apps/dashboard).

Infrastructure is managed with [Terraform](https://developer.hashicorp.com/terraform), while application code is built with Bun.

## API

The Muljax ID API is a [Hono](https://hono.dev/) application running on [Cloudflare Workers](https://workers.cloudflare.com/).

The API uses [Cloudflare D1](https://developers.cloudflare.com/d1/) as its database, with [Drizzle ORM](https://orm.drizzle.team/) for database access.

### API Structure

```text
apps/api/
├── src/
│   ├── db/           # Database schema and queries
│   ├── middleware/   # API middleware
│   ├── routes/       # API routes
│   └── index.ts      # Worker entrypoint
├── drizzle/
│   └── migrations/   # D1 database migrations
└── build.ts          # API Worker build script
```

##…
