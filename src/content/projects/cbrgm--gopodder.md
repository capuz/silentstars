---
repo: "cbrgm/gopodder"
name: "gopodder"
description: "A self-hostable podcast synchronization server compatible with the gPodder API"
readmeQualityOk: true
url: "https://github.com/cbrgm/gopodder"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["container", "go", "gpodder", "gpodder-api", "open-source", "podcast", "podcasts", "synchronization", "gopodder"]
stars: 52
forks: 4
openIssues: 1
closedIssues: 7
watchers: 0
contributors: 4
recentReleases: 1
createdAt: "2026-05-29T13:04:27Z"
lastCommitAt: "2026-10-26T18:06:32Z"
lastReleaseAt: "2026-08-01T12:30:21Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 38
maintainers: ["renovate[bot]", "cbrgm", "neurolit"]
openGraphImageUrl: "https://opengraph.githubassets.com/e386d4b5b35741003054ae6a7a9e6b93dd92b5db07cc1201fff9a8ced2fee4b3/cbrgm/gopodder"
fundingLinks: ["KO_FI:https://ko-fi.com/chrisbargmann"]
---

# 🎧 goPodder

**A self-hostable podcast synchronization server compatible with the [gPodder API](https://gpoddernet.readthedocs.io/en/latest/api/)**

goPodder does one thing: it keeps your podcast subscriptions and episode progress in sync across devices and apps. **Just synchronization, done well.** In production since mid-2025, syncing podcasts for friends and family

## Features

- Works with [AntennaPod](https://antennapod.org/), [gPodder](https://gpodder.github.io/), [Cardo](https://github.com/cardo-podcast/cardo), and anything else that speaks the [gPodder sync protocol](https://gpoddernet.readthedocs.io/en/latest/api/)
- Built-in web UI for managing accounts, sync logins, devices, and subscriptions
- [REST API](https://github.com/cbrgm/gopodder/blob/HEAD/APIDOCS.md) with API key auth for scripts, provisioning, and custom integrations
- Multi-account support with admin/standard roles, per-account sync login limits, optional self-registration
- SQLite by default (zero config), PostgreSQL if you need it
- Share your subscriptions publicly via OPML and RSS links
- No outbound connections. The server never phones home, never fetches feed URLs, never resolves external DNS. Your…
