---
repo: "MRI-Lab-Graz/prism-studio"
name: "prism-studio"
description: "PRISM is an independent, BIDS-compatible framework and toolkit designed to enrich standard BIDS datasets with psychological and physiological metadata."
readmeQualityOk: true
url: "https://github.com/MRI-Lab-Graz/prism-studio"
homepage: "https://prism-studio.readthedocs.io/en/latest/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [71, 21]
topics: ["bids", "metadata", "prism", "python"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 18
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-09-09T14:28:24Z"
lastCommitAt: "2026-08-12T05:15:36Z"
lastReleaseAt: "2026-01-12T19:17:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 79
maintainers: ["karl-koschutnig", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1053497705/ac1dbc62-6190-4363-803a-82be79c3dd22"
discussionCount: 4
---

</p>

<h1 align="center">PRISM Studio</h1>

</p>

PRISM Studio is a comprehensive tool for managing psychological research datasets built on the PRISM framework.

PRISM (Psychological Research Information System Model) extends BIDS for modalities such as surveys and biometrics while staying compatible with standard BIDS apps. PRISM Studio applies that model in practical web and CLI workflows for validation, conversion, and dataset management.

## Core Features

- Dataset validation and conversion
- PRISM Studio web interface for interactive workflows
- CLI workflows for terminal users
- Survey and biometrics metadata support
- Local-first operation (data stays on your machine)

## Feature Scope

To help third parties know what to rely on, PRISM's features fall into three
tiers:

| Tier | Meaning | Examples |
|------|---------|----------|
| **Core loop** | The primary supported workflow; breaking changes here get release notes and migration guidance. | Survey conversion, dataset validation, DataLad-tracked provenance for mutations and recipe scoring, entity/filename rules ([`entities.schema.json`](https://github.com/MRI-Lab-Graz/prism-studio/blob/HEAD/docs/specs/entities.md)) |
|…
