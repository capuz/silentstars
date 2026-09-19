---
repo: "richerfu/Paws"
name: "Paws"
description: "A Clash/mihomo OpenHarmony client with a native ArkUI interface, powered by meow-rs and a Rust userspace TUN stack."
readmeQualityOk: true
url: "https://github.com/richerfu/Paws"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
stars: 11
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-05-07T15:17:01Z"
lastCommitAt: "2026-09-19T02:46:19Z"
lastReleaseAt: "2026-09-16T02:57:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 47
maintainers: ["richerfu"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a44591e4b5a31bd038b6d8ece93f7102fa5d3aaac9c1c9d2ecc6bc243db2be1/richerfu/Paws"
---

# Paws

Current release: **1.1.0** (versionCode **1001000**). See the
[changelog](https://github.com/richerfu/Paws/blob/HEAD/CHANGELOG.md) for release notes.

Paws is a Clash/mihomo HarmonyOS client with a native ArkUI interface, powered
by [meow-rs](https://github.com/madeye/meow-rs) and a Rust userspace TUN stack.
Its product flow follows
[Meow for Android](https://github.com/madeye/meow), while the HarmonyOS UI,
VPN lifecycle, native bridge, packaging, and device validation are implemented
in this repository.

## Architecture

```text
Native ArkUI (Rust: arkit + Dioxus)
    |  N-API
    v
HarmonyOS abilities (ArkTS)
    |  EntryAbility + VpnExtensionAbility
    |  VpnConnection TUN + protectProcessNet()
    v
Paws Rust runtime
    |  paws_core + paws_profile
    |  paws_vpn + netstack-smoltcp/lwIP
    v
meow-rs
    |  Config, rule engine, proxy, DNS, external controller
    v
Network
```

## Features

- **Routing modes**
  - Rule: follow the active profile's ordered rules and rule providers.
  - Global: send all eligible traffic through the selected proxy.
  - Direct: bypass proxies.
- **Proxy protocols**: Direct, Shadowsocks, Trojan, VLESS, VMess, Snell,
  Hysteria2, AnyTLS,…
