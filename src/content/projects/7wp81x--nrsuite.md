---
repo: "7wp81x/NRSuite"
name: "NRSuite"
description: "No-root wireless security testing toolkit for Android, powered by an ESP32 over USB."
readmeQualityOk: true
url: "https://github.com/7wp81x/NRSuite"
homepage: "https://7wp81x.github.io/NRSuite/"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [61, 37]
topics: ["ethical-hacking", "firmware", "nethunter", "no-root", "termux", "termux-hacking", "termux-tool", "wireless", "android", "packet-capture"]
stars: 15
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 1
createdAt: "2026-06-23T10:44:45Z"
lastCommitAt: "2026-07-20T06:32:31Z"
lastReleaseAt: "2026-07-11T16:05:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 47
maintainers: ["7wp81x"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1277964721/92ec2989-95aa-4921-b331-1d2166aa3c40"
---

# NRSuite

> Turn a $3–5 ESP32 into a wireless research toolkit for Termux — **no root required.**

NRSuite bypasses Android's locked-down radio APIs by offloading the radio layer to an ESP32 over USB OTG, turning a stock, unrooted Android phone into a wireless research toolkit. See [Features](#features) for exactly what's implemented today. The firmware and bridge protocol are modular by design — new radio backends and capabilities register their own CMDs without touching the transport layer, so the toolkit keeps growing without becoming a single-purpose tool.

</p>

</p>

> ⚠️ **Authorized use only.** Only use this tool on networks and devices you own or have explicit written permission to test. Unauthorized interception of network traffic is illegal in most jurisdictions.

---

## Why this exists

Android has never exposed monitor mode, raw packet injection, or low-level radio control to user-space apps — not even with root on most devices. The traditional path required a rooted phone, a custom kernel (e.g. NetHunter), a supported external USB adapter, and a lot of luck matching hardware versions.

NRSuite sidesteps the entire problem:

- The **ESP32** handles everything…
