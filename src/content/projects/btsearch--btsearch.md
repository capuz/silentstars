---
repo: "btsearch/btsearch"
name: "btsearch"
description: "BTSearch to ogólnopolska mapa stacji bazowych oraz wykazu UKE"
readmeQualityOk: true
url: "https://github.com/btsearch/btsearch"
homepage: "https://btsearch.pl"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["bts", "radio", "rf", "telecom", "telecommunications", "typescript"]
stars: 27
forks: 2
openIssues: 8
closedIssues: 165
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-02-03T21:32:42Z"
lastCommitAt: "2026-09-27T09:29:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 49
maintainers: ["rxri"]
openGraphImageUrl: "https://opengraph.githubassets.com/287edb797f4e4c8ed47dd1ef39bf4a9559ddb9bd1bce43186ae8affa9edca7fa/btsearch/btsearch"
---

<h1 align="center"><b>BTSearch</b></h1>

BTSearch to Polska mapa stacji bazowych w całej Polsce wraz z łatwym dostępem do pozwoleń UKE i radiolinii

## Features

- View stations on simple to use map
- See UKE (Urząd Komunikacji Elektronicznej) permits and microwave links
- Very powerful & public REST API
- Create private or public lists with your favorite stations
- Fast & beautiful interface

<sup>and much more...</sup>

## Getting started

### Prerequisites

- [Bun](https://bun.sh/) (v1.0 or later)
- [Docker](https://www.docker.com/) & Docker Compose (for the database)

### 1. Installation

Install dependencies from the root directory. Bun handles the pnpm workspace structure automatically.

```bash
bun install
```

> **Note:** You may see a warning about the `engines` field preferring pnpm. You can safely ignore this when using Bun.

### 2. Database Setup

The server requires PostgreSQL and Redis. You can spin these up using the provided Docker Compose file.

```bash
# Start only the database and redis services
docker-compose up -d db redis
```

This docker compose file provides custom PostgreSQL build with PostGIS already installed since our server requires that.

Ensure the…
