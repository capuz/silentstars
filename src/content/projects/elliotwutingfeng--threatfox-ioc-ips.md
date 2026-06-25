---
repo: "elliotwutingfeng/ThreatFox-IOC-IPs"
name: "ThreatFox-IOC-IPs"
description: "Machine-readable .txt IP blocklist from ThreatFox by Abuse.ch, updated every hour."
url: "https://github.com/elliotwutingfeng/ThreatFox-IOC-IPs"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["abuse", "aiohttp", "blocklist", "firewalla", "osint", "pfblockerng", "python", "spamhaus", "threatfox", "ioc"]
stars: 56
forks: 1
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2022-10-29T15:51:55Z"
lastCommitAt: "2026-06-25T01:37:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 49
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/aab991d9fb224df1043900322d9e3a2bcab7881aa6ffd0a4d7e36680730c5fd1/elliotwutingfeng/ThreatFox-IOC-IPs"
---

# ThreatFox IOC IPs by Abuse.ch

![Python](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue)
![AIOHTTP](https://img.shields.io/badge/AIOHTTP-2C5BB4?style=for-the-badge&logo=aiohttp&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

Machine-readable `.txt` IP blocklist from [ThreatFox](https://threatfox.abuse.ch) by [Abuse.ch](https://abuse.ch), updated every hour.

The IPs in this blocklist are compiled by **Abuse.ch** under the [Creative Commons Zero v1.0 Universal](https://threatfox.abuse.ch/faq) license.

**Disclaimer:** _This project is not sponsored, endorsed, or otherwise affiliated with Abuse.ch._

## Blocklist download

| File | Download |
|:-:|:-:|
| ips.txt | [:floppy_disk:](ips.txt?raw=true) |

## Requirements

- [uv](https://docs.astral.sh/uv)

## Usage

```bash
uv run update.py
```

&nbsp;

<sup>These files are provided "AS IS", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright…
