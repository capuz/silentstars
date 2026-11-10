---
repo: "Obein/DNS-Worker"
name: "DNS-Worker"
description: "Serverless Privacy-First Protective DNS Resolver"
readmeQualityOk: true
url: "https://github.com/Obein/DNS-Worker"
homepage: "https://obein.github.io/DNS-Worker/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["cloudflare-pages", "cloudflare-workers", "controld", "dns-over-https", "nextdns", "protective-dns", "servlerless", "dns", "adblock", "dns-analysis"]
stars: 31
forks: 18
openIssues: 0
closedIssues: 17
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-03-08T17:20:57Z"
lastCommitAt: "2026-11-10T14:49:33Z"
lastReleaseAt: "2026-06-16T01:43:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 56
maintainers: ["koo14"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b4fd0a6db457db3949973d02caa81607ddd4455d6182fb0cdbdf55a877762a1/Obein/DNS-Worker"
---

English | <a href="README_zh-CN.md">中文 (简体)</a> | <a href="README_zh-TW.md">中文 (正體)</a>

---

## 📖 Introduction

**DNS Worker** is a privacy-first protective DNS resolution system with built-in ad & malicious domain blocking, supporting **Dual-Engine Architecture**:

- **☁️ Edge Serverless Mode**: Run on Cloudflare Workers across 300+ edge locations worldwide with D1 database, enjoying zero maintenance and high-availability DoH (HTTP/2 & HTTP/3 compatible).
- **🖥️ Standalone Server Mode (Serverfull)**: Run completely free of Cloudflare on your own VPS, Linux home server, or Windows machine, with native **UDP 53**, **DoT 853** (DoQ compatible with TLS SNI routing for Android Private DNS), and local SQLite.

> 📚 **User Documentation**  
> 👉 [**https://obein.github.io/DNS-Worker/**](https://obein.github.io/DNS-Worker/)

### Quick Start

#### Deploy to Cloudflare Workers

#### Standalone Server via npm
```bash
# Install globally and run
npm install -g dns-worker
dns-worker config init
dns-worker
# Web Dashboard: http://localhost:10080
```

#### Standalone Server via Docker (Beta)
```bash
# Run container with HTTPS (443), DoT (853), classic DNS (53), and TLS certificates
docker run…
