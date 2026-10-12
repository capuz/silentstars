---
repo: "cmangos/playerbots"
name: "playerbots"
description: "PlayerBot module forked from https://github.com/celguar/mangosbot-bots"
readmeQualityOk: true
url: "https://github.com/cmangos/playerbots"
language: "C++"
languages: ["C++"]
languagePcts: [100]
stars: 137
forks: 127
openIssues: 0
closedIssues: 0
watchers: 17
contributors: 45
recentReleases: 0
createdAt: "2024-02-29T08:37:56Z"
lastCommitAt: "2026-10-12T11:14:44Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 89
undervaluedScore: 47
maintainers: ["mostlikely4r", "Velite12", "kttalley"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9151520a1ddb606de8c10f7465cb9c04a1025928955905790ad9801746930a2/cmangos/playerbots"
---

# Playerbots
Bot AI Core from ike3 for cmangos classic, tbc and wotlk

This system brings the following features:
- Populate the open world with playerbots
- Populate BGs and Arenas with playerbots
- Use alt characters as playerbots
- Do any kind of PvE content (with some guidance on complex mechanics)
- Very detailed configurations of playerbot behaviors (for the min-maxers out there :D)
- Multiple commands to request playerbots do what you require

# How to install
## Compiling Code
If you're new to building CMaNGOS, check the official guide
https://github.com/cmangos/issues/wiki/Installation-Instructions

Important: to enable the playerbots you need to check it in cmake ( `BUILD_PLAYERBOTS` ✅ )

After successful build get aiplayerbot.conf file from "src/modules/Bots/playerbot/aiplayerbot%expansion.conf.dist" (based on expansion you use) and put it to the same folder where mangosd.conf and realmd.conf are, and remove ".dist" from its name

## Apply DB modifications
- Using the `InstallFullDB.sh` script:
  1. Execute the script once to generate the `InstallFullDB.config` file, after that close the script
  2. Edit `InstallFullDB.config` and add `PLAYERBOTS_DB="YES"` at the end…
