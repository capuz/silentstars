---
repo: "helios-base/soccerwindow2"
name: "soccerwindow2"
description: "soccerwindow2 is a visualization tool for the RoboCup Soccer Simulation."
readmeQualityOk: true
url: "https://github.com/helios-base/soccerwindow2"
language: "C++"
languages: ["C++"]
languagePcts: [93]
topics: ["robocup", "soccer", "simulation"]
stars: 8
forks: 8
openIssues: 3
closedIssues: 4
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2020-12-29T12:31:54Z"
lastCommitAt: "2026-11-23T13:30:13Z"
lastReleaseAt: "2023-03-16T09:57:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 91
undervaluedScore: 82
maintainers: ["hidehisaakiyama"]
openGraphImageUrl: "https://opengraph.githubassets.com/58599842e6b6f5c93959b97e4cbc298b8f69e08141009dd2437d96df39711aef/helios-base/soccerwindow2"
---

# soccerwindow2

soccerwindow2 is a visualization tool for the RoboCup Soccer Simulator.
- The RoboCup Soccer Simulator: http://github.com/rcsoccersim/
- RoboCup Official Homepage: http://www.robocup.org/

soccerwindow2 works as not only an alternative monitor/logplayer, but also a powerful visual debugger for developing a simulated soccer team.
- Visualizes internal status of agents.
- Provides a formation editor.
- Provides a label editor for machine learning.

## Requirements

- Qt 5.15 or later, or Qt 6.2 or later https://www.qt.io/
  - Qt WebSockets is optional. It is needed to connect to rcssserver over WebSocket.
- CMake 3.16 or later (or Autotools)
- The latest librcsc https://github.com/helios-base/librcsc (the `develop` branch is the latest)

## Quick Start

The following commands are for Ubuntu 24.04 and 26.04.
See [docs/build.md](https://github.com/helios-base/soccerwindow2/blob/HEAD/docs/build.md) for the details (Qt5, Autotools, configure options, tests, source tarball, etc.).

Install the packages (Qt6):
