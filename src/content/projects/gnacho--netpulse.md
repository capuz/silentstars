---
repo: "gnacho/netpulse"
name: "netpulse"
description: "PWA dashboard for monitoring OpenWrt/GL.iNet home networks: fleet status, per-router health, devices, WireGuard peers, AdGuard Home stats and alerts in real time (SSE). Go backend + React 19 frontend, SQLite, multi-user, i18n ES/EN."
readmeQualityOk: true
url: "https://github.com/gnacho/netpulse"
homepage: "https://netpulse.cloudless.club/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [58, 29]
topics: ["adguard-home", "dashboard", "glinet", "go", "golang", "network-monitoring", "openwrt", "pwa", "react", "selfhosted"]
stars: 83
forks: 9
openIssues: 4
closedIssues: 600
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-07-31T14:05:48Z"
lastCommitAt: "2026-10-04T10:01:15Z"
lastReleaseAt: "2026-08-04T18:41:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 42
maintainers: ["gnacho", "samex"]
openGraphImageUrl: "https://opengraph.githubassets.com/12c73d9a9ab2729d7bbca0c14904ce56c50974ed385e402e237c3dd2fa81a514/gnacho/netpulse"
discussionCount: 13
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

## Why NetPulse?

If you run OpenWrt, you already own your network. But owning it means
*knowing* it: what connects where, what's healthy, what changed overnight.
LuCI shows you one router at a time; NMS suites like Zabbix or LibreNMS are
built for datacenters. What was missing is the thing in between: a home NOC
that installs in minutes and just shows you your network.

NetPulse is that missing piece. It grew out of my own network: a GL.iNet
Flint 2 as the gateway and three second-hand Xiaomi AX6…
