---
repo: "die-tageszeitung/taz-neo"
name: "taz-neo"
description: "android reader app for the German newspaper taz"
url: "https://github.com/die-tageszeitung/taz-neo"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [95]
topics: ["android", "app", "taz"]
stars: 23
forks: 7
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 10
recentReleases: 0
createdAt: "2020-02-04T17:06:37Z"
lastCommitAt: "2026-06-29T07:23:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 56
maintainers: ["eikectrlaltcoop", "fupduck", "lusy"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d5692da7a00e3fbb1fbababa635d71636ae4cf2c92aee86c1a02f8726979ae9/die-tageszeitung/taz-neo"
---

# taz/android-app

This repository contains an android reader app for the German
newspaper [taz](https://taz.de/).
The project regards the app as the primary outlet/user interface instead of
displaying digital byproducts of producing a news*paper*.

[<img src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png"
alt="Get it on F-Droid"
height="80">](https://f-droid.org/packages/de.taz.android.app.free/)
[<img src="https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png"
alt="Get it on Google Play"
height="80">](https://play.google.com/store/apps/details?id=de.taz.android.app)

## Development

This repository is currently maintained by [ctrl.alt.coop](https://ctrl.alt.coop).
We gratefully accept propositions and welcome discussions.

Consider the [contribution guidelines](./CONTRIBUTING.md).

## Building

Before starting the build process it is necessary to initialize the mupdf-android-viewer submodule:
```
git submodule update --init --recursive
```

Additionally mupdf needs to be published to the local maven repository.
This step has to be repeated everytime the mupdf library is updated to a new version.
```
./scripts/publish-mupdf-to-maven-local.sh
```

With…
