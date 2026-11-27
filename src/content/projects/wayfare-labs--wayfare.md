---
repo: "Wayfare-labs/wayfare"
name: "wayfare"
description: "Corridor-integrity monitor for Stellar. Prices any stablecoin to fiat-token corridor across trade sizes, scores every route against an independent reference rate, and says plainly when none are worth taking."
readmeQualityOk: true
url: "https://github.com/Wayfare-labs/wayfare"
homepage: "https://wayfare-cdb9.onrender.com/"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["anchors", "cross-border-payments", "fintech", "foreign-exchange", "golang", "remittances", "sep-38", "stellar", "stellar-network", "usdc"]
stars: 7
forks: 157
openIssues: 114
closedIssues: 481
watchers: 0
contributors: 135
recentReleases: 0
createdAt: "2026-08-04T15:41:11Z"
lastCommitAt: "2026-11-27T12:54:05Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 70
maintainers: ["Bidex-cmyk", "Fury03", "samjay8"]
openGraphImageUrl: "https://opengraph.githubassets.com/59472573ba4ca07f8c4ba4e89e224316516a718408b9b3f6a1382e67c7d46eca/Wayfare-labs/wayfare"
discussionCount: 0
---

# Wayfare

A corridor-integrity monitor for Stellar.

Wayfare prices a stablecoin → fiat-token corridor across trade sizes, scores
every route against an independent mid-market rate, and states plainly when
none of them are worth taking — including when the honest answer is *don't
send this*.

**Status:** pre-MVP, read-only. Non-custodial: no funds held, no tokens
issued, no KYC, no keys.

---

## Try Wayfare

| | |
|:---|:---|
| **Live** | **https://wayfare-cdb9.onrender.com/** |
| **Source** | https://github.com/Wayfare-labs/wayfare |
| **Health** | https://wayfare-cdb9.onrender.com/healthz |

That is a real deployed instance of the code in this repository — the same
container image CI builds and verifies. Three things about it are worth knowing
before you read a figure off it:

**It serves recorded measurements, not live ones.** The instance runs with
`-schedule=0 -history-first`, so a request answers from the hash-chained history
embedded in the binary at build time. Every response carries `live: false` and a
`stale` block with the reading's age. Ask for a live measurement explicitly with
`?live=1` — that prices a full ladder against Horizon and takes tens of seconds.
