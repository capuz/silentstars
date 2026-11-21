---
repo: "prostoy23rus/zapret2wizard"
name: "zapret2wizard"
description: "⚡ Autonomous DPI bypass wizard for Zapret2: OpenWrt LuCI web interface, Circular chains, Discord VoiceFlow, and turbo selection"
originalDescription: "⚡ Мастер автономного обхода DPI для Zapret2: LuCI веб-интерфейс OpenWrt, Circular-связки, Discord VoiceFlow и турбо-подбор"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/prostoy23rus/zapret2wizard"
homepage: "https://github.com/prostoy23rus/zapret2wizard"
language: "Rust"
languages: ["Rust", "Shell"]
languagePcts: [45, 27]
topics: ["anti-censorship", "blockcheck", "discord", "dpi-bypass", "luci-app", "nfqws", "openwrt", "youtube", "zapret", "zapret2"]
stars: 30
forks: 1
openIssues: 5
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-30T15:12:43Z"
lastCommitAt: "2026-11-21T11:38:22Z"
lastReleaseAt: "2026-11-09T00:39:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 70
undervaluedScore: 38
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/ef8c9f52e9688d8e2eedf604687eb2dd6bfd36c5651dbb0b2262b93d2afda52f/prostoy23rus/zapret2wizard"
fundingLinks: ["CUSTOM:https://github.com/rcd27/blockcheckw#donate"]
discussionCount: 0
---

# Zapret2Wizard

**Autonomous DPI/ТСПУ bypass for OpenWrt:** the `zapret2 (nfqws2)` engine, its own strategy scanner, selection tailored to a specific provider, and a LuCI web interface. Installs as a single package, works without third-party dependencies, and works without internet access after installation.

---

## What it provides

- **Bypass works for all devices on the network** — phones, laptops, TVs. It is configured on the router, so clients don't need to install anything.
- **The strategy is selected for your provider.** There are no ready-made universal strategies: the scanner tests candidates with real downloads of up to 256 KB and applies only the one that actually passes traffic.
- **Bypass only where it's needed** — separate domain lists for YouTube, Discord, Twitch, X, and Instagram, plus "Custom domains" and an exclusion list.
- **Doesn't conflict with tunnels** — the service runs in its own nft table and its own queues, does not write to other lists, and does not stop other services. If a domain is routed into a tunnel, the selection process will honestly report it.
