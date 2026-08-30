---
repo: "teambtcmap/btcmap-api"
name: "btcmap-api"
description: "BTC Map API"
readmeQualityOk: true
url: "https://github.com/teambtcmap/btcmap-api"
homepage: "https://btcmap.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 25
forks: 11
openIssues: 37
closedIssues: 34
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2022-09-25T15:28:06Z"
lastCommitAt: "2026-08-30T09:25:11Z"
lastReleaseAt: "2024-05-07T05:24:39Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 87
undervaluedScore: 63
maintainers: ["bubelov", "escapedcat", "LighthouseFR"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cd68b839c378cb358ba3ed6ec88fbd46f67f8e20f9c4c5c2f1eaf2d55fb50bb/teambtcmap/btcmap-api"
fundingLinks: ["CUSTOM:btcmap.org/support-us"]
---

# BTC Map API

To use or integrate with our official instance, see our [API Docs](https://github.com/teambtcmap/btcmap-api/blob/master/docs%2FREADME.md).

## Developer Rundown

### Prerequisites

1. Linux or MacOS
1. Standard Rust development environment

### Build

```
cargo build
```

### Test

```
cargo test
```

### Run

```
cargo run
```

The server binds to `http://127.0.0.1:8000`. Test it with:

```
curl http://localhost:8000/v2/areas
```

### devtools

The `devtools` script provides helper commands for development:

| Command | Description |
|---------|-------------|
| `main-db [query]` | Open the main database in sqlite3 (or run a query) |
| `image-db [query]` | Open the image database in sqlite3 |
| `log-db [query]` | Open the log database in sqlite3 |
| `fetch-db` | Fetch all databases from production |
| `fetch-main-db` | Fetch only the main database |
| `fetch-image-db` | Fetch only the image database |
| `fetch-log-db` | Fetch only the log database |
| `deploy` | Run tests, build release, deploy to production |
| `gen-main-schema` | Generate `schema.sql` from migrations |
| `export-ts-types [dir]` | Export the TypeScript bindings to a directory |

### TypeScript…
