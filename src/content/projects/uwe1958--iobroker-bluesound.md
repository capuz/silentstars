---
repo: "Uwe1958/ioBroker.bluesound"
name: "ioBroker.bluesound"
description: "Allows control and shows information of Bluesound devices via ioBroker"
readmeQualityOk: true
url: "https://github.com/Uwe1958/ioBroker.bluesound"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["bluesound", "iobroker"]
stars: 7
forks: 5
openIssues: 1
closedIssues: 50
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2021-02-02T16:32:48Z"
lastCommitAt: "2026-11-16T11:52:47Z"
lastReleaseAt: "2026-08-10T09:11:25Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 85
maintainers: ["Uwe1958", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b9dab45e9d440566024f1159bfa71252e3b7ba8301ad4bb0bf411daee4006d4/Uwe1958/ioBroker.bluesound"
---

# ioBroker.bluesound

**Tests:** 

## bluesound adapter for ioBroker

Adapter to control Bluesound devices

## Functions included

The adapter uses API calls in the format: http://--playerIP--:11000/xxx

At startup the presets are read from the player and added to the _'presets'_ channel.
Player model and name are stored in the _'info'_ channel.
When player is playing the titles are set in the _'info'_ channel.

The player status is polled in the interval set by _'config.pollingtime'_ and the result is stored in _'control.state'_ as well as in _'info.\*'_.

PollingTime values up to 120 secs are reasonable. The adapter cannot be startet with values larger than 300 secs. Default value is 30 secs.

A timeout parameter is set by optional parameter _'config.TimeOut'_ as timeout for the API call. Default value is 2 secs.

The following functions are implemented:

- Player Stop (triggered by setting _'control.stop'_ to true)
- Player Start (triggered by setting _'control.start'_ to true)
- Player Pause (triggered by setting 'control.pause' to true)
- Play Presetxxx (triggered by setting _'.presets.preset(x).start'_ to true)
- Change Volume (triggered by changing _'control.volume'_)
-…
