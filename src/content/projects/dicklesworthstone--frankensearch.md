---
repo: "Dicklesworthstone/frankensearch"
name: "frankensearch"
description: "Two-tier hybrid search for Rust: sub-millisecond initial results via potion-128M, quality-refined rankings in 150ms via MiniLM-L6-v2. Combines lexical (Tantivy BM25) and semantic (vector cosine) search with Reciprocal Rank Fusion. Progressive iterator API, f16 SIMD vector index, feature-gated compilation."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/frankensearch"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["embeddings", "full-text-search", "hybrid-search", "information-retrieval", "nlp", "reciprocal-rank-fusion", "rust", "search", "semantic-search", "simd"]
stars: 83
forks: 17
openIssues: 0
closedIssues: 34
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-02-13T20:51:32Z"
lastCommitAt: "2026-08-30T00:43:37Z"
lastReleaseAt: "2026-04-08T00:20:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 36
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1157453895/719f960a-0de5-44f0-af05-0a65e8ac852a"
---

# frankensearch

</div>

</div>

Two-tier hybrid local search for Rust and the `fsfs` standalone CLI: fast first-pass results, then quality refinement.

## Quick Navigation

- [Install In One Line](#install-in-one-line)
- [Quick Start](#quick-start)
- [How It Works](#how-it-works)
- [Architecture Breakdown](#architecture-breakdown)
- [Algorithms Used](#algorithms-used)
- [Library Integration Quickstart (Rust)](#library-integration-quickstart-rust)
- [Feature-Flag Decision Table](#feature-flag-decision-table)
- [Config Recipes](#config-recipes)
- [Troubleshooting by Symptom](#troubleshooting-by-symptom)
- [Reference Appendix](#reference-appendix)
- [Key Source Files](#key-source-files)
- [Glossary](#glossary)
- [Knob Impact Matrix](#knob-impact-matrix)

## Install In One Line

```bash
curl -fsSL https://raw.githubusercontent.com/Dicklesworthstone/frankensearch/main/install.sh | bash -s -- --easy-mode
```

The installer verifies every downloaded archive before replacing a binary. A
missing or malformed checksum, unavailable SHA-256 tool, or mismatch is a hard
failure. If the platform has no full semantic release artifact, the ordinary
path builds the loader-capable default from…
