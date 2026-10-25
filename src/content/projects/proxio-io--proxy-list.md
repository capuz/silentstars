---
repo: "proxio-io/proxy-list"
name: "proxy-list"
description: "Free proxy list, updated every 20 minutes — HTTP, HTTPS, SOCKS4, SOCKS5 as ip:port txt + JSON with country, anonymity, latency and reliability scores. Mirrored from proxio.io"
readmeQualityOk: true
url: "https://github.com/proxio-io/proxy-list"
homepage: "https://proxio.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["free-proxy", "http-proxy", "proxy", "proxy-list", "proxy-scraper", "socks4", "socks5", "web-scraping"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-26T13:28:25Z"
lastCommitAt: "2026-10-25T08:40:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 52
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/41028cdff791050a2f94a1762e98d13dd8845660528a31076062184b08e6cd87/proxio-io/proxy-list"
---

# Free proxy list — HTTP · HTTPS · SOCKS4 · SOCKS5

Live, re-checked public proxies from **[proxio.io](https://proxio.io)**, mirrored here **every 20 minutes**.
Every entry answered a real protocol check within the last 7 days; dead proxies drop off automatically.

Last update: **2026-10-25 08:40 UTC**

| file | live proxies |
|---|---:|
| [`http.txt`](https://github.com/proxio-io/proxy-list/blob/HEAD/http.txt) | 5,997 |
| [`https.txt`](https://github.com/proxio-io/proxy-list/blob/HEAD/https.txt) | 8,142 |
| [`socks4.txt`](https://github.com/proxio-io/proxy-list/blob/HEAD/socks4.txt) | 1,764 |
| [`socks5.txt`](https://github.com/proxio-io/proxy-list/blob/HEAD/socks5.txt) | 1,779 |
| [`all.txt`](https://github.com/proxio-io/proxy-list/blob/HEAD/all.txt) / [`all.json`](https://github.com/proxio-io/proxy-list/blob/HEAD/all.json) | 16,707 |

## Files

| file | format |
|---|---|
| `http.txt`, `https.txt`, `socks4.txt`, `socks5.txt` | one `ip:port` per line, newest-checked first |
| `all.txt` | every live proxy, `ip:port` |
| `all.json` | full objects: protocols, country, city, anonymity, latency, reliability score, uptime, check history |

Raw URLs are stable — pin them in scripts:…
