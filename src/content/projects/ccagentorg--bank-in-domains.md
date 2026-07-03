---
repo: "CCAgentOrg/bank-in-domains"
name: "bank-in-domains"
description: "Audit of *.bank.in and parallel Indian financial TLDs (.fin.in, .insurance.in, .nbfc.in, .npci.in, .bank) — DNS resolution, HTTPS probe, status codes. Data + scripts. Updated daily via GitHub Actions."
url: "https://github.com/CCAgentOrg/bank-in-domains"
homepage: "https://zo.pub/cashlessconsumer/bank-domains-status"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 10
forks: 2
openIssues: 5
closedIssues: 5
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-06-07T13:14:33Z"
lastCommitAt: "2026-07-03T06:23:05Z"
lastReleaseAt: "2026-06-09T05:03:58Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 37
maintainers: ["github-actions[bot]", "srikanthlogic"]
openGraphImageUrl: "https://opengraph.githubassets.com/3064349b13ec0d3962ab6aae4be09c02292796df377e5fc8e5d1f9394b0c984a/CCAgentOrg/bank-in-domains"
---

# bank-in-domains

    

**Audit of Indian financial namespace TLDs**. Daily probes of `.bank.in`, `.fin.in`, `.insurance.in`, `.nbfc.in`, `.npci.in`, and the global `.bank` gTLD — DNS resolution, HTTPS reachability, status codes, page titles, and final URLs.

> Why this exists: `.bank.in` is the de-facto namespace for Indian banking web presences, but no authoritative registry publishes a subdomain list. This audit discovers and probes the full namespace — exposing it as flat data for security research, DNS monitoring, vendor attack-surface mapping, and digital public infrastructure transparency.

---

## Quick Stats

| Namespace | Probed | Resolves | HTTP 200 | HTTPS Works |
|---|---|---|---|---|
| `*.bank.in` (master) | **4,199** | **1,680** (40.0%) | **941** (22.4%) | **1,308** (31.2%) |
| `*.bank.in` (CT expansion) | 2,839 | 647 (22.8%) | 181 (6.4%) | — |
| `*.bank` (global fTLD) | 268 | 12 | 9 | — |
| `*.fin.in` | 376 | 0 | 0 | — |
| `*.insurance.in` | 376 | 0 | 0 | — |
| `*.nbfc.in` | 376 | 1 | 0 | — |
| `*.npci.in` | 376 | 352 (wildcard) | 352 (parked) | — |

## Top 20 Banks by Subdomain Count

| Bank | Subdomains | Live | Bank | Subdomains | Live |…
