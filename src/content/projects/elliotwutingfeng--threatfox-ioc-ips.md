---
repo: "elliotwutingfeng/ThreatFox-IOC-IPs"
name: "ThreatFox-IOC-IPs"
description: "Machine-readable .txt IP blocklist from ThreatFox by Abuse.ch, updated every hour."
readmeQualityOk: true
url: "https://github.com/elliotwutingfeng/ThreatFox-IOC-IPs"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["abuse", "aiohttp", "blocklist", "firewalla", "osint", "pfblockerng", "python", "spamhaus", "threatfox", "ioc"]
stars: 58
forks: 1
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2022-10-29T15:51:55Z"
lastCommitAt: "2026-10-31T19:00:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 48
maintainers: ["actions-user", "elliotwutingfeng"]
openGraphImageUrl: "https://opengraph.githubassets.com/13ebe6e675e45762a0a4cd759c5571d4955d6acaef59d17e0d49ed6773ac2be1/elliotwutingfeng/ThreatFox-IOC-IPs"
---

# ThreatFox IOC IPs by Abuse.ch

Machine-readable `.txt` IP blocklist from [ThreatFox](https://threatfox.abuse.ch) by [Abuse.ch](https://abuse.ch), updated every hour.

The IPs in this blocklist are compiled by **Abuse.ch** under the [Creative Commons Zero v1.0 Universal](https://threatfox.abuse.ch/faq) license.

**Disclaimer:** _This project is not sponsored, endorsed, or otherwise affiliated with Abuse.ch._

## Blocklist download

| File | Download |
|:-:|:-:|
| ips.txt | [:floppy_disk:](https://github.com/elliotwutingfeng/ThreatFox-IOC-IPs/blob/HEAD/ips.txt?raw=true) |

## Requirements

- [uv](https://docs.astral.sh/uv)

## Usage

```bash
uv run update.py
```

&nbsp;
