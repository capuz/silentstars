---
repo: "tscibilia/greenlight"
name: "greenlight"
description: "Lightweight web UI for managing the allowlist on UniFi's ad-blocking content filter."
url: "https://github.com/tscibilia/greenlight"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [71]
topics: ["ubiquiti", "unifi"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-04-09T19:35:13Z"
lastCommitAt: "2026-06-30T06:51:46Z"
lastReleaseAt: "2026-06-14T21:10:17Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 52
maintainers: ["tscibilia", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/33cbb9bc0b533585c20cf0449bb0d2c540de8512f4ec7dba165b0e9cda647bdf/tscibilia/greenlight"
---

# UniFi Greenlight

</div>

> A lightweight web UI for managing the allowlist on UniFi's ad-blocking content filter. Designed so family members on your local network can greenlight a website without needing access to the UniFi controller. Full disclosure, this is a vibe coded solution for personal use :robot:

<details>
<summary>See it in action</summary>
<br>

</details>

</div>

## Features

- Add or remove domains from the content filter allowlist
- Simple, mobile-friendly dark UI — no login required
- Supports multiple content filter profiles (auto-detected)
- API key or username/password authentication to UniFi
- Hardened Docker container (non-root, read-only FS, no capabilities)

## Quick Start

### 0. Requirements

- UniFi OS >= 3.x
- UniFi Network >= 8.2.93

### 1. Clone and configure

```bash
git clone <your-repo-url>
cd greenlight
cp .env.example .env
```

Edit `.env` with your UniFi controller details:

```env
UNIFI_HOST=https://192.168.1.1
UNIFI_SITE=default

# Option 1: API key (preferred)
UNIFI_API_KEY=your-key-here

# Option 2: username/password
UNIFI_USERNAME=admin
UNIFI_PASSWORD=changeme
```

### 2. Run with Docker Compose

```bash
docker compose up -d --build
```…
