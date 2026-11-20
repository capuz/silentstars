---
repo: "prostoy23rus/zapret2wizard"
name: "zapret2wizard"
description: "⚡ Autonomous DPI bypass wizard for Zapret2: OpenWrt LuCI web interface, Circular chains, Discord VoiceFlow and turbo strategy selection"
originalDescription: "⚡ Мастер автономного обхода DPI для Zapret2: LuCI веб-интерфейс OpenWrt, Circular-связки, Discord VoiceFlow и турбо-подбор"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/prostoy23rus/zapret2wizard"
homepage: "https://github.com/prostoy23rus/zapret2wizard"
language: "Rust"
languages: ["Rust", "Shell"]
languagePcts: [45, 27]
topics: ["anti-censorship", "blockcheck", "discord", "dpi-bypass", "luci-app", "nfqws", "openwrt", "youtube", "zapret", "zapret2"]
stars: 26
forks: 1
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-30T15:12:43Z"
lastCommitAt: "2026-11-20T12:01:04Z"
lastReleaseAt: "2026-11-09T00:39:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 70
undervaluedScore: 39
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/b935964ebebe6b6d35367f7163fc9744290b260b160ca13eca2a4214d2ea8c81/prostoy23rus/zapret2wizard"
fundingLinks: ["CUSTOM:https://github.com/rcd27/blockcheckw#donate"]
discussionCount: 0
---

# Zapret2Wizard

**Autonomous DPI/TSPU bypass for OpenWrt:** the `zapret2 (nfqws2)` engine, a custom strategy scanner, selection tailored to a specific ISP, and a LuCI web interface. Installs as a single package, works without third-party dependencies and without internet access after installation.

---

## What it provides

- **Bypass works for all devices on the network** — phones, laptops, TVs. It is configured on the router; clients don't need to install anything.
- **The strategy is selected for your ISP.** There are no ready-made universal strategies: the scanner checks candidates with real downloads of up to 256 KB and applies only the one that actually passes traffic.
- **Bypass only where needed** — separate domain lists for YouTube, Discord, Twitch, X, Instagram, plus "Custom domains" and an exclusion list.
- **Does not conflict with tunnels** — the service runs in its own nft table and its own queues, does not write to other lists and does not stop other services; if a domain is routed into a tunnel, the selection process will honestly report it.
- **Self-diagnostics**: `doctor`, `selftest`, `class` — show what is broken and which filtering class the ISP uses.
