---
repo: "mocl1220/ip"
name: "ip"
description: "Automatically collect public preferred IPs and organize them"
originalDescription: "自动采集公开优选ip，并整理"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/mocl1220/ip"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["cfip"]
stars: 9
forks: 8
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-22T07:14:50Z"
lastCommitAt: "2026-07-28T14:56:31Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 70
undervaluedScore: 67
maintainers: ["mocl1220"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef7aa83ea01119064173a883586b9451014a2adc76b21fce64cfd2a515d1677c/mocl1220/ip"
---

Project Introduction
--------

This project uses an automated script [`autoip6.py`](https://github.com/mocl1220/ip/blob/HEAD/autoip6.py) to periodically fetch preferred IPv4 and IPv6 addresses from multiple public sources of Cloudflare, and automatically queries their corresponding countries, saving them to [`ip.txt`](https://github.com/mocl1220/ip/blob/HEAD/ip.txt) and [`ipv6.txt`](https://github.com/mocl1220/ip/blob/HEAD/ipv6.txt) files. The script supports deduplication, formatted output, and achieves scheduled automatic updates through GitHub Actions.

Usage
--------

1. **Local Run**

   - Install dependencies:
     ```sh
     pip install requests ipaddress
     ```
   - Run the script:
     ```sh
     python autoip6.py
     ```
   - After running, `ip.txt` and `ipv6.txt` files will be generated/updated in the current directory.
2. **Automated Run (Recommended)**

   - This project is configured with [GitHub Actions](https://github.com/mocl1220/ip/blob/HEAD/.github/workflows/autoip6.yml) to automatically fetch and update IP files every hour without manual operation.

Output File Description
------------

- `ip.txt`: Each line is formatted as `IPv4:8443#Country Code`, e.g.,…
