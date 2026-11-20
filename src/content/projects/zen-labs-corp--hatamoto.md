---
repo: "Zen-Labs-Corp/hatamoto"
name: "hatamoto"
description: "Hatamoto: a fast, secure, self-hosted CMS in Go, with signed WebAssembly plugins and auto-updates"
readmeQualityOk: true
url: "https://github.com/Zen-Labs-Corp/hatamoto"
homepage: "https://hatamoto.dev"
language: "Go"
languages: ["Go"]
languagePcts: [77]
topics: ["cms", "go", "golang", "headless-cms", "mcp", "postgres", "self-hosted", "seo", "wasm", "webassembly"]
stars: 259
forks: 10
openIssues: 3
closedIssues: 11
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-10-27T03:50:28Z"
lastCommitAt: "2026-11-20T12:01:27Z"
lastReleaseAt: "2026-11-08T11:43:43Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 95
undervaluedScore: 31
maintainers: ["zenlabscorp"]
openGraphImageUrl: "https://opengraph.githubassets.com/12234a0b3888db2ae77a73b56a6d431b3d1c42654c8a5e68b62f0f70326837d9/Zen-Labs-Corp/hatamoto"
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
