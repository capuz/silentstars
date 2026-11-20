---
repo: "daurosk/oot-remake-multiplayer"
name: "oot-remake-multiplayer"
description: "Squadala! - online co-op for the Ocarina of Time remake on PC (Longshot). Players, testers and contributors: join the Squadala! Discord."
readmeQualityOk: true
url: "https://github.com/daurosk/oot-remake-multiplayer"
homepage: "https://discord.gg/GwtRKAqng5"
language: "C++"
languages: ["C++"]
languagePcts: [78]
topics: ["co-op", "coop", "emulator", "legend-of-zelda", "multiplayer", "netplay", "nintendo-switch", "ocarina-of-time", "online-multiplayer", "zelda"]
stars: 239
forks: 27
openIssues: 58
closedIssues: 65
watchers: 4
contributors: 9
recentReleases: 10
createdAt: "2026-11-08T20:32:27Z"
lastCommitAt: "2026-11-19T03:57:41Z"
lastReleaseAt: "2026-11-17T18:56:43Z"
status: "newborn"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 30
maintainers: ["daurosk", "DrHammer79"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1450639908/94f0fe4d-a177-4a3b-8be1-3f515ed8604b"
fundingLinks: ["LIBERAPAY:https://liberapay.com/daurosk"]
discussionCount: 2
---

# Squadala!

Squadala! - online co-op for the Ocarina of Time remake on PC. (The repository keeps its name, `oot-remake-multiplayer`.)

The goal of this project is working multiplayer in two stages:

1. **Emulator first.** Add co-op to the Lichii emulator (Frizti's build), where the game already runs well. Up to 16 players see each other in the world, share progress, and fight the same enemies.
2. **Then a recomp.** Carry the same co-op design into a native PC recompilation of the game. This is where releases are now: since 0.10.1 they run on [Longshot](https://git.magicbean.dev/MagicBeanDev/Longshot) (Team MagicBean's recompilation of the game, whose changes are being merged into [Hookshot](https://git.notrexed.dev/Hookshot/Hookshot)), with the same code, protocol and server. For 1.0, co-op is meant to ship as an add-on mod for the recomp rather than a patched build of our own.

Both stages share one design, one wire protocol and one server, so what is learned on the emulator carries straight over to the recomp.
