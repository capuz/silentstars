---
repo: "awadak3davra/wayhop"
name: "wayhop"
description: "Self-hosted web panel to configure any VPN/proxy protocol on Entware/OpenWrt routers, with one-click failover, health checks and live traffic graphs."
readmeQualityOk: true
url: "https://github.com/awadak3davra/wayhop"
language: "Go"
languages: ["Go"]
languagePcts: [87]
stars: 11
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-06-12T05:03:13Z"
lastCommitAt: "2026-11-26T15:23:28Z"
lastReleaseAt: "2026-11-25T01:11:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 63
undervaluedScore: 29
maintainers: ["awadak3davra"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b86b1dc1b89d719923a7ad818078c1b8e2eaeabcf5846b5ad6e36e5a82ed600/awadak3davra/wayhop"
---

**A router web panel for modern VPN and proxy protocols, with failover, selective routing and an Apply that undoes itself.**

## What it is

WayHop is one static Go binary (the web UI is compiled into it) that runs as a service on your
router and drives [sing-box](https://github.com/SagerNet/sing-box) from a browser. You paste a share
link, a subscription URL or a `.conf`, pick what routes through it, and press Apply.

It listens on its own port (`:8088` by default) and writes its own config and its own kernel routing
rules. It does not edit your router's native VPN configuration, and it routes only the traffic it
marks itself, so it can sit next to whatever the firmware already does.

**Who it is for.** People already running OpenWrt, or Entware under `/opt` (which includes most
Keenetic routers on stock firmware), who are currently maintaining sing-box JSON, policy-routing
scripts and SSH sessions by hand.

**What it is not.** Not a VPN service: you bring your own servers. Not a firmware replacement. Not a
protocol implementation: it orchestrates cores other people maintain.
