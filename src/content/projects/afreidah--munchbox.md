---
repo: "afreidah/munchbox"
name: "munchbox"
description: "home cluster stuff"
readmeQualityOk: true
url: "https://github.com/afreidah/munchbox"
language: "HCL"
languages: ["HCL", "Ruby"]
languagePcts: [56, 27]
stars: 8
forks: 2
openIssues: 30
closedIssues: 84
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-05-13T22:18:06Z"
lastCommitAt: "2026-09-28T10:06:33Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 94
undervaluedScore: 75
maintainers: ["afreidah", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2c172e3fda6ad4a41b7dc6ff390ec0028ff7e4d36c7c0764286a796b4f5f884/afreidah/munchbox"
---

# Munchbox Cloud - Homelab Infrastructure Platform

### Production-Grade Self-Hosted Infrastructure on HashiCorp Stack

</div>

---

A homelab cluster the size of a small production environment. Roughly **66
Nomad jobs**, **16 Cinc (Chef) cookbooks**, and **43 Terragrunt
modules**, running on bare-metal Pi 5s, Proxmox VMs, and Oracle Free Tier,
joined by a WireGuard mesh and fronted by Cloudflare.

It hosts media (Jellyfin, the *arr stack), the operator's
public personal-site stack (`alexfreidah.com`), self-hosted Git + CI
(Forgejo + runners + GitHub Actions self-hosted runners), and infrastructure
dense enough that it borders on a small startup's prod: HA PostgreSQL via
Patroni, mTLS everywhere via Vault PKI, OAuth2-fronted ingress, multi-cloud
S3 replication across **13 backends**, distributed tracing through Tempo,
and a Temporal-driven backup / scan / cleanup loop.

> This file is the project-wide overview. **Per-area READMEs and style
> guides live next to the code they document** -- `infrastructure/cinc/`,
> `infrastructure/terragrunt/`, and `nomad/jobs/` each have their own
> `README.md` + `STYLE_GUIDE.md`.

---

## Cluster topology

```
                          CLOUDFLARE…
