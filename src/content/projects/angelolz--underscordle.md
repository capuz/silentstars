---
repo: "angelolz/underscordle"
name: "underscordle"
description: "A daily underscores song guessing game!"
readmeQualityOk: true
url: "https://github.com/angelolz/underscordle"
homepage: "https://underscordle.org"
language: "Svelte"
languages: ["Svelte", "JavaScript"]
languagePcts: [62, 21]
topics: ["heardle", "music", "underscores"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-27T05:02:11Z"
lastCommitAt: "2026-11-13T05:36:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 23
maintainers: ["angelolz", "AzureToast"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb64b6e73d2f159d5f721c3048fbc64fa93117fac9b2ec8842deec93e75f130d/angelolz/underscordle"
---

## Tech Stack

- **Frontend**: [Svelte 5](https://svelte.dev/) & [SvelteKit](https://svelte.dev/docs/kit/introduction) (using the Cloudflare adapter)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/) (using Vite plugin integration)
- **Database**: [Cloudflare D1](https://developers.cloudflare.com/d1/) (SQLite-based serverless database)
- **ORM & Migrations**: [Drizzle ORM](https://orm.drizzle.team/)
- **Deployment & Emulation**: [Wrangler](https://developers.cloudflare.com/workers/wrangler/) (Cloudflare CLI)
- **Audio Processing**: [fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg) (used by ingestion scripts to crop tracks)

## Project Structure

- `src/routes/`: Svelte pages and API endpoints
- `src/lib/components/`: ui components (e.g. gameplay, stats, keyboard, layouts).
- `src/lib/server/db/`: db schemas (not a lot here lol)
- `scripts/`: scripts for processing audio, extracting album covers from songs, metadata manifests, and slicing daily guesses.
- `drizzle/`: Auto-generated SQL migration files.

## Local Development Setup

Before you start, make sure you have the following installed on your machine:

1. **Node.js** (v20+ recommended)
2. **pnpm**…
