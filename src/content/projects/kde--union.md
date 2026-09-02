---
repo: "KDE/union"
name: "union"
description: "A Qt style supporting both QtQuick and QtWidgets."
readmeQualityOk: true
url: "https://github.com/KDE/union"
homepage: "https://invent.kde.org/plasma/union"
language: "C++"
languages: ["C++"]
languagePcts: [78]
stars: 38
forks: 2
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 19
recentReleases: 0
createdAt: "2025-01-14T12:22:23Z"
lastCommitAt: "2026-09-02T07:33:12Z"
status: "thriving"
tags: ["funded"]
healthScore: 79
undervaluedScore: 53
maintainers: ["awhiemstra", "Akselmo", "nicolasfella"]
openGraphImageUrl: "https://opengraph.githubassets.com/24374a5602ff74b505616a6b0ed9aa20125a8a0a66f7ee0ed0f8b159b3b29ff3/KDE/union"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# Union

Union is a style engine designed to provide a unified style description to a set
of separate output styles.

## Getting Started

To use Union, you will need to have Union installed, either by installing it using
your favorite package manager, or by building it from source.

To use Union in a QtQuick or Kirigami application, run the application with the
environment variable `QT_QUICK_CONTROLS_STYLE` set to `org.kde.union`.

To learn more about how to use or develop Union, see the [Union Documentation][].

[Union Documentation]: https://api.kde.org/union-index.html

## Building

To build Union, you will need a recent version of CMake and Qt version 6.9 or
higher. You will also need to build [cxx-rust-cssparser] which is required for
the default CSS input format.

[cxx-rust-cssparser]: https://invent.kde.org/libraries/cxx-rust-cssparser

You can build and install Union [manually with CMake](https://github.com/KDE/union/blob/HEAD/cmake) like this:

[cmake]: https://develop.kde.org/docs/getting-started/building/cmake-build/

```bash
cmake -B build/ --install-prefix /usr
cmake --build build/ --parallel
sudo cmake --install build/
```

Or with [kde-builder][]:

[kde-builder]:…
