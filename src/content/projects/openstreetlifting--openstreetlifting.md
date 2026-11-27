---
repo: "openstreetlifting/openstreetlifting"
name: "openstreetlifting"
description: "OpenStreetlifting is an open, collaborative project building a permanent and traceable archive of all Streetlifting data, freely accessible to everyone."
readmeQualityOk: true
url: "https://github.com/openstreetlifting/openstreetlifting"
homepage: "https://openstreetlifting.org"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [52, 29]
topics: ["api", "data", "rust", "streetlifting", "svelte"]
stars: 5
forks: 2
openIssues: 67
closedIssues: 373
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-07T17:00:21Z"
lastCommitAt: "2026-11-27T15:49:48Z"
lastReleaseAt: "2026-08-11T20:23:59Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 97
undervaluedScore: 88
maintainers: ["dirdr", "osl-ci[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/279572a67366670103d2656b85e19c07dfb9b55fd33cfd3cc1438b626755c71e/openstreetlifting/openstreetlifting"
---

# OpenStreetlifting

OpenStreetlifting is an **open**, **collaborative** project building a **permanent** and **traceable** archive of all Streetlifting data, freely accessible to everyone.

If you want to contribute data, or want to learn more about the project, please read the [book](https://docs.openstreetlifting.org)

## Run locally

You need [rustup](https://rustup.rs), Node and pnpm 12. The script uses a Postgres already running on `localhost:5432`, or starts one with Docker.

```sh
./launch_local.sh
```

## Import data
If you are starting from a fresh database, you will need to create the database and apply the migrations (one time setup):

`cd backend && cargo sqlx database create && cargo sqlx migrate run ./crates/osl_db/migrations`

you will need [sqlx](https://crates.io/crates/sqlx-cli)

The database is initially empty. You can import all competitions

```sh
cd backend && cargo run -p osl_importer --bin import -- competitions data/competitions
```

## Contribute

- [GitHub issues](https://github.com/openstreetlifting/openstreetlifting/issues)
- [data contribution guide](https://docs.openstreetlifting.org/CONTRIBUTING_DATA.html).
