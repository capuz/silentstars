---
repo: "mihsergeev/amnezia-control"
name: "amnezia-control"
description: "Self-hosted web panel to manage AmneziaVPN / AmneziaWG, OpenVPN-over-Cloak and XRay/REALITY VPN servers — deploy nodes, issue & revoke client configs, monitor traffic & node health, alerts, 2FA. FastAPI + React, Docker."
readmeQualityOk: true
url: "https://github.com/mihsergeev/amnezia-control"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [67, 28]
topics: ["amnezia", "amneziavpn", "amneziawg", "censorship-circumvention", "cloak", "docker", "fastapi", "openvpn", "react", "reality"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-07T21:27:03Z"
lastCommitAt: "2026-08-31T10:00:03Z"
lastReleaseAt: "2026-07-09T21:45:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 50
maintainers: ["mihsergeev", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1292799501/b6333405-686d-467a-94b1-965c2749874f"
---

</p>

  <b>Self-hosted web panel to manage a fleet of VPN servers</b> — deploy nodes, issue and revoke client configs, watch traffic and server health, all from one place. A replacement for managing servers by hand through the AmneziaVPN desktop client.
</p>

</p>

Nodes are managed over plain SSH (no agent installed on them). Four protocols are supported side by side: **AmneziaWG**, **AmneziaWG 3.0**, **OpenVPN over Cloak**, and **XRay / REALITY**. Clients are issued in the AmneziaVPN `vpn://` format (with a scannable animated QR) and, for WireGuard, as a plain `.conf`.

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
| Telegram & webhook…
