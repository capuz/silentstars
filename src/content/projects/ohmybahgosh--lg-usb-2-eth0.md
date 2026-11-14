---
repo: "ohmybahgosh/LG-USB-2-ETH0"
name: "LG-USB-2-ETH0"
description: "Make a USB Ethernet adapter the TV's eth0 on rooted LG webOS TVs, so settings and streaming apps use the faster wired link. POSIX sh, tested under busybox."
readmeQualityOk: true
url: "https://github.com/ohmybahgosh/LG-USB-2-ETH0"
homepage: "https://ohmybahgosh.dev/lg-usb-2-eth0/"
language: "Shell"
languages: ["Shell"]
languagePcts: [72]
topics: ["lg", "lg-webos", "lg-webos-tv", "lgtv", "webos", "webos-homebrew", "webos-service", "webos-tv", "busybox", "homebrew-channel"]
stars: 35
forks: 1
openIssues: 2
closedIssues: 22
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2025-04-25T00:40:38Z"
lastCommitAt: "2026-11-14T10:41:57Z"
lastReleaseAt: "2026-11-04T18:18:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 65
maintainers: ["ohmybahgosh"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/972362096/67a80594-4b0b-4de1-aee5-cd905f1195d0"
discussionCount: 4
---

# LG-USB-2-ETH0

**Make a USB Ethernet adapter the TV's `eth0` on rooted LG webOS TVs, safely and at every boot.**

**[Get the TV app](#with-the-tv-app)** · **[Install over SSH](#over-ssh)** · **[Drivers](#drivers)** · **[Troubleshooting](#troubleshooting)** · **[Project page](https://ohmybahgosh.dev/lg-usb-2-eth0/)**

LG TVs ship with a 100 Mbit/s wired port.  A gigabit USB adapter is two to three times faster on the same TV, even on the USB 2.0 ports many models have (a 2022 C2 included).  But webOS names it `eth1`, and parts of webOS only look at `eth0`.  So the settings screen says "Not Connected" while the internet works, and some streaming apps refuse to play.

LG-USB-2-ETH0 renames the adapter to `eth0` and parks the built-in port under another name, so webOS and its apps treat the adapter as the TV's wired connection.  A small boot hook does it again at every start.  Use the TV app from the Homebrew Channel, with no SSH needed, or the same script over SSH.  It can also find, check and install a better driver for your adapter, test new ones built for your TV, keep the TV wakeable over the network, and block firmware updates harder.

## Standout features

- **A TV app, no…
