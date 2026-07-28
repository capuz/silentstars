---
repo: "homebridge-plugins/homebridge-august"
name: "homebridge-august"
description: "The Homebridge August plugin allows you to access your August/Yale Locks from HomeKit with Homebridge."
readmeQualityOk: true
url: "https://github.com/homebridge-plugins/homebridge-august"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["homebridge", "homebridge-plugin", "homekit"]
stars: 40
forks: 15
openIssues: 0
closedIssues: 96
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2022-09-25T17:05:27Z"
lastCommitAt: "2026-07-28T14:56:11Z"
lastReleaseAt: "2023-08-28T03:30:39Z"
status: "thriving"
tags: ["hidden_gem", "funded", "community_hub"]
healthScore: 93
undervaluedScore: 59
maintainers: ["bwp91", "dxdc", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/36334c2fb9db5cbb904778c417935dd8418d52db798c6c8ec77a2997591b758f/homebridge-plugins/homebridge-august"
fundingLinks: ["GITHUB:https://github.com/bwp91", "PATREON:https://patreon.com/bwp91", "KO_FI:https://ko-fi.com/bwp91", "CUSTOM:https://www.paypal.me/BenPotter"]
discussionCount: 56
---

</p>

## homebridge-august

Homebridge plugin to integrate August and Yale locks into HomeKit

</span>

### Plugin Information

- This plugin allows you to view and control your [August](https://august.com) and [Yale](https://shopyalehome.com) locks within HomeKit. The plugin:
  - requires your August account credentials to work
  - connects to the August cloud to discover and control your locks

> [!IMPORTANT]
> **Yale Home accounts (common outside North America) can no longer sign in through this plugin.** Yale has switched off password-based login on its servers (verified July 2026) and now requires an OAuth sign-in that is only available to officially registered partners. If you have a Yale Home account: check whether your lock supports **native HomeKit** (many Yale Home locks do — look for a HomeKit option in the Yale Home app), or use Home Assistant's official Yale integration with its HomeKit Bridge.

### Prerequisites

- To use this plugin, you will need to already have:
  - [Node](https://nodejs.org): latest version of `v22` or `v24` - any other major version is not supported.
  - [Homebridge](https://homebridge.io): `v2` - refer to link for more information and…
