---
repo: "teknogods/TeknoParrotUI"
name: "TeknoParrotUI"
description: "Open Source JVS / Arcade Emulator for Windows"
readmeQualityOk: true
url: "https://github.com/teknogods/TeknoParrotUI"
homepage: "https://teknoparrot.com"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 344
forks: 79
openIssues: 119
closedIssues: 184
watchers: 17
contributors: 32
recentReleases: 2
createdAt: "2018-09-07T13:48:39Z"
lastCommitAt: "2026-08-18T04:08:32Z"
lastReleaseAt: "2026-07-29T23:05:22Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 91
undervaluedScore: 40
maintainers: ["ReaverTeknoGods", "EmiMidnight", "andrea-petrucci-1975"]
openGraphImageUrl: "https://opengraph.githubassets.com/38120583b1fc14a71db347d7e9fcfe47de37a611ec8767be06bdce304ccf880b/teknogods/TeknoParrotUI"
---

# TeknoParrotUI

Open Source JVS / Other I/O emulator for Windows. Works in collaboration with [TeknoParrot](https://teknoparrot.com) and [OpenParrot](https://github.com/teknogods/OpenParrot).

[TeknoParrot Discord](https://discord.gg/kmWgGDe), development discussion is in the ``#openparrot-dev`` channel.

## Notes for contributors

When adding a new GameProfile, create a metadata file and fill in as much details as possible.

If possible, also add the game's icon to the [Icons](https://github.com/teknogods/TeknoParrotUIThumbnails/tree/master/Icons) repository.

When updating a GameProfile, increment the ``GameProfileRevision``, otherwise existing user profiles will not be updated, forcing users to delete and readd the game.

Do not commit any GameProfile/Descriptions changes to the ``TeknoParrotUi.Common.csproj`` file. The files will be added automatically when the project is reloaded.
