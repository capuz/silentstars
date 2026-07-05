---
repo: "claytono/infra"
name: "infra"
description: "Personal infrastructure monorepo for homelab management and automation"
readmeQualityOk: true
url: "https://github.com/claytono/infra"
language: "Shell"
languages: ["Shell", "Python", "HCL"]
languagePcts: [33, 31, 22]
stars: 9
forks: 0
openIssues: 16
closedIssues: 32
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2016-06-03T11:19:41Z"
lastCommitAt: "2026-07-05T20:55:57Z"
status: "thriving"
tags: ["legacy_hero", "under_pressure"]
healthScore: 93
undervaluedScore: 69
maintainers: ["renovate[bot]", "claytono", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/089322f7fec9551ee538986f8bd5caf9c6cda21303d4997de06570024779856a/claytono/infra"
---

# Homelab Infrastructure

This is my personal infrastructure monorepo for managing my homelab environment.

## Structure

- **`ansible/`** - System configuration and provisioning
- **`esphome/`** - ESPHome device configurations and build tools
- **`kubernetes/`** - Kubernetes application manifests
- **`opentofu/`** - Cloud infrastructure (DNS, etc.)
- **`scripts/`** - Automation and tooling

## Development Environment

```bash
# Enter development environment
nix develop

# Install pre-commit hooks
pre-commit install

# Run linting
./scripts/lint
```

This repository is designed specifically for my environment and use cases.
