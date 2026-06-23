---
repo: "slowproj/slowdash"
name: "slowdash"
description: "Web-Python tool for control and monitoring of concurrent systems (slow-controls and data-acquisition)"
url: "https://github.com/slowproj/slowdash"
homepage: "https://slowproj.github.io/slowdash/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [66, 26]
stars: 5
forks: 2
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 5
recentReleases: 1
createdAt: "2024-01-04T05:15:15Z"
lastCommitAt: "2026-06-23T06:42:06Z"
lastReleaseAt: "2026-05-08T20:47:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 90
maintainers: ["SanshiroEnomoto", "kou-oishi", "yaosarayin"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4c22d87108336ddcc47ed39224a3445966bbc46020a4a462d166edd3e20ed85/slowproj/slowdash"
discussionCount: 0
---

# SlowDash
SlowDash is a web-based platform for monitoring and controlling distributed systems, with a focus on slow controls and data acquisition systems. Originally developed for physics experiments, it provides functionality similar to Grafana but with enhanced control capabilities. Rather than implementing its own data storage, SlowDash integrates with various existing databases, devices, and control systems.

#### Project Goal
- Grafana-like data browser, for time-series data and ROOT-like data objects (graphs, histograms, etc.)
- LabVIEW-like visual control (graphical control panel and control logic behind it)
- Jupyter-like Python scripting

#### Current Status: ~70% of the initial design implemented
- Data browser mostly working
- Controls partly implemented
- Analysis part (scripting etc.) is experimental

## Screenshots
### Interactive Dashboard

### Data Visualization

## Dash-Start
For users with existing time-series data in a database and Docker Compose installed, SlowDash offers immediate visualization capabilities. Visit our ["Dash Start" guide](https://slowproj.github.io/slowdash/#DashStart) for details.

## Setup and Quick Look

### Docker (Linux, Mac, Windows)…
