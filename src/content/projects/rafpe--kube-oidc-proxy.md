---
repo: "RafPe/kube-oidc-proxy"
name: "kube-oidc-proxy"
description: "OIDC authentication for managed Kubernetes clusters (EKS/GKE/AKS) — including multi-issuer, via impersonation."
readmeQualityOk: true
url: "https://github.com/RafPe/kube-oidc-proxy"
homepage: "https://rafpe.github.io/kube-oidc-proxy/"
language: "Go"
languages: ["Go"]
languagePcts: [78]
topics: ["authentication", "helm", "impersonation", "kubectl", "kubernetes", "oidc"]
stars: 41
forks: 1
openIssues: 1
closedIssues: 70
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-07-22T10:40:38Z"
lastCommitAt: "2026-11-20T12:19:17Z"
lastReleaseAt: "2026-09-04T11:22:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 47
maintainers: ["RafPe", "github-actions[bot]", "sarankumar1325"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1308696420/b6eeb4e6-f7ad-44d7-b259-235dbcc950f6"
---

# kube-oidc-proxy

A reverse proxy that brings OIDC login to managed Kubernetes clusters, and accepts tokens from several issuers through one proxy.

Documentation and guides: <https://rafpe.github.io/kube-oidc-proxy/>

## Why

- **The problem:** managed clusters (EKS, GKE, AKS, …) don't let you set the API server's `--oidc-*` flags, so you can't wire in your own OIDC provider.
- **The fix:** the proxy validates the bearer token and impersonates the user against the API server — your existing RBAC stays authoritative.
- **What's different:** one proxy can accept tokens from many issuers at once via a Kubernetes `AuthenticationConfiguration`, with CEL to map claims to usernames, groups and audit fields.

## How it works

The proxy sits in front of the API server, validates the bearer token against one or more OIDC issuers, and maps the token's claims to a Kubernetes identity. It then forwards the request using its **own ServiceAccount** plus impersonation headers for the mapped user. The API server evaluates **RBAC** for that user as usual — OIDC login without ever touching the `--oidc-*` flags.
