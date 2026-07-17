---
repo: "linuxdeepin/deepin-image-viewer"
name: "deepin-image-viewer"
description: "Image viewer for DDE"
readmeQualityOk: true
url: "https://github.com/linuxdeepin/deepin-image-viewer"
language: "C++"
languages: ["C++", "QML"]
languagePcts: [65, 33]
stars: 67
forks: 71
openIssues: 0
closedIssues: 36
watchers: 10
contributors: 77
recentReleases: 0
createdAt: "2016-08-15T02:38:04Z"
lastCommitAt: "2026-07-17T06:00:22Z"
lastReleaseAt: "2024-12-07T06:35:07Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 59
maintainers: ["wyu71", "transifex-integration[bot]", "add-uos"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1364a28fb7dd87595228d11d1913925f2c7e0740fa8629f67c0fe81d636ec62/linuxdeepin/deepin-image-viewer"
---

# Deepin Image Viewer

Deepin Image Viewer is an image viewing tool with fashion interface and smooth performance  developed by Deepin Technology.

### Dependencies

### Runtime dependencies

* [deepin-tool-kit](https://github.com/linuxdeepin/deepin-tool-kit)
* [deepin-shortcut-viewer](https://github.com/linuxdeepin/deepin-shortcut-viewer)
* [deepin-manual](https://github.com/linuxdeepin/deepin-manual)
* libexif
* libraw
* Qt5 (>= 5.6)
  * Qt5-DBus
  * Qt5-Svg
  * Qt5-X11extras

## Installation

sudo apt install cmake qtbase5-dev pkg-config libexif-dev libqt5svg5-dev libqt5x11extras5-dev libsqlite3-dev qttools5-dev-tools qttools5-dev libxcb-util0-dev libstartup-notification0-dev libraw-dev libqt5opengl5-dev qtbase5-private-dev qtmultimedia5-dev x11proto-xext-dev libmtdev-dev libegl1-mesa-dev libudev-dev libfontconfig1-dev libfreetype6-dev libglib2.0-dev libxrender-dev libdtkwidget-dev libdtkwidget5-bin libdtkcore5-bin libimageeditor-dev

### Build from source code

1. Make sure you have installed all dependencies.
```
$ sudo apt build-dep .
```

2. Build:
```
$ cd deepin-image-viewer
$ mkdir Build
$ cd Build
$ cmake ..
$ make
```

3. Install:
```
$ sudo make install
```
## Usage…
