---
repo: "keyorixhq/keyorix"
name: "keyorix"
description: "Lightweight on-premise secrets management for European enterprises. AGPL. No SaaS dependency. Air-gap compatible. NIS2/DORA aligned. AI-native via MCP server."
readmeQualityOk: true
url: "https://github.com/keyorixhq/keyorix"
homepage: "http://keyorix.com"
language: "Go"
languages: ["Go"]
languagePcts: [87]
topics: ["devops", "golang", "on-premise", "secrets-management", "security", "air-gap", "devsecops", "gdpr", "vault-alternative", "european"]
stars: 54
forks: 3
openIssues: 19
closedIssues: 658
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-07-15T18:55:11Z"
lastCommitAt: "2026-11-27T12:07:38Z"
lastReleaseAt: "2026-06-12T16:02:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 55
maintainers: ["aibeshkov", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/33ad9ca4a42fbbd459b70970b02d4b128f2b247656f64609c2a1db3d51a89d8c/keyorixhq/keyorix"
discussionCount: 1
---

# Keyorix

**Lightweight secrets management for teams that can't use SaaS.**

On-premise. Air-gapped ready. Single binary. No Vault admin required.

---

## Why Keyorix?

| | Vault | Doppler | Keyorix |
|---|---|---|---|
| On-premise | Yes | No | **Yes** |
| Air-gapped¹ | Yes | No | **Yes** |
| Simple ops | No | Yes | **Yes** |
| EU company | No | No | **Yes** |
| Open source | BSL | No | **AGPL** |
| Single binary | Yes | N/A | **Yes** |

¹ The core product needs no internet access. Optional integrations that delegate to
an external identity provider — OIDC machine-identity federation, SSO login — need
network reachability to that provider (which can itself live entirely inside a
private network with no internet egress). See [Configuration](https://github.com/keyorixhq/keyorix/blob/HEAD/docs/CONFIGURATION.md#oidc)
for what's required.

Vault is powerful but requires a dedicated admin. Doppler is simple but SaaS-only. Keyorix is both simple and runs entirely in your infrastructure.

---

## Install

```bash
curl -L https://raw.githubusercontent.com/keyorixhq/keyorix/main/install.sh | sh
```
