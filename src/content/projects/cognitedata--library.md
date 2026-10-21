---
repo: "cognitedata/library"
name: "library"
description: "The Cognite deployment packs — downloadable, extensible Toolkit modules that you configure and deploy with the Cognite Toolkit."
readmeQualityOk: true
url: "https://github.com/cognitedata/library"
homepage: "https://docs.cognite.com/cdf/deploy/cdf_toolkit/references/packages/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [52, 43]
topics: ["ai-low-risk"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 12
contributors: 25
recentReleases: 0
createdAt: "2025-03-10T12:30:42Z"
lastCommitAt: "2026-10-21T08:49:47Z"
lastReleaseAt: "2025-10-16T09:15:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 60
maintainers: ["valnaumova", "Aashutosh-cognite", "BergsethCognite"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd31299843f6363ac5d1276dd424b14670fae92d453f1ba4c34281423a568191/cognitedata/library"
---

# Cognite Library (deployment packs)

This repository contains **Cognite deployment packs** — downloadable, extensible Toolkit modules that you configure and deploy with the [Cognite Toolkit](https://docs.cognite.com/cdf/deploy/cdf_toolkit/).

> Templates guide users through deploying, customizing, and building Cognite solutions: data processing, contextualization pipelines, and application configuration.

## Repository layout

All deployable content lives under [`modules/`](https://github.com/cognitedata/library/blob/HEAD/modules/). The registry of packs is [`modules/packages.toml`](https://github.com/cognitedata/library/blob/HEAD/modules/packages.toml).

| Folder | Purpose |
|--------|---------|
| [`common/`](https://github.com/cognitedata/library/blob/HEAD/modules/common/) | Shared CDF platform modules (`cdf_common`, `cdf_ingestion`, `cdf_project_foundation`, `cdf_search`) |
| [`contextualization/`](https://github.com/cognitedata/library/blob/HEAD/modules/contextualization/) | File annotation, entity matching, P&ID annotation |
| [`datamodels/`](https://github.com/cognitedata/library/blob/HEAD/modules/datamodels/) | Industry and extension data models (`rmdm`, ISA, CFIHOS, …) |…
