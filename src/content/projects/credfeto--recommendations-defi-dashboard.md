---
repo: "credfeto/recommendations-defi-dashboard"
name: "recommendations-defi-dashboard"
description: "Test dashboard"
readmeQualityOk: true
url: "https://github.com/credfeto/recommendations-defi-dashboard"
language: "C#"
languages: ["C#"]
languagePcts: [92]
stars: 5
forks: 2
openIssues: 16
closedIssues: 58
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-25T13:46:01Z"
lastCommitAt: "2026-11-02T17:56:53Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 95
undervaluedScore: 63
maintainers: ["credfeto", "dnyw4l3n13"]
openGraphImageUrl: "https://opengraph.githubassets.com/f83d9dc47009793f1ee8a4a08718e189e05199cb5234493596d44186cbf73497/credfeto/recommendations-defi-dashboard"
fundingLinks: ["GITHUB:https://github.com/credfeto", "BUY_ME_A_COFFEE:https://buymeacoffee.com/mark.ridgwell"]
---

# DeFi Dashboard

A server-only application that aggregates and filters DeFi liquidity pools from the Llama Yields API, exposes them via a REST API and an MCP server, and ships as a single native-AOT Docker container with built-in TLS and HTTP/3.

## Features

- Browse liquidity pools from [Llama Yields API](https://yields.llama.fi/)
- Filter pools by type: ETH, Stablecoins, High Yield, Blue Chip, and Low TVL
- Stablecoin depeg monitoring with per-token price deviation alerts
- Contract security scoring via GoPlus API
- Hack/exploit risk flagging from the DefiLlama hacks dataset
- Server-side SQLite cache (1-hour TTL) to reduce external API calls
- MCP server exposing `get_pool_types`, `get_pools`, and `check_contract_security` tools
- Self-signed `server.pfx` generated at container startup — HTTPS and HTTP/3 with no nginx

## Quick Start

### Prerequisites

- .NET 10 SDK
- Docker (for container deployment)

### Development

```sh
cd src
dotnet run --project Credfeto.Defi.Server
```

The server listens on `http://localhost:5000` by default (plain HTTP, no cert needed for dev).

To enable HTTPS locally, generate a cert and set `CERT_PATH`:

```sh
CERT_PATH=/tmp/server.pfx dotnet…
