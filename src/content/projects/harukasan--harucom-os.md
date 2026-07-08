---
repo: "harukasan/harucom-os"
name: "harucom-os"
description: "Harucom OS is the firmware of Harucom Board."
readmeQualityOk: true
url: "https://github.com/harukasan/harucom-os"
language: "Ruby"
languages: ["Ruby", "C"]
languagePcts: [52, 44]
stars: 12
forks: 1
openIssues: 5
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-03-11T03:41:58Z"
lastCommitAt: "2026-07-08T05:43:15Z"
lastReleaseAt: "2026-04-19T18:04:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 43
maintainers: ["harukasan", "ito845"]
openGraphImageUrl: "https://opengraph.githubassets.com/c69514b3e557937859a69343d45a0474ad1b4d620c4fcc08443083f9c40131e7/harukasan/harucom-os"
---

# Harucom OS

Harucom OS is the firmware for [Harucom Board](https://github.com/harukasan/harucom-board), a handmade single-board computer built around the RP2350 microcontroller. It provides a complete programming environment with DVI video output, USB keyboard input, a file system, and Ruby script execution on mruby VM.

## Target Hardware

- [Harucom Board](https://github.com/harukasan/harucom-board)

## Prerequisites

- [Raspberry Pi Pico SDK toolchain](https://github.com/raspberrypi/pico-sdk) (ARM GCC, CMake, Ninja)
- Ruby and Bundler
- [picotool](https://github.com/raspberrypi/picotool) (for flashing)

## Build

```sh
git clone --recursive https://github.com/harukasan/harucom-os.git
cd harucom-os

git submodule update --init --recursive
bundle install
rake
```

The UF2 firmware file will be generated in the `build/` directory.

### Flash

```sh
rake flash
```

### Clean

```sh
rake clean      # Remove build/
rake distclean  # Remove build/ and PicoRuby build cache
```

## Documentation

Design documents and implementation notes are in the [doc/](https://github.com/harukasan/harucom-os/blob/HEAD/doc/) directory:

- [DVI…
