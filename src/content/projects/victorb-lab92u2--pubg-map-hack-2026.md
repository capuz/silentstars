---
repo: "victorb-lab92u2/PUBG-Map-Hack-2026"
name: "PUBG-Map-Hack-2026"
description: "Map hack solution for PUBG. 2026 UPDATED!"
readmeQualityOk: true
url: "https://github.com/victorb-lab92u2/PUBG-Map-Hack-2026"
homepage: "https://victorb-lab92u2.github.io/PUBG-Map-Hack-2026/"
language: "C#"
languages: ["C#"]
languagePcts: [85]
topics: ["pubg", "pubg-boost-overkill", "pubg-input-lag-killer", "pubg-low-latency-engine", "pubg-maps", "pubg-mobile-pc", "pubg-offset", "pubg-overlay", "pubg-performance-warcore", "pubg-tools"]
stars: 12
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-30T09:47:52Z"
lastCommitAt: "2026-11-07T22:52:04Z"
lastReleaseAt: "2026-07-31T13:05:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 38
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1317106902/65dc3702-9811-409a-8113-a5cea09da811"
---

# PUBG-map-hack

A little map hack program for PUBG game that shows players' positions on a HTML map.

Imgur picture of the web map:

# HOW DOES IT WORK?

The main principle of this hack is that, the insides of the "usermode app" and "kernel driver" folder are being run on the same machine as the game itself. The usermode app communicates with both the web interface and kernel driver. The web map gets the data from the google's firebase app. So the usermode app updates the firebase app and the web map shows the information stored inside the firebase database.

You can pretty much upload the content of "online map" folder to any web host. Just remember to update the firebase API keys etc. beforehand, otherwise the map won't simply work.

**REMEMBER TO SET UP THE FIREBASE DATABASE AS "PUBLIC" (so everyone can access/write to it)** More info in the online map folder readme.

This makes it possible to cheat with squads; only one member of the squad must run the cheat program and kernel driver, but everyone can open the map with their own device/browser of choise.

*If you don't want to (or can't) use the firebase, there is also an [alternative version of the map without firebase…
