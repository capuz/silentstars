---
repo: "ps5-linux/ps5-linux-loader"
name: "ps5-linux-loader"
description: "Linux payload implementing HV exploits to run a custom bootloader"
readmeQualityOk: true
url: "https://github.com/ps5-linux/ps5-linux-loader"
language: "C"
languages: ["C"]
languagePcts: [97]
stars: 356
forks: 89
openIssues: 4
closedIssues: 26
watchers: 13
contributors: 17
recentReleases: 1
createdAt: "2026-04-24T13:19:30Z"
lastCommitAt: "2026-10-22T08:52:58Z"
lastReleaseAt: "2026-09-05T08:40:09Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 21
maintainers: ["TheOfficialFloW", "c0w-ar", "buzzer-re"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ec3d6ab3c85a5d44affedc9fad0497f24c2e73ff20532b2cc9d75271689da07/ps5-linux/ps5-linux-loader"
---

# ps5-linux

**ps5-linux** leverages patched HV vulnerabilities to transform your **PS5 Phat, Slim and Pro** console running **3.00-13.60 firmwares** into a highly capable Linux PC, unlocking its full hardware potential for desktop use. Powered by 8 CPU cores (16 threads) at **3.5 GHz** and a GPU at **2.23 GHz**, it provides enough performance to run Steam games and various emulators with impressive fluidity.

Features:

- HDMI 4K60 video and audio output
- M.2 SSD as dedicated Linux partition
- All USB ports usable for peripherals
- BD drive usable via custom ahci driver
- Internal Bluetooth usable via custom xhci driver
- Ethernet port usable via custom gbe driver
- Hardware video decode, encode and transcode (VCN) via VAAPI

## PS5 firmware

*ps5-linux* is supported on the following firmwares:

**PS5 Phat and Slim:**
- **3.00**, **3.10**, **3.20**, **3.21** without M.2 support
- **4.00**, **4.02**, **4.03**, **4.50**, **4.51** with M.2 support
- **5.00**, **5.02**, **5.10**, **5.50** with M.2 support
- **6.00**, **6.02**, **6.50** with M.2 support
- **7.00**, **7.01**, **7.20**, **7.40**, **7.60**, **7.61** with M.2 support
- **11.60** (regular PS5 only, M.2 not tested yet; the…
