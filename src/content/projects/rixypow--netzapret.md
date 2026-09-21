---
repo: "RixyPow/netzapret"
name: "netzapret"
description: "Traffic dispatcher for Windows: flexible configuration of blocking and VPN binding for each domain."
originalDescription: "Диспетчер трафика для Windows: гибкая настройка связки запрета и впн для каждого домена."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/RixyPow/netzapret"
language: "C#"
languages: ["C#"]
languagePcts: [99]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-08-24T16:25:05Z"
lastCommitAt: "2026-09-21T09:13:33Z"
lastReleaseAt: "2026-08-30T09:31:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 80
undervaluedScore: 46
maintainers: ["RixyPow"]
openGraphImageUrl: "https://opengraph.githubassets.com/db811af9084191bf22b719090ac77d0bc54173d2e44849f5c28a7625d0ef6299/RixyPow/netzapret"
fundingLinks: ["CUSTOM:https://boosty.to/rixypow/donate"]
discussionCount: 0
---

# NetZapret

Traffic dispatcher for Windows. For each application, domain, or subnet, it decides where to route traffic: **through desync** (Zapret / winws2), **through VPN** (sing-box), or **directly** — and runs both engines under unified supervision.

Replaces the Zapret + VPN-client combination and does what neither of them can do separately: **applies VPN selectively, without breaking desync for everything else.**

## Installation

1. Download the archive from the [releases](https://github.com/RixyPow/netzapret/releases/latest) page.
2. Extract anywhere.
3. Run `NetZapret.exe`.

No need to install anything else — neither .NET, nor sing-box, nor Zapret: everything is included. The program will request administrator rights on its own; without them, neither the tunnel nor the packet capture driver will start.

You'll only need a **VPN subscription link** — any provider is supported, including VLESS, Trojan, Hysteria2, and Shadowsocks. It's entered in the «VPN» section.

The link is equivalent to a password: it provides access to the full list of servers with credentials. It's stored next to the program in `config\netzapret.json` and is never sent anywhere.

### Free WARP

The…
