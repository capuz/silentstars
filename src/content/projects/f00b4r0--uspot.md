---
repo: "f00b4r0/uspot"
name: "uspot"
description: "A captive portal system for OpenWrt"
readmeQualityOk: true
url: "https://github.com/f00b4r0/uspot"
language: "UnrealScript"
languages: ["UnrealScript", "C"]
languagePcts: [54, 41]
topics: ["captive-portal", "hotspot", "openwrt-package"]
stars: 58
forks: 17
openIssues: 2
closedIssues: 35
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2023-09-05T08:24:13Z"
lastCommitAt: "2026-07-06T07:04:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 34
maintainers: ["f00b4r0", "BKPepe"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c5c1110b1a36c138ff85a53028bbd9a413496d4c06d2131f7d669b463128e19/f00b4r0/uspot"
discussionCount: 12
---

# uspot

A captive portal system for OpenWrt

## Description

uspot implements a captive portal supporting click-to-continue, simple credential-based as well as RADIUS authentication.
uspot is UAM capable, supports RFC8908 Captive Portal API and has limited support for RFC5176 RADIUS Dynamic Authorization Extensions.

It is intended to be an alternative to e.g. CoovaChilli/ChilliSpot, fully compatible with OpenWrt:
it leverages existing OpenWrt tools such as uhttpd, dnsmasq, firewall4, ucode.

The software consists of several parts:
- A web frontend handling client user interface, local UAM and Captive Portal Detection duties
- A client management backend handling client authentication and accounting
- A firewall wrapper managing client network access and disconnection detection
- A basic UDP-only RADIUS Dynamic Authorization Server for RFC5176 support
- An eBPF module for high performance traffic accounting

uspot requires OpenWrt 23.05 or newer.

### Features

uspot supports 4 authentication modes:
- `click-to-continue` provides a very simple "accept ToU and click to continue" interface
- `credentials` provides a simple username/password authentication (usernames and passwords…
