---
repo: "xyzmean/ru-bypass-ipsets"
name: "ru-bypass-ipsets"
description: "Categorized IPv4 ipset lists for bypassing blocks (Russian Federation). Resolves domains to CIDR by category."
originalDescription: "Категоризованные IPv4 ipset-списки для обхода блокировок (РФ). Резолв доменов в CIDR по категориям."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/xyzmean/ru-bypass-ipsets"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-24T13:18:19Z"
lastCommitAt: "2026-10-19T09:14:03Z"
lastReleaseAt: "2026-08-28T15:42:43Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 51
maintainers: ["github-actions[bot]", "xyzmean"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e2ecbf36e3f32fd39b75573784ac803ebe1a1d584652d55f18cae3f49c50770/xyzmean/ru-bypass-ipsets"
---

# ru-bypass-ipsets

Categorized IPv4 ipset lists for bypassing blocks (Russian Federation). Resolves domains to CIDR by category and publishes ready-made `.lst` files for routing traffic through VPN/proxy.

The main consumer is [splify](https://github.com/xyzmean/splify) (OpenWrt). The format is compatible with `clean_ip_list`: strictly `A.B.C.D/N`, no bare IPs.

## Principle

1. **Sources** — vendor snapshots in the repo + reliable online APIs (`antifilter.download`, RIPEstat, Cloudflare/AWS CDN). The only external repository used is the ready-made Discord ipset (`1andrevich/Re-filter-lists`), which has a snapshot in `sources/discord/`: an unavailable source does not empty the list, but rolls it back to the last successful download.
2. **Resolution** — `dnspython` across 6 nameservers (including Yandex 77.88.8.8), merging A records from all resolvers for maximum CDN coverage.
3. **ASN-pull** — for large services (Telegram, Meta, …) CIDRs are taken directly by ASN (RIPEstat → ip.guide → bgpview) and from CDN feeds (Cloudflare, CloudFront).
4. **Merging** — `collapse_addresses()` collapses overlaps and adjacent networks into the largest possible subnets; dedupe + sort.
5.…
