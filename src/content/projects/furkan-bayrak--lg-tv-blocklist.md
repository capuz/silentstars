---
repo: "furkan-bayrak/lg-tv-blocklist"
name: "lg-tv-blocklist"
description: "Curated DNS blocklist for LG webOS TV telemetry, ads and phone-home traffic (safe + strict tiers)"
readmeQualityOk: true
url: "https://github.com/furkan-bayrak/lg-tv-blocklist"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["adguard-home", "blocklist", "dns", "lg-tv", "pi-hole", "privacy", "webos"]
stars: 494
forks: 13
openIssues: 2
closedIssues: 16
watchers: 11
contributors: 5
recentReleases: 0
createdAt: "2026-09-09T20:09:46Z"
lastCommitAt: "2026-11-18T12:02:30Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 23
maintainers: ["furkan-bayrak", "github-actions[bot]", "sink-await"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ed9a88e2341deee7e51b9250e95bc6803cc81f18d7a21765ebcc93fd80f29a4/furkan-bayrak/lg-tv-blocklist"
---

# LG TV Blocklist

**Your TV. Your network. Your rules.**

Reduce unwanted advertising and tracking-related traffic from LG webOS TVs with community-maintained DNS blocklists.

**[Choose a list](#which-list-should-i-use)** · **[Quick start](#install)** · **[Documentation](#documentation)**

## Which list should I use?

**Start with SAFE.** STRICT trades compatibility for broader blocking.

| | SAFE | STRICT |
| :--- | :--- | :--- |
| **Goal** | Block ad and telemetry endpoints while prioritizing compatibility | Block more LG services |
| **Targets** | Ads, automatic content recognition (ACR), and telemetry | SAFE plus firmware updates, ThinQ cloud, LG Channels, and broader rules |
| **Risk** | Aims to preserve apps and updates | Store, streaming, time sync, and AirPlay can break |
| **For** | Most TV owners | Users who can troubleshoot feature loss |
