---
repo: "keyorixhq/keyorix"
name: "keyorix"
description: "Lightweight on-premise secrets management for European enterprises. AGPL. No SaaS dependency. Air-gap compatible. NIS2/DORA aligned. AI-native via MCP server — roadmap"
readmeQualityOk: true
url: "https://github.com/keyorixhq/keyorix"
homepage: "http://keyorix.com"
language: "Go"
languages: ["Go"]
languagePcts: [85]
topics: ["devops", "golang", "on-premise", "secrets-management", "security", "air-gap", "devsecops", "gdpr", "vault-alternative", "european"]
stars: 45
forks: 3
openIssues: 130
closedIssues: 386
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-07-15T18:55:11Z"
lastCommitAt: "2026-10-25T02:22:30Z"
lastReleaseAt: "2026-06-12T16:02:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 55
maintainers: ["aibeshkov"]
openGraphImageUrl: "https://opengraph.githubassets.com/18713f3dc5421fae5f5b3e09b388cdd4e0c294de5449e0130a4cf7cabb38a50e/keyorixhq/keyorix"
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

That installs the `keyorix` **CLI** only (Linux and macOS, amd64 and arm64). The server…
