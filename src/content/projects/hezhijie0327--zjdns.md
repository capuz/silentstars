---
repo: "hezhijie0327/ZJDNS"
name: "ZJDNS"
description: "ZJDNS - High performance recursive DNS server"
originalDescription: "ZJDNS - High performance recursive DNS server"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/hezhijie0327/ZJDNS"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["dns", "valkey", "golang", "vibe-coding", "dns-over-http3", "dns-over-https", "dns-over-quic", "dns-over-tls", "smartdns", "kernel-tls"]
stars: 43
forks: 14
openIssues: 3
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-05-03T03:04:10Z"
lastCommitAt: "2026-07-05T06:32:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 50
maintainers: ["hezhijie0327"]
openGraphImageUrl: "https://opengraph.githubassets.com/913b7befe078f907d1eef48f2a576b7df121b363e10fe43d3dedbdb66f803227/hezhijie0327/ZJDNS"
---

# ZJDNS

High performance recursive DNS resolver. SQLite relational cache engine, DNSSEC cryptographic validation, full protocol support for DoT/DoQ/DoH/DoH3.

> **Production readiness status**: This project has not been fully validated in a production environment, please use it cautiously for critical business.

## Quick Start

```bash
# Build
go build -o zjdns ./cmd/zjdns

# Start (pure recursive mode, memory cache)
./zjdns

# Start (specify configuration)
./zjdns -config config.json
```

```bash
# Test resolution
dig @127.0.0.1 -p 53 example.com                 # UDP
dig @127.0.0.1 -p 53 example.com +tcp             # TCP
kdig @127.0.0.1 -p 853 example.com +tls           # DoT
kdig @127.0.0.1 -p 853 example.com +quic          # DoQ
kdig @127.0.0.1 -p 443 example.com +https         # DoH
```

## Core Features

### Cache Engine

Relational cache based on SQLite WAL mode, designed with four tables:

| Table | Description |
|----|------|
| `entries` | Cache entries (query-response-flag-meta 16 columns + msg_wire BLOB, UNIQUE constraint) |
| `hit_counters` | Hot counters (entry_id as primary key, WITHOUT ROWID, DELETE CASCADE) |
| `ip_latency` | Probe latency (granularity by…
