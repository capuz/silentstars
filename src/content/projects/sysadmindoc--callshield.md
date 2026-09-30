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
stars: 30
forks: 6
openIssues: 4
closedIssues: 12
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-22T21:14:22Z"
lastCommitAt: "2026-09-30T09:56:15Z"
lastReleaseAt: "2026-04-11T22:29:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 95
undervaluedScore: 41
maintainers: ["SysAdminDoc"]
openGraphImageUrl: "https://opengraph.githubassets.com/3cbdf88ec928ff863e8e1b33e8a620e92657a3f17c6e663a01635b0aaac211f5/SysAdminDoc/CallShield"
discussionCount: 2
---

</p>

<h1 align="center">CallShield</h1>

  <strong>Open-source spam call blocker and text screener for Android</strong><br>
  30+ detection layers with an on-device ML model | 51,363 spam numbers | Real-time caller ID | RCS filter | No API keys
</p>

</p>

  </a>
</p>

  <sub><em>If CallShield helps keep spam out of your day, a coffee helps me keep its protection data and app current.</em></sub>
</p>

---

CallShield blocks spam calls and flags spam texts with an on-device engine of more than **30 detection layers**. They include a gradient-boosted tree ML scorer, bounded campaign and churn evidence, conservative carrier identity signals, an RCS notification filter and real-time caller ID. Its 51,363-number database sits alongside a trending-numbers feed the app checks every 30 minutes. There are no accounts and no tracking.

The database keeps `data/spam_numbers.json` as a stable legacy GitHub-raw
endpoint for older clients, while current builds bundle a hash manifest and
256 content-addressed shards. The manifest, the legacy database, the trending
feeds and the model weights each carry a detached ECDSA P-256 signature, and the
app refuses any of them that…
