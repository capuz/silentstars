---
repo: "ohmybahgosh/LG-USB-2-ETH0"
name: "LG-USB-2-ETH0"
description: "Make a USB Ethernet adapter the TV's eth0 on rooted LG webOS TVs, so settings and streaming apps use the faster wired link. POSIX sh, tested under busybox."
readmeQualityOk: true
url: "https://github.com/ohmybahgosh/LG-USB-2-ETH0"
homepage: "https://ohmybahgosh.dev/lg-usb-2-eth0/"
language: "Shell"
languages: ["Shell", "JavaScript"]
languagePcts: [71, 24]
topics: ["lg", "lg-webos", "lg-webos-tv", "lgtv", "webos", "webos-homebrew", "webos-service", "webos-tv", "busybox", "homebrew-channel"]
stars: 17
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2025-04-25T00:40:38Z"
lastCommitAt: "2026-11-05T00:18:35Z"
lastReleaseAt: "2026-11-04T18:18:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 63
maintainers: ["ohmybahgosh", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/972362096/7493f20d-f1c0-477c-9e49-1abd0a25dae8"
discussionCount: 1
---

# LG-USB-2-ETH0

**Make a USB Ethernet adapter the TV's `eth0` on rooted LG webOS TVs, safely and at every boot.**

LG TVs ship with a 100 Mbit/s wired port.  A gigabit USB adapter is two to three times faster on the same TV, even on the USB 2.0 ports many models have (a 2022 C2 included), but webOS names it `eth1`, and parts of webOS only look at `eth0`.  So the settings screen says "Not Connected" while the internet works, and some streaming apps refuse to play.

This script renames the adapter to `eth0` and parks the built-in port under another name, so webOS and its apps treat the adapter as the TV's wired connection.  A small boot hook does it again at every start.

> [!TIP]
> **Is it safe, and how do I undo it?**
> It adds one boot hook, a link at `/var/lib/webosbrew/init.d/S01fix-eth`, keeps its settings in `/var/lib/webosbrew/lg-usb-2-eth0.conf`, and only renames network interfaces.  No system files are touched, and network settings only if you turn on the Wi-Fi backup, so a reboot without the hook always starts clean.  With no adapter plugged in, the hook changes nothing.
> Undo everything with **Turn everything off** in the TV app, or `sh LG-USB-2-ETH0.sh uninstall…
