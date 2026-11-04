---
repo: "amgpulse/torsystem"
name: "torsystem"
description: "Route your entire Linux system through Tor transparently, like a VPN — with leak protection built in."
readmeQualityOk: true
url: "https://github.com/amgpulse/torsystem"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["linux", "linux-app", "linux-security", "network", "network-security", "security", "security-tools", "tor", "tor-hidden-services", "tor-network"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-26T07:35:43Z"
lastCommitAt: "2026-11-04T13:04:54Z"
lastReleaseAt: "2026-10-22T04:58:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 75
undervaluedScore: 41
maintainers: ["amgpulse"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1347047313/4bd64c79-ad3f-4d42-8b99-c59f430061fd"
---

```
████████╗ ██████╗ ██████╗ ███████╗██╗   ██╗███████╗████████╗███████╗███╗   ███╗
╚══██╔══╝██╔═══██╗██╔══██╗██╔════╝╚██╗ ██╔╝██╔════╝╚══██╔══╝██╔════╝████╗ ████║
   ██║   ██║   ██║██████╔╝███████╗ ╚████╔╝ ███████╗   ██║   █████╗  ██╔████╔██║
   ██║   ██║   ██║██╔══██╗╚════██║  ╚██╔╝  ╚════██║   ██║   ██╔══╝  ██║╚██╔╝██║
   ██║   ╚██████╔╝██║  ██║███████║   ██║   ███████║   ██║   ███████╗██║ ╚═╝ ██║
   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚══════╝   ╚═╝   ╚══════╝╚═╝     ╚═╝
```

### Route your entire Linux system through Tor — transparently, like a VPN.

---

**torsystem** is a single-file CLI tool that transparently redirects **all** outgoing TCP and DNS traffic on your machine through the [Tor network](https://www.torproject.org/), the same way a VPN would — no per-app configuration, no `torify`, no `proxychains`. Just `start` and every connection on the system goes through Tor.

## ✨ Features

- 🧅 **System-wide routing** — all TCP + DNS traffic transparently redirected through Tor via `nftables` or `iptables`
- 🛡️ **Leak-proof by default** — a final `DROP` rule blocks anything that isn't routed through Tor instead of silently leaking it, and all IPv6 traffic is blocked…
