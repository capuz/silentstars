---
repo: "MictoNode/micto-monad-monitor"
name: "micto-monad-monitor"
description: "Pushover and alerts-focused validator monitor."
readmeQualityOk: true
url: "https://github.com/MictoNode/micto-monad-monitor"
language: "Python"
languages: ["Python"]
languagePcts: [78]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-26T18:34:58Z"
lastCommitAt: "2026-11-17T14:35:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 51
maintainers: ["MictoNode"]
openGraphImageUrl: "https://opengraph.githubassets.com/b856bed1a6cfedb14175ddba91ff9efa9754443f0db3695491c9eb833466c974/MictoNode/micto-monad-monitor"
---

# Monad Validator Monitor

> Monitor your Monad validators from a separate server. Get instant alerts when your node goes down, stops producing blocks, or runs low on resources.

**Why remote monitoring?** If your validator crashes, local monitoring dies with it. This runs elsewhere, so you always get alerts.

---

## What's New

- **Metrics Dashboard** - 26 Prometheus charts across 6 sections at `http://your-server:8383`
- **Monitor Dashboard** - Real-time validator status at `http://your-server:8282`
- **Time range selector** - 1m, 5m, 30m, 1h, 24h, 1w, 1mo per chart section
- **Multi-source validation** - Huginn status with gmonads as the deciding source when the two disagree
- **Active set tracking** - Know when your validator enters/leaves active set
- **Pushover emergency alerts** - Bypass Do Not Disturb mode
- **Discord webhook support** - Community alerts
- **Slack webhook support** - Team alerts
- **All alert channels optional** - Use any combination of Telegram, Pushover, Discord, Slack
- **Monitor health visibility** - `/health` reports whether the monitor itself is alive, plus per-channel alert delivery counters
- **New version notifications** - Monitor checks GHCR…
