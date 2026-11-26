---
repo: "NetherrackOSS/Netherrack"
name: "Netherrack"
description: "Open source server software for Minecraft: Bedrock Edition, written from scratch. Not affiliated with Mojang or Microsoft."
readmeQualityOk: true
url: "https://github.com/NetherrackOSS/Netherrack"
homepage: "https://netherrackoss.github.io"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-10-01T18:43:28Z"
lastCommitAt: "2026-11-26T23:35:37Z"
lastReleaseAt: "2026-11-23T03:00:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 63
maintainers: ["SchleroMC", "wimziicals", "Kanelucky"]
openGraphImageUrl: "https://opengraph.githubassets.com/be799c0d46a00400c917e9bfa8ab20f7a261d839fb41cdc6de73d6f2d88ab813/NetherrackOSS/Netherrack"
discussionCount: 0
---

> **Warning**
>
> Netherrack **v0.4.0-beta** is experimental software. Expect missing features, bugs, and
> glitches. Do not use it for a production server or a world you care about without keeping
> independent backups.

> **Note**
>
> Netherrack is not affiliated with, endorsed by, or sponsored by Mojang Studios or Microsoft.

# ℹ️ Information

Netherrack is an experimental, from-scratch Minecraft: Bedrock Edition server written in Java.
It is a learning and experimentation project: the server architecture is developed
independently rather than as a clone of another implementation, and APIs and behavior may
change between releases.

This beta targets **Minecraft: Bedrock Edition 1.26.60** (`Bedrock_v2225`). Bedrock 1.26.60
replaced RakNet with **NetherNet**, so Netherrack uses that transport exclusively — old
RakNet-based clients and servers are not supported. Multi-version support is not implemented;
clients on other versions may be rejected or behave unexpectedly.
