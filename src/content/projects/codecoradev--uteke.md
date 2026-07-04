---
repo: "codecoradev/uteke"
name: "uteke"
description: "🧠 The Brain for Your AI — Local-first memory engine for AI agents. Store, recall, and search memories with semantic embeddings. Single Rust binary, zero config, fully offline."
readmeQualityOk: true
url: "https://github.com/codecoradev/uteke"
homepage: "https://codecora.dev"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [62, 28]
topics: ["ai", "cli", "embeddings", "hnsw", "local-first", "memory", "rust", "sqlite", "vector-database", "cli-tool"]
stars: 32
forks: 5
openIssues: 0
closedIssues: 235
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-29T00:27:31Z"
lastCommitAt: "2026-07-04T23:14:29Z"
lastReleaseAt: "2026-06-07T16:07:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 51
maintainers: ["ajianaz", "dependabot[bot]", "gnoviawan"]
openGraphImageUrl: "https://opengraph.githubassets.com/af8ace9423de26a0a53ec58a64bb946406bea30ec013da38f344348319f8f8ca/codecoradev/uteke"
discussionCount: 0
---

</p>

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
curl -sSL codecora.dev/install | sh

# Store a memory with metadata
uteke remember "Deploy v2.1 to staging" --tags deploy,staging \
  --entity staging-server --category infrastructure

# Hybrid search (vector + FTS5, ranked by RRF)
uteke recall "when do we deploy?"

# Stats
uteke stats
```

**That's it.** No API keys. No Docker. No Python. First run downloads the embedding model (~188MB) and you're good to go.

> 📖 [Install options](https://github.com/codecoradev/uteke/blob/HEAD/INSTALL.md) · [Pre-built binaries](https://github.com/codecoradev/uteke/releases) · [Docker](https://github.com/codecoradev/uteke/pkgs/container/uteke) · [Full docs](https://github.com/codecoradev/uteke/tree/develop/docs)

### Docker

> Listens on localhost only by default. See [Docker docs](https://github.com/codecoradev/uteke/blob/HEAD/docs/docker.md) for auth setup.

```bash
# One-liner (model pre-baked in image)…
