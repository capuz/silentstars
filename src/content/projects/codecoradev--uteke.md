---
repo: "codecoradev/uteke"
name: "uteke"
description: "🧠 The Brain for Your AI — Local-first memory engine for AI agents. Store, recall, and search memories with semantic embeddings. Single Rust binary, zero config, fully offline."
url: "https://github.com/codecoradev/uteke"
homepage: "https://codecora.dev"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [60, 30]
topics: ["ai", "cli", "embeddings", "hnsw", "local-first", "memory", "rust", "sqlite", "vector-database", "cli-tool"]
stars: 18
forks: 4
openIssues: 0
closedIssues: 207
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-29T00:27:31Z"
lastCommitAt: "2026-06-27T06:23:42Z"
lastReleaseAt: "2026-06-07T16:07:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 58
maintainers: ["ajianaz", "gnoviawan", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/38be3de3ad184eda883551221377458da47061b6a8f350cc311b1a9513644b71/codecoradev/uteke"
discussionCount: 0
---

<h1 align="center">Uteke</h1>
  <em>Offline-first semantic memory engine — single binary, zero config, 30ms recall.</em>
</p>
</p>

  <strong>🇬🇧 English</strong> · <a href="README.id.md">🇮🇩 Bahasa Indonesia</a>
</p>

---

## Quick Start

```bash
# Install (macOS, Linux, Windows)
curl -sSL https://raw.githubusercontent.com/codecoradev/uteke/main/install.sh | sh

# Store a memory with metadata
uteke remember "Deploy v2.1 to staging" --tags deploy,staging \
  --entity staging-server --category infrastructure

# Hybrid search (vector + FTS5, ranked by RRF)
uteke recall "when do we deploy?"

# Stats
uteke stats
```

**That's it.** No API keys. No Docker. No Python. First run downloads the embedding model (~188MB) and you're good to go.

> 📖 [Install options](INSTALL.md) · [Pre-built binaries](https://github.com/codecoradev/uteke/releases) · [Docker](https://github.com/codecoradev/uteke/pkgs/container/uteke) · [Full docs](https://github.com/codecoradev/uteke/tree/develop/docs)

### Docker

> Listens on localhost only by default. See [Docker docs](docs/docker.md) for auth setup.

```bash
# One-liner (model pre-baked in image)
docker run -d --name uteke -p 127.0.0.1:8767:8767 -v…
