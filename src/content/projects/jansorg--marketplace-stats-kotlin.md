---
repo: "jansorg/marketplace-stats-kotlin"
name: "marketplace-stats-kotlin"
description: "Detailed reports and statistics for paid plugins hosted on the JetBrains Marketplace."
readmeQualityOk: true
url: "https://github.com/jansorg/marketplace-stats-kotlin"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [80]
topics: ["jetbrains", "jetbrains-marketplace"]
stars: 24
forks: 6
openIssues: 6
closedIssues: 59
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-08-07T10:11:57Z"
lastCommitAt: "2026-10-29T10:21:18Z"
lastReleaseAt: "2023-12-19T21:34:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 64
maintainers: ["jansorg"]
openGraphImageUrl: "https://opengraph.githubassets.com/919b4dc9e51c44be0d21ff99c5bb69a8eea21a7e39ee8876d0bde77c73d26f8e/jansorg/marketplace-stats-kotlin"
---

# JetBrains Marketplace Statistics

Marketplace Stats shows sales and usage statistics for paid plugins on the
[JetBrains Marketplace](https://plugins.jetbrains.com/).
It is a web application: you start it on your computer or server and open the reports in your browser.

Features:

- Reports of sales, licenses, customers, trials, countries, subscriptions, resellers, prices, and the usage of offers and discounts
- Charts of the metrics of the tables, e.g. the sales of the last 12 months per day, with moving averages, vertical lines for releases and your own events
- A summary of all your paid plugins
- An optional cache on disk, so that restarts are fast
- An optional refresh in the background, so that the pages don't wait for the Marketplace
- An [MCP](https://modelcontextprotocol.io/) server, so that AI agents can analyze your data

This is a new version of [marketplace-stats](https://github.com/jansorg/marketplace-stats). It is written in Kotlin
instead of Go.

## Contents

- [Quick Start](#quick-start)
- [Requirements](#requirements)
- [Configuration](#configuration)
- [Persistent Cache](#persistent-cache)
- [Automatic Refresh](#automatic-refresh)
- [Custom Events in the…
