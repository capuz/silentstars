---
repo: "openstreetlifting/openstreetlifting"
name: "openstreetlifting"
description: "OpenStreetlifting is an open, collaborative project building a permanent and traceable archive of all Streetlifting data, freely accessible to everyone."
readmeQualityOk: true
url: "https://github.com/openstreetlifting/openstreetlifting"
homepage: "https://openstreetlifting.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [63]
topics: ["api", "data", "rust", "streetlifting", "svelte"]
stars: 5
forks: 1
openIssues: 129
closedIssues: 265
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2025-11-07T17:00:21Z"
lastCommitAt: "2026-10-02T09:59:22Z"
lastReleaseAt: "2026-08-11T20:23:59Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "under_pressure"]
healthScore: 93
undervaluedScore: 83
maintainers: ["dirdr", "osl-ci[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ad98a13e4e6655997f1e496485d567acc285003a568bdabf0b554efefee3a5e/openstreetlifting/openstreetlifting"
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
sqlx migrate run --source crates/osl_db/migrations
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
