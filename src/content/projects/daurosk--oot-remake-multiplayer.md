---
repo: "daurosk/oot-remake-multiplayer"
name: "oot-remake-multiplayer"
description: "Working multiplayer for the Ocarina of Time remake: first on an emulator, then in a native recomp."
readmeQualityOk: true
url: "https://github.com/daurosk/oot-remake-multiplayer"
homepage: "https://discord.gg/GwtRKAqng5"
language: "C++"
languages: ["C++"]
languagePcts: [79]
topics: ["co-op", "coop", "emulator", "legend-of-zelda", "multiplayer", "netplay", "nintendo-switch", "ocarina-of-time", "online-multiplayer", "zelda"]
stars: 80
forks: 3
openIssues: 45
closedIssues: 51
watchers: 5
contributors: 1
recentReleases: 10
createdAt: "2026-11-08T20:32:27Z"
lastCommitAt: "2026-11-13T09:35:12Z"
lastReleaseAt: "2026-11-11T22:11:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 89
undervaluedScore: 36
maintainers: ["daurosk"]
openGraphImageUrl: "https://opengraph.githubassets.com/47ef650c861fba5db9d63315129afdeaf56e153cf5377a50d39e258ac61a37b6/daurosk/oot-remake-multiplayer"
discussionCount: 0
---

# oot-remake-multiplayer

Online co-op for the Ocarina of Time remake on PC.

The goal of this project is working multiplayer in two stages:

1. **Emulator first.** Add co-op to the Lichii emulator (Frizti's build), where the game already runs well. Two to four players see each other in the world, share progress, and fight the same enemies.
2. **Then a recomp.** Carry the same co-op design into a native PC recompilation of the game. This has started: co-op runs on [Hookshot](https://github.com/NotRexed/Hookshot) as an experiment, with the same code, protocol and server.

Both stages share one design, one wire protocol and one server, so what is learned on the emulator carries straight over to the recomp.

**Discord:** https://discord.gg/GwtRKAqng5, for players, testers and contributors.

## Play the test release

The newest test build is on the **[releases page](https://github.com/daurosk/oot-remake-multiplayer/releases)** (the top one; the test builds are pre-releases, which GitHub's "latest" link skips): the patched emulator (Fritchii v5.8.4, with a Saves window to export, import and copy saves), the server and start scripts in one zip, and the scripts that build co-op into…
