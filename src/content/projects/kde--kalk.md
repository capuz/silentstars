---
repo: "KDE/kalk"
name: "kalk"
description: "Kalk is a powerful cross-platform calculator application built with the [Kirigami framework](https://kde.org/products/kirigami/)"
url: "https://github.com/KDE/kalk"
homepage: "https://invent.kde.org/utilities/kalk"
language: "QML"
languages: ["QML", "C++"]
languagePcts: [61, 34]
stars: 14
forks: 6
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 46
recentReleases: 0
createdAt: "2020-07-29T03:52:27Z"
lastCommitAt: "2026-06-27T00:47:48Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 77
undervaluedScore: 67
maintainers: ["MichaelRostom2", "heirecka", "nmariusp"]
openGraphImageUrl: "https://opengraph.githubassets.com/96d0b22673740f63f5a503603731a3accbfaad104cf967039d9ea27c637fb363/KDE/kalk"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# <img src="kalk.png" width="48"/> Kalk
Kalk is a convergent calculator application built with the [Kirigami framework](https://kde.org/products/kirigami/). Although it is mainly targeted for mobile platforms, it can also be used on the desktop.

Originally starting as a fork of [Liri calculator](https://github.com/lirios/calculator), Kalk has gone through heavy development, and no longer shares the same codebase with Liri calculator.

## Features
* Basic calculation
* History
* Unit conversion
* Currency conversion
* Binary calculation

## Links
* App page: https://apps.kde.org/kalk
* Project page: https://invent.kde.org/utilities/kalk
* Issues: https://bugs.kde.org/enter_bug.cgi?product=Kalk
* Development channel: https://matrix.to/#/#plasmamobile:matrix.org

## Dependencies
* Qt6
* CMake
* KI18n
* KUnitConversion
* Kirigami
* Kirigami Add-ons
* KConfig
* libqalculate

See the top level CMakeLists.txt file for more dependencies.

## Building and Installing

```sh
mkdir build
cd build
cmake -DCMAKE_INSTALL_PREFIX=/path/to/prefix -G Ninja .. # add -DCMAKE_BUILD_TYPE=Release to compile for release
ninja install # use sudo if necessary
```

Replace `/path/to/prefix` with your…
