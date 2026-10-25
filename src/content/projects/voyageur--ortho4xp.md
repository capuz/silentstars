---
repo: "voyageur/Ortho4XP"
name: "Ortho4XP"
description: "A base mesh creation tool for the X-Plane flight simulator"
readmeQualityOk: true
url: "https://github.com/voyageur/Ortho4XP"
language: "C"
languages: ["C", "Python"]
languagePcts: [69, 31]
stars: 14
forks: 8
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 17
recentReleases: 0
createdAt: "2016-10-11T14:48:14Z"
lastCommitAt: "2026-10-25T08:39:28Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 70
undervaluedScore: 38
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/abfe7f371d31fcc7f7b978a0dcf1c1697aeb08f03616bbd556ede2009a321867/voyageur/Ortho4XP"
---

# Ortho4XP
A scenery generator for the X-Plane flight simulator

**Forked repository**: the official git repository of this great X-Plane tool can be found at https://github.com/oscarpilote/Ortho4XP, maintained by the actual developer. This repository predates the official one so does not show as a fork, but it is one

Included in this personal fork are fixes from existing PRs that were not merged at the time, and some additional changes:
* Option to enable basic transparency roads overlay (based on Transparency4Ortho)
* Zoomable world map
* Updates to providers (mostly Europe/France)
* Small UI changes (layout, some config optiosn)
* Code cleanup and python3 changes

To rebuild the Triangle4xp utility:
```shell
gcc -O2 Utils/Triangle4XP.c -lm -o Utils/Triangle4XP
```

Needed packages for Gentoo (USE=tk should be set, nvidia-texture-tools can be found in my overlay):
```
numpy tkinter pillow Rtree Shapely p7zip nvidia-texture-tools
```

Original links (dating back to this repository creation):
* http://forums.x-plane.org/index.php?/forums/topic/90469-ortho4xp/ (English forum thread)
* http://www.x-plane.fr/showthread.php?t=55404 (French forum thread)
*…
