---
repo: "FCFlenkchy/FCAE_VPN"
name: "FCAE_VPN"
description: "FCAE_VPN, windows and android versions are stable and i dont know about linux version."
readmeQualityOk: true
url: "https://github.com/FCFlenkchy/FCAE_VPN"
language: "Rust"
languages: ["Rust", "Go"]
languagePcts: [59, 24]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-21T12:35:47Z"
lastCommitAt: "2026-07-29T06:14:34Z"
lastReleaseAt: "2026-07-25T08:12:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 51
maintainers: ["Plangto", "Bat-Script"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1d49a2d300aeb622122f28fc07f53de1dfe6be77795c1d92dd0848334911063/FCFlenkchy/FCAE_VPN"
---

</p>

# FCAE VPN

A censorship circumvention client designed for heavily restricted networks. It automatically discovers reachable routes, establishes an encrypted tunnel, and exposes a local SOCKS5/HTTP proxy for your applications.

Built on top of **[Aether](https://github.com/CluvexStudio/aether)** with native GUI frontends for Windows, Linux, and Android.

## How It Works

FCAE VPN connects to **Cloudflare's WARP network** — the same infrastructure behind Cloudflare's 1.1.1.1 DNS service. Here's the flow:

1. **Account provisioning** — On first launch, the client creates a WARP device identity and obtains dedicated IPv4/IPv6 addresses plus WireGuard keypairs from Cloudflare's registration API.
2. **Endpoint scanning** — The client probes a list of Cloudflare edge IPs across multiple ports to find a reachable gateway. Each candidate is validated with a real handshake (and optionally a full HTTP request in ironclad mode) to confirm the route actually passes traffic.
3. **Tunnel establishment** — Once a working edge is found, an encrypted tunnel is opened:
   - **MASQUE** — Traffic is encapsulated inside HTTP/3 (QUIC) or HTTP/2 (TLS) sessions using the `CONNECT-IP` method, making…
