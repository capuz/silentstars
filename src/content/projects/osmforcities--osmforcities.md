---
repo: "osmforcities/osmforcities"
name: "osmforcities"
description: "OSM for Cities"
readmeQualityOk: true
url: "https://github.com/osmforcities/osmforcities"
homepage: "https://osmforcities.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 8
forks: 1
openIssues: 111
closedIssues: 198
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2023-07-19T14:15:55Z"
lastCommitAt: "2026-11-04T02:57:04Z"
lastReleaseAt: "2026-03-31T17:35:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 76
maintainers: ["vgeorge"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7edb4dbb44c29a0d61d36557eef2644b4e4cd92d8ddf1211dd140817e8782c1/osmforcities/osmforcities"
---

# OSM for Cities

A web platform to monitor OpenStreetMap datasets at the city level.

## Requirements

- Node.js (see `.nvmrc` for specific version)
- PostgreSQL (running on port 5432)
- pnpm, at the version pinned in `package.json` (`packageManager`); pnpm 9.7+ switches to it automatically

## Getting Started

### Environment Setup

1. Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

2. Update the following required settings in `.env.local`:

- `DATABASE_URL`: Your PostgreSQL connection string
- `AUTH_SECRET`: A secure random string for session encryption
- `AUTH_URL`: Your application URL
- `CRON_ROUTE_SECRET`: **Generate a new random string** (e.g. with `openssl rand -hex 32`) and use it as your API secret for the cron job

Example to generate a secret:

```bash
openssl rand -hex 32
```

Email configuration:

**For Production:** Postmark credentials are required for magic link authentication

- `POSTMARK_API_TOKEN` - Your Postmark API token
- `POSTMARK_FROM_EMAIL` - Verified sender email (e.g., `noreply@yourdomain.com`)

**For Development:** Postmark is optional

- Without Postmark: Magic links are printed to console (clickable in most terminals)
-…
