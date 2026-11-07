---
repo: "SpechtLabs/tka"
name: "tka"
description: "Zero-friction Kubernetes access using Tailscale and ephemeral service accounts"
readmeQualityOk: true
url: "https://github.com/SpechtLabs/tka"
homepage: "https://tka.specht-labs.de/"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["tailscale", "access-control", "authentication", "kubernetes", "sre"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2025-07-05T16:59:58Z"
lastCommitAt: "2026-11-07T13:54:39Z"
lastReleaseAt: "2026-10-12T11:34:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 74
maintainers: ["renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0bf34d2babd1ca5aa5c969c092c000f99bdd7dc4f4b608666d0f6c733f83493d/SpechtLabs/tka"
---

# Tailscale Kubernetes Auth (TKA)

> Secure, ephemeral Kubernetes access powered by your Tailscale network and identity.

TKA eliminates the complexity of traditional Kubernetes access control by leveraging your existing Tailscale infrastructure. No auth proxies, no OIDC headaches, no kubeconfig sprawl - just clean, auditable access with short-lived credentials.

**[Full Documentation & Getting Started Guide →](https://tka.specht-labs.de)**

## What is TKA?

TKA (Tailscale Kubernetes Auth) is a zero-trust authentication system that issues short-lived Kubernetes credentials based on your Tailscale identity and ACL grants. It runs entirely within your private Tailscale network with no public endpoints.

### Key Benefits

- **Zero-trust by design** - No public endpoints, access gated by Tailscale ACLs and device attestation
- **Ephemeral credentials** - Short-lived tokens that auto-expire, reducing blast radius
- **Kubernetes-native** - Built on ServiceAccounts, ClusterRoles, and standard APIs
- **Developer-friendly** - `tsh login`-like UX that just works
- **GitOps-ready** - Declarative grant-to-role mapping via CRDs

## Quick Start

```bash
# Install TKA CLI
brew install…
