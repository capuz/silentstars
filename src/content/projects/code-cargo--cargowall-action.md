---
repo: "code-cargo/cargowall-action"
name: "cargowall-action"
description: "CargoWall Action to secure your GitHub Workflows"
readmeQualityOk: true
url: "https://github.com/code-cargo/cargowall-action"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 39
forks: 1
openIssues: 7
closedIssues: 32
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-04T22:19:17Z"
lastCommitAt: "2026-11-11T19:00:51Z"
lastReleaseAt: "2026-04-28T19:33:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 28
maintainers: ["matthewdevenny"]
openGraphImageUrl: "https://opengraph.githubassets.com/cab141a45907a634cc2679b71e427651ab4c00e4bb96ccccd380350464bee6c0/code-cargo/cargowall-action"
---

# CargoWall GitHub Action

The official GitHub Action for [CargoWall](https://github.com/code-cargo/cargowall) — an eBPF-based network firewall for GitHub Actions runners that monitors and controls outbound connections during CI/CD runs.

Secure your GitHub Actions workflows with eBPF-based network egress filtering. Prevent supply chain attacks, block data exfiltration, and control outbound connections at the kernel level.

For concepts, architecture, and platform capabilities, see the [main CargoWall repository](https://github.com/code-cargo/cargowall).

## Features

- **eBPF-based filtering**: Uses kernel-level filtering for high performance and reliability
- **Hostname filtering**: Allow/deny based on domain names
  - Subdomains are automatically allowed (i.e. `example.com` would also allow `api.example.com`), with `*`/`**` wildcards when you need tighter control — see [How Hostnames Match](#how-hostnames-match)
  - CNAME chains of allowed hosts are followed transparently — if an allowed host resolves through a moving CDN edge, the chain's target names and IPs are allowed automatically, so you don't have to wildcard churning CDN targets
- **CIDR filtering**: Allow/deny based on…
