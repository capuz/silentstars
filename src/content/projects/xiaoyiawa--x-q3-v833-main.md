---
repo: "Xiaoyiawa/x_q3_v833_main"
name: "x_q3_v833_main"
description: "A LVGL program for Alpha Egg Q3 device"
originalDescription: "A LVGL program for Alpha Egg Q3 device"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Xiaoyiawa/x_q3_v833_main"
language: "C"
languages: ["C"]
languagePcts: [99]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-23T04:46:30Z"
lastCommitAt: "2026-09-17T12:49:00Z"
lastReleaseAt: "2026-02-16T07:10:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 31
maintainers: ["Xiaoyiawa"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c94b1b49357ce06011cf2332a621c3765d59f51594ba4d0283179736aa2687c/Xiaoyiawa/x_q3_v833_main"
---

## Dendro
This is a simple LVGL program providing multimedia support for unique Linux embedded devices.
* This branch uses dynamically linked LVGL, see below for details

Features implemented:
* Android-like custom page manager supporting various callbacks and key events
* File manager and calculator based on lv_100ask
* Image viewer and audio/video player based on ffmpeg
* MIDI player based on libtimidity-soundfont branch
* Flappy Bird casual game

## Running Platform
**Allwinner V833, Tina Linux, musl-libc**

## How to Compile Source Code
* Linux system is recommended
* Clone the source code
* Find a cross-compiler suitable for your device system
> For example: arm-openwrt-linux-muslgnueabi-gcc
* Change the file path in build.sh to your compiler path
* Run ./build.sh and wait for compilation to complete; the output executable is dendro_run
* The res folder contains the fonts, images, and other resources needed by the program

Note: Most of the .so library files in the lib folder are pre-compiled from unmodified source code; some are taken directly from the system. The target system is armv7 musleabi hf.
You can recompile these libraries with your own compiler to adapt to…
