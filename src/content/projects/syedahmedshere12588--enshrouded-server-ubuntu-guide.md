---
repo: "syedahmedshere12588/enshrouded-server-ubuntu-guide"
name: "enshrouded-server-ubuntu-guide"
description: "Enshrouded Dedicated Server Setup on Ubuntu: A Practical Guide"
readmeQualityOk: true
url: "https://github.com/syedahmedshere12588/enshrouded-server-ubuntu-guide"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["apache2", "beginner", "beginner-friendly", "dedicated", "dedicated-server", "enshrouded", "enshrouded-server", "games", "gameserver", "gaming"]
stars: 58
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-24T10:03:54Z"
lastCommitAt: "2026-10-31T02:00:14Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 29
maintainers: ["github-actions[bot]", "syedahmedshere12588"]
openGraphImageUrl: "https://opengraph.githubassets.com/f40283cc436a10b6706591f1104d35c1ccc73dc29567137dd2995902f7752bae/syedahmedshere12588/enshrouded-server-ubuntu-guide"
---

# 🔧 Setting Up an Enshrouded Dedicated Server on Ubuntu — Guide

---

This project documents how to set up a dedicated Enshrouded server on Ubuntu, a task that sits at the intersection of Linux administration and running a Windows game binary through Wine. The game itself ships only a Windows server executable, so the guide relies on SteamCMD to fetch the files and Wine to run them, with systemd handling persistence and restarts. It targets Ubuntu 22.04 and 24.04 and assumes readers are comfortable with sudo, port forwarding, and editing configuration files from the command line. Everything here reflects hands-on testing of that specific stack, including the known quirks of Wine updates and the single default game port; it is not a universal recipe for other distributions or container-based deployments.

## Background

Enshrouded is a survival action RPG set in the voxel-based open world of Embervale, where players explore dangerous biomes, gather resources, craft gear, and build bases while contending with hostile creatures and the encroaching Shroud. The game supports cooperative play for groups of up to 16 players, which makes a persistent, always-available world far more…
