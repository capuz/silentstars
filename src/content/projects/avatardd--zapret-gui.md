---
repo: "avatarDD/zapret-gui"
name: "zapret-gui"
description: "zapret2 web-gui for Keenetic, OpenWRT"
originalDescription: "zapret2 web-gui for Keenetic, OpenWRT"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/avatarDD/zapret-gui"
language: "Python"
languages: ["Python"]
languagePcts: [76]
stars: 168
forks: 13
openIssues: 2
closedIssues: 60
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-03-23T14:32:54Z"
lastCommitAt: "2026-11-03T19:05:42Z"
lastReleaseAt: "2026-04-24T15:28:34Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 32
maintainers: ["claude", "avatarDD", "msc0101"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c397eb5d52f571073b5695629b8011502b42c3d5f34be64b8527edd6f6fe24e/avatarDD/zapret-gui"
discussionCount: 3
---

# Zapret Web-GUI

> [!IMPORTANT]
> This material has been prepared for scientific and technical purposes.
> Using the provided materials for purposes other than familiarization may violate applicable law.
> The author is not responsible for unlawful use of this material.

> [!WARNING]
> **You use these instructions at your own risk!**
> 
> The author is not responsible for damage to equipment and software, problems with access, and sexual potency.
> It is assumed that you understand what you are doing.

---

**Web interface for bypassing blocks on routers** with Entware (Keenetic)
and OpenWrt. It combines the following in one window:

- **nfqws2** (zapret2): DPI bypass "in place", without a tunnel;
- **AmneziaWG / sing-box / mihomo** tunnels: used when a resource is blocked
  by IP and a proxy/VPN is needed;
- **WARP/MASQUE (usque)**: free Cloudflare WARP over HTTPS/QUIC,
  useful where WARP over WireGuard is already being blocked;
- fallback channels that don't require your own server: **Opera Proxy** (SurfEasy) and
  **Telegram Tunnel** (local MTProto proxy);
- **a single routing layer** "destination → method" on top of all of the above:
  for each domain/list/subnet, you…
