---
repo: "Eeems-Org/oxide"
name: "oxide"
description: "A desktop environment for the reMarkable tablet"
url: "https://github.com/Eeems-Org/oxide"
homepage: "https://oxide.eeems.codes"
language: "C++"
languages: ["C++"]
languagePcts: [80]
topics: ["remarkable-tablet"]
stars: 273
forks: 24
openIssues: 54
closedIssues: 217
watchers: 5
contributors: 23
recentReleases: 0
createdAt: "2020-08-30T21:41:02Z"
lastCommitAt: "2026-06-24T23:39:10Z"
lastReleaseAt: "2020-09-11T05:33:23Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 71
undervaluedScore: 26
maintainers: ["Eeems", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0de11fbe220d3d22787d14b4906884ce309df585acc51fff63d0e97d1c6d0e94/Eeems-Org/oxide"
---

# Oxide

A launcher application for the [reMarkable tablet](https://remarkable.com/).

Head over to the [releases](https://github.com/Eeems/oxide/releases) page for more information on the latest release. You can also see some (likely outdated) [screenshots here](https://github.com/Eeems/oxide/wiki/Screenshots).

Here is a video of it in action:

You can find other (likely outdated) [videos here](https://github.com/Eeems/oxide/wiki/Videos).

## Building

### Binaries

 1. Install the [reMarkable toolchain](https://remarkable.guide/devel/toolchains.html#official-toolchain)
 2. Run `make release` or `make FEATURES=sentry release`
 3. The built files can be found in the `release/` folder

### Package files

 1. Install [toltecmk](https://pypi.org/project/toltecmk/)
 2. Run `make package`
 3. The ipk files can be found in the `dist/` folder
