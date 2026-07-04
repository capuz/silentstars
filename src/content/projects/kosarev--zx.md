---
repo: "kosarev/zx"
name: "zx"
description: "ZX Spectrum emulator in Python and C++"
url: "https://github.com/kosarev/zx"
language: "Python"
languages: ["Python"]
languagePcts: [76]
topics: ["spectrum-emulator", "zx-spectrum-emulator", "zx-spectrum", "zxspectrum", "python", "mit-license", "z80", "tape", "converter", "emulator"]
stars: 22
forks: 0
openIssues: 22
closedIssues: 19
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2017-10-07T08:27:45Z"
lastCommitAt: "2026-07-04T19:19:58Z"
lastReleaseAt: "2026-05-30T18:11:53Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "release_machine", "under_pressure"]
healthScore: 78
undervaluedScore: 62
maintainers: ["kosarev"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/106082566/f3d10e80-7f44-11eb-8086-8aa4628e5b16"
---

# zx
ZX Spectrum emulation framework in Python and C++

[More screenshots](https://github.com/kosarev/zx/tree/master/screenshots)

### Features
* Designed to be suitable for research and development purposes
  such as unattended testing of Spectrum software, timing
  analysis, etc.
* Meant to be easy to customize and re-use via Python interfaces.
* Fast and accurate emulation.
* Supported formats: snapshots (`.z80`, `.sna`), tapes (`.tap`, `.tzx`, `.wav`),
  playbacks (`.rzx`), screenshots (`.scr`),
  [ZX Basic](https://github.com/boriel/zxbasic) sources (`.zxb`),
  archives (`.zip`).
* Based on the fast and flexible
  [Z80 emulator](https://github.com/kosarev/z80).

### Development status

* Platforms: Linux and Windows (via SDL2).
* General status: working pre-alpha.
* Supported machines: 48K only for now.
* Display: multi-colour effects,
  [accurate timings](https://github.com/kosarev/zx/blob/master/test/screen_timing).
* Sound: EAR beeper and tape output supported.
* Tape: TAP and TZX formats supported as well as conversion to WAV.
* Snapshots: Z80.
* Playback recordings: RZX.
* Joystick: D-Pad mapped to cursor keys, supported via SDL.

### Installation and running

Install…
