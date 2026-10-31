---
repo: "mheidari98/.proxy"
name: ".proxy"
description: "free proxies"
readmeQualityOk: true
url: "https://github.com/mheidari98/.proxy"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["proxy", "ss", "vless", "vmess", "trojan", "free"]
stars: 191
forks: 22
openIssues: 2
closedIssues: 2
watchers: 8
contributors: 1
recentReleases: 0
createdAt: "2022-10-17T07:18:50Z"
lastCommitAt: "2026-10-31T07:46:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 25
maintainers: ["mheidari98"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/552755369/a415e85c-e569-4b9f-8fe3-f78be99ff24e"
---

# .proxy

## NOTE⛔

This proxy list is collected from the list of proxies available on the Internet. They are only displayed in this repository for easy access. I am not responsible for proxies.

## Usage
Find proxies that are available in your country and use them in your applications.
1. Install the optional v2rayChecker client:
    ```console
    pip install --upgrade git+https://github.com/mheidari98/proxyUtil@main
    ```
2. Run v2rayChecker with 100 threads and check proxies:
    ```console
    v2rayChecker -v -T 100 --url 'https://raw.githubusercontent.com/mheidari98/.proxy/main/all'
    ```

## Source health

The hourly crawler fetches every source in `nodes.md` concurrently, under a download
deadline and size cap, and parses them with [proxyUtil](https://github.com/mheidari98/proxyUtil).
`nodes.md` shows the latest result per source; `source_status.json` keeps the history
(reachability, last valid data, last change, content hash, latency, failure streak).

- `healthy`: reachable and returned proxy configs recently
- `stale`: reachable, but its proxy set has not changed for seven days
- `failing`: currently unreachable, but not long enough to be considered dead
- `empty`:…
