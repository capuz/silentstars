---
repo: "czp3009/minecraft-protocol"
name: "minecraft-protocol"
description: "A Kotlin Multiplatform library for the Minecraft Java Edition protocol and world storage, including NBT, packet codecs, networking, file IO"
readmeQualityOk: true
url: "https://github.com/czp3009/minecraft-protocol"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
stars: 8
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-29T17:45:16Z"
lastCommitAt: "2026-09-05T07:49:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 52
maintainers: ["czp3009"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b8aaab267b3344eefb2bb5016748f3282e8a1272a5417df12efe7bdb6508d36/czp3009/minecraft-protocol"
---

# minecraft-protocol

> This is an early-stage experimental project and is not ready for production use.

`minecraft-protocol` is a Kotlin Multiplatform toolkit for Minecraft: Java Edition. It covers the network protocol from
packet models and wire encoding through client/server negotiation, and it also provides NBT, data-pack, Anvil, and
filesystem-backed world APIs.

Use it to build tools such as:

- protocol clients, bots, proxies, and specialized servers;
- launchers that authenticate Microsoft accounts and start official game versions;
- map editors, converters, analyzers, and live world inspectors;
- mod-aware integrations with custom packets and dynamic registries.

It is infrastructure rather than a complete game server. Gameplay, ticking, permissions, player management,
authoritative world state, and application persistence policy remain application concerns.

## Choose the modules you need

The project is split by capability, so applications can start at the appropriate layer:

| Area           | Module                                                             | Use it for                                                     |…
