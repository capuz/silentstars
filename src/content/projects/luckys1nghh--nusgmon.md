---
repo: "LUCKYS1NGHH/nusgmon"
name: "nusgmon"
description: "Simple and lightweight Python-based CLI network usage monitor for GNU/Linux designed to run as a systemd service"
readmeQualityOk: true
url: "https://github.com/LUCKYS1NGHH/nusgmon"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["cli", "command-line-tool", "linux", "netmon", "network-monitoring", "python", "systemd", "data-usage"]
stars: 19
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-15T07:28:33Z"
lastCommitAt: "2026-10-19T09:12:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 15
maintainers: ["LUCKYS1NGHH"]
openGraphImageUrl: "https://opengraph.githubassets.com/60c20906d9d8f728ecfcd66895c71d010a21a758d70e8fd746ae4c7c730c0960/LUCKYS1NGHH/nusgmon"
---

# Nusgmon - Network Usage Monitor
Lightweight Python CLI (command-line interface) network usage monitor for Linux.
Designed to run as a `systemd` service.

## Usage examples

Start recording network usage:

`nusgmon record`

Start recording network usage every second and of a specific interface only:

`nusgmon record -w 1 --iface wlp2s0`

View today's usage:

`nusgmon --today`

View current week's usage in JSON format:

`nusgmon --thisweek --json`

View usage after certain date:

`nusgmon --since 2026-03-15`

Export this week's usage to a JSON file:

`nusgmon --thisweek --export week.json`

Export all raw records as JSON:

`nusgmon db --export raw.json`

Prune records before 30 days:

`nusgmon db --prune 30`

## Features

- Record a specific interface data usage or of all as bundle

- Lightweight network usage monitor

- Stores usage history in SQLite

- Daily / weekly / monthly statistics

- Graph style options for statistics

- JSON output for scripting

- JSON export of usage stats and raw records to a file

- Works with systemd

- Configuration file support

- Sends data usage notification alerts (needs [nusgmon-alert](https://github.com/LUCKYS1NGHH/nusgmon-alert.sh))

##…
