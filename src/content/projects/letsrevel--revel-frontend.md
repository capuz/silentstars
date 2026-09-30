---
repo: "letsrevel/revel-frontend"
name: "revel-frontend"
description: "The web app of Revel, the open-source event management, ticketing and membership platform. SvelteKit and Svelte 5."
readmeQualityOk: true
url: "https://github.com/letsrevel/revel-frontend"
homepage: "https://letsrevel.io"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [58, 41]
topics: ["event-management", "eventbrite-alternative", "events", "membership", "open-source", "self-hosted", "svelte", "sveltekit", "ticketing", "typescript"]
stars: 18
forks: 12
openIssues: 39
closedIssues: 299
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-10-17T08:18:54Z"
lastCommitAt: "2026-09-30T09:56:57Z"
lastReleaseAt: "2025-10-28T11:54:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 71
maintainers: ["biagiodistefano", "dependabot[bot]", "florimond-collette"]
openGraphImageUrl: "https://opengraph.githubassets.com/a045fadfedf2e79f57265620fd0043937e3e02cfd946eb0993936b534442aecd/letsrevel/revel-frontend"
discussionCount: 0
---

# Revel frontend

**Revel is an open-source event management, ticketing and membership platform for communities, clubs, independent venues and independent artists.**

This repository is the SvelteKit web app: public event and organization pages, checkout, the organizer admin and the dashboards for attendees and members. It talks to the [backend API](https://github.com/letsrevel/revel-backend) through a TypeScript client generated from the backend's OpenAPI spec. For what Revel does, who it is for, the demo, fees and self-hosting, read the [main README](https://github.com/letsrevel/revel-backend#readme).

</p>

## Local development

Prerequisites: Node.js 22.22.2 or newer, pnpm 11 or newer (`packageManager` pins 11.6.0) and the backend running at `http://localhost:8000` (see its [local development](https://github.com/letsrevel/revel-backend#local-development) section).

```bash
git clone https://github.com/letsrevel/revel-frontend.git
cd revel-frontend
pnpm install
pnpm paraglide:compile   # compiles the i18n bundle, which is gitignored
pnpm dev                 # http://localhost:5173
```

Skipping `pnpm paraglide:compile` makes `pnpm dev` return HTTP 500 and `pnpm check` fail. Run…
