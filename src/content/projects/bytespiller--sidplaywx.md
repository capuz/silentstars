---
repo: "bytespiller/sidplaywx"
name: "sidplaywx"
description: "A PC GUI player for Commodore 64 SID music files based on libsidplayfp and wxWidgets"
readmeQualityOk: true
url: "https://github.com/bytespiller/sidplaywx"
language: "C++"
languages: ["C++"]
languagePcts: [99]
topics: ["music", "player", "retro", "emulation", "c64", "commodore-64", "wxwidgets", "chiptune-player", "chiptunes"]
stars: 69
forks: 3
openIssues: 3
closedIssues: 9
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2020-08-09T18:09:42Z"
lastCommitAt: "2026-09-20T08:45:40Z"
lastReleaseAt: "2024-05-19T12:31:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 62
undervaluedScore: 32
maintainers: ["bytespiller"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a4c649c96b76f44abda646a5798bf001ca118c9d1c60b3c957413c646bb45b6/bytespiller/sidplaywx"
discussionCount: 3
---

# <img src="../assets/screenshots/composite_spwx_title.png?raw=true"/>

The **sidplaywx** is a GUI player for Commodore 64 SID chip tunes aiming to provide a feature-rich & intuitive SID tune playback experience on the PC.

The current alpha version is fully usable, supporting QoL features like seeking, drag & drop, unicode paths, DPI awareness and much more.

The **sidplaywx** uses [libsidplayfp](https://github.com/libsidplayfp/libsidplayfp) (with [ReSIDfp](https://github.com/libsidplayfp/libresidfp)) for ultimate quality in SID emulation, [wxWidgets](https://github.com/wxWidgets/wxWidgets) for native GUI on supported platforms, and [PortAudio](https://github.com/PortAudio/portaudio) for audio output.

## Screenshots

## Platforms
This project uses the GCC and the CMake, and at the moment Windows and Linux are supported.

## Planned features for v1.0
The current version of the sidplaywx is 0.x.x (alpha), so in addition to bugfixes and common sense updates, I consider at least _these_ features are needed before the sidplaywx can graduate to version 1.0:
- Playlist improvements such as <del>duration columns</del>, reordering<del>, remembering last state and playlist file…
