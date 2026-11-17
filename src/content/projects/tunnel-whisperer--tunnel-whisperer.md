---
repo: "Tunnel-Whisperer/Tunnel-Whisperer"
name: "Tunnel-Whisperer"
description: "Surgical port forwarding for hostile network environments. Self-hosted, stealthy, and DPI-resistant."
readmeQualityOk: true
url: "https://github.com/Tunnel-Whisperer/Tunnel-Whisperer"
homepage: "https://tunnel-whisperer.github.io/Tunnel-Whisperer/"
language: "Go"
languages: ["Go"]
languagePcts: [83]
topics: ["port-forwarding", "reverse-proxy", "tunneling", "v2ray", "vmess", "websocket", "websockets"]
stars: 16
forks: 1
openIssues: 5
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-17T06:43:53Z"
lastCommitAt: "2026-11-17T14:37:40Z"
lastReleaseAt: "2026-06-22T10:31:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 44
maintainers: ["alicommit-malp"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e7af0def031ae56eea8e2f748ba104e2871b38d31cb5c588b458d8552e41f66/Tunnel-Whisperer/Tunnel-Whisperer"
---

Tunnel Whisperer creates **resilient, application-layer bridges** for specific ports across separated private networks. It encapsulates traffic in standard HTTPS to traverse firewalls, NAT, and Deep Packet Inspection (DPI).

> **[Full Documentation](https://tunnel-whisperer.github.io/Tunnel-Whisperer)** — getting started, guides, architecture, API reference, and more.

---

## Why it's different

Two design choices set Tunnel Whisperer apart from mesh VPNs like **Tailscale**, **NetBird**, and the rest:

- **🔐 Your users' identities never leave your server.** Authorization lives entirely in the on-prem server's `authorized_keys` — SSH public keys with per-user `permitopen` rules, re-read on every connection. **No cloud or third-party control plane ever brokers or stores who your users are.** The relay is a blind forwarder: it holds no credentials, no CA signing keys, and never sees plaintext.
- **🎯 You grant ports, not networks.** A user is allowed exactly the `host:port` targets you specify — nothing else. **There is no virtual network and no routable overlay:** a granted user reaches only the services you opened, never the network they sit on. No subnet exposure, no lateral…
