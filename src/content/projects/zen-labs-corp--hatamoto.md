---
repo: "Zen-Labs-Corp/hatamoto"
name: "hatamoto"
description: "Hatamoto: a fast, secure, self-hosted CMS in Go, with signed WebAssembly plugins and auto-updates"
readmeQualityOk: true
url: "https://github.com/Zen-Labs-Corp/hatamoto"
homepage: "https://hatamoto.dev"
language: "Go"
languages: ["Go"]
languagePcts: [78]
topics: ["cms", "go", "golang", "headless-cms", "mcp", "postgres", "self-hosted", "seo", "wasm", "webassembly"]
stars: 345
forks: 10
openIssues: 3
closedIssues: 11
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-10-27T03:50:28Z"
lastCommitAt: "2026-11-21T11:33:09Z"
lastReleaseAt: "2026-11-08T11:43:43Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 30
maintainers: ["zenlabscorp", "puneetindersingh"]
openGraphImageUrl: "https://opengraph.githubassets.com/02d8f54363ab5ee198889f29d47abd10890017e817f1e13310112f03423ca012/Zen-Labs-Corp/hatamoto"
discussionCount: 1
---

The batteries-included CMS for the agentic era: builder, SEO, caching, forms, redirects,
AI analytics, auto linking, entities, schema, Media optimizer and MCP in one Go binary plus Postgres.<br>
Open source, no plugin stack, no PHP, no Node, install stats on by default, one switch to turn them off.

## Get started

**Docker** (starts Postgres too):

```sh
git clone https://github.com/Zen-Labs-Corp/hatamoto.git && cd hatamoto
docker compose up
```

**Or the binary** (Linux or macOS, Intel or ARM), pointed at your own Postgres:

```sh
OS=$(uname -s | tr A-Z a-z); ARCH=$(uname -m | sed 's/x86_64/amd64/; s/aarch64/arm64/')
curl -fL "https://github.com/Zen-Labs-Corp/hatamoto/releases/latest/download/hatamoto-$OS-$ARCH.tar.gz" | tar -xz --strip-components=1 "hatamoto-$OS-$ARCH/hatamoto"
DATABASE_URL=postgres://user:pw@localhost:5432/hatamoto?sslmode=disable ./hatamoto serve
```
