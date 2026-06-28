---
repo: "mikai233/antares"
name: "antares"
description: "Kotlin/Pekko game server scaffold and business example built on Asteria, covering gateway, player, world, GM, config, scripting, and deployment workflows."
url: "https://github.com/mikai233/antares"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [55]
topics: ["asteria", "game-server", "kotlin", "kubernetes", "mmorpg", "pekko", "protobuf", "spring-boot", "zookeeper", "server-scaffold"]
stars: 24
forks: 7
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2023-05-09T16:41:54Z"
lastCommitAt: "2026-06-28T01:36:11Z"
lastReleaseAt: "2023-06-10T18:31:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 66
maintainers: ["mikai233", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c563b9ad759966c77c432f205c55a0c39cb1c44e66fa7521e3dc7d98520bad40/mikai233/antares"
---

# Antares

Antares is a game server scaffold built on top of [Asteria](https://github.com/realm-labs/Asteria). It keeps a
non-trivial demo domain in place and focuses on the parts that usually become painful in real projects: clustered
routing, generated message dispatch, runtime patching policy, configuration publication, config reload, and
historical-data compatibility.

Main modules:

- `gate`: client access, gateway routing, topic subscription, and channel-facing handlers
- `player`: player shard, player actor logic, and player-side config-change repair
- `world`: world shard, wakeup flow, cross-world topics, and broadcast examples
- `global`: shared cluster services and singleton-style runtime pieces
- `gm`: admin backend and script entrypoints
- `client-proto`: client-facing protobuf contracts and generated client protocol support
- `server-proto`: internal protobuf RPC contracts and generated server protocol support
- `common`: shared runtime, config, routing, patching, and persistence abstractions
- `tools`: local topology/config bootstrap helpers
- `stardust`: local all-in-one development launcher
- `battle`: Rust stateful battle service prototype with direct client…
