---
repo: "zdiemer/haze-recomp"
name: "haze-recomp"
description: "Experimental native Windows Haze port using ps3recomp; game assets not included"
readmeQualityOk: true
url: "https://github.com/zdiemer/haze-recomp"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [45, 38]
stars: 7
forks: 1
openIssues: 63
closedIssues: 37
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-10T22:04:38Z"
lastCommitAt: "2026-10-24T08:20:45Z"
lastReleaseAt: "2026-10-16T21:34:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 53
maintainers: ["zdiemer", "exterkamp"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd6efb00afb571e819c92e702b6c32f2640ac1a222518ea1e432a687cf2c6a22/zdiemer/haze-recomp"
---

# Haze Recomp

Experimental Windows port of **Haze** for PS3, built with
[ps3recomp](https://github.com/sp00nznet/ps3recomp). Targets the USA disc
**BLUS30094**, disc version **01.02**, application version **01.00**.

The Windows installer prepares your ISO, downloads verified firmware from Sony,
and installs a ready-to-play launcher. It uses a per-user MSI internally. See
[installation and upgrades](https://github.com/zdiemer/haze-recomp/blob/HEAD/docs/installing.md) and the
[automated release process](https://github.com/zdiemer/haze-recomp/blob/HEAD/docs/releasing.md).

Menus, opening-scene gameplay, audio output, and checkpoint saves have been
tested. Keyboard/mouse and SDL controller support are implemented. Performance,
rendering, and campaign compatibility are still in development. Full campaign
completion is not validated. Experimental invite-code campaign co-op has passed
two-instance local gameplay, departure and rejoin tests; separate-machine and
home-router validation is pending. Internet play requires a configured service;
see [co-op setup and limitations](https://github.com/zdiemer/haze-recomp/blob/HEAD/docs/co-op.md). Native PAMF movies
play with synchronized video…
