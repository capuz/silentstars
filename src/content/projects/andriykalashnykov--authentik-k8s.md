---
repo: "AndriyKalashnykov/authentik-k8s"
name: "authentik-k8s"
description: "Provision Authentik groups, users, and OAuth tokens programmatically with its Go client — deploy the IdP on Kubernetes (KinD) or Docker Compose"
url: "https://github.com/AndriyKalashnykov/authentik-k8s"
language: "Go"
languages: ["Go", "Makefile"]
languagePcts: [62, 25]
topics: ["authentication", "authentik", "go", "golang", "oauth", "oauth2", "oauth2-authentication", "oauth2-client", "token"]
stars: 12
forks: 5
openIssues: 1
closedIssues: 0
watchers: 6
contributors: 1
recentReleases: 0
createdAt: "2023-01-14T04:24:39Z"
lastCommitAt: "2026-06-27T06:24:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["AndriyKalashnykov", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4aaf3e0dccd066650545614cd796a3bfd1ec198bc7f11a79382a5d85a6bdce82/AndriyKalashnykov/authentik-k8s"
---

# Authentik Provisioning with the Go Client

*Provision Authentik — groups, users, passwords, OAuth tokens — programmatically with the Go client. Deploy on Kubernetes (KinD) or Docker Compose.*

A proof-of-concept that drives [Authentik](https://goauthentik.io/) programmatically via its Go client library [`goauthentik.io/api/v3`](https://github.com/goauthentik/client-go) — creating groups, users, passwords and OAuth tokens, then re-authenticating as a created user to read its group membership. It ships with two ways to stand up Authentik (Docker Compose or KinD) plus the Go POC that runs against it.

## Overview

The repo has two halves:

- **Deploy Authentik** — locally via Docker Compose (lightweight) or on a full Kubernetes cluster via KinD (with `cloud-provider-kind` for LoadBalancer support and OSS PostgreSQL + Valkey datastores).
- **The Go POC** (`provisioner/`) — uses the Authentik Go client to provision a small demo org structure and verify it end-to-end against the running instance.

```mermaid
flowchart LR
    POC["POC binary (provisioner/)<br/>Go client goauthentik.io/api/v3"]

    subgraph AUTHENTIK["Authentik stack — run EITHER way"]
        direction TB…
