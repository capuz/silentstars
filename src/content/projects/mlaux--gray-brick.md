---
repo: "mlaux/gray-brick"
name: "gray-brick"
description: "Game Boy emulator for Macintosh System 6"
readmeQualityOk: true
url: "https://github.com/mlaux/gray-brick"
homepage: "https://constcast.org/gb6.html"
language: "C"
languages: ["C"]
languagePcts: [90]
stars: 20
forks: 2
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2019-04-16T06:50:54Z"
lastCommitAt: "2026-08-21T04:09:58Z"
lastReleaseAt: "2026-07-26T05:44:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 70
maintainers: ["mlaux"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4d7aaaf779aa9a0c45aa8e4e7f87b94b122a2e9ee79482de8f4eb553bd7afda/mlaux/gray-brick"
---

#  Gray Brick - Game Boy emulator for Macintosh System 6

Gray Brick is a Game Boy emulator targeting 68k Macintosh with a focus on
execution speed. The emulator features a JIT compiler that translates Game Boy
code into 68k code for maximum speed.

This project does not make any attempt to be particularly accurate to the GB
hardware - I had to make too many compromises in order to get it working at all.
Despite this, many games work well and run fast enough to be enjoyable.

I have tested this on a Mac Plus with System 6.0.8, a Mac SE/30 with 7.1, and a
Mac IIfx with 7.5.3. A mid-range 68030 can get around 30 FPS with no sound and
frame skip, and a fast 68030 or 68040 can achieve real-time speeds with sound
enabled (and frame skip still on), depending on video settings. Original 8 MHz
68000 Macs get around 8 FPS :( but this is still better than my original
interpreter version which completed one frame every 5-6 seconds.

My goal with this project was to give vintage Mac enthusiasts another fun app
to check out.

## System requirements

* Any 68k Macintosh (68030+ highly recommended)
* Some amount of RAM (see below)
* System 6.0.5 and up

This is a memory-intensive application,…
