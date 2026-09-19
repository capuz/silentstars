---
repo: "ubclaunchpad/neuron"
name: "neuron"
description: "A volunteer management system for BC Brain Wellness Program."
readmeQualityOk: true
url: "https://github.com/ubclaunchpad/neuron"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 9
forks: 0
openIssues: 4
closedIssues: 45
watchers: 6
contributors: 25
recentReleases: 0
createdAt: "2024-08-25T23:19:43Z"
lastCommitAt: "2026-09-19T01:17:05Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 41
maintainers: ["theosiemensrhodes", "jjohngrey", "daynayoon"]
openGraphImageUrl: "https://opengraph.githubassets.com/362164fccc41a5cfb944a0e46278dbaa06332f66692bdfc88f557d57c13c4835/ubclaunchpad/neuron"
---

# Neuron

A volunteer management system for BC Brain Wellness Program.

## Getting Started

To get a local copy up and running follow these simple steps.

## Prerequisites

- [**Node.js**](https://nodejs.org/en/download) and a [pnpm](https://pnpm.io/installation)
- [**Docker**](https://docs.docker.com/desktop/) for local Postgres + Redis (install Docker Desktop locally)
- A local `.env` with required variables (see **Environment**)

This project uses:

- **Postgres** (via Drizzle ORM with `postgres-js`)
- **Redis** for caching
- Strict typed env validation (fails fast if required keys are missing)

---

## Environment

Create a `.env` in the repo root, following the format and content of `.env`

> The app validates these at startup. If any are missing/malformed, it will exit with an error.

---

## Start the Dev Services (Docker)

Start **Postgres** and **Redis** locally:

1. Create or update your `.env` with the required variables used by Docker and the app. You can generate strong passwords with the helper script:

```bash
./gen-pass.sh
```

Example `.env` snippet for local dev:

```
# Drizzle
DATABASE_PASSWORD="password" // Change this to a generated password…
