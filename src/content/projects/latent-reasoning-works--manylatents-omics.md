---
repo: "latent-reasoning-works/manylatents-omics"
name: "manylatents-omics"
description: "Genetics and genomics extension for manylatents"
readmeQualityOk: true
url: "https://github.com/latent-reasoning-works/manylatents-omics"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 7
forks: 4
openIssues: 5
closedIssues: 12
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2025-10-27T21:26:06Z"
lastCommitAt: "2026-10-29T05:49:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 51
maintainers: ["cmvcordova", "ZackMWarren"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c63e7c0eae05bedf0e919ca3584fc724cc5fb5b9951fc0bb22cfb3520285280/latent-reasoning-works/manylatents-omics"
---

A T G . . C A T        .  . .
  . G C A T . G .   -->  . .. .  -->  λ(·)
   T . A G C . A T        .  . .
     A T G . C A

     m a n y l a t e n t s - o m i c s

        from sequence to manifold

---

Population genetics, single-cell, and foundation model encoders for [manylatents](https://github.com/latent-reasoning-works/manylatents). Extends the core DR framework with biological data types and domain-specific metrics.

## Install

```bash
uv add manylatents-omics
```

Optional extras:

```bash
uv add "manylatents-omics[popgen]"      # population genetics
uv add "manylatents-omics[singlecell]"  # single-cell (scanpy, anndata)
uv add "manylatents-omics[dogma]"       # protein + RNA encoders (ESM3, Orthrus)
```

> **DNA encoder (Evo2)** requires a separate venv due to torch version conflicts. See `scripts/setup-dna-venv.sh`.

Or from the core manylatents repo:

```bash
uv sync --extra omics   # installs manylatents-omics as a namespace extension
```

```bash
git clone https://github.com/latent-reasoning-works/manylatents-omics.git
cd manylatents-omics && uv sync
```

## Architecture

manylatents-omics is a **namespace extension** of…
