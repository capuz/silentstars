---
repo: "liciomatos/pgdba"
name: "pgdba"
description: "Terminal UI for PostgreSQL DBAs — interactive diagnostics and management directly in the terminal."
readmeQualityOk: true
url: "https://github.com/liciomatos/pgdba"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2025-01-12T02:44:29Z"
lastCommitAt: "2026-09-19T02:47:29Z"
lastReleaseAt: "2026-07-21T03:18:49Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 84
undervaluedScore: 73
maintainers: ["liciomatos"]
openGraphImageUrl: "https://opengraph.githubassets.com/4285b13495f969746e0f89f0c78de1128ab406e6b0331c914f416de2f4469817/liciomatos/pgdba"
---

# pgdba-cli

Terminal UI for PostgreSQL DBAs — interactive diagnostics and management directly in the terminal.

## Installation

### Homebrew (macOS and Linux)

```bash
brew tap liciomatos/tap
brew trust liciomatos/tap
brew install pgdba-cli
```

### Scoop (Windows)

```powershell
scoop bucket add liciomatos https://github.com/liciomatos/scoop-bucket
scoop install pgdba-cli
```

### Pre-built binary

Download the latest release from [Releases](https://github.com/liciomatos/pgdba/releases) for your OS and architecture.

```bash
# Linux (amd64)
tar -xzf pgdba-cli_*_linux_amd64.tar.gz
chmod +x pgdba-cli
sudo mv pgdba-cli /usr/local/bin/
```

### Build from source

```bash
git clone https://github.com/liciomatos/pgdba.git
cd pgdba/pgdba-cli
go build -o pgdba-cli .
```

## Usage

```bash
# Via URI (recommended)
pgdba-cli --url="postgres://user:password@host:5432/dbname?sslmode=disable"

# Via individual flags
pgdba-cli --host=<host> --user=<user> --password=<password> --dbname=<dbname>
```

### Flags

| Flag | Env var | Default | Description |
|---|---|---|---|
| `--url` | `DATABASE_URL` | — | PostgreSQL connection URI (overrides all flags below) |
| `--host` | `PGHOST` | — | Server…
