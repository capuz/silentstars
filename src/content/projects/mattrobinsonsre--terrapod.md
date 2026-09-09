---
repo: "mattrobinsonsre/terrapod"
name: "terrapod"
description: "Open-source Terraform Enterprise replacement"
readmeQualityOk: true
url: "https://github.com/mattrobinsonsre/terrapod"
language: "Python"
languages: ["Python"]
languagePcts: [69]
topics: ["devops", "helm-chart", "infrastructure-as-code", "kubernetes", "oidc", "open-source", "opentofu", "rbac", "self-hosted", "state-management"]
stars: 256
forks: 18
openIssues: 4
closedIssues: 469
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2026-02-27T15:25:47Z"
lastCommitAt: "2026-09-09T08:18:50Z"
lastReleaseAt: "2026-03-10T09:21:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 28
maintainers: ["mattrobinsonsre", "dependabot[bot]", "the3venthoriz0n"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0a9e6380dc8d41db727dd49afcabf07aa51c63f9fcf234b19624a43ba2e62b4/mattrobinsonsre/terrapod"
---

# Terrapod

**A free, open-source, self-hosted alternative to Terraform Enterprise and Terraform Cloud (HCP Terraform)** — a **TACOS** (Terraform Automation and Collaboration Software) platform for teams standardizing on `terraform`, OpenTofu (`tofu`), or Terragrunt. Not a fork of either engine; it orchestrates them.

- **Point your existing `cloud` block at it.** Terrapod implements the slice of the [TFE V2 API](https://developer.hashicorp.com/terraform/enterprise/api-docs) that `terraform` and `tofu` actually consume — the `cloud`/`remote` backend protocol, as the CLI speaks it via [`go-tfe`](https://pkg.go.dev/github.com/hashicorp/go-tfe) — so CLI runs and CI/CD usually move across with zero code changes. That slice is the compatibility target: everything beyond it is Terrapod's own API rather than a reimplementation of the full TFE V2 surface.
- **Your state and secrets never leave your boundary.** Versioned remote state in your Postgres and object store, cloud credentials via Kubernetes workload identity — nothing long-lived, nothing vendor-held.
- **Governance in the box.** Label-based RBAC, OPA/Rego policy-as-code (the open-source equivalent of TFE's Sentinel), a private…
