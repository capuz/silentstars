---
repo: "SysAdminDoc/CallShield"
name: "CallShield"
description: "Open-source spam call and text blocker for Android. GitHub-hosted spam database, no API keys, no subscriptions."
readmeQualityOk: true
url: "https://github.com/SysAdminDoc/CallShield"
homepage: "https://github.com/SysAdminDoc/CallShield/releases"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [86]
topics: ["android", "kotlin", "android-app", "call-blocker", "call-screening", "caller-id", "sms-spam", "spam-blocker"]
stars: 65
forks: 11
openIssues: 16
closedIssues: 16
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-22T21:14:22Z"
lastCommitAt: "2026-10-31T15:59:13Z"
lastReleaseAt: "2026-04-11T22:29:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 90
undervaluedScore: 37
maintainers: ["SysAdminDoc"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb4ce27eb1039bdaf8c7acf93bd5bde3dd25447dd919768297f8bbba0b13d924/SysAdminDoc/CallShield"
discussionCount: 2
---

30+ detection layers with an on-device ML model | 51,407 spam numbers | Real-time caller ID | RCS filter | No API keys




---

CallShield blocks spam calls and flags spam texts with an on-device engine of more than **30 detection layers**. They include a gradient-boosted tree ML scorer, bounded campaign and churn evidence, conservative carrier identity signals, an RCS notification filter and real-time caller ID. Its 51,407-number database sits alongside a trending-numbers feed the app checks every 30 minutes. There are no accounts and no tracking.

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
