---
repo: "SulfurNitride/Fluorine-Manager"
name: "Fluorine-Manager"
description: "A port of MO2 in linux with NaK integration and FUSE based VFS. Comes with Root Builder support by default."
readmeQualityOk: true
url: "https://github.com/SulfurNitride/Fluorine-Manager"
language: "C++"
languages: ["C++"]
languagePcts: [81]
stars: 379
forks: 13
openIssues: 7
closedIssues: 125
watchers: 5
contributors: 9
recentReleases: 0
createdAt: "2026-02-08T03:56:11Z"
lastCommitAt: "2026-09-29T08:10:39Z"
lastReleaseAt: "2026-05-02T19:56:00Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 28
maintainers: ["SulfurNitride", "darkbasic", "PublicVoidUpdate"]
openGraphImageUrl: "https://opengraph.githubassets.com/2207c346b240db995b317c7191ced0f101aada6ac110a2e9e612837bad7c4321/SulfurNitride/Fluorine-Manager"
discussionCount: 17
---

# Fluorine Manager

Fluorine Manager an attempt at porting [MO2 (Mod Organizer 2)](https://github.com/ModOrganizer2/modorganizer) to linux with FUSE as the VFS system. A video guide for a quick setup can be found [here](https://youtu.be/yIZFUweb7v8). 

[NEXUS RELEASE](https://www.nexusmods.com/site/mods/1997)

NOTE: This is primarily for my personal use but I will see about fixing issues if I can. I use Claude/Codex, if you don't like AI please don't use this application. I'm looking for feedback not hate.

 

## Current Status

- Core app builds and runs on Linux.
- NaK integration is wired for game/proton detection and dependency handling.
- Linux-native game plugins (`libgame_*.so`) are supported.
- Portable instances are supported via local `ModOrganizer.ini` detection.

## Running Tools Without Steam

In **Edit Executables**, uncheck **Use Steam** for tools such as xEdit that do
not require Steam. This disables Fluorine's Steam startup prompt and automatic
Steam startup for that executable, including Proton's Steam integration.
The option defaults to enabled for existing and new executables; the instance's
Steam DRM setting still applies.

## Virtual Filesystem Backends

FUSE…
