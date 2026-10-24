---
repo: "ViktorBarzin/infra"
name: "infra"
description: "Files for my home lab"
readmeQualityOk: true
url: "https://github.com/ViktorBarzin/infra"
language: "HCL"
languages: ["HCL"]
languagePcts: [43]
stars: 5
forks: 0
openIssues: 2
closedIssues: 78
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2021-02-07T23:49:38Z"
lastCommitAt: "2026-10-24T08:20:31Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 78
maintainers: ["ViktorBarzin", "emilbarzin"]
openGraphImageUrl: "https://opengraph.githubassets.com/b63f67e59a16640377225b30f0ca73eac2984b843106556c58695298262f1d49/ViktorBarzin/infra"
---

This repo contains my infra-as-code sources.

My infrastructure is built using Terraform, Kubernetes and CI/CD is done using Woodpecker CI.

Read more by visiting my website:
https://viktorbarzin.me

## Documentation

Full architecture documentation is available in [`docs/`](https://github.com/ViktorBarzin/infra/blob/HEAD/docs/README.md) — covering networking, storage, security, monitoring, secrets, CI/CD, databases, and more.

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

- `username` key…
