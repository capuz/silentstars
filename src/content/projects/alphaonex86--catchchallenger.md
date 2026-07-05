---
repo: "alphaonex86/CatchChallenger"
name: "CatchChallenger"
description: "CatchChallenger is a MMORPG. JRPG + crafting + TvT + management game"
readmeQualityOk: true
url: "https://github.com/alphaonex86/CatchChallenger"
homepage: "http://catchchallenger.first-world.info/"
language: "C"
languages: ["C", "C++"]
languagePcts: [47, 37]
topics: ["c-plus-plus", "mmorpg", "open-source", "game"]
stars: 57
forks: 13
openIssues: 0
closedIssues: 9
watchers: 13
contributors: 5
recentReleases: 0
createdAt: "2012-04-19T15:06:22Z"
lastCommitAt: "2026-07-05T20:55:57Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 55
maintainers: ["alphaonex86"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ab68757a3a91aeb00cac027b444a5212ee785497cae22bf27ecebf883cd1ff7/alphaonex86/CatchChallenger"
---

# Intro

https://catchchallenger.herman-brule.com/

This game is a MMORPG, Lan game and a single player game. It's mix of pokemon for the RPG part, crafting/clan/TvT, industry. Modular datapck.

## License
client/tiled/ is extracted version of http://www.mapeditor.org/, https://github.com/bjorn/tiled
libogg and fileopus is extracted from other project
Interface UI is from bought template (then under copyright)

# Target
- minimal dependency (searcg dependency hell, bug/security problem in dependency)
- no bloatware (no stupid features, no features used for only 1 person if imply lot of code or dangerous code, no unrelated features)
- async, support high latency, very low bandwidth (tipical of TOR/I2P)
- send datapack by internal protocol (overall compression to group similar part into multiple file) and http mirror, and when datapack is downloaded by client can be used to mount new server with same datapack
- most processing is cliend side

## Compiling

Use **C++11** to **C++23**, C++23 is preferred to use std::flat_map on read only data of datapack where apply (lower RAM and improve speed)

Dependency:
* zlib (can be disabled but it's for tiled map editor). zstd
* blake3 to have…
