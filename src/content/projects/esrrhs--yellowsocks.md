---
repo: "esrrhs/yellowsocks"
name: "yellowsocks"
description: "Linux proxy that serves DNS, DoT, DoH, SOCKS5, and HTTP locally, and forwards proxied traffic through SPP."
readmeQualityOk: true
url: "https://github.com/esrrhs/yellowsocks"
language: "Go"
languages: ["Go"]
languagePcts: [89]
topics: ["socks5", "redirector"]
stars: 38
forks: 9
openIssues: 0
closedIssues: 1
watchers: 6
contributors: 2
recentReleases: 3
createdAt: "2020-02-23T10:53:41Z"
lastCommitAt: "2026-10-21T23:36:25Z"
lastReleaseAt: "2026-09-27T06:57:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 60
maintainers: ["esrrhs", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/88706c76d50352bdc5da9347e5806ab42f22f9659853ba578e620b6eef3744ae/esrrhs/yellowsocks"
---

# yellowsocks

[<img src="https://img.shields.io/github/license/esrrhs/yellowsocks">](https://github.com/esrrhs/yellowsocks)
[<img src="https://img.shields.io/github/languages/top/esrrhs/yellowsocks">](https://github.com/esrrhs/yellowsocks)
[<img src="https://img.shields.io/github/v/release/esrrhs/yellowsocks">](https://github.com/esrrhs/yellowsocks/releases)
[<img src="https://img.shields.io/github/downloads/esrrhs/yellowsocks/total">](https://github.com/esrrhs/yellowsocks/releases)

Linux proxy, version **2.0.0**. It serves DNS, DoT, DoH, SOCKS5, and HTTP on the local machine, and forwards proxied traffic to a remote [SPP](https://github.com/esrrhs/spp) server.

## Features

- **DNS**: standard UDP queries
- **DoH**: TCP `/dns-query` (RFC 8484, GET and POST)
- **DoT**: optional DNS-over-TLS (RFC 7858)
- **SOCKS5**: TCP CONNECT and UDP ASSOCIATE
- **HTTP proxy**: plain HTTP requests and HTTPS CONNECT
- **SPP upstream**: `tcp`, `udp`, `kcp`, or `quic`, with multiple nodes and automatic failover
- **Routing**: domain, CIDR, and GeoIP rules choose a direct connection or SPP
- **Statistics API**: live and historical traffic, connections, routing, DNS and errors over HTTP

Domestic…
