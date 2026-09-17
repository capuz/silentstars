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
stars: 11
forks: 3
openIssues: 0
closedIssues: 18
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-09-09T14:28:24Z"
lastCommitAt: "2026-09-17T08:50:21Z"
lastReleaseAt: "2026-01-12T19:17:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 77
maintainers: ["karl-koschutnig", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1053497705/ac1dbc62-6190-4363-803a-82be79c3dd22"
discussionCount: 4
---

</p>

<h1 align="center">PRISM Studio</h1>

</p>

PRISM Studio is a local tool for describing, validating, and managing research datasets built on the PRISM model.

PRISM (Principled Research Information & Sidecar Model) pairs every data file with a JSON sidecar that explains it, organized by subject, session, and modality. Modalities, file-naming rules, and sidecar contracts are JSON schemas, so the model extends to new instruments and new fields without code changes. PRISM stays compatible with standard BIDS apps and currently ships modalities and templates for psychological research, such as surveys and biometrics. PRISM Studio applies the model in practical web and CLI workflows for validation, conversion, and dataset management.

## Core Features

- Dataset validation and conversion
- PRISM Studio web interface for interactive workflows
- CLI workflows for terminal users
- Survey and biometrics metadata support
- Local-first operation (data stays on your machine; the only exception is
  optional, off-by-default environment enrichment, which sends coordinates
  and dates — never participant data — to a public weather service)

## Feature Scope

To help third parties know what…
