---
repo: "mocl1220/ip"
name: "ip"
description: "Automatically collects public preferred IPs and organizes them"
originalDescription: "自动采集公开优选ip，并整理"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/mocl1220/ip"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["cfip"]
stars: 11
forks: 9
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-22T07:14:50Z"
lastCommitAt: "2026-11-07T22:51:31Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 70
undervaluedScore: 69
maintainers: ["mocl1220"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab9d986a047dc9965939887cab1c9722356326e4075439c43496469ca5c72c17/mocl1220/ip"
---

Project Overview
--------

This project uses the automation script [`autoip6.py`](https://github.com/mocl1220/ip/blob/HEAD/autoip6.py) to periodically fetch Cloudflare preferred IPv4 and IPv6 addresses from multiple public sources, automatically look up the country each address belongs to, and save them to the [`ip.txt`](https://github.com/mocl1220/ip/blob/HEAD/ip.txt) and [`ipv6.txt`](https://github.com/mocl1220/ip/blob/HEAD/ipv6.txt) files respectively. The script supports deduplication and formatted output, and uses GitHub Actions for scheduled automatic updates.

Usage
--------

1. **Local run**

   - Install dependencies:
     ```sh
     pip install requests ipaddress
     ```
   - Run the script:
     ```sh
     python autoip6.py
     ```
   - After running, the `ip.txt` and `ipv6.txt` files will be generated or updated in the current directory.
2. **Automated run (recommended)**

   - This project has [GitHub Actions](https://github.com/mocl1220/ip/blob/HEAD/.github/workflows/autoip6.yml) configured, which automatically fetches and updates the IP files every hour, with no manual action required.

Output File Description
------------

- `ip.txt`: each line is formatted as…
