---
repo: "openstreetlifting/openstreetlifting"
name: "openstreetlifting"
description: "OpenStreetlifting is an open, collaborative project building a permanent and traceable archive of all Streetlifting data, freely accessible to everyone."
readmeQualityOk: true
url: "https://github.com/openstreetlifting/openstreetlifting"
homepage: "https://openstreetlifting.org"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [49, 31]
topics: ["api", "data", "rust", "streetlifting", "svelte"]
stars: 5
forks: 1
openIssues: 102
closedIssues: 318
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2025-11-07T17:00:21Z"
lastCommitAt: "2026-11-06T11:11:05Z"
lastReleaseAt: "2026-08-11T20:23:59Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "under_pressure"]
healthScore: 94
undervaluedScore: 89
maintainers: ["dirdr", "osl-ci[bot]", "PrzemyslawSarnacki"]
openGraphImageUrl: "https://opengraph.githubassets.com/21d2bdad2eb9ea664a45f79a5303fbdd35a4da153cc6d66fd3b0ddcd2c23a3f2/openstreetlifting/openstreetlifting"
---

# OpenStreetlifting

OpenStreetlifting is an **open**, **collaborative** project building a **permanent** and **traceable** archive of all Streetlifting data, freely accessible to everyone.

To contribute data, Licensing, or just to learn more about this project, please read the [book](https://docs.openstreetlifting.org)

## Run locally

Install Docker, Rust, Node.js 24, pnpm 12, and [sqlx-cli](https://crates.io/crates/sqlx-cli). Clone the repository, then prepare the database and frontend from the repository root:

```sh
cp backend/.env.example backend/.env
docker compose up -d --wait postgres
cd backend
cargo sqlx migrate run --source crates/osl_db/migrations
cd ../frontend
pnpm install --frozen-lockfile
cd ..
```

Import the competition files and start both servers:

```sh
cd backend
cargo run -p osl_importer --bin import -- competitions
cd ..
./launch_local.sh
```

- frontend: `localhost:5173`
- backend: `localhost:8080`

## Contribute

Fork the repository, create a branch from `main`, and open a pull request.
You can read through [GitHub issues](https://github.com/openstreetlifting/openstreetlifting/issues) to find work to do.

To contribute competition data, follow the [data…
