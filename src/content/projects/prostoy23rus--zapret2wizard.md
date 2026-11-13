---
repo: "prostoy23rus/zapret2wizard"
name: "zapret2wizard"
description: "⚡ Autonomous DPI bypass wizard for Zapret2: OpenWrt LuCI web interface, Circular combos, Discord VoiceFlow and turbo strategy selection"
originalDescription: "⚡ Мастер автономного обхода DPI для Zapret2: LuCI веб-интерфейс OpenWrt, Circular-связки, Discord VoiceFlow и турбо-подбор"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/prostoy23rus/zapret2wizard"
homepage: "https://github.com/prostoy23rus/zapret2wizard"
language: "Rust"
languages: ["Rust", "Shell"]
languagePcts: [47, 25]
topics: ["anti-censorship", "blockcheck", "discord", "dpi-bypass", "luci-app", "nfqws", "openwrt", "youtube", "zapret", "zapret2"]
stars: 17
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-30T15:12:43Z"
lastCommitAt: "2026-11-13T18:32:08Z"
lastReleaseAt: "2026-11-09T00:39:11Z"
status: "newborn"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 70
undervaluedScore: 42
maintainers: ["prostoy23rus"]
openGraphImageUrl: "https://opengraph.githubassets.com/83d05555eb34a873b16911888b7ed7501940b70dcfe921ef32664c956444275f/prostoy23rus/zapret2wizard"
fundingLinks: ["CUSTOM:https://github.com/rcd27/blockcheckw#donate"]
discussionCount: 0
---

# Zapret2Wizard

**Autonomous DPI/TSPU bypass for OpenWrt:** the `zapret2 (nfqws2)` engine, a custom strategy scanner, selection tailored to a specific ISP, and a LuCI web interface. Installs as a single package, works with no third-party dependencies and no internet access after installation.

---

## What it provides

- **The bypass works for all devices on the network**: phones, laptops, TVs. It is configured on the router, so clients don't need to install anything.
- **The strategy is selected for your ISP.** There are no ready-made universal strategies: the scanner checks candidates with real downloads of up to 256 KB and applies only the one that actually passes traffic.
- **The bypass applies only where needed**: separate domain lists for YouTube, Discord, Twitch, X, Instagram, plus "Custom domains" and an exclusion list.
- **It doesn't conflict with tunnels**: the service runs in its own nft table and its own queues, does not write to other lists, and does not stop other services. If a domain is routed through a tunnel, the selection process will honestly report it.
- **Self-diagnostics**: `doctor`, `selftest`, `class` show what's broken and which filtering class the ISP…
