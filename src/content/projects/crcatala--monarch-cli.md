---
repo: "crcatala/monarch-cli"
name: "monarch-cli"
description: "Unofficial CLI for Monarch Money (monarch.com) - the personal finance platform that helps you track spending, investments, and more"
readmeQualityOk: true
url: "https://github.com/crcatala/monarch-cli"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 7
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-18T14:43:17Z"
lastCommitAt: "2026-09-19T02:45:01Z"
lastReleaseAt: "2026-01-19T01:17:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 51
maintainers: ["crcatala-vps", "crcatala"]
openGraphImageUrl: "https://opengraph.githubassets.com/067e6001fd391f56dd27e79f46d494fd34fc7647140bfdf6554196313c8744f9/crcatala/monarch-cli"
---

# Monarch CLI

A command-line interface for [Monarch Money](https://www.monarchmoney.com/), a personal finance platform that helps you track spending, manage budgets, and monitor your net worth across all your accounts in one place.

> **Disclaimer:** This is an unofficial, community-maintained project and is not affiliated with, endorsed by, or connected to Monarch Money in any way.

## Features

- 🔐 **Secure authentication** with session persistence (keyring or file storage)
- 📊 **Multiple output formats** (plain, JSON, table, CSV, NDJSON) for flexible processing
- 🔧 **Scriptable** - structured JSON output auto-detected when piped
- 📅 **Smart date presets** (`--preset this-month`, `--preset ytd`)
- ✏️ **Transaction updates** with dry-run preview support
- 🔄 **Account refresh** to sync latest data from institutions

## Installation

### With pip

```bash
pip install monarch-cli
```

### With uv (recommended)

```bash
uv tool install monarch-cli
```

### With pipx

```bash
pipx install monarch-cli
```

### Verify installation

```bash
monarch --version
```

## Quick Start

### 1. Authenticate

```bash
# Interactive login (prompts for email/password)
monarch auth login

#…
