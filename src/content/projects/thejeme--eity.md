---
repo: "thejeme/Eity"
name: "Eity"
description: "Open source rhythm game"
readmeQualityOk: true
url: "https://github.com/thejeme/Eity"
language: "Lua"
languages: ["Lua"]
languagePcts: [100]
topics: ["love2d", "love2d-game", "lua", "rhythm-game"]
stars: 9
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-12-23T11:03:42Z"
lastCommitAt: "2026-11-18T12:08:40Z"
lastReleaseAt: "2020-05-07T13:34:07Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 37
maintainers: ["thejeme"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6d56ade6a0cb5fbcdbf27b22c2115f366d3ef92810957510781fa06e2d4cd98/thejeme/Eity"
---

# Eity

Eity is a directional rhythm game. Turn to catch notes as they converge from four directions.

[Download prior releases](https://github.com/TheJeme/Eity/releases) · [itch.io artwork and page copy](https://github.com/thejeme/Eity/blob/HEAD/promo/itch-page.md)

## Build

Install Python 3.9+ and Git. The Web target also uses Node.js and npm. From the repository root, choose one platform, several platforms, or all three.

```sh
python build.py web
python build.py windows linux
python build.py all
```

Use `python3` if that is how Python is installed. First builds download the pinned runtimes and cache them under `.build/`. The builds read the current working copies of tracked game files. Add new game files to Git before building.
