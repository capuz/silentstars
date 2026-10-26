---
repo: "Ri0n/AnyKeep"
name: "AnyKeep"
description: "Note-taking application written with Qt in mind and able to read tomboy notes"
readmeQualityOk: true
url: "https://github.com/Ri0n/AnyKeep"
homepage: "https://anykeep.net"
language: "C++"
languages: ["C++"]
languagePcts: [77]
stars: 20
forks: 6
openIssues: 27
closedIssues: 75
watchers: 6
contributors: 5
recentReleases: 4
createdAt: "2013-07-11T12:46:35Z"
lastCommitAt: "2026-10-26T09:17:47Z"
lastReleaseAt: "2026-10-23T09:21:18Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 93
undervaluedScore: 71
maintainers: ["Ri0n", "github-actions[bot]", "transifex-integration[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/11341739/5d24666b-8a2c-451f-a036-2e2bb96ccac2"
discussionCount: 1
---

AnyKeep
======

It's a Qt app which usually lives in your system tray and allows you to make notes quick way.

AnyKeep was written as a clone of Tomboy with use of Qt.
It's not so feature rich as Tomboy but light and fast and usually suits all common needs.
Moreover AnyKeep can work with Tomboy notes and it's not so hard add support of other apps.

Some features:
* Quick access to notes from tray menu
* Internal notes manager to handle multiple notes at once / search notes
* Support for Tomboy/Gnote notes
* Support for markdown
* Create notes from selection by a hotkey
* Spell checking (hunspell)
* Cross-platform (tested on Linux and Windows with gcc and Visual Studio)
* Other: configurable amount of notes in menu. configurable storage path, print note, save note dialog geometry

## Downloads

Check https://anykeep.net page for the latest downloads.

Some older releases could be found at https://yadi.sk/d/HbnqnaTN6fwzN.

## Building

AnyKeep requires:

* a C++20 compiler;
* CMake 3.25 or newer;
* Python 3 for build-time generation of dynamic plugin metadata;
* Qt 6.4 or newer with the Core, Gui, Widgets, PrintSupport, Network, and XML
  modules;
* QCA 2 built for Qt 6;
*…
