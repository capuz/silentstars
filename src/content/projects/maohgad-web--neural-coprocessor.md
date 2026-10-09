---
repo: "maohgad-web/Neural-coprocessor"
name: "Neural-coprocessor"
description: "Neural-coprocessor  *MGPU Bridge* ReShade add-on that runs DLSS Neural Rendering on a second GPU while the first renders the game. Not SLI — neural post-processing is a terminal stage, so it can be executed on another device entirely. Measured on dual RTX 5060 Ti, with the method and the mistakes published."
readmeQualityOk: true
url: "https://github.com/maohgad-web/Neural-coprocessor"
homepage: "https://youtu.be/yoEsuZyltFc"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 172
forks: 10
openIssues: 6
closedIssues: 15
watchers: 3
contributors: 3
recentReleases: 7
createdAt: "2026-08-28T03:23:05Z"
lastCommitAt: "2026-10-09T10:51:36Z"
lastReleaseAt: "2026-09-21T02:25:53Z"
status: "newborn"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 94
undervaluedScore: 33
maintainers: ["maohgad-web", "MoHasan9505"]
openGraphImageUrl: "https://opengraph.githubassets.com/54f1d438e1c0440684e5e52337256fc6ea9048771b9e93f259e5473e72141cdf/maohgad-web/Neural-coprocessor"
fundingLinks: ["KO_FI:https://ko-fi.com/marceloguibout"]
discussionCount: 20
---

# Neural Coprocessor

**A second GPU runs a game's DLSS Neural Rendering while the first one renders the game.**

### [Download the latest release](https://github.com/maohgad-web/Neural-coprocessor/releases)

Unpack into the folder containing the game's `.exe`. Full install steps and every known limitation are in `README.txt` inside the zip, and summarised below.

Research code with published measurements, not a product. Run games with anti-cheat and online games at your own risk.

* * *

## Project Overview

Not SLI: nothing is split mid-frame. Neural rendering is a *terminal* stage. It takes a finished frame and returns a finished frame, so it can be picked up and executed somewhere else entirely.

**This is a ReShade add-on.** It is called **MGPU Bridge**, it is a `.addon64` file that ReShade loads into a D3D12 game, and every log line it writes is prefixed `[MGPU]` in `ReShade.log`. It is not a driver, not a patch, and not a replacement for anything, and it needs an **add-on-enabled** ReShade build to load at all. There is no game modification of any kind: the add-on reads each finished frame and does its work elsewhere.

### Which card should run DLSS 5

Only the second card…
