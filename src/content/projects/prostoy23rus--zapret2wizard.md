---
repo: "prostoy23rus/zapret2wizard"
name: "zapret2wizard"
description: "⚡ Automatic DPI bypass wizard: LuCI web interface for OpenWrt, Circular combinations, Discord VoiceFlow and turbo strategy selection"
originalDescription: "⚡ Мастер автономного обхода DPI: LuCI веб-интерфейс OpenWrt, Circular-связки, Discord VoiceFlow и турбо-подбор"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/prostoy23rus/zapret2wizard"
homepage: "https://github.com/prostoy23rus/zapret2wizard"
language: "Rust"
languages: ["Rust", "Shell"]
languagePcts: [38, 29]
topics: ["anti-censorship", "blockcheck", "discord", "dpi-bypass", "luci-app", "nfqws", "openwrt", "youtube", "zapret", "zapret2"]
stars: 42
forks: 1
openIssues: 7
closedIssues: 6
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-30T15:12:43Z"
lastCommitAt: "2026-11-26T23:38:51Z"
lastReleaseAt: "2026-11-09T00:39:11Z"
status: "newborn"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 79
undervaluedScore: 41
maintainers: ["prostoy23rus"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0257dc1ba3c0b598effa4beb0cbffa32734beb4fc5f1faf5e4d6953d28118e7/prostoy23rus/zapret2wizard"
fundingLinks: ["CUSTOM:https://github.com/rcd27/blockcheckw#donate"]
discussionCount: 0
---

# Zapret2Wizard

**DPI/TSPU bypass control on OpenWrt:** the `zapret2 (nfqws2)` engine, a Rust strategy scanner and a LuCI web interface in one package. Select candidates for your network, manage domains and verify the result, without installing apps on every device. System dependencies are installed separately with the package manager; after installation, regular traffic processing does not require access to GitHub.

---

## What this gives you

- **Configuration on the router, not on each device.** Processing of home network traffic for phones, laptops and TVs whose traffic passes through the router.
- **Search tailored to your network.** The Rust scanner tests candidate strategies; additional HTTP probes are run before applying. The result depends on the provider, the route and the selected services.
- **You choose the domains.** Separate lists for YouTube, Discord, Twitch, X and Instagram, custom domains and global exclusions.
- **Management in LuCI.** Checks, selection, lists, service status and history in the OpenWrt web interface.
