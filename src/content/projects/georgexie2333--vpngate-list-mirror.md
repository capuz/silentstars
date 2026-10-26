---
repo: "GeorgeXie2333/vpngate-list-mirror"
name: "vpngate-list-mirror"
description: "Hourly snapshots of VPN Gate servers and OpenVPN configurations, available as CSV and JSON."
readmeQualityOk: true
url: "https://github.com/GeorgeXie2333/vpngate-list-mirror"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [74, 26]
topics: ["vpn", "vpngate", "mirror", "python"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-11T13:07:22Z"
lastCommitAt: "2026-10-26T20:59:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 59
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5f63fd4773ad2290b1279ec4316c4b88d2e8405b92905940cbff2900acdeda4/GeorgeXie2333/vpngate-list-mirror"
---

# VPN Gate directory mirror

[中文说明](https://github.com/GeorgeXie2333/vpngate-list-mirror/blob/HEAD/README.zh-CN.md) · [Data protocol](https://github.com/GeorgeXie2333/vpngate-list-mirror/blob/HEAD/docs/protocol.md) · [Operations](https://github.com/GeorgeXie2333/vpngate-list-mirror/blob/HEAD/docs/operations.md) · [Initial verification](https://github.com/GeorgeXie2333/vpngate-list-mirror/blob/HEAD/docs/verification.md)

A public HTTPS mirror of the server directory returned by the
[official VPN Gate CSV API](https://www.vpngate.net/api/iphone/).
Anyone can download the directory and its complete public OpenVPN configurations:
no login, registration, API key, or consumer-side GitHub token is required.

Cloudflare Worker `vgate-list-update` requests a refresh at minutes **29 and 59
of every hour (UTC)** (`29,59 * * * *`, 48 attempts per day), dispatching GitHub
Actions to fetch, validate and commit a complete response. GitHub Raw serves a small version index;
jsDelivr distributes files pinned to one full data commit SHA.

This mirrors the API response, not every VPN Gate server worldwide. Scores,
Ping, speed, country information, and session counts come from upstream. This
project…
