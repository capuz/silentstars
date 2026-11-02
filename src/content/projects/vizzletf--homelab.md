---
repo: "VizzleTF/homelab"
name: "homelab"
description: "Bare-metal Talos cluster run by ArgoCD: Cilium + Gateway API, OpenBao + External Secrets, CloudNativePG, VolSync, VictoriaMetrics. Read-only mirror of a private Forgejo origin."
readmeQualityOk: true
url: "https://github.com/VizzleTF/homelab"
language: "Shell"
languages: ["Shell"]
languagePcts: [73]
topics: ["helm", "kubernetes", "terraform", "argocd", "cilium", "cloudnative-pg", "external-secrets", "gateway-api", "gitops", "homelab"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-02-26T11:19:19Z"
lastCommitAt: "2026-11-02T15:16:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 62
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/0b7bd36f0bb4776bb10b06ce62963eb3d240d3f0b939d679d41e9cb05e30b3a2/VizzleTF/homelab"
---

# Homelab: Talos + ArgoCD

A single-tenant home cluster: four bare-metal Talos nodes managed by ArgoCD, with OpenBao as the only source of truth for secrets. Terraform provisions it, VictoriaMetrics monitors it, and VolSync backs it up to Garage S3 on a Synology NAS and to OVH.

> This GitHub copy is a sanitized read-only mirror. Origin lives on a private Forgejo instance. After every merge to `main`, a Forgejo Actions workflow rewrites history with `git filter-repo --replace-text`, scans the result with `gitleaks` and force-pushes it to GitHub. SHAs do not match upstream, and some literals (domains, IPs, emails) are replaced.

---

## Design choices

- Single operator. No human PR reviewer and no second admin account; CI checks gate every merge, and the root Application and ApplicationSets are guarded against cascade deletion.
- Four small boxes running Talos directly, not a rack. RAM is the binding constraint, not CPU.
- Origin git is off-cluster. Forgejo runs on a fifth box (`ops`, NixOS, declarative), so a dead cluster cannot take the GitOps source of truth with it.
- The Synology NAS is independent of the cluster: its own TLS (`acme.sh`), its own DNS (OpenWrt), its own…
