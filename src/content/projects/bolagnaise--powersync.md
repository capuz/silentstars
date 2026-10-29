---
repo: "bolagnaise/PowerSync"
name: "PowerSync"
description: "Intelligent battery optimisation for Home Assistant. Supports a wide range of battery systems, electricity providers, and AC-coupled solar inverters. Includes EV charging coordination and a built-in LP optimiser."
readmeQualityOk: true
url: "https://github.com/bolagnaise/PowerSync"
homepage: "https://powersync.cc/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["custom-component", "hacs", "home-assistant", "homeassistant", "integration"]
stars: 95
forks: 22
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2025-10-22T09:50:06Z"
lastCommitAt: "2026-10-29T10:21:28Z"
lastReleaseAt: "2026-04-01T03:23:43Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 45
maintainers: ["bolagnaise", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8014e3a3db6f9607aaae12f46739523375f54948ba6aa16aff8eb4b3ce02404/bolagnaise/PowerSync"
fundingLinks: ["GITHUB:https://github.com/bolagnaise"]
---

# PowerSync

  Intelligent battery energy management for Home Assistant. Automatically optimize your battery system with dynamic electricity pricing to minimize costs and maximize savings.

> **Disclaimer:** This is an unofficial integration and is not affiliated with or endorsed by Tesla, Sigenergy, Sungrow, FoxESS, GoodWe, AlphaESS, ESY Sunhome, Solax, SAJ, Fronius, SolarEdge, Neovolt, Bytewatt, Anker, Amber Electric, Localvolts, Flow Power, AGL, GloBird, CovaU, SA Power Networks, Octopus Energy, EPEX/ENTSO-E, or AEMO. Use at your own risk.

> [!WARNING]
> **The built-in optimizer is actively under development.** You should expect occasional bugs and schedules that don't behave as expected — particularly on unusual tariffs, battery configurations, or edge cases. If you see something odd, please report it on [Discord](https://discord.gg/eaWDWxEWE3) with your tariff details and the action plan it generated.

---

## Supported Systems

### Independent DC Solar Curtailment

Battery export curtailment controls the battery/Tesla export path. Sigenergy,
AlphaESS, and SolarEdge installations can instead enable their own DC solar
curtailment option, which operates when battery dispatch…
