---
repo: "zer0horizon/ip-discovery"
name: "ip-discovery"
description: "Detect your public IP address using DNS, STUN, or HTTP — with built-in fallback across trusted providers."
readmeQualityOk: true
url: "https://github.com/zer0horizon/ip-discovery"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["cli", "dns", "ipv4", "ipv6", "nat-traversal", "networking", "public-ip", "public-ip-address", "rust", "stun"]
stars: 21
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-17T18:12:59Z"
lastCommitAt: "2026-07-18T05:46:24Z"
lastReleaseAt: "2026-03-26T06:11:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 54
undervaluedScore: 6
maintainers: ["zer0horizon"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c96b048310a6a7555ab2dc565817025e087e995184936fdfd5b2cb3564fb844/zer0horizon/ip-discovery"
---

# ip-discovery - Fast public IP lookup

A Rust library and CLI to detect your public IP address using DNS, STUN, or HTTP — with built-in fallback across trusted providers.

## Why ip-discovery?

Most machines don't know their own public IP. If you're behind NAT, a load balancer, or a cloud VPC, your OS only sees a private address like `10.x.x.x` or `192.168.x.x`. This library solves that — reliably, fast, and with zero configuration.

**Common use cases:**

- **Self-hosted servers with dynamic IPs** — Your home server or office NAS gets a new IP every time the ISP rotates it. Use `ip-discovery` to detect the change and update your DNS record (dynamic DNS), notify clients, or refresh firewall rules — automatically.

- **WebRTC / P2P connection setup** — When building WebRTC applications, you need your public IP to generate SDP offers/answers and ICE candidates. `ip-discovery` uses the same STUN protocol that browsers use, giving you the public-facing address for direct peer connections without relying on a browser environment.

- **NAT traversal & hole punching** — Building a peer-to-peer system (game server, file sharing, VPN)? You need to know your public IP and the type of NAT…
