---
repo: "unchainese/unchain"
name: "unchain"
description: "Unchain is a lightweight and easy-to-use proxy server designed to bypass network restrictions."
readmeQualityOk: true
url: "https://github.com/unchainese/unchain"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["clash", "shadowrocket", "singbox", "v2ray", "vless", "xray"]
stars: 92
forks: 28
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2024-12-02T01:42:39Z"
lastCommitAt: "2026-07-17T05:59:30Z"
lastReleaseAt: "2026-07-17T01:27:00Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 27
maintainers: ["mojocn"]
openGraphImageUrl: "https://opengraph.githubassets.com/637db3df561955b4f4999ef4ba9f55f9cd8012424f9b2f7e1658952c45567f17/unchainese/unchain"
---

# Unchain

Unchain is a lightweight Go-based VLESS over WebSocket proxy project with support for:

- VLESS over WebSocket proxy server
- TCP and UDP forwarding
- multiple UUID user access control
- optional traffic usage metering
- systemd service installation
- Docker image packaging

## Key Features

- **Protocol**: VLESS over WebSocket
- **Endpoints**: `/wsv/{uid}`, `/sub/{uid}`, `/`
- **Configuration**: `.env` file and environment variables
- **User Management**: `ALLOW_USERS` accepts multiple UUIDs
- **Traffic Metering**: enabled via `ENABLE_DATA_USAGE_METERING=true`
- **Modes**: `run`, `install`, `client`

## Project Structure

```text
.
├── Dockerfile
├── LICENSE
├── README.md
├── app.go
├── app_ping.go
├── app_sub.go
├── app_ws_vless.go
├── config.go
├── config_util.go
├── example.env
├── go.mod
├── go.sum
├── logger.go
├── main.go
├── socks5.go
├── unchain
├── unchain.service
└── vless.go
```

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/unchainese/unchain.git
cd unchain
```

### 2. Install dependencies

```bash
go mod download
```

### 3. Configure environment variables

Copy `example.env` to `.env` and modify values as needed:…
