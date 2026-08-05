---
repo: "funnansoftware/awen"
name: "awen"
description: "2D game engine developed to explore the latest C++ has to offer."
readmeQualityOk: true
url: "https://github.com/funnansoftware/awen"
language: "QML"
languages: ["QML"]
languagePcts: [48]
stars: 5
forks: 0
openIssues: 4
closedIssues: 11
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-20T20:46:31Z"
lastCommitAt: "2026-08-05T06:07:11Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 51
maintainers: ["funnan-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b472a796c8c7006a3a3de2106004774a12d0a78c0407116c8aadb4252c93d26/funnansoftware/awen"
---

# awen

A C++23 application framework built around Qt Quick. The framework's QML
modules live under `src/`; the apps built on it live under `app/`:

- **awen** — the framework sample app.
- **[briarthorn](https://github.com/funnansoftware/awen/blob/HEAD/app/briarthorn)** — a flight/combat roguelike (its own
  [non-commercial license](https://github.com/funnansoftware/awen/blob/HEAD/app/briarthorn/LICENSE.md)).

Qt Quick is the sole rendering backend. Qt itself comes prebuilt when a kit is
found (an official [Qt installer](https://www.qt.io/download-qt-installer-oss)
or [aqtinstall](https://github.com/miurahr/aqtinstall) install — `C:\Qt`,
`~/Qt`, or the `QT_ROOT_DIR` environment variable), and is otherwise built from
source by vcpkg on the first configure; `-DAWEN_QT=vcpkg|prebuilt` pins the
choice. Either way vcpkg provides the remaining dependencies: the Qt libraries
link dynamically while everything else links statically — the custom triplets
in [cmake/triplets](https://github.com/funnansoftware/awen/blob/HEAD/cmake/triplets) draw that line. Dependencies build in
release only (debug app builds link the release libraries), except on the
windows debug preset, where MSVC requires…
