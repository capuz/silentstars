---
repo: "solomon-b/kpbj.fm"
name: "kpbj.fm"
description: "kpbj.fm website"
readmeQualityOk: true
url: "https://github.com/solomon-b/kpbj.fm"
language: "Haskell"
languages: ["Haskell"]
languagePcts: [88]
stars: 12
forks: 0
openIssues: 16
closedIssues: 7
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-03-22T16:23:22Z"
lastCommitAt: "2026-10-16T08:27:00Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 81
undervaluedScore: 56
maintainers: ["solomon-b"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4b3cc1854845808e5107b93e8bc028078bb1d351c9e5990f1f94fc11047dff2/solomon-b/kpbj.fm"
---

# KPBJ 95.9FM 📻

Community radio station website for Shadow Hills CA.

**Web Service** — Haskell/Servant app with server-side HTML (Lucid2 + HTMX). Handles the website, host dashboard, and playout API. Runs on a NixOS VPS with PostgreSQL and DigitalOcean Spaces.

**Liquidsoap** — Audio automation. Polls the web service for scheduled episodes and streams to Icecast. Runs on a VPS.

**Icecast** — Streaming server. Serves the live audio stream to listeners. Runs alongside Liquidsoap on the VPS.

See [ARCHITECTURE.md](https://github.com/solomon-b/kpbj.fm/blob/HEAD/ARCHITECTURE.md) for full system topology.

## Development

### Prerequisites

- [Nix](https://nixos.org/download.html) with flakes enabled
- Docker (for local PostgreSQL)

### Environment Variables

Create a `.envrc.local` file with the following env vars:

```bash
# Required
export APP_ENVIRONMENT="Development"
export APP_HOSTNAME="localhost"
export APP_POSTGRES_CONNECTION_STRING="postgres://postgres:postgres@localhost:5433/dev_db"
export DATABASE_URL="postgresql://postgres@localhost:5433/dev_db" # Used by SqlX
export APP_WARP_PORT="4000"
export APP_WARP_SERVERNAME="localhost"
export APP_WARP_TIMEOUT="100"

# Optional -…
