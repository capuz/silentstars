---
repo: "rcdailey/home-ops"
name: "home-ops"
description: "Kubernetes homelab managed with Flux GitOps"
readmeQualityOk: true
url: "https://github.com/rcdailey/home-ops"
language: "Python"
languages: ["Python", "YAML"]
languagePcts: [40, 40]
stars: 12
forks: 0
openIssues: 4
closedIssues: 9
watchers: 0
contributors: 37
recentReleases: 0
createdAt: "2025-06-22T20:24:27Z"
lastCommitAt: "2026-08-27T14:31:17Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 66
maintainers: ["renovate[bot]", "rcdailey"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca877461904030f0fdc3babc29022bedd6642bdba6c624295dc7872b912b4a6b/rcdailey/home-ops"
---

# Home Operations

Personal Kubernetes homelab managed with Talos Linux and Flux GitOps.

## Stack

- **OS**: Talos Linux
- **GitOps**: Flux
- **Storage**: Rook Ceph
- **Secrets**: External Secrets + Infisical
- **Networking**: Cilium, Envoy Gateway
- **Observability**: VictoriaMetrics + Logs, Grafana
- **Databases**: CloudNativePG
- **Backups**: Volsync, Kopia

## Repository Structure

```txt
bootstrap/          # Cluster bootstrap scripts
docs/
  architecture/     # System design docs
  decisions/        # ADRs
  runbooks/         # Operational procedures
  troubleshooting/  # Historical investigations
kubernetes/
  apps/             # Application manifests by namespace
  components/       # Reusable Kustomize components
  flux/             # Flux system configuration
scripts/            # Operational scripts
talos/              # Talos node configuration
```

## New Machine Setup

Prerequisites: [mise](https://mise.jdx.dev/installing-mise.html) installed.

1. Install minijinja-cli (not managed by mise):

   ```bash
   brew install minijinja-cli
   ```

1. Install remaining tools:

   ```bash
   mise trust && mise install
   ```

1. Authenticate with Infisical:

   ```bash…
