---
repo: "itcmsgr/nftban"
name: "nftban"
description: "NFTBan is an open-source Linux Intrusion Prevention System (IPS) and firewall manager built on nftables, designed to integrate cleanly with modern Linux security stacks."
url: "https://github.com/itcmsgr/nftban"
homepage: "https://nftban.com"
language: "Shell"
languages: ["Shell", "Go"]
languagePcts: [59, 40]
topics: ["fail2ban", "firewall", "linux", "nftables", "security", "almalinux", "centos", "rocky", "rocky-linux", "rockylinux"]
stars: 6
forks: 0
openIssues: 5
closedIssues: 26
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-09-01T20:06:56Z"
lastCommitAt: "2026-07-04T19:20:36Z"
lastReleaseAt: "2025-12-27T22:27:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 70
maintainers: ["itcmsgr", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ad07a875fd8485de009943ee31786bfccd633e717097ad2f0baa5dbf70a9e17/itcmsgr/nftban"
discussionCount: 4
---

# NFTBan

**Linux Intrusion Prevention System & nftables Firewall Manager**

### CI/CD Status

### Security & Supply Chain

---

NFTBan is an open-source Linux Intrusion Prevention System (IPS) and firewall
manager built on nftables, designed to integrate cleanly with modern Linux
security stacks.

All packet decisions (accept, drop, bypass) are enforced in the nftables kernel.
The Go daemon writes to kernel sets. The Go validator derives health from kernel
state. The CLI presents kernel-derived truth.

### What NFTBan Provides

- nftables-native enforcement with kernel-managed timeouts
- Threat feed ingestion with CIDR aggregation
- Country blocking via GeoIP (DB-IP Lite default)
- Login brute-force detection across SSH, mail, FTP, panel services
- Port scan detection (classic + Suricata modes)
- L3/L4 rate limiting and connection limits
- Set-driven SSH brute-force connection-rate-limit (`tcp dport @ssh_ports ct count`) — follows every detected sshd listener port across IPv4/IPv6
- HTTP bot classification with 6 dedicated kernel sets
- Optional Suricata DPI integration (EVE JSON)
- 4-axis health model with kernel-derived truth validator
- Atomic nftables schema rebuild (validate…
