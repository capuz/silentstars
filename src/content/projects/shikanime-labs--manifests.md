---
repo: "shikanime-labs/manifests"
name: "manifests"
description: "Ultra-efficient, production-grade Kubernetes manifests for self-hosted applications"
readmeQualityOk: true
url: "https://github.com/shikanime-labs/manifests"
language: "Nix"
languages: ["Nix"]
languagePcts: [79]
topics: ["kubernetes", "kustomize", "jellyfin", "flux", "gitops", "self-hosted"]
stars: 5
forks: 3
openIssues: 19
closedIssues: 120
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-01-23T21:25:17Z"
lastCommitAt: "2026-09-29T10:04:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 97
undervaluedScore: 87
maintainers: ["shikanime", "yorha-operator"]
openGraphImageUrl: "https://opengraph.githubassets.com/40096859969eebc097f61a7ad8da00b10acfb9e1c6e2b1781608e81490f7dbf1/shikanime-labs/manifests"
discussionCount: 1
---

# Manifests

Hey 🌸 I'm Shikanime Deva, this repository contains the Kubernetes manifests for
my clusters.

## What’s In Here

This repo is organized around Kustomize:

- `apps/` contains application manifests (bases, optional components, and
  per-cluster overlays)
- `clusters/` contains cluster entrypoints that compose shared cluster bits +
  app overlays
- `bootstraps/` contains cluster bootstrap inputs (controllers/operators
  installation lives here)
- `skaffold.yaml` provides renderable profiles that point at the cluster overlay
  entrypoints

### Repository Layout

#### Apps

Each app is typically structured like:

- `apps/<app>/base/`: app resources that are common everywhere
- `apps/<app>/components/`: optional Kustomize components (e.g. `tls/`, `ftp/`,
  `v4l/`)
- `apps/<app>/overlays/<cluster>/`: cluster-specific patches/config
- `apps/<app>/overlays/<cluster>-tailnet/`: cluster-specific overlays for the
  “tailnet” flavor (when applicable)

#### Clusters

Each cluster typically looks like:

- `clusters/<cluster>/base/`: namespaces, shared PVCs, default policies, etc.
- `clusters/<cluster>/components/`: cluster-wide components (e.g. `tls/`,
  `tailscale/`, `longhorn/`)…
