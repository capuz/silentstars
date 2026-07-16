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
openIssues: 36
closedIssues: 32
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2022-09-25T15:28:06Z"
lastCommitAt: "2026-07-16T05:59:54Z"
lastReleaseAt: "2024-05-07T05:24:39Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded"]
healthScore: 87
undervaluedScore: 63
maintainers: ["bubelov", "escapedcat", "dadofsambonzuki"]
openGraphImageUrl: "https://opengraph.githubassets.com/10558c43823a60b1aedb3e19b4bda065781e476baed7fbaf94b9244b8ab514bf/teambtcmap/btcmap-api"
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
