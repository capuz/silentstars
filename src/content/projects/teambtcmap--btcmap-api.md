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
stars: 24
forks: 10
openIssues: 36
closedIssues: 34
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2022-09-25T15:28:06Z"
lastCommitAt: "2026-08-19T04:07:32Z"
lastReleaseAt: "2024-05-07T05:24:39Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 87
undervaluedScore: 63
maintainers: ["bubelov", "escapedcat", "dadofsambonzuki"]
openGraphImageUrl: "https://opengraph.githubassets.com/65f52452a24bb0a0b566abf3c8ec97e1fdc0b3873a6cc1dcdeec4d59d7e87c69/teambtcmap/btcmap-api"
fundingLinks: ["CUSTOM:btcmap.org/support-us"]
---

# BTC Map API

### Check our [API Docs](https://github.com/teambtcmap/btcmap-api/blob/master/docs%2FREADME.md) for more information.

## Local Development

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

### Configuration

Behavior is controlled by environment variables (all optional in local dev):

| Variable | Default | Purpose |
|----------|---------|---------|
| `RUST_LOG` | `info` | Log level. |
| `BTCMAP_API_BASE_URL` | `http://127.0.0.1:8000` | Public base URL of the API. NIP-98 Nostr auth verifies the signed event's `u` tag against this value, **not** the request `Host`/`X-Forwarded-*` headers. **In production this must be set to the public origin** (e.g. `https://api.btcmap.org`) or all Nostr auth fails with `401`. See [Server Configuration (NIP-98)](https://github.com/teambtcmap/btcmap-api/blob/HEAD/docs/rest/v4/auth.md#server-configuration-nip-98). |

The CORS allowlist lives in the `conf` table (column `cors_origins`): a
comma-separated list of…
