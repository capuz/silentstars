---
repo: "mihsergeev/amnezia-control"
name: "amnezia-control"
description: "Self-hosted web panel to manage AmneziaVPN servers: AmneziaWG (incl. 3.1), OpenVPN over Cloak and XRay/REALITY. Two-server cascades (enter in one country, exit in another) over GRE or VLESS, client configs, traffic and node monitoring, Telegram alerts, 2FA. FastAPI + React, Docker."
readmeQualityOk: true
url: "https://github.com/mihsergeev/amnezia-control"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [68, 28]
topics: ["amnezia", "amneziavpn", "amneziawg", "censorship-circumvention", "cloak", "docker", "fastapi", "openvpn", "react", "reality"]
stars: 33
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-07T21:27:03Z"
lastCommitAt: "2026-11-01T22:57:34Z"
lastReleaseAt: "2026-07-09T21:45:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 39
maintainers: ["mihsergeev"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1292799501/b6333405-686d-467a-94b1-965c2749874f"
---

Nodes are managed over plain SSH (no agent installed on them). Four protocols are supported side by side: **AmneziaWG**, **AmneziaWG 3.1**, **OpenVPN over Cloak**, and **XRay / REALITY**. Clients are issued in the AmneziaVPN `vpn://` format (with a scannable animated QR) and, for WireGuard, as a plain `.conf`.

## Why Amnezia Control

The [AmneziaVPN desktop client](https://amnezia.org) is great for personal use — set up a server, connect, share access. Amnezia Control is for when you run **several nodes for a team** and doing it by hand stops scaling.

| Capability | Desktop AmneziaVPN | Amnezia Control |
|---|:---:|:---:|
| Manage a whole server fleet | Partial | ✅ |
| Import existing servers (`vpn://` or bulk) | ❌ | ✅ |
| Clients from a single interface | ❌ | ✅ |
| Auto-expiring access | ❌ | ✅ |
| Pause & resume a client (keep the slot) | ❌ | ✅ |
| Traffic & node-health monitoring | ❌ | ✅ |
| Two-server cascade: enter in one country, exit in another | ❌ | ✅ |
| Link test that spots stalled TCP and offers a GRE tunnel | ❌ | ✅ |
| Telegram & webhook alerts (server, cascade, clients gone, disk) | ❌ | ✅ |
| Config snapshots & one-click rollback | ❌ | ✅ |
| Scheduled backups &…
