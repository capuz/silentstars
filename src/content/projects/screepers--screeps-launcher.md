---
repo: "screepers/screeps-launcher"
name: "screeps-launcher"
description: "Launcher for the Screeps Private Server"
readmeQualityOk: true
url: "https://github.com/screepers/screeps-launcher"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["go", "screeps", "hacktoberfest"]
stars: 169
forks: 43
openIssues: 9
closedIssues: 28
watchers: 4
contributors: 33
recentReleases: 0
createdAt: "2019-01-08T21:24:19Z"
lastCommitAt: "2026-07-15T05:54:50Z"
lastReleaseAt: "2019-04-28T23:29:22Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 88
undervaluedScore: 42
maintainers: ["renovate[bot]", "AlinaNova21", "philipp-horstenkamp"]
openGraphImageUrl: "https://opengraph.githubassets.com/532319358b1570388c238317adc28adb21fdfc714daa914265442c1d1a2df00b/screepers/screeps-launcher"
fundingLinks: ["PATREON:https://patreon.com/ags131"]
---

# A better launcher for Screeps private servers

## Why?
* The steam private server has a few limitations, one being that getting non-workshop mods to work is a huge headache. 
* The npm version is much better, but requires care in installing everything correctly.

Therefore, the goal of this is to simplify the entire process making it much easier to use. 
No need to manually `npm install` anything, its handled automatically

## Guides
If installing on ubuntu 18.04 or on a Pi with raspbian, theres also a guide on
reddit 
[here](https://www.reddit.com/r/screeps/comments/deyq66/newbiefriendly_ish_privatededicated_server_setup/)
that does a step-by-step setup including mongo, redis, and auto start.

## Usage
1. Download a release from the [Releases](https://github.com/screepers/screeps-launcher/releases) Page
2. Drop into an empty folder or your PATH
3. Get your [Steam API key](https://steamcommunity.com/dev/apikey)
4. Create config.yml (All fields are optional! You can pass STEAM_KEY as an environment variable)
  ```yaml
  steamKey: keyFromStep3
  # Sometimes dependencies change in ways that break screeps-launcher or the builds it does.  To work around those issues, some package…
