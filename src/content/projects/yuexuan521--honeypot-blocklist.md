---
repo: "yuexuan521/honeypot-blocklist"
name: "honeypot-blocklist"
description: "HFish 蜜罐威胁情报源 | High-fidelity Threat Feed derived from HFish honeypots (SSH/HTTP/DB attacks) with automated whitelisting."
readmeQualityOk: true
url: "https://github.com/yuexuan521/honeypot-blocklist"
homepage: "https://yuexuan521.github.io/honeypot-blocklist/ip_list.txt"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [68, 24]
stars: 243
forks: 4
openIssues: 1
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2025-12-23T11:28:15Z"
lastCommitAt: "2026-08-15T04:05:08Z"
lastReleaseAt: "2026-03-08T02:35:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 60
undervaluedScore: 24
maintainers: ["yuexuan521"]
openGraphImageUrl: "https://opengraph.githubassets.com/f426c0c8d54483545e212b0c9923eb575dc7cec91a3878fc8360731717794a23/yuexuan521/honeypot-blocklist"
---

[English](https://github.com/yuexuan521/honeypot-blocklist/blob/HEAD/README.md) | [简体中文](https://github.com/yuexuan521/honeypot-blocklist/blob/HEAD/README_CN.md) | [繁體中文](https://github.com/yuexuan521/honeypot-blocklist/blob/HEAD/README_TW.md) | [日本語](https://github.com/yuexuan521/honeypot-blocklist/blob/HEAD/README_JP.md) | [Français](https://github.com/yuexuan521/honeypot-blocklist/blob/HEAD/README_FR.md) | [Español](https://github.com/yuexuan521/honeypot-blocklist/blob/HEAD/README_ES.md)

# HFish Honeypot Threat Feed

High-fidelity malicious IP feed generated from **HFish honeypot telemetry**, built for **Firewall / WAF / SIEM / IPSet / EDL** workflows.

This project continuously collects attacker IPs observed by publicly exposed HFish honeypots, applies automated filtering and whitelisting, and publishes a clean blocklist that can be consumed by security controls and automation pipelines.

> **Warning**
> This feed is generated automatically. Although filtering and whitelisting are applied, you should validate enforcement strategy before using it in production.

---

## Why this project exists

Internet-facing honeypots observe a large volume of brute-force attempts, exploit…
