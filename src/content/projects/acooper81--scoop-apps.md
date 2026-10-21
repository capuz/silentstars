---
repo: "ACooper81/scoop-apps"
name: "scoop-apps"
description: "A personal bucket for http://scoop.sh"
readmeQualityOk: true
url: "https://github.com/ACooper81/scoop-apps"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [97]
topics: ["scoop-bucket"]
stars: 72
forks: 16
openIssues: 76
closedIssues: 337
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2019-12-27T11:48:35Z"
lastCommitAt: "2026-10-21T20:00:24Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 96
undervaluedScore: 50
maintainers: ["github-actions[bot]", "VirtualGalaxy", "ACooper81"]
openGraphImageUrl: "https://opengraph.githubassets.com/08ef8ab9f9512b9fbd3c9f69ac0c15ce9ac13f2d72cb04c7a6e17ee0bd4c806c/ACooper81/scoop-apps"
---

# Description

# Automatic Install Script
Run the following in a non-admin PowerShell terminal and accept the security prompts.
- iwr -useb 'https://raw.githubusercontent.com/ACooper81/scoop-apps/master/install.ps1' | iex

As soon as scoop is installed do the following:
Run the following in a admin PowerShell terminal
- iwr -useb 'https://raw.githubusercontent.com/ACooper81/scoop-apps/master/postinstall.ps1' | iex

# Manual Installation
Refer to new installer how to install base scoop.
https://github.com/ScoopInstaller/Install#scoop-uninstaller

Run the following in a non-admin PowerShell terminal
- Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
- iwr -useb 'https://raw.githubusercontent.com/scoopinstaller/install/master/install.ps1' | iex

As soon as base scoop is installed do the following:
Run the following in a admin PowerShell terminal
- scoop install 7zip git sudo dark innounp lessmsi aria2 --global --no-cache
- scoop config SCOOP_REPO 'https://github.com/Ash258/Scoop-Core'
- scoop bucket add Scoop-Apps 'https://github.com/ACooper81/scoop-apps'
- scoop update
- scoop checkup

Once installed, run scoop help for additional information.

# Scoop URL's…
