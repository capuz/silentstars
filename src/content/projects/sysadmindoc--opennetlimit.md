---
repo: "SysAdminDoc/OpenNetLimit"
name: "OpenNetLimit"
description: "Open-source Windows bandwidth control with per-app limits, live traffic history, quotas, schedules, CLI, and local automation."
readmeQualityOk: true
url: "https://github.com/SysAdminDoc/OpenNetLimit"
homepage: "https://github.com/SysAdminDoc/OpenNetLimit/releases/latest"
language: "C#"
languages: ["C#"]
languagePcts: [98]
topics: ["csharp", "desktop-app", "networking", "windows", "bandwidth-limiter", "bandwidth-monitor", "cli", "netlimiter-alternative", "network-monitor", "network-security"]
stars: 24
forks: 3
openIssues: 3
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-06-20T07:34:06Z"
lastCommitAt: "2026-11-15T11:23:38Z"
lastReleaseAt: "2026-09-13T01:33:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 37
maintainers: ["SysAdminDoc"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ded95b142c6fa7befcad3ae1882732101edcf519c07539b0a7ceec6a8f6d12f/SysAdminDoc/OpenNetLimit"
discussionCount: 0
---

·
  ·

OpenNetLimit shows how much bandwidth each Windows app is using and lets you cap or block any of them. It runs locally, keeps traffic history in SQLite and enforces limits through WinDivert.

Use it when a download is wrecking a call or when a background app is chewing through a hotspot allowance. OpenNetLimit shows the culprit and lets you act without replacing your firewall.

## What it does

| Capability | What you get |
|---|---|
| Live traffic | Current download and upload rates for each active process, plus a rolling connection chart |
| Per-app control | Independent download and upload ceilings, blocking rules, wildcard paths, and protocol filters |
| Usage history | Hourly or daily charts backed by a local database, with quotas and threshold alerts |
| Repeatable rules | Schedules, app groups, import and export, plus a scriptable command-line client |
| Local automation | A loopback REST API with keyed mutations and an explicit opt-in for remote access |
| Private defaults | Rules and history remain on the PC. VirusTotal, GeoIP, webhooks, and remote access stay off until configured. The once-a-day update check can be switched off |

## Screenshots

| Guided first…
