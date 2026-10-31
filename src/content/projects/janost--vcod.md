---
repo: "janost/vcod"
name: "vcod"
description: "CoD 1, United Offensive, CoD 2 and CoD 4 multiplayer, rebuilt in Rust. Client, dedicated server and bots that speak each game's original wire protocol, held to retail by captures. Bring your own copy of the game. Your 2007 aim is not included."
readmeQualityOk: true
url: "https://github.com/janost/vcod"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["call-of-duty", "cod1", "dedicated-server", "game-engine", "game-preservation", "netcode", "reverse-engineering", "rust", "wgpu", "bots"]
stars: 11
forks: 3
openIssues: 2
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-08-18T19:29:56Z"
lastCommitAt: "2026-10-31T09:51:17Z"
lastReleaseAt: "2026-10-31T00:08:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 51
maintainers: ["janost"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f94d4682776d3afcda985de2def28d00f7a1a68a89ac9717657208520117e1e/janost/vcod"
---

# vcod

Call of Duty multiplayer, rebuilt from scratch in Rust. A client and a
dedicated server that read your copy's game files and speak each game's
original wire protocol, against vcod's own server or the retail ones.
Nobody ever wrote those protocols down, so I dug them out of the binaries.

| Game | Patch | Protocol | Client | Server | Bots | Details |
|---|---|---|---|---|---|---|
| Call of Duty | 1.1, 1.5 | 1, 6 | Plays | Hosts | Yes | [cod1.md](https://github.com/janost/vcod/blob/HEAD/docs/features/cod1.md) |
| United Offensive | 1.51 | 22 | Plays, tanks and jeeps included | Hosts, tanks and jeeps included | Yes | [uo.md](https://github.com/janost/vcod/blob/HEAD/docs/features/uo.md) |
| Call of Duty 2 | 1.3 | 118 | Plays | Hosts | Yes | [cod2.md](https://github.com/janost/vcod/blob/HEAD/docs/features/cod2.md) |
| Call of Duty 4 | 1.7 | 6 | Plays on stock 1.7 servers (not CoD4x) | Hosts | Yes | [cod4.md](https://github.com/janost/vcod/blob/HEAD/docs/features/cod4.md) |

Each game's page says what works, what's still missing against retail,
and what vcod adds. [docs/features.md](https://github.com/janost/vcod/blob/HEAD/docs/features.md) covers what they
share.

All four…
