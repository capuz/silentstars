---
repo: "FCFlenkchy/FCAE_VPN"
name: "FCAE_VPN"
description: "FCAE VPN — Open-source censorship circumvention VPN client, Supports Windows, Linux, macOS, and Android."
readmeQualityOk: true
url: "https://github.com/FCFlenkchy/FCAE_VPN"
homepage: "https://fcaevpn.fluxcast.dev/"
language: "Rust"
languages: ["Rust"]
languagePcts: [47]
topics: ["vpn", "vpn-client", "vpn-connections", "vpn-service", "ai", "android", "linux", "macos", "windows", "windows-10"]
stars: 64
forks: 4
openIssues: 2
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-07-21T12:35:47Z"
lastCommitAt: "2026-10-13T10:57:37Z"
lastReleaseAt: "2026-07-25T12:27:39Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 40
maintainers: ["Plangto", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c3bbec1b96d14b070eb7e8e0b2f29ffde753ebc0acf89df7ca9a72c2041af21/FCFlenkchy/FCAE_VPN"
discussionCount: 2
---

# FCAE VPN

A censorship circumvention client designed for heavily restricted networks. It automatically discovers reachable routes, establishes an encrypted tunnel, and exposes a local SOCKS5/HTTP proxy for your applications.

Built on top of **[Aether](https://github.com/CluvexStudio/aether)** with native GUI frontends for Windows, Linux, macOS, and Android.

## How It Works

FCAE VPN connects to **Cloudflare's WARP network** — the same infrastructure behind Cloudflare's 1.1.1.1 DNS service. Here's the flow:

1. **Account provisioning** — On first launch, the client creates a WARP device identity and obtains dedicated IPv4/IPv6 addresses plus WireGuard keypairs from Cloudflare's registration API.
2. **Endpoint scanning** — The client probes a list of Cloudflare edge IPs across multiple ports to find a reachable gateway. Each candidate is validated with a real handshake (and optionally a full HTTP request in ironclad mode) to confirm the route actually passes traffic.
3. **Tunnel establishment** — Once a working edge is found, an encrypted tunnel is opened:
   - **MASQUE** — Traffic is encapsulated inside HTTP/3 (QUIC) or HTTP/2 (TLS) sessions using the `CONNECT-IP` method,…
