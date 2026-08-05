---
repo: "VizzleTF/homelab"
name: "homelab"
description: "Just a homelab"
readmeQualityOk: true
url: "https://github.com/VizzleTF/homelab"
language: "Shell"
languages: ["Shell"]
languagePcts: [83]
topics: ["ansible", "helm", "kubernetes", "proxmox", "terraform"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-02-26T11:19:19Z"
lastCommitAt: "2026-08-05T06:06:51Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 76
maintainers: ["VizzleTF"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b8ef6f6fe13d03c5a5879a0e69f928741150821a7f1e17e4c8ef90d3d01bdc5/VizzleTF/homelab"
---

# 🏠 Homelab — Talos + ArgoCD

A single-tenant home cluster. Three bare-metal Talos nodes managed by ArgoCD, with OpenBao as the only source of truth for secrets. Provisioned by Terraform, monitored by VictoriaMetrics, backed up to Garage S3 on a Synology NAS.

</div>

> This GitHub copy is a sanitized read-only mirror. Origin lives on a private Forgejo instance. After every merge to `main`, a Forgejo Actions workflow runs `gitleaks`, sanitizes through `git filter-repo --replace-text`, and force-pushes to GitHub. SHAs do not match upstream, and some literals (domains, IPs, emails) are replaced.

---

## 📖 Design choices

- Single operator. No PR review process, no second admin account, no destructive-op guards.
- Three N100-class boxes running Talos directly, not a rack. RAM is the binding constraint, not CPU.
- The Synology NAS is independent of the cluster: its own TLS (`acme.sh`), its own DNS (OpenWrt), its own reverse-proxy (DSM nginx). Cluster failure does not affect stored data.

---

## ⚙️ Stack

| Layer                 | Choice                                  | Notes                                                                |…
