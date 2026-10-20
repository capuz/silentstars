---
repo: "SysAdminDoc/CallShield"
name: "CallShield"
description: "Open-source spam call and text blocker for Android. GitHub-hosted spam database, no API keys, no subscriptions."
readmeQualityOk: true
url: "https://github.com/SysAdminDoc/CallShield"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [86]
topics: ["android", "kotlin"]
stars: 52
forks: 9
openIssues: 17
closedIssues: 12
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-22T21:14:22Z"
lastCommitAt: "2026-10-20T08:49:28Z"
lastReleaseAt: "2026-04-11T22:29:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "under_pressure"]
healthScore: 88
undervaluedScore: 34
maintainers: ["SysAdminDoc"]
openGraphImageUrl: "https://opengraph.githubassets.com/a52d743e8c85e82529d4d09ec80672acaa78a308802b30b34ed7a7c2da7af7e8/SysAdminDoc/CallShield"
discussionCount: 2
---

30+ detection layers with an on-device ML model | 51,368 spam numbers | Real-time caller ID | RCS filter | No API keys




---

CallShield blocks spam calls and flags spam texts with an on-device engine of more than **30 detection layers**. They include a gradient-boosted tree ML scorer, bounded campaign and churn evidence, conservative carrier identity signals, an RCS notification filter and real-time caller ID. Its 51,368-number database sits alongside a trending-numbers feed the app checks every 30 minutes. There are no accounts and no tracking.

The database keeps `data/spam_numbers.json` as a stable legacy GitHub-raw
endpoint for older clients, while current builds bundle a hash manifest and
256 content-addressed shards. The manifest, the legacy database, the trending
feeds and the model weights each carry a detached ECDSA P-256 signature, and the
app refuses any of them that doesn't verify against a key built into it. Devices
fetch only changed shards, check every shard against the signed manifest before
a transactional Room refresh, and fall back to the legacy snapshot when the
shard service is unavailable.

## Screenshots


## Getting Started

1.…
