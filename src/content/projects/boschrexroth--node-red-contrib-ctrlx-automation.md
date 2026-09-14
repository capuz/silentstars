---
repo: "boschrexroth/node-red-contrib-ctrlx-automation"
name: "node-red-contrib-ctrlx-automation"
description: "Node-RED nodes to access ctrlX CORE devices."
readmeQualityOk: true
url: "https://github.com/boschrexroth/node-red-contrib-ctrlx-automation"
homepage: "https://www.npmjs.com/package/node-red-contrib-ctrlx-automation"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [88]
topics: ["node-red", "nodejs", "ctrlxautomation", "boschrexroth"]
stars: 28
forks: 10
openIssues: 1
closedIssues: 11
watchers: 8
contributors: 6
recentReleases: 0
createdAt: "2020-03-26T07:59:06Z"
lastCommitAt: "2026-09-14T09:12:02Z"
lastReleaseAt: "2022-03-14T15:29:53Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 63
maintainers: ["krauskopf", "dependabot[bot]", "YourCodeShepherd"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/250195517/8c05e300-01b0-11eb-9568-26ced243de9b"
---

# Node-RED nodes for ctrlX AUTOMATION

This package **node-red-contrib-ctrlx-automation** contains nodes to easily connect to [ctrlX AUTOMATION](https://www.ctrlx-automation.com/) devices from [Bosch Rexroth](https://www.boschrexroth.com).

Using the nodes you can read from and write to the ctrlX Data Layer.  
The nodes can run in a Node-RED app environment on a ctrlX CORE device as well as on a third-party device which runs Node-RED.

**Important:** It is recommended to upgrade the AutomationCore System App to version 1.20.0 (XCR-V-0120, part of ReleaseMilestone 23.03) or newer for full subscription settings support! Older versions are still supported but with less features.

## Installation

Install using the managed palette from inside Node-RED.

### In Node-RED (preferred)

* Via **Manage Palette** -> **Search** for `node-red-contrib-ctrlx-automation`

### In a shell

* go to the Node-RED user data directory, e.g.: `~/.node-red`
* run `npm install node-red-contrib-ctrlx-automation --save`

## Usage - Quick Overview

There are two new nodes which appear in the category **ctrlX AUTOMATION** in your Node-RED palette.
In addition to that, a configuration node will be added to the…
