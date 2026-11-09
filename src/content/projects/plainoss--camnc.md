---
repo: "plainoss/camNC"
name: "camNC"
description: "web app that visualizes CNC G-code on a live camera feed"
readmeQualityOk: true
url: "https://github.com/plainoss/camNC"
homepage: "https://camnc.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["cnc", "opencv", "pose-estimation"]
stars: 10
forks: 1
openIssues: 6
closedIssues: 16
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2025-03-03T11:20:17Z"
lastCommitAt: "2026-11-09T11:46:46Z"
lastReleaseAt: "2026-11-05T06:19:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 81
maintainers: ["Schibum"]
openGraphImageUrl: "https://opengraph.githubassets.com/40a20aeba682a496621414f68fab886b7fd1182b52eee38cf9f7594a1d12e701/plainoss/camNC"
---

# camNC

**See your CNC toolpath on the real machine bed. Then cut it.**

[Explore demo](https://run.camnc.app/demo)

| Camera image (wide-angle lens, rotated to match)                                                                       | camNC top view of the same frame, with the toolpath                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| <img alt="Raw camera image of the bed with lens distortion and perspective" src="docs/images/readme/camera-raw.jpg" /> | <img alt="Corrected top view of the same frame with a knife block toolpath, colored by depth" src="docs/images/readme/top-view.jpg" /> |

_The raw camera image (left, rotated to match) and camNC's corrected top view of the same frame with a toolpath on the bed_

camNC shows your CNC toolpath on a live camera image of the machine bed, so you can check stock placement, offsets and
clamps before the spindle starts. It also runs the job:…
