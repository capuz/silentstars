---
repo: "borestad/blocklist-abuseipdb"
name: "blocklist-abuseipdb"
description: "Aggregated AbuseIPDB blocklists with worst IPv4 & IPv6 offenders (~99% confidence)"
url: "https://github.com/borestad/blocklist-abuseipdb"
homepage: "https://github.com/borestad/blocklist-abuseipdb"
language: "Shell"
languages: ["Shell"]
languagePcts: [94]
topics: ["abuseipdb", "blocklist", "blocklists", "ipblocklist", "ipset", "malware", "iplist", "iplists", "blacklist", "blacklists"]
stars: 481
forks: 37
openIssues: 1
closedIssues: 18
watchers: 11
contributors: 1
recentReleases: 0
createdAt: "2022-11-01T14:32:17Z"
lastCommitAt: "2026-06-23T23:28:21Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 21
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/c5506a539908d49bedeaa3e6429f8bd2f6267a7a0465f8721c2cbbe900513a93/borestad/blocklist-abuseipdb"
---

# blocklist-abuseipdb

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/borestad/blocklist-abuseipdb/ci.yml?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/borestad/blocklist-abuseipdb?style=for-the-badge)

Lists with worst IPv4 & IPv6 offenders _(~99% confidence)_, provided by
[AbuseIPDB](https://www.abuseipdb.com/) (with permission).

- Lists are updated multiple times per day.
- The repository is continously squashed to keep down size.

### Extra Features

- [`Statistics`](stats)
- [`Hall of Shame`](stats/hallofshame) ip lists with aggressive /24 subnets -
  i.e [`1`](https://www.abuseipdb.com/check-block/64.62.156.0/24)
  [`2`](https://www.abuseipdb.com/check-block/206.168.34.0/24)
  [`3`](https://www.abuseipdb.com/check-block/193.163.125.0/24)
- `ASN Database` from [ipinfo.io](https://ipinfo.io/products/free-ip-database)
  is used to decorate all IPs with metadata
- Selfhosted `honeypot` integration with verified abuse score (to get those
  pesky ~90% confidence offenders)
- Smart heuristic-based detection of aggressive /24 subnets

> **Disclaimer**:
>
> `#1` This repository is using the _"free forever"_ plan (5…
