---
repo: "ddm999/gt7info"
name: "gt7info"
description: "GT7Info build system and data"
url: "https://github.com/ddm999/gt7info"
homepage: "https://ddm999.github.io/gt7info/"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [56, 28]
stars: 89
forks: 14
openIssues: 0
closedIssues: 7
watchers: 11
contributors: 8
recentReleases: 0
createdAt: "2022-03-08T00:29:55Z"
lastCommitAt: "2026-06-27T00:35:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 50
maintainers: ["ddm999"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf597a65f56ef9908b3986eb49038c9d9af8b20a2d56ae6f7bce972f519b4363/ddm999/gt7info"
---

# GT7 Info

The static website is built by `build.py` into the `build` folder.
The build script also produces a `build/data.json` file to be used by bots.

Historical and current data for dealerships, daily races, etc. for the site are stored in `_data`.
* `db` contains database information. Cars, countries, tracks, manufacturers with English names, IDs and relations.
* `rewards` contains reward cars and where they can be obtained.
* `dailyrace` contains daily race information per change (currently every Monday @ 06:00 UTC)
* `legend` contains legendary car dealership, changed every day @ 00:00 UTC.
* `used` contains used car dealership, changed every day @ 00:00 UTC.
* `championships` contains singleplayer championship data per update version (bottom of the screen in World Circuits).
* `events` contains singleplayer event data per update version (World Circuits). ***NOTE: unfinished, lots of data missing here.***
* `z_unordered` contains legend & used data from pre-release footage and from before data started being saved every day.
This is kept separate as it is not continuous with the rest of that data.

The `fonts` folder contains Google Fonts supplied fonts used by the site.…
