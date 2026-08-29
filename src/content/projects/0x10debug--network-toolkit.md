---
repo: "0x10debug/network-toolkit"
name: "network-toolkit"
description: "VPS Network Toolkit — Reverse Proxy, SSL & Tunnel in One Command"
readmeQualityOk: true
url: "https://github.com/0x10debug/network-toolkit"
language: "Shell"
languages: ["Shell"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-17T07:20:52Z"
lastCommitAt: "2026-08-29T12:17:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 17
maintainers: ["0x10debug"]
openGraphImageUrl: "https://opengraph.githubassets.com/32d9eb3b5767964d7f398c4ba76ed4fd02edf532470999a6c3c4cf0dc2d345b9/0x10debug/network-toolkit"
---

# VPS Network Toolkit — Reverse Proxy, SSL & Tunnel in One Command

Expose your self-hosted apps to the internet with a secure reverse proxy, automatic SSL certificates, and NAT traversal—all configured in one command. Built for VPS and Docker, this toolkit combines Caddy, frp, and DDNS into ready-to-deploy templates. No more piecing together separate tools for reverse proxy, Let's Encrypt, and tunnel setup. Choose a template, enter your domain, and your services are live with HTTPS.

> **Just hardened your VPS?** Deploy the `website` template first — it gives you a reverse proxy with automatic SSL. Then deploy your apps with [compose-recipes](https://github.com/0x10debug/compose-recipes) and route them through the proxy.

## Why This Exists

After deploying apps on your VPS, you need to expose them to the internet. This means:

1. **Reverse proxy** — route domain names to the right containers
2. **SSL certificates** — HTTPS, not HTTP, for security and trust
3. **NAT traversal** — expose home services through your VPS
4. **Dynamic DNS** — keep DNS updated if your IP changes

Each of these is a separate tool (Caddy, acme.sh, frp, ddns-go). Configuring them individually is complex…
