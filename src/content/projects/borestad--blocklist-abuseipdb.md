---
repo: "borestad/blocklist-abuseipdb"
name: "blocklist-abuseipdb"
description: "Aggregated AbuseIPDB blocklists with worst IPv4 & IPv6 offenders (~99% confidence)"
readmeQualityOk: true
url: "https://github.com/borestad/blocklist-abuseipdb"
homepage: "https://github.com/borestad/blocklist-abuseipdb"
language: "Shell"
languages: ["Shell"]
languagePcts: [94]
topics: ["abuseipdb", "blocklist", "blocklists", "ipblocklist", "ipset", "malware", "iplist", "iplists", "blacklist", "blacklists"]
stars: 483
forks: 35
openIssues: 1
closedIssues: 18
watchers: 11
contributors: 1
recentReleases: 0
createdAt: "2022-11-01T14:32:17Z"
lastCommitAt: "2026-07-05T20:55:01Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 21
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/1e13341b048fafaa546bd62d93e85b175d9290327c73132569dafbcf8a279115/borestad/blocklist-abuseipdb"
---

# blocklist-abuseipdb

Lists with worst IPv4 & IPv6 offenders _(~99% confidence)_, provided by
[AbuseIPDB](https://www.abuseipdb.com/) (with permission).

- Lists are updated multiple times per day.
- The repository is continously squashed to keep down size.

### Extra Features

- [`Statistics`](https://github.com/borestad/blocklist-abuseipdb/blob/HEAD/stats)
- [`Hall of Shame`](https://github.com/borestad/blocklist-abuseipdb/blob/HEAD/stats/hallofshame) ip lists with aggressive /24 subnets -
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
> `#1` This repository is using the _"free forever"_ plan (5 fetches per day +
> 1000 ip lookups), but also aggregates the data from multiple publicly free &
> legal sources (also with free…
