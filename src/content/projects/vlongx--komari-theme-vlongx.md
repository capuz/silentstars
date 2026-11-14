---
repo: "vlongx/komari-theme-vlongx"
name: "komari-theme-vlongx"
description: "A modified Tasogare theme for Komari with configurable latency monitoring."
originalDescription: "A modified Tasogare theme for Komari with configurable latency monitoring."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/vlongx/komari-theme-vlongx"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [75]
stars: 14
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-07-12T09:15:36Z"
lastCommitAt: "2026-11-14T10:45:21Z"
lastReleaseAt: "2026-11-14T09:11:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 64
undervaluedScore: 18
maintainers: ["vlongx"]
openGraphImageUrl: "https://opengraph.githubassets.com/f275d2852a4c0623e784c112a3a6d4e12d3ee06069beabe1811ae09263978458/vlongx/komari-theme-vlongx"
---

# Tasogare 黄昏 Configurable Latency GPU Edition

Current version: `v2.2.8`

## v2.2.8 Update: IPv4/IPv6 info now displays based on actual data

The network ownership info at the top of node cards no longer shows IP protocol placeholders that have no data:

- Dual-stack with data: `IPv4/IPv6: Hong Kong / Japan`
- IPv4 only: `IPv4: Hong Kong`
- IPv6 only: `IPv6: Japan`
- No data for either: **the IPv4/IPv6 row is kept, but the value is left empty** (no "pending configuration" text is shown).

Only the IPv4/IPv6 info display on cards was changed. ASN, system, GPU/iGPU, traffic cycle, TCPing, and packet loss logic remain unchanged.

## v2.2.7 Fix: Automatic ASN/IP detection and diagnostics

- Fixed Komari **private site administrators** being unable to fetch network info: the official `principal.type` is `user`, so the `admin` permission in `roles` must be checked.
- Added the non-sensitive status fields `status` and `diagnostics` (containing no real IP addresses) to the server-side `/api/vlongx/node-network-meta` endpoint, to help confirm why a query returns no results.
- When the plugin is not installed or is temporarily unreachable, the theme retries about every 60 seconds instead…
