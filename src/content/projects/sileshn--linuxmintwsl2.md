---
repo: "sileshn/LinuxmintWSL2"
name: "LinuxmintWSL2"
description: "Linux mint on wsl2 using wsldl"
readmeQualityOk: true
url: "https://github.com/sileshn/LinuxmintWSL2"
language: "Shell"
languages: ["Shell", "Makefile"]
languagePcts: [59, 41]
topics: ["linuxmint", "wsl2", "wsldl", "windows-subsystem-linux", "bash-on-windows", "mint"]
stars: 215
forks: 20
openIssues: 0
closedIssues: 7
watchers: 7
contributors: 6
recentReleases: 0
createdAt: "2020-12-15T00:09:57Z"
lastCommitAt: "2026-09-29T08:10:32Z"
lastReleaseAt: "2021-08-30T02:03:09Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 65
undervaluedScore: 23
maintainers: ["sileshn", "Klozz"]
openGraphImageUrl: "https://opengraph.githubassets.com/6748eb6b037aa57ae1466b20c894d3eee356a62d166678d7a1118d0833f662d9/sileshn/LinuxmintWSL2"
discussionCount: 7
---

# LinuxmintWSL2
Linuxmint on WSL2 (Windows 10 FCU or later) based on [wsldl](https://github.com/yuk7/wsldl).

## Features and important information
LinuxmintWSL2 has the following features during the installation stage.
* Increase virtual disk size from the default 256GB
* Create a new user and set the user as default
* LinuxmintWSL2 Supports systemd natively if you are running wsl v0.67.6 (more details [here](https://devblogs.microsoft.com/commandline/systemd-support-is-now-available-in-wsl/)) and above. For earlier versions of wsl, systemd is supported using diddledani's [one-script-wsl2-systemd](https://github.com/diddledani/one-script-wsl2-systemd). This is done automatically during initial setup.
* LinuxmintWSL2 includes a wsl.conf file which only has section headers. Users can use this to configure the distro to their liking. You can read more about wsl.conf and its configuration settings [here](https://docs.microsoft.com/en-us/windows/wsl/wsl-config).

## Requirements
* For x64 systems: Version 1903 or higher, with Build 18362 or higher.
* For ARM64 systems: Version 2004 or higher, with Build 19041 or higher.
* Builds lower than 18362 do not support WSL 2.
* If you are…
