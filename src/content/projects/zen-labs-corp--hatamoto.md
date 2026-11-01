---
repo: "Zen-Labs-Corp/hatamoto"
name: "hatamoto"
description: "Hatamoto: a fast, secure, self-hosted CMS in Go, with signed WebAssembly plugins and auto-updates"
readmeQualityOk: true
url: "https://github.com/Zen-Labs-Corp/hatamoto"
homepage: "https://hatamoto.dev"
language: "Go"
languages: ["Go"]
languagePcts: [72]
stars: 23
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-10-27T03:50:28Z"
lastCommitAt: "2026-11-01T10:45:01Z"
lastReleaseAt: "2026-10-30T08:34:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 54
maintainers: ["zenlabscorp"]
openGraphImageUrl: "https://opengraph.githubassets.com/c23c6f4fe232df451a5feda26d9f2ba52fc205abb2271139c8aaa8b377ed74f2/Zen-Labs-Corp/hatamoto"
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

Open **http://localhost:8090/admin**. The setup code is printed in the server logs
(`docker compose logs hatamoto`). More: [Install with Docker](https://github.com/Zen-Labs-Corp/hatamoto/blob/HEAD/docs/site/getting-started/install-docker.md),
[Install the binary](https://github.com/Zen-Labs-Corp/hatamoto/blob/HEAD/docs/site/getting-started/install-binary.md), [First…
