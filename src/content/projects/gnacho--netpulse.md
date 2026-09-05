---
repo: "gnacho/netpulse"
name: "netpulse"
description: "Read-only PWA dashboard for monitoring OpenWrt/GL.iNet home networks: fleet status, per-router health, devices, WireGuard peers, AdGuard Home stats and alerts in real time (SSE). Go backend + React 19 frontend, SQLite, multi-user, i18n ES/EN."
readmeQualityOk: true
url: "https://github.com/gnacho/netpulse"
homepage: "https://netpulse.cloudless.club/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [55, 32]
topics: ["adguard-home", "dashboard", "glinet", "go", "golang", "network-monitoring", "openwrt", "pwa", "react", "selfhosted"]
stars: 18
forks: 3
openIssues: 1
closedIssues: 291
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-31T14:05:48Z"
lastCommitAt: "2026-09-05T07:49:49Z"
lastReleaseAt: "2026-08-04T18:41:45Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 58
maintainers: ["gnacho", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/09a7742ff49aeb0de6f1cec6e9878ddc8891a7792ab3b394c3c6e7ab8767267c/gnacho/netpulse"
discussionCount: 1
---

# NetPulse

</p>

</p>

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/hero-en-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="assets/hero-en-light.png">
  </picture>
</p>

NetPulse is a read-only PWA for monitoring a home network built on
OpenWrt/GL.iNet routers: fleet status, per-router health, connected devices,
a live topology map, WireGuard peers, AdGuard Home stats and alerts, in real
time. One static Go binary with the frontend embedded, self-hosted on a
small Linux box.

> **Try the live demo**
>
> See it running without installing anything. Head to **[demo.netpulse.cloudless.club](https://demo.netpulse.cloudless.club)** — a full sample network, no sign-up required. In read-only mode, so you can explore freely.

## Why does this exist?

I believe in digital sovereignty: if a device makes you depend on its
cloud, its firmware or its vendor, it isn't 100% yours. That's why I've
always favored hardware I can flash or root. My home layout ended up with
four routers: a Flint 2 as the main one and three Xiaomi AX6 access points
bought second-hand for 30 euros each. Cheap, powerful, and all running
OpenWrt. That sovereignty let me…
