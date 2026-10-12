---
repo: "tennoworth/tennoworth"
name: "tennoworth"
description: "Cross-platform Windows + Linux Warframe inventory + market dashboard - what should I sell right now?"
readmeQualityOk: true
url: "https://github.com/tennoworth/tennoworth"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [50, 31]
topics: ["rust", "svelte", "trading-dashboard", "warframe", "warframe-market"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-12T16:43:25Z"
lastCommitAt: "2026-10-12T11:14:37Z"
lastReleaseAt: "2026-08-20T13:50:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 68
maintainers: ["PedroAmorimP"]
openGraphImageUrl: "https://opengraph.githubassets.com/8420a7c3f042bff78675a55b3f72427cb932ebaa055bd7d72010c940bec26c73/tennoworth/tennoworth"
discussionCount: 1
---

# TennoWorth

**A Windows and Linux Warframe inventory dashboard built around one decision: what is worth selling now?**

TennoWorth joins the inventory for your current Warframe session with
warframe.market prices, Digital Extremes drop tables, vault rotations, usage
history, and world-state data. It then turns that data into sell priorities,
set-completion plays, relic expected value, Riven context, and listing health.

- **Use the market browser:** [tennoworth.app](https://tennoworth.app) - search,
  prices, volume, trends, vault status, Baro, and market context in a static web
  app. No account or install.
- **Use your own inventory:** install the desktop app from the
  [latest release](https://github.com/tennoworth/tennoworth/releases/latest).
  The inventory scan and account-specific tools are desktop-only.

> [!WARNING]
> TennoWorth reads the running game's memory. It never writes to the game,
> injects code, or automates gameplay, but Digital Extremes has not formally
> approved this category of third-party tool. Ban safety cannot be guaranteed.
> Read [Security and trust](#security-and-trust) before using the scan.

## What it does

### Decide what to sell

- Ranks owned…
