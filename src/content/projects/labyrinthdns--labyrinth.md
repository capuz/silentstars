---
repo: "labyrinthdns/labyrinth"
name: "labyrinth"
description: "Pure Go Recursive DNS Resolver with Web Dashboard"
readmeQualityOk: true
url: "https://github.com/labyrinthdns/labyrinth"
homepage: "http://labyrinthdns.com/"
language: "Go"
languages: ["Go"]
languagePcts: [79]
topics: ["dns", "recursive-dns", "resolver"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-02T14:29:59Z"
lastCommitAt: "2026-10-03T22:03:16Z"
lastReleaseAt: "2026-05-26T17:56:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 46
maintainers: ["ersinkoc"]
openGraphImageUrl: "https://opengraph.githubassets.com/e17fda416cf381e27a808d12b71ca6cb06f1d33586d842c78022bf1b22f5dedc/labyrinthdns/labyrinth"
---

# Labyrinth DNS Resolver

**Pure Go Recursive DNS Resolver with Web Dashboard**

*"Follow the thread through the DNS labyrinth."*

---

## Features

- **Single binary** — DNS resolver + web dashboard + auth, everything in one 6.8 MB executable
- **Web dashboard** — Real-time DNS monitoring, cache management, live query stream, dark/light theme
- **Operator-first dashboard** — Compact high-signal matrix, expandable secondary metrics, and inline cache query modal from top domains
- **Resolver Observability Panel** — Dashboard surface for the v0.6.24 RFC compliance counters: failure cache, server-cookie cache, NSEC/NSEC3 aggressive synthesis (NXDOMAIN vs NODATA split), BADCOOKIE retries, stale-while-refresh — each with hit-ratio bars and operator hints
- **DNS Lookup Diagnostics** — Live pipeline trace for any name: each iterative step, CNAME chase, and per-RRSIG DNSSEC verdict streamed over WebSocket. Inline pill badges per upstream event show AD bit, CD bit (RFC 6840 §5.9) and any RFC 8914 Extended DNS Error codes the upstream attached. Toggle cache bypass / DNSSEC skip to localise issues in seconds.
- **RFC Compliance Matrix** — AboutPage surface listing the standards Labyrinth…
