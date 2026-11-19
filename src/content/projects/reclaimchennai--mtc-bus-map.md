---
repo: "reclaimchennai/mtc-bus-map"
name: "mtc-bus-map"
description: "Chennai MTC bus map: every route, live buses in their real liveries, observed road speeds from the live fleet's GPS, next-bus at every stop. Code + data behind mtc.reclaimchennai.city"
readmeQualityOk: true
url: "https://github.com/reclaimchennai/mtc-bus-map"
homepage: "https://mtc.reclaimchennai.city"
language: "Python"
languages: ["Python", "JavaScript", "HTML"]
languagePcts: [48, 30, 22]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-19T14:18:41Z"
lastCommitAt: "2026-11-19T11:59:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 67
undervaluedScore: 33
maintainers: ["reclaimchennai"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b406a482199f4444a71e9f6479c8b337438073a0b23231f7a4f7d20722d3d91/reclaimchennai/mtc-bus-map"
---

# Chennai MTC bus map — live buses, observed traffic, open timetables

The code and data behind **[mtc.reclaimchennai.city](https://mtc.reclaimchennai.city)**: every MTC
bus route on one map, every live bus moving on it, how fast buses are actually moving road by
road, and the next bus at every stop. The GTFS feeds built from the same source are published in
[reclaimchennai/ChennaiGTFS](https://github.com/reclaimchennai/ChennaiGTFS/tree/chennai-one-feeds/data/chennai-one)
(MTC buses, CMRL Metro, Southern Railway suburban + MRTS).

Routes, stops and timetables come from **Chennai One**, the CUMTA multimodal app, rebuilt on
MTC's own stop patterns where they differ. Live buses come from two public sources read by our
server at a polite rate: **MTC's commuter site** (mtcbusits.in: which trip each bus is on, and its
stop-by-stop times) and **Chalo** (the MTC app's feed: fresher positions). The map and dashboard
read our copy, so visitors never call either service. Fares are MTC's own published stage table.
