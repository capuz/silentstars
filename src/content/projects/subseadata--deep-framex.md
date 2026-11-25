---
repo: "subseadata/deep-framex"
name: "deep-framex"
description: "Frame extraction libraries for deep sea video "
readmeQualityOk: true
url: "https://github.com/subseadata/deep-framex"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 2
openIssues: 18
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-23T19:33:10Z"
lastCommitAt: "2026-11-25T13:23:40Z"
lastReleaseAt: "2026-04-23T20:12:34Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "under_pressure"]
healthScore: 75
undervaluedScore: 42
maintainers: ["ThomasMorrow-SOI", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/51b2f535dfa0178ab9e6725f44806abfa371843150b86168f31075623d73c2a6/subseadata/deep-framex"
---

# deep-framex

Frame extraction library for deep sea video. Frames are self-describing and metadata is embedded directly into image files so context travels with the frame into any downstream system.

## Installation

**uv:**
```
uv pip install git+https://github.com/subseadata/deep-framex
```

**pip:**
```
git clone <repo>
cd deep-framex
pip install -e .
```

## Demo

Worked examples live in `notebooks/marimo/`, a hands-on workshop that runs deep-framex end to end. It ships with its own sample video (`clip.mp4`) and sensor logs (`sensor.csv`, the CTD records `ex2503_rovctd.csv` / `ex2503_rovctd_badclock.csv`, the nav record `ex2503_dive01_nav.csv`, and the hand-joined CTD+nav record `ex2503_dive01_sensors.csv`). Work through them in order:
