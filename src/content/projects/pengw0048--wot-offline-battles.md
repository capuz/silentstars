---
repo: "pengw0048/wot-offline-battles"
name: "wot-offline-battles"
description: "World of Tanks 0.8.2 offline-battle mod with tactical bots and trusted-LAN multiplayer"
readmeQualityOk: true
url: "https://github.com/pengw0048/wot-offline-battles"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 34
forks: 9
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-04T16:03:28Z"
lastCommitAt: "2026-09-08T08:16:54Z"
lastReleaseAt: "2026-09-01T05:57:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 43
maintainers: ["pengw0048"]
openGraphImageUrl: "https://opengraph.githubassets.com/e27a1caa9d0531e1714659f0bd8c612fca9b67e6456003b9115dcf8dc1275d7d/pengw0048/wot-offline-battles"
fundingLinks: ["GITHUB:https://github.com/pengw0048"]
---

# World of Tanks Offline Battles

Play standard battles with bots in the Chinese HD Windows client
`0.9.22.0.1 #1513`, alone or with friends on a LAN.

You supply your own client. The client still provides the maps, vehicles,
rendering, HUD and physics. This repository provides the client mod, the bot
and battle logic, a small LAN server and a launcher.

## Play

1. Download `WoT-Offline-Battles-Launcher-Windows.zip` from the releases,
   unpack it, and start `WoT-Offline-Battles-Launcher.exe`.
2. Select your World of Tanks folder. The launcher recognizes the client,
   removes any older mod files and installs the matching mod.
3. Select a mode:
   - **Single player**: you play alone against bots. The launcher runs the
     server for you; every battle uses the same LAN authority path.
   - **Host a LAN battle**: other players join this PC. The launcher starts the
     server and prints the address to give them.
   - **Join a LAN battle**: type the host's address, for example
     `192.168.1.20`.
4. Click **Start game**. In the garage, fit a tank and click **Battle!**.
   Everyone lands in the LAN waiting room over the stock queue screen. The
   host picks the map - **RANDOM…
