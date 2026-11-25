---
repo: "OpenAgentsInc/openagents"
name: "openagents"
description: "Agents 2.0"
readmeQualityOk: true
url: "https://github.com/OpenAgentsInc/openagents"
homepage: "https://openagents.com"
language: "Jai"
languages: ["Jai"]
languagePcts: [73]
stars: 467
forks: 64
openIssues: 9
closedIssues: 10863
watchers: 6
contributors: 55
recentReleases: 10
createdAt: "2023-11-07T16:16:46Z"
lastCommitAt: "2026-11-25T03:12:06Z"
lastReleaseAt: "2026-11-11T04:25:48Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 42
maintainers: ["AtlantisPleb", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/92ded85079499fad1bf1fb76828bbea13eebf96d0251aff47d228643aefd3017/OpenAgentsInc/openagents"
---

# OpenAgents

OpenAgents builds open agents that people can own, inspect, improve and
earn from, on open protocols and Bitcoin.

## Desktop & Mobile Apps

Native **macOS, Linux, Windows, and iOS** apps for Antigravity and local coding agents, paired directly over Tailscale with zero public relays.

- **macOS:** [Download for Mac at openagents.com](https://openagents.com/) (signed universal `OpenAgents.dmg`)
- **iOS:** [Join the TestFlight](https://testflight.apple.com/join/dvQdns5B) ([`apps/openagents-ios/`](https://github.com/OpenAgentsInc/openagents/blob/HEAD/apps/openagents-ios/README.md))
- **Desktop source:** [`apps/openagents-desktop/`](https://github.com/OpenAgentsInc/openagents/blob/HEAD/apps/openagents-desktop/README.md) (GPU-accelerated Metal/Vulkan Coax UI) · [`apps/openagents-macos/`](https://github.com/OpenAgentsInc/openagents/blob/HEAD/apps/openagents-macos/README.md) (SwiftUI macOS client)

### Build the Desktop App from Source

Clone **one level deep** (`--depth 1`) so you don't download years of repository history, then build the `coax` compiler:

```sh
git clone --depth 1 https://github.com/OpenAgentsInc/openagents.git
cd openagents
coax/build.sh
```

**macOS:**
