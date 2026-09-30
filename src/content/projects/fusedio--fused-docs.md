---
repo: "fusedio/fused-docs"
name: "fused-docs"
description: "Fused documentation."
readmeQualityOk: true
url: "https://github.com/fusedio/fused-docs"
homepage: "https://docs.fused.io"
language: "MDX"
languages: ["MDX", "Python"]
languagePcts: [44, 31]
topics: ["data-science", "docs", "geo", "geopython", "geospatial-analysis", "gis", "python", "raster", "spatial", "vector"]
stars: 8
forks: 14
openIssues: 2
closedIssues: 1
watchers: 3
contributors: 25
recentReleases: 0
createdAt: "2024-03-22T21:43:57Z"
lastCommitAt: "2026-09-30T09:57:45Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 83
undervaluedScore: 75
maintainers: ["amanbagrecha", "charlesfused", "MaxLenormand"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf104c9dd07705a7957dd37d428ab2cb7c2bc189c1b7e3176b855079c455f7a0/fusedio/fused-docs"
---

# Fused Docs

The Fused documentation website: [docs.fused.io](https://docs.fused.io/)

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

# Development

## 1. Spin-up locally

```
npm install
npm run start
```

## 2. Deploy

Create a PR on this repo.

- Once PRs merge to `main`, GitHub actions will run to re-deploy the docs site to `https://docs.fused.io/`.
- PRs automatically create a preview build at `https://docs-staging.fused.io/`.

## Updating Fused-py functions

On every new deployment of `fused-py`, update the Python SDK docs with:

```
uv run --reinstall-package fused utils/generate_reference_docs.py
```
