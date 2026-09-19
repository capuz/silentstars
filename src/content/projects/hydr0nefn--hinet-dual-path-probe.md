---
repo: "Hydr0neFN/hinet-dual-path-probe"
name: "hinet-dual-path-probe"
description: "Does a static IP actually lower your game ping? A concurrent A/B of two ISP account types on one line, measured on the UDP path a Source 2 game really uses. Live data, updated hourly from the probe."
originalDescription: "Does a static IP actually lower your game ping? A concurrent A/B of two ISP account types on one line, measured on the UDP path a Source 2 game really uses. Live data, updated hourly from the probe."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Hydr0neFN/hinet-dual-path-probe"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [59, 25]
topics: ["homelab", "latency", "networking", "pppoe", "raspberry-pi", "steam-datagram-relay", "cs2", "isp", "network-monitoring", "taiwan"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-27T12:53:28Z"
lastCommitAt: "2026-09-19T01:16:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/0fe753d24742bcbdadd634038288b1e63667d3e4180a40937c54fb4b51237278/Hydr0neFN/hinet-dual-path-probe"
---

# Chunghwa Telecom CS2 Ping Spike Test: Dynamic vs. Static Plan

**Traditional Chinese** · [English](https://github.com/Hydr0neFN/hinet-dual-path-probe/blob/HEAD/README.en.md)

## TL;DR The following is written by Claude, one sentence: Apply for a static plan, the difference is huge. (varies by person)

On the same physical line, using a single Raspberry Pi to conduct a **synchronous A/B test** between two types of ISP connection modes (and measuring the **actual UDP path that Source 2 games (CS2) really use**, not just pinging some random nearby DNS server).

The median game ping won't get lower—both account types have completely identical medians on the path the game actually uses. But stability varies greatly: the dynamic plan has 1 spike exceeding 60 ms in every 6 high-frequency measurements, while the static plan has only 1 in 868 measurements. The situation behind Cloudflare is vastly different: median 3 ms vs 24 ms, and during peak times the dynamic plan spikes past 200 ms accompanied by packet loss.

The data below is automatically updated hourly by a probe running on the Pi.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="data/chart-dark.svg">
</picture>…
