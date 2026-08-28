---
repo: "claytono/infra"
name: "infra"
description: "Personal infrastructure monorepo for homelab management and automation"
readmeQualityOk: true
url: "https://github.com/claytono/infra"
language: "Shell"
languages: ["Shell", "Python", "HCL"]
languagePcts: [34, 30, 23]
stars: 10
forks: 0
openIssues: 17
closedIssues: 33
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2016-06-03T11:19:41Z"
lastCommitAt: "2026-08-28T15:30:19Z"
status: "thriving"
tags: ["legacy_hero", "under_pressure"]
healthScore: 93
undervaluedScore: 68
maintainers: ["renovate[bot]", "claytono", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/30f0b0d404a0bab1224d89c5c175abe61ba22a674ced4427bd84a8fb501a8901/claytono/infra"
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
