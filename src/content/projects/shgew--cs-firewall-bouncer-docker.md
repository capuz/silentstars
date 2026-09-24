---
repo: "shgew/cs-firewall-bouncer-docker"
name: "cs-firewall-bouncer-docker"
description: "A dockerized version of https://github.com/crowdsecurity/cs-firewall-bouncer"
readmeQualityOk: true
url: "https://github.com/shgew/cs-firewall-bouncer-docker"
language: "Shell"
languages: ["Shell"]
languagePcts: [93]
topics: ["bouncer", "crowdsec", "docker", "firewall", "homelab", "nftables", "security", "truenas", "attacks-prevention", "detection"]
stars: 41
forks: 3
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 3
recentReleases: 4
createdAt: "2025-02-06T15:37:42Z"
lastCommitAt: "2026-09-24T08:41:22Z"
lastReleaseAt: "2026-09-18T09:47:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 62
maintainers: ["shgew", "dependabot[bot]", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/6264b852cdcafcb154c23d3cd299522ab29c4ffd23211ba4faffe12c0d595c17/shgew/cs-firewall-bouncer-docker"
---

# CrowdSec Firewall Bouncer Docker

Docker image for [CrowdSec Firewall Bouncer](https://github.com/crowdsecurity/cs-firewall-bouncer), based on Alpine.

## What this image does

- Runs `crowdsec-firewall-bouncer` in a container.
- Substitutes environment variables in `/config/crowdsec-firewall-bouncer.yaml` at startup.

## Tags

| Tag | Description |
|-----|-------------|
| `latest` | Newest stable release |
| `stable` | Same as `latest` |
| `rc` | Newest release overall (including release candidates; equals the stable image when no newer RC exists) |
| `vX.Y.Z` | Immutable stable version |
| `vX.Y.Z-rcN` | Immutable release candidate |
| `vX.Y.Z-patchN` | Image-only rebuild of `vX.Y.Z` (git tag `vX.Y.Z+patchN`) |

`latest` never points at a release candidate. When one sync moves both channels to different versions it creates two releases, each publishing in its own run, so `rc` and `stable` can briefly disagree.

## Runtime requirements

- `network_mode: host`
- `cap_add: [NET_ADMIN, NET_RAW]`
- Config file mounted at `/config/crowdsec-firewall-bouncer.yaml`

## Docker Compose

```yaml
services:
  crowdsec-firewall-bouncer:
    image:…
