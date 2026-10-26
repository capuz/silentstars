---
repo: "gnacho/netpulse"
name: "netpulse"
description: "PWA dashboard for monitoring OpenWrt/GL.iNet home networks: fleet status, per-router health, devices, WireGuard peers, AdGuard Home stats and alerts in real time (SSE). Go backend + React 19 frontend, SQLite, multi-user, i18n ES/EN."
readmeQualityOk: true
url: "https://github.com/gnacho/netpulse"
homepage: "https://netpulse.cloudless.club/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [59, 35]
topics: ["adguard-home", "dashboard", "glinet", "go", "golang", "network-monitoring", "openwrt", "pwa", "react", "selfhosted"]
stars: 100
forks: 12
openIssues: 6
closedIssues: 762
watchers: 1
contributors: 6
recentReleases: 10
createdAt: "2026-07-31T14:05:48Z"
lastCommitAt: "2026-10-26T21:00:22Z"
lastReleaseAt: "2026-08-04T18:41:45Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 40
maintainers: ["gnacho", "Bann-DEV", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/87d772ab0c971a2917b1c7ab47e8e0c59b90226bb00fddf52209448a243870d6/gnacho/netpulse"
discussionCount: 20
---

# NetPulse

  Watch your routers, draw your topology, score your network's health and get
  alerted, from a single self-hosted binary. Nothing ever leaves your LAN.

## See it before you install it

You don't need a single router to see NetPulse working:

- **[demo.netpulse.cloudless.club](https://demo.netpulse.cloudless.club)** is the real app
  with a full sample network loaded, read-only, no sign-up. Click around, change
  the theme, switch languages, watch the live updates.
- **[netpulse.cloudless.club/features](https://netpulse.cloudless.club/features)**
  is the complete feature inventory: every screen and feature, with the
  technical decisions and the honest scope of each one.

## What you get

**Fleet overview and a health score that means something.** One 0-100 score
condenses latency, loss, uptime and temperature per router and for the whole
network, updated live every 5 seconds over SSE. Live WAN traffic against your
contracted plan, alert feed, AdGuard Home stats and WireGuard peers on the
same screen (that's the screenshot above).

**A topology map that draws itself.** Inferred live from the bridge FDB (and
LLDP where available, including LLDP-MIB on SNMP-managed…
