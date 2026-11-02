---
repo: "claytono/infra"
name: "infra"
description: "Personal infrastructure monorepo for homelab management and automation"
readmeQualityOk: true
url: "https://github.com/claytono/infra"
language: "Shell"
languages: ["Shell", "Python", "HCL"]
languagePcts: [36, 27, 20]
stars: 11
forks: 0
openIssues: 17
closedIssues: 41
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2016-06-03T11:19:41Z"
lastCommitAt: "2026-11-02T15:18:22Z"
status: "thriving"
tags: ["legacy_hero", "under_pressure"]
healthScore: 94
undervaluedScore: 66
maintainers: ["renovate[bot]", "claytono", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f0dd0259e5b60d2627e6730da8d98128f5f4e389a43e78735b6b4d581b727b8/claytono/infra"
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
