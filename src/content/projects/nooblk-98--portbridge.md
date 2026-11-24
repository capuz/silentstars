---
repo: "nooblk-98/portbridge"
name: "portbridge"
description: "A professional, lightweight, and user-friendly solution for managing WireGuard peers and port forwarding rules. Designed to easily expose services running behind NAT (like home routers or private networks) through a public VPS, without needing a public IP at the source."
readmeQualityOk: true
url: "https://github.com/nooblk-98/portbridge"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [53, 37]
topics: ["homeserver", "lightweight", "linux", "nat-traversal", "networking", "opensource", "peer-management", "port-forwarding", "remoteaccess", "user-friendly"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2025-12-15T08:14:33Z"
lastCommitAt: "2026-11-24T01:57:09Z"
lastReleaseAt: "2026-11-24T02:02:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 51
maintainers: ["nooblk-98"]
openGraphImageUrl: "https://opengraph.githubassets.com/d21cea8e0d29e73fa93dd4ede59370ed67a88e7d44ef89351ef3767939fae927/nooblk-98/portbridge"
---

# PortBridge

PortBridge connects devices behind NAT or CGNAT to a WireGuard server you control. Use **Peer settings** to reach a host or subnet privately over WireGuard. Use **Forwarding** when a service needs to be reachable from the internet on a public TCP or UDP port.

## Install on Debian or Ubuntu without Docker

Use a dedicated server with systemd, sudo access, and a public IP address or DNS name. Allow inbound UDP 51820 in your server and provider firewalls.

### Install a prebuilt release (recommended)

Releases include static binaries for 64-bit x86 (`x86_64`) and 64-bit ARM (`arm64`), the installer, and the dashboard files. You do not need git, Rust, or a compiler. This command pins `v1.0.0`, downloads the archive and its SHA-256 checksum, verifies the archive, extracts it into a private temporary directory, and runs the interactive installer. Replace `vpn.example.com` with your server's public hostname or IP. Find the Linux archives on the [Releases page](https://github.com/nooblk-98/portbridge/releases).
