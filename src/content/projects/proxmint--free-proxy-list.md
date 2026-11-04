---
repo: "proxmint/free-proxy-list"
name: "free-proxy-list"
description: "Free proxy list, re-validated every 30 minutes. HTTP/HTTPS/SOCKS4/SOCKS5, measured anonymity, auto-committed as txt + JSON."
readmeQualityOk: true
url: "https://github.com/proxmint/free-proxy-list"
homepage: "https://proxmint.com/free-proxies#api"
language: "Java"
languages: ["Java", "Python"]
languagePcts: [31, 23]
topics: ["free-proxy", "http-proxy", "proxies", "proxy-checker", "proxy-list", "scraping", "socks4", "socks5", "web-scraping"]
stars: 27
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-08-05T20:50:42Z"
lastCommitAt: "2026-11-04T02:56:20Z"
lastReleaseAt: "2026-10-25T16:07:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 40
maintainers: ["prian3003"]
openGraphImageUrl: "https://opengraph.githubassets.com/82cc6e503011fff54fe41f0c51b6d00456b2c0e3523cbb72ca07d20b152d47ee/proxmint/free-proxy-list"
---

# Free Proxy List — checked every 30 minutes

**1734 live proxies** · 87 countries · updated **2026-11-04 02:56 UTC**

Every proxy in this list is re-tested every 30 minutes by a real HTTP
request *through it* to our own echo endpoint — not pinged, not assumed. Every entry here last passed that test within **5.5 hours** (median 60 minutes).
Entries that stop answering are dropped, not left to rot. That is the only thing
this repo does differently, and it is the whole point: most public lists are
unvalidated scrapes where the majority of entries are already dead when you
download them.

| | |
|---|---|
| Live now | **1734** |
| Countries | 87 |
| Median latency | 2700 ms |
| Re-validated | every 30 minutes |

## Files

| File | Count | Format |
|---|---|---|
| [`proxies/all.txt`](https://github.com/proxmint/free-proxy-list/blob/HEAD/proxies/all.txt) | 1734 | `protocol://ip:port` |
| [`proxies/http.txt`](https://github.com/proxmint/free-proxy-list/blob/HEAD/proxies/http.txt) | 590 | `ip:port` |
| [`proxies/https.txt`](https://github.com/proxmint/free-proxy-list/blob/HEAD/proxies/https.txt) | 52 | `ip:port` |
|…
