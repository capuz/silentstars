---
repo: "dorianverlaine/pingclair"
name: "pingclair"
description: "A modern, high-performance web server and reverse proxy built on Pingora Cloudflare Pingora's raw performance, wrapped in Caddy's minimalist developer experience"
readmeQualityOk: true
url: "https://github.com/dorianverlaine/pingclair"
homepage: "https://pingclair.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["acme", "async-rust", "http3", "letsencrypt", "load-balancer", "pingora", "prometheus", "quic", "quiche", "reverse-proxy"]
stars: 106
forks: 1
openIssues: 60
closedIssues: 167
watchers: 0
contributors: 4
recentReleases: 4
createdAt: "2026-07-24T04:24:58Z"
lastCommitAt: "2026-10-02T09:47:24Z"
lastReleaseAt: "2026-09-21T13:13:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 36
maintainers: ["dorianverlaine", "siyan-solene-lin"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1310622894/84155c66-d32f-47e8-aa60-ec773b0d637d"
discussionCount: 0
---

**A Rust web server and reverse proxy built on Cloudflare Pingora.**

</div>

---

## 📖 Overview

Pingclair serves static content and proxies HTTP applications through one
configuration model. It supports HTTP/1.1 and HTTP/2 over TCP, HTTP/3 over
QUIC, automatic HTTPS, health-aware load balancing, and configuration reloads.

The primary configuration format is the Pingclairfile, a deliberately bounded
implementation of commonly used Caddyfile syntax. Unsupported Caddy features
are rejected during configuration loading rather than accepted as no-ops.

Pingclair is currently distributed as a release candidate. Review the
[project status](https://pingclair.com/project/status/) before using it for a
production deployment.

## ✨ Highlights

- **HTTP/1.1, HTTP/2, and HTTP/3** — Serve all three protocols from one
  configuration, with QUIC provided by Cloudflare quiche.
- **Automatic HTTPS** — Obtain public certificates through ACME, operate a
  persistent internal certificate authority, or load certificates from files.
- **Reverse proxying** — Route to multiple upstreams with load-balancing
  policies, active health checks, retries, circuit breakers, and bounded
  overload queues.
-…
