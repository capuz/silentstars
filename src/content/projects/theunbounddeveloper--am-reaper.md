---
repo: "TheUnboundDeveloper/AM-Reaper"
name: "AM-Reaper"
description: "Security hardening fork derived from ASUSWRT-Merlin. Security focused - Continued development."
readmeQualityOk: true
url: "https://github.com/TheUnboundDeveloper/AM-Reaper"
homepage: "https://unbounded-engineering.com"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 57
forks: 4
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 4
recentReleases: 10
createdAt: "2026-06-28T16:17:36Z"
lastCommitAt: "2026-11-02T17:57:33Z"
lastReleaseAt: "2026-09-08T16:36:43Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 89
undervaluedScore: 39
maintainers: ["TheUnboundDeveloper", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/552a8d119a340006cbb340701d64b6443cf3d9033f6a88950ba770d8fc002ccf/TheUnboundDeveloper/AM-Reaper"
fundingLinks: ["GITHUB:https://github.com/TheUnboundDeveloper", "CUSTOM:https://paypal.me/TheUnboundDeveloper", "CUSTOM:https://donate.stripe.com/14A14n5CpaISdl4fhBgnK00"]
---

# AM-Reaper

> **Doc status:** current as of **v3.6.2** · 2026-10-28 

**Security-hardened, de-clouded [Asuswrt-Merlin](https://github.com/RMerl/asuswrt-merlin.ng) for the ASUS RT-BE Series** (WiFi 7 / Broadcom), firmware line **3006.102.x** — branded `reaper`. Newest published release: **v3.1.0**  (all five main models — see §"Current version" below); the source tree sits at **v3.6.2** . Primary, hardware-validated model is the **RT-BE96U**; also built for the **RT-BE86U**, **RT-BE88U**, **GT-BE98**, **GT-BE98 Pro**, **GT-BE19000**, **ZenWiFi BQ16** and **ZenWiFi BQ16 Pro** (BCM4916; metal validation owed on the siblings). From v3.6.0 two branches carry the same Reaper version: `Dev` builds the RT-BE96U, RT-BE86U, RT-BE88U and GT-BE98 Pro on Asuswrt-Merlin 3006.102.10, and `Dev-102.8` builds the GT-BE98, GT-BE19000, BQ16 and BQ16 Pro on 3006.102.8 until ASUS publishes a 102_40585-era GPL for them.

The goal: harden the open-source userspace so that **only physical access** can compromise the device — eliminating remotely/LAN-reachable command injection, buffer overflows, format-string and auth-bypass bugs — remove cloud-coupled/AI-branded attack surface, and produce a flashable…
