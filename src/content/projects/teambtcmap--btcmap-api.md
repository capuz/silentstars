---
repo: "teambtcmap/btcmap-api"
name: "btcmap-api"
description: "BTC Map API"
readmeQualityOk: true
url: "https://github.com/teambtcmap/btcmap-api"
homepage: "https://btcmap.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 24
forks: 10
openIssues: 35
closedIssues: 33
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2022-09-25T15:28:06Z"
lastCommitAt: "2026-08-10T05:04:37Z"
lastReleaseAt: "2024-05-07T05:24:39Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 86
undervaluedScore: 63
maintainers: ["bubelov", "escapedcat", "dadofsambonzuki"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5f72b0cdc12c5f5bfccd5bc1e6bbd950c829c74311011fd9e58ee1d1af362ed/teambtcmap/btcmap-api"
fundingLinks: ["CUSTOM:btcmap.org/support-us"]
---

# BTC Map API

### Check our [API Docs](https://github.com/teambtcmap/btcmap-api/blob/master/docs%2FREADME.md) for more information.

## Local Development

### Prerequisites

1. **Install Rust** via [rustup](https://rust-lang.org/tools/install/):

   ```
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

   The project pins its Rust version in `rust-toolchain.toml` — rustup will automatically install and use the correct version.

2. **Create the data directory** for the SQLite databases:

   ```
   mkdir -p ~/.local/share/btcmap
   ```

3. **Install sqlite3_rsync** (needed to fetch the production database):

   ```
   # macOS
   brew install sqlite-rsync
   ```

4. **Configure SSH access** to the production server (needed for fetching data). Add to `~/.ssh/config`:

   ```
   Host btcmap-api
     User root
     Hostname <server-ip>
   ```

### Build

```
cargo build
```

### Test

```
cargo test
```

### Fetch Production Data

The API needs a database to serve data. Fetch a copy of the production database:

```
./devtools fetch-main-db
```

This uses `sqlite3_rsync` to sync the main database from the production server.

### Run

```
cargo run
```

The server…
