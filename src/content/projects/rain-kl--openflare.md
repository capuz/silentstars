---
repo: "Rain-kl/OpenFlare"
name: "OpenFlare"
description: "Next-Gen Distributed Reverse Proxy & Edge Security Gateway for OpenResty / Nginx"
readmeQualityOk: true
url: "https://github.com/Rain-kl/OpenFlare"
homepage: "https://openflare.fyrn.link"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [57, 35]
topics: ["cdn", "network", "reverse-proxy", "waf", "nat-traversal", "openresty", "security", "cloudflare-alternative", "ddos-protection", "turnstile"]
stars: 302
forks: 75
openIssues: 2
closedIssues: 21
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-03-09T15:20:39Z"
lastCommitAt: "2026-11-17T14:32:10Z"
lastReleaseAt: "2026-03-30T05:35:33Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 33
maintainers: ["Rain-kl", "dependabot[bot]", "ArthurKoba"]
openGraphImageUrl: "https://opengraph.githubassets.com/c13c0bbd420097af8c03d7c7a3c792d388c16cfef92db228c2b59c48c40eb9d1/Rain-kl/OpenFlare"
---

# OpenFlare

**Next-Gen Distributed Reverse Proxy & Edge Security Gateway for OpenResty / Nginx**

**[English](https://github.com/Rain-kl/OpenFlare/blob/HEAD/README.md) | [简体中文](https://github.com/Rain-kl/OpenFlare/blob/HEAD/README.zh-CN.md)**

---

## 📖 What is OpenFlare?

**OpenFlare** is a modern, open-source **distributed reverse proxy and edge security gateway platform** designed for multi-server infrastructures and edge clusters.

Rather than a simple single-host admin panel, OpenFlare empowers traditional OpenResty / Nginx nodes with **centralized cluster orchestration, dynamic zero-reload sync, line-rate edge WAF defense, and secure in-network tunneling**:

* ⚡ **Zero-Reload Dynamic Orchestration**: Centralized control plane manages any number of edge nodes. Synchronize rule diffs in milliseconds with zero Nginx reload disruptions.
* 🛡️ **Built-in Edge Security & Anti-CC (Turnstile Alternative)**: Comprehensive WAF rule engine, MaxMind GeoIP regional ACLs, and **client-side cryptographic Proof of Work (PoW) challenges** to eliminate botnets and CC attacks at line rate.
* 🚇 **Zero-Trust Tunnels (Cloudflare Tunnel Alternative)**: Securely publish private homelab and…
