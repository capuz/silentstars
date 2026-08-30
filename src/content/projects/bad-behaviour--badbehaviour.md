---
repo: "Bad-Behaviour/badbehaviour"
name: "badbehaviour"
description: "Detects and blocks unwanted Web accesses, deny automated spambots access"
readmeQualityOk: true
url: "https://github.com/Bad-Behaviour/badbehaviour"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["php", "spam", "bots"]
stars: 7
forks: 1
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2022-10-04T12:19:26Z"
lastCommitAt: "2026-08-30T09:24:24Z"
lastReleaseAt: "2026-07-22T08:51:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 76
undervaluedScore: 75
maintainers: ["vendeeglobe"]
openGraphImageUrl: "https://opengraph.githubassets.com/0795260cf8970b0454a5c14256fa6aecb8d1b3b454b7b37e52554b30ce9aceee/Bad-Behaviour/badbehaviour"
discussionCount: 0
---

# Bad Behaviour

**A PHP gatekeeper that blocks link spam, malicious bots, AI scrapers, and automated attacks before they reach your application.**

Trusted by thousands of sites—from personal blogs to enterprise platforms—to drastically reduce malicious traffic and server load.

### Why Bad Behaviour?
| Feature | Benefit |
| :--- | :--- |
| **Pre-emptive Blocking** | Stops bad actors *before* they deliver payloads or read your content. |
| **Performance** | Lowers server load; keeps access logs clean. |
| **DoS Mitigation** | Helps prevent denial-of-service conditions caused by bot swarms. |
| **Cloud Safety** | Hard-allows Cloudflare/AWS/GCP/Azure/Fastly LB health probes — blocking these = origin marked unhealthy = site-wide outage. |
| **Zero-Config Defaults** | Works out-of-the-box on most PHP platforms in minutes. |
| **Custom Bot Registries** | Pluggable, composable bot set: add internal bots, swap registries per tenant, or filter the ~100 shipped bots without forking the library. |
| **On-Demand IP Refresh** | Keeps bot IP ranges current without cron jobs — runs opportunistically after each response is sent. |

### How It's Different
Unlike WAFs or content filters that…
