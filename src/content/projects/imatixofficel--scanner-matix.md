---
repo: "imatixofficel/Scanner-matix"
name: "Scanner-matix"
description: "🔍 Clean Cloudflare IPs, tested every 10 minutes. Real speed. Real results. No duplicates. No fake data. Just fast IPs for your VLESS configs."
originalDescription: "🔍 Clean Cloudflare IPs, tested every 10 minutes. Real speed. Real results. No duplicates. No fake data. Just fast IPs for your VLESS configs."
descriptionLang: "fa"
readmeQualityOk: true
url: "https://github.com/imatixofficel/Scanner-matix"
homepage: "https://imatixofficel.github.io/Scanner-matix/"
language: "Python"
languages: ["Python", "CSS", "JavaScript"]
languagePcts: [43, 26, 20]
topics: ["clean-ip", "fast", "ip", "ping", "scanner"]
stars: 6
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-19T21:35:32Z"
lastCommitAt: "2026-10-21T21:15:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 61
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/39ac138599b11aa1655383ae7405e331046073e3267503116ebec034204603db/imatixofficel/Scanner-matix"
---

# Matix Scanner — Multi-Source VPN-Oriented IP Scanner

> In the name of God, the Most Gracious, the Most Merciful 🤍

Matix Scanner is a multi-source scanner for finding **truly reachable** IPs.

The goal of version 4 is to collect IPs from several official sources (**Fastly, Cloudflare, CloudFront, Google**) and let the user choose the source.

## Sources

| Source | Status |
|---|---|
| ⚡ Fastly | Official range (Fastly's own API) |1
| ☁️ Cloudflare | Official range (Cloudflare's own API) |
| 🟧 CloudFront (Amazon) | Official range `ip-ranges.json` filtered by `CLOUDFRONT` |
| 🔷 Google | Official range `goog.json` (the share of healthy IPs is lower, because only part of the range is web servers) |
| 🖥️ Railway | Resolved only from the official hostname; no public fixed range is claimed |
| 🛡️ VPS / ✍️ Custom | Only IPs you enter yourself in `custom_ips.txt` |

Share of each source in `all` mode: Fastly 35% · Cloudflare 30% · CloudFront 15% · Google 8% · Custom 10% · Railway 2% (can be changed in `DEFAULT_MIX` inside `scanner.py`).

On the web page, at the top of the list, you can select the **source** (all / Fastly / Cloudflare / CloudFront / Google / Railway / pinned only).…
