---
repo: "Falcon-MC/Falcon"
name: "Falcon"
description: "Minecraft: Bedrock Edition server software written from scratch in C++"
readmeQualityOk: true
url: "https://github.com/Falcon-MC/Falcon"
homepage: "https://falcon-mc.github.io"
language: "C++"
languages: ["C++"]
languagePcts: [100]
topics: ["bedrock-server", "cpp", "cpp17", "game-server", "minecraft", "minecraft-bedrock", "minecraft-server"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-09-19T13:48:37Z"
lastCommitAt: "2026-10-03T22:03:27Z"
lastReleaseAt: "2026-10-03T13:50:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 56
maintainers: ["NaySurGithub"]
openGraphImageUrl: "https://opengraph.githubassets.com/b703aa7d6ba3d2bcde06a6b8691750a05a8ee0de5035adc35546d6849736c744/Falcon-MC/Falcon"
---

Not affiliated with Mojang AB.

## What is this?

Falcon is a Minecraft: Bedrock Edition server built from the ground up in C++17. It does not derive
from any existing server: the protocol, world storage, inventory, movement and gameplay systems are
all reimplemented by hand, with vanilla behavior as the reference.

- **Native** - no runtime to install, the server ships as a single self-contained executable
- **Vanilla worlds** - Bedrock world format, so worlds move between Falcon and the game unchanged
- **Behavior packs** - custom content and a JavaScript scripting API loaded from packs

## Getting started

Download the latest Windows, Linux or macOS build from the [releases](https://github.com/Falcon-MC/Falcon/releases),
check it against its `.sha256` file and run it. On the first start, a setup wizard in the console writes
`server.properties`.

## Supported versions

| Minecraft | Protocol |
|-----------|----------|
| 1.26.52   | 2193     |

Only the newest version can join by default. Set `any-version=true` in `server.properties` to let every
supported version join.

## Related repositories

- [Protocol](https://github.com/Falcon-MC/Protocol) - packets and network types
-…
