---
repo: "Zen-Labs-Corp/hatamoto"
name: "hatamoto"
description: "Hatamoto: a fast, secure, self-hosted CMS in Go, with signed WebAssembly plugins and auto-updates"
readmeQualityOk: true
url: "https://github.com/Zen-Labs-Corp/hatamoto"
homepage: "https://hatamoto.dev"
language: "Go"
languages: ["Go"]
languagePcts: [76]
topics: ["cms", "go", "golang", "headless-cms", "mcp", "postgres", "self-hosted", "seo", "wasm", "webassembly"]
stars: 29
forks: 3
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-27T03:50:28Z"
lastCommitAt: "2026-11-09T11:58:56Z"
lastReleaseAt: "2026-11-08T11:43:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 52
maintainers: ["zenlabscorp"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a0035f959dc0576bc70cc0d5d7abeafe216885bf2fac3d5ad1618028121b9af/Zen-Labs-Corp/hatamoto"
discussionCount: 0
---

The batteries-included CMS for the agentic era: builder, SEO, caching, forms, redirects,
AI analytics and MCP in one Go binary plus Postgres.<br>
Open source, no plugin stack, no PHP, no Node, no telemetry unless you turn it on.

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

The server prints a setup address in its log (`docker compose logs hatamoto`). Open it to create
your account and site. The admin lives at a private address of its own, which `hatamoto admin-url`
prints at any time. More: [Install with Docker](https://github.com/Zen-Labs-Corp/hatamoto/blob/HEAD/docs/site/getting-started/install-docker.md),
[Install the…
