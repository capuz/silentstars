---
repo: "linuxdeepin/deepin-screen-recorder"
name: "deepin-screen-recorder"
description: "Screen recorder for DDE"
readmeQualityOk: true
url: "https://github.com/linuxdeepin/deepin-screen-recorder"
language: "C++"
languages: ["C++"]
languagePcts: [92]
stars: 116
forks: 89
openIssues: 0
closedIssues: 24
watchers: 11
contributors: 50
recentReleases: 0
createdAt: "2017-04-01T09:13:45Z"
lastCommitAt: "2026-09-21T09:13:20Z"
lastReleaseAt: "2024-04-23T05:50:39Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 52
maintainers: ["dengzhongyuan365-dev", "pengfeixx", "add-uos"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6a8d9f4faab6fae7f3a3d1642f23381611484f882349520452584490437a9d2/linuxdeepin/deepin-screen-recorder"
---

# Deepin Screen Recorder

This is default screen recorder application for Deepin.

## Dependencies

In debian, use below command to install compile dependencies:

libc6 (>= 2.14), libgcc1 (>= 1:3.0), libgl1-mesa-glx | libgl1, libqt5core5a (>= 5.6.0~beta), libqt5dbus5 (>= 5.0.2), libqt5gui5 (>= 5.2.0), libqt5network5 (>= 5.0.2), libqt5widgets5 (>= 5.0.2), libqt5x11extras5 (>= 5.6.0), libstdc++6 (>= 4.1.1), libx11-6, libxcb-util0 (>= 0.3.8), libxcb1, libxext6, libxtst6

## Installation

* mkdir build
* cd build
* qmake ..
* make
* ./deepin-screen-recorder

## Usage

1. Select area need to record
2. Then click "record" button to record
3. Click tray icon to stop record, and save file on desktop

Below is keymap list for deepin-screen-recorder:

| Function					      | Shortcut                                         |
|---------------------------------|--------------------------------------------------|
| Cancel                          | **ESC**                                          |
| Adjust position of select area  | **Up**, **Down**, **Left**, **Right**            |
| Adjust size of select area      | **Ctrl** + **Up**, **Down**, **Left**, **Right** |
| Stop record…
