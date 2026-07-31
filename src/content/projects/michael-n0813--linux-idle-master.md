---
repo: "michael-n0813/linux-idle-master"
name: "linux-idle-master"
description: "Linux version of idle-master, a simple script that emulates being in a steam game to unlock trading cards."
readmeQualityOk: true
url: "https://github.com/michael-n0813/linux-idle-master"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 54
forks: 9
openIssues: 2
closedIssues: 17
watchers: 4
contributors: 4
recentReleases: 1
createdAt: "2019-03-27T10:54:43Z"
lastCommitAt: "2026-07-31T06:27:41Z"
lastReleaseAt: "2026-07-31T06:31:38Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 30
maintainers: ["michael-n0813"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee0344a6839b9dd7bf28627400da465fa78a7175cf4d3d3c4fc96287fbc3f2a4/michael-n0813/linux-idle-master"
---

## ABOUT

**Linux Idle Master** is a simple CLI Script to idle steam games for card drops  
>Only linux based operating systems are supported

## UPDATES
### UPDATED v3.1 - WHITELIST :: 2026-08-01

VERSION 3.1 UPDATE
 * Added whitelist support
 * Added whitelist to options menu

>[!IMPORTANT]
>Version 3.0 has changed a lot, I recommend a fresh clone of the respository to avoid any issues or confussion.

## INSTALLING

**OPTION A** (requires `git` package)  
From a terminal enter  
`git clone https://github.com/michael-n0813/linux-idle-master.git`

**OPTION B**  
Download a zip file from releases and extract the folder  
https://github.com/michael-n0813/linux-idle-master/releases

## REQUIREMENTS

The script needs these Python packages to run:
 * requests
 * beautifulsoup4
 * pillow (with jpeg and tk support)

Example for Arch:  
`pacman -S python-beautifulsoup4 python-requests python-pillow tk`

## HOW TO RUN
 1. Open a terminal and `cd` to idle master folder
 1. Enter `python ./start.py`

 * While idling a game press `Ctrl-C` to access menu
    * q - Quit
    * r - Resume idling
    * s - Skip game *(will skip idling this game)*
    * b - Blacklist game *(add appID to…
