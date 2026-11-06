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
stars: 29
forks: 3
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-10-27T03:50:28Z"
lastCommitAt: "2026-11-06T12:17:27Z"
lastReleaseAt: "2026-11-06T02:37:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 52
maintainers: ["zenlabscorp"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d2e9f30832eef8707d7dd1dcf27e70d9c5d75ebd20049e957391d2c3a68f057/Zen-Labs-Corp/hatamoto"
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
