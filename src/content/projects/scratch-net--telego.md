---
repo: "Scratch-net/telego"
name: "telego"
description: "High-performance Telegram MTProxy with TLS fronting, probe resistance, and per-user analytics. Bypass censorship undetected."
readmeQualityOk: true
url: "https://github.com/Scratch-net/telego"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["gnet", "golang", "mtproxy", "proxy", "telegram", "censorship-circumvention", "mtproto", "mtproto-proxy", "obfuscation", "privacy"]
stars: 60
forks: 1
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-22T11:59:14Z"
lastCommitAt: "2026-08-24T04:21:29Z"
lastReleaseAt: "2026-03-14T14:40:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 23
maintainers: ["Scratch-net", "dependabot[bot]", "monoflash"]
openGraphImageUrl: "https://opengraph.githubassets.com/576100b731a2cfa8fd954cd476dba72e07b391afe98e10bba39f2f39e7e63ee0/Scratch-net/telego"
discussionCount: 1
---

</p>

<h1 align="center">telEgo</h1> 

  <strong>High-performance Telegram MTProxy in Go with TLS fronting</strong>
</p>

</p>

</p>

  <b>English</b> | <a href="README.ru.md">Русский</a>
</p>

---

> **Telegram blocked in your country?** telEgo's TLS fronting makes your proxy indistinguishable from regular HTTPS traffic to censors. [Get started in 2 minutes](#quick-start)

---

## Features

### Networking
- **Event-driven I/O** — Built on [gnet](https://github.com/panjf2000/gnet) with epoll/kqueue for maximum efficiency
- **Native WEB Proxy** — Optional gnet HTTPS carrier for Telegram Desktop behind Nginx
- **Zero-copy relaying** — Direct buffer manipulation without intermediate copies
- **Buffer pooling** — Striped sync.Pool design eliminates allocations in hot paths
- **Optimized TCP** — `TCP_NODELAY`, `TCP_QUICKACK`, 64KB buffers, `SO_REUSEPORT`

### Security
- **TLS Fronting** — Fetches real certificates from mask host for perfect camouflage
- **Probe Resistance** — Forwards unrecognized clients to mask host (indistinguishable from HTTPS)
- **Replay Protection** — 64-shard LRU cache with TTL expiration ([hashicorp/golang-lru](https://github.com/hashicorp/golang-lru))
- **Key…
