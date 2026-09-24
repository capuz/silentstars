---
repo: "131/node-winapi"
name: "node-winapi"
description: "Native windows api binding for nodejs"
readmeQualityOk: true
url: "https://github.com/131/node-winapi"
language: "C#"
languages: ["C#"]
languagePcts: [71]
topics: ["nodejs", "msdn", "winapi", "screensaver", "uptime"]
stars: 60
forks: 8
openIssues: 0
closedIssues: 3
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2016-02-06T10:00:57Z"
lastCommitAt: "2026-09-24T08:42:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 32
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/69f3651a8a84a3d9e700522c69877f3ca3114d887e899592fa65bd1aa63ee106/131/node-winapi"
---

# winapi
Misc natives MS Windows API wrappers for nodejs & nwjs

# API

## require('winapi').getIdleTime()
Return the time the system has been idle (since last user interaction - e.g. mouse, keyboard & stuffs, see GetLastInputInfo)
This is really usefull if you want to create a screensaver/like in nodejs / node-webkit.

```
var winapi = require('winapi');

console.log("System is idle since %s", winapi.getIdleTime() );

```

## require('winapi').CreateJobGroup()
Create a [job group](https://docs.microsoft.com/fr-fr/windows/desktop/ProcThread/job-objects) with current process and all future child_process. Use this to kill zombies. Like Rick.

```
var winapi = require('winapi');

winapi.CreateJobGroup();

//you can now spawn subprocess and they'll be killed once you died, windows will clean everything up

```
* (checkout my [dispatcher](https://github.com/131/dispatcher) project for inspiration)
* Available for node 8, nw 26 and nw 14. (i did not re-compile other platform binaries, do it by yourself...)

## require('winapi').GetLastInputInfo()
Use this native binding to get system last input time ([see…
