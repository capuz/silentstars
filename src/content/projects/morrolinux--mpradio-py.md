---
repo: "morrolinux/mpradio-py"
name: "mpradio-py"
description: "Morrolinux's Pirate radio (PiFmAdv wrapper with Bluetooth and mp3 support) - Stream music to your car's FM radio or use it as a Bluetooth speaker via headphone jack"
url: "https://github.com/morrolinux/mpradio-py"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 82
forks: 13
openIssues: 4
closedIssues: 23
watchers: 7
contributors: 3
recentReleases: 0
createdAt: "2019-04-04T16:00:43Z"
lastCommitAt: "2026-07-03T12:22:25Z"
lastReleaseAt: "2023-06-11T18:22:41Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 28
maintainers: ["lantzounato", "morrolinux"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8d6235e16e168f74efda34473f71c1970cf6c9cdc83ea76abd4f6675e7ae008/morrolinux/mpradio-py"
---

# mpradio-py
Morrolinux's Pirate radio (PiFmRDS implementation with Bluetooth and mp3 support) for all Raspberry Pi models

Work in progress.

The old implementation deeply relies on external services and it's not very object oriented nor flexible to changes, resulting in it being inconsistent in the user expirience across multiple devices and configurations. This project aims for a total rewrite with some structural changes to make it more modular, and try to integrate dependencies as much as possible for a better management.

# COMPATIBILITY NOTICE

This software is tested to work on Debian 10 and previous versions. Debian 11 and subsequent versions **won't work** due to massive breakage in core dependencies. Feel free to try and port it to the latest Debian if you wish, **or just use Debian 10** to avoid any issues. 

# Features
Exclusively tested on Minimal Raspbian (ARM)
- [x] Resume track from its playback status hh:mm:ss across reboots (CD-like expirience)
- [x] Shuffle on/off
- [x] Display track info over RDS (for both bluetooth playback and music on local storage)
- [x] Skip song by pressing a push-button (GPIO-connected on pin 5 [BCM 3]) even when playing bluetooth audio…
