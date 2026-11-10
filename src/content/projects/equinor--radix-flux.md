---
repo: "equinor/radix-flux"
name: "radix-flux"
description: "Radix GitOps tools"
readmeQualityOk: true
url: "https://github.com/equinor/radix-flux"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [63, 37]
topics: ["kubernetes", "omnia-radix", "equinor-radix"]
stars: 9
forks: 3
openIssues: 6
closedIssues: 142
watchers: 2
contributors: 20
recentReleases: 0
createdAt: "2019-04-04T06:28:49Z"
lastCommitAt: "2026-11-10T14:49:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 76
maintainers: ["github-actions[bot]", "nilsgstrabo", "Richard87"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/179435439/5f969900-362f-11eb-99f4-14d2ef5b935c"
---

## Repository structure

The Git repository contains the following top directories:

- **clusters** directory contains the Flux configuration per cluster.
- **components** directory contains all components deployed to the cluster with base configuration.

```
├── clusters
│   │
│   ├── c2-production
│   │   ├── (flux-system)
│   │   ├── infrastructure
│   │   │   ├── radix-platform
│   │   │   └── third-party
│   │   ├── flux-patches.yaml
│   │   ├── healthChecks.yaml
│   │   └── kustomization.yaml
│   │
│   ├── development
│   │   ├── (flux-system)
│   │   ├── infrastructure
│   │   │   ├── radix-platform
│   │   │   └── third-party
│   │   ├── flux-patches.yaml
│   │   ├── healthChecks.yaml
│   │   └── kustomization.yaml
│   │
│   ├── monitoring
│   │   ├── (flux-system)
│   │   ├── infrastructure
│   │   │   ├── radix-platform
│   │   │   └── third-party
│   │   ├── flux-patches.yaml
│   │   └── kustomization.yaml
│   │
│   ├── playground
│   │   ├── (flux-system)
│   │   ├── infrastructure
│   │   │   ├── radix-platform
│   │   │   └── third-party
│   │   ├── flux-patches.yaml
│   │   ├── healthChecks.yaml
│   │   └── kustomization.yaml
│   │
│   └── production
│       ├──…
