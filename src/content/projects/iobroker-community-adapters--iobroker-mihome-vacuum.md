---
repo: "iobroker-community-adapters/ioBroker.mihome-vacuum"
name: "ioBroker.mihome-vacuum"
description: "Control your Xiaomi vacuum cleaner"
readmeQualityOk: true
url: "https://github.com/iobroker-community-adapters/ioBroker.mihome-vacuum"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [61, 33]
topics: ["mihome", "xiaomi", "vacuum", "vacuum-cleaner", "iobroker", "smarthome", "home-automation"]
stars: 111
forks: 58
openIssues: 15
closedIssues: 442
watchers: 15
contributors: 37
recentReleases: 0
createdAt: "2017-01-21T22:35:27Z"
lastCommitAt: "2026-11-21T13:27:06Z"
lastReleaseAt: "2022-06-29T18:58:39Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 49
maintainers: ["github-actions[bot]", "dependabot[bot]", "GermanBluefox"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ddec4a1d342cab6781e9836b576e43a824b32ccf3b9ebc4d8efe5480ee8bb8a/iobroker-community-adapters/ioBroker.mihome-vacuum"
discussionCount: 4
---

# ioBroker mihome-vacuum adapter

> **Important**
>
> This adapter cannot be installed from GitHub

[Deutsche Dokumentation](https://github.com/iobroker-community-adapters/ioBroker.mihome-vacuum/blob/HEAD/README_de.md)

The mihome-vacuum adapter connects ioBroker to compatible Xiaomi ecosystem robot vacuum cleaners. It supports local control through the robot's IP
address and token, optional Xiaomi Cloud device discovery and maps, room cleaning, timers, cleaning history, consumable information, and dedicated VIS
1 and VIS 2 widgets.

Supported device families include Roborock/rockrobo, Viomi, and Dreame. The exact commands, map functions, rooms, mop controls, dock controls, and
consumable states depend on the model and firmware.

## Installation

Install and update the adapter through ioBroker Admin using a published npm version. Direct installation from GitHub is not supported and is
disabled in Admin. The source repository does not contain the generated runtime, Admin UI or VIS 2 bundles; published packages include them.
