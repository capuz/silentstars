---
repo: "marinade-finance/delegation-strategy-2"
name: "delegation-strategy-2"
description: "API for validators data; Scoring based on which Marinade stakes to validators"
readmeQualityOk: true
url: "https://github.com/marinade-finance/delegation-strategy-2"
homepage: "https://validators-api.marinade.finance/docs"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 33
forks: 5
openIssues: 0
closedIssues: 10
watchers: 4
contributors: 12
recentReleases: 0
createdAt: "2022-09-15T12:30:48Z"
lastCommitAt: "2026-11-27T12:53:10Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 62
maintainers: ["ochaloup", "ilmari-h", "janlegner"]
openGraphImageUrl: "https://opengraph.githubassets.com/77d6f6b7a00cd3bdb35f9d5e7524026fd4a66bfd2cc5cb82bb5d64cad7e4dc19/marinade-finance/delegation-strategy-2"
---

# Delegation Strategy

This repository contains all necessary components to track and collect validators' data and evaluate them for the purposes of Marinade's stake distribution.

## Repository structure
- [Rust API to expose all validators' data](https://github.com/marinade-finance/delegation-strategy-2/blob/HEAD/api)
- [Rust CLI tool to collect a snapshot from the Solana chain](https://github.com/marinade-finance/delegation-strategy-2/blob/HEAD/collect)
- [Rust CLI tool to store previously collected data to DB](https://github.com/marinade-finance/delegation-strategy-2/blob/HEAD/store)
- [DB migration scripts](https://github.com/marinade-finance/delegation-strategy-2/blob/HEAD/migrations)
- [A set of utility scripts](https://github.com/marinade-finance/delegation-strategy-2/blob/HEAD/scripts)

## Development
### Prerequisities
- Rust - for development of data collection, storing and serving
- PostgreSQL - for the storage

### Env
Create a `.env` file after cloning the repository
```envc
POSTGRES_URL=postgresql://...
RPC_URL=https://api.mainnet-beta.solana.com
WHOIS_BEARER_TOKEN=...
ADMIN_AUTH_TOKEN=...
```

### Build
```bash
cargo build
```
