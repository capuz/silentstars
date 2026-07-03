---
repo: "ViktorBarzin/infra"
name: "infra"
description: "Files for my home lab"
url: "https://github.com/ViktorBarzin/infra"
language: "HCL"
languages: ["HCL"]
languagePcts: [60]
stars: 5
forks: 0
openIssues: 15
closedIssues: 41
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2021-02-07T23:49:38Z"
lastCommitAt: "2026-07-03T12:40:29Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 74
maintainers: ["ViktorBarzin", "emilbarzin"]
openGraphImageUrl: "https://opengraph.githubassets.com/2909eb5d2474dfef8f01d21b2615295e633de9b633a64fadc13da3dee68c174f/ViktorBarzin/infra"
---

This repo contains my infra-as-code sources.

My infrastructure is built using Terraform, Kubernetes and CI/CD is done using Woodpecker CI.

Read more by visiting my website:
https://viktorbarzin.me

## Documentation

Full architecture documentation is available in [`docs/`](docs/README.md) — covering networking, storage, security, monitoring, secrets, CI/CD, databases, and more.

## Adding a New User (Admin)

Adding a new namespace-owner to the cluster requires three steps — no code changes needed.

### 1. Authentik Group Assignment

In the [Authentik admin UI](https://authentik.viktorbarzin.me), add the user to:
- `kubernetes-namespace-owners` group (grants OIDC group claim for K8s RBAC)
- `Headscale Users` group (if they need VPN access)

### 2. Vault KV Entry

Add a JSON entry to `secret/platform` → `k8s_users` key in [Vault](https://vault.viktorbarzin.me):

```json
"username": {
  "role": "namespace-owner",
  "email": "user@example.com",
  "namespaces": ["username"],
  "domains": ["myapp"],
  "quota": {
    "cpu_requests": "2",
    "memory_requests": "4Gi",
    "memory_limits": "8Gi",
    "pods": "20"
  }
}
```

- `username` key must match the user's Forgejo username (for…
