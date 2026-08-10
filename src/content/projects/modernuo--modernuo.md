---
repo: "modernuo/ModernUO"
name: "ModernUO"
description: "Highly Performant & Scalable Ultima Online Server Emulator"
readmeQualityOk: true
url: "https://github.com/modernuo/ModernUO"
homepage: "https://www.modernuo.com"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["ultima-online", "uo", "csharp", "dotnet", "dotnet-core", "csharp-core", "emulator", "server", "mmorpg", "runuo"]
stars: 350
forks: 223
openIssues: 34
closedIssues: 262
watchers: 22
contributors: 65
recentReleases: 0
createdAt: "2018-08-18T11:23:22Z"
lastCommitAt: "2026-08-10T05:05:18Z"
lastReleaseAt: "2020-09-11T19:06:41Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "funded", "fork_magnet"]
healthScore: 95
undervaluedScore: 43
maintainers: ["kamronbatman", "dependabot[bot]", "creiht"]
openGraphImageUrl: "https://opengraph.githubassets.com/92c46a5c5ac4f0d72565c6b153e9a1e7074f0b0aad785d39742cc26f31f91806/modernuo/ModernUO"
fundingLinks: ["GITHUB:https://github.com/modernuo", "PATREON:https://patreon.com/modernuo", "CUSTOM:https://muo.gg/paypal", "CUSTOM:https://muo.gg/venmo", "CUSTOM:https://muo.gg/coffee"]
discussionCount: 7
---

</p>

ModernUO [](https://muo.gg/discord) [](https://muo.gg/reddit/) [](https://muo.gg/twitter)
=====

##### Ultima Online Server Emulator for the modern era!
<br/>

## Requirements
#### Supported Operating Systems

<br/>

#### Required Frameworks
##### All Operating Systems

##### Windows

#### Hardware

| Use | vCPU | RAM | Storage |
|---|---|---|---|
| Development / test | 2 **dedicated** | 2 GB | SSD |
| Small live shard (< 50 concurrent) | 4 dedicated | 4 GB | NVMe |
| Medium (50–200) | 4–8 | 8 GB | NVMe |
| Large (200+) | 8+, high clock | 16 GB+ | NVMe |

Game logic is single-threaded, so **single-core clock speed matters more than core count**, and
**dedicated vCPU matters more than either** — burstable or shared plans throttle once credits run
out, which is the most common cause of unexplained lag spikes. Save size drives RAM more than
player count does.

See [dev-docs/server-requirements.md](https://github.com/modernuo/ModernUO/blob/HEAD/dev-docs/server-requirements.md) for the reasoning and tuning
options.

#### Development

#### Supported IDEs
</p>

## Getting Started
- Install prerequisite [requirements](https://github.com/modernuo/ModernUO#requirements)
- Clone this…
