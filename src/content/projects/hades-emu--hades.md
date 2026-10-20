---
repo: "hades-emu/Hades"
name: "Hades"
description: "🔥 A Nintendo Game Boy Advance Emulator"
readmeQualityOk: true
url: "https://github.com/hades-emu/Hades"
homepage: "https://hades-emu.org"
language: "C"
languages: ["C"]
languagePcts: [97]
topics: ["gba", "emulator", "arm", "c", "gameboy", "gameboy-emulator", "gameboy-advance", "gba-emulator", "hades", "game-boy"]
stars: 256
forks: 14
openIssues: 17
closedIssues: 49
watchers: 7
contributors: 6
recentReleases: 0
createdAt: "2020-10-08T22:52:52Z"
lastCommitAt: "2026-10-20T08:49:26Z"
lastReleaseAt: "2026-02-21T17:45:33Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 81
undervaluedScore: 35
maintainers: ["Arignir"]
openGraphImageUrl: "https://opengraph.githubassets.com/69f99104f78f5bdd841b4e0c6d90f735cc3171ce087c3088408d3f73d23872c1/hades-emu/Hades"
---

# 🔥 Hades

## Screenshots

## Features

Hades is still under heavy development but it aims to have a decent balance between usability, speed and accuracy.

Currently, Hades features:
  - Decent accuracy
  - Game controller support
  - Keys and buttons remapping
  - Quick Saves (also known as Save State)
  - Some GPIO devices, such as:
    - Real Time Clock (RTC)
    - Rumble
  - Shaders, such as:
    - Color correction
    - xBRZ scaling
    - LCD effects
    - Etc.
  - Loading games from common archive formats (`.zip`, `.7z`, `.rar`, etc.)

It is the third 🥉 software emulator to pass the AGS Aging Cartridge used to test Game Boy Advance systems.

## Installation

Follow the instructions on our [official website](https://hades-emu.org/download) to download and install Hades the latest release of Hades.

## Build

To build Hades, you first need to install those dependencies:

  - `meson`
  - `ninja`
  - `GCC`
  - `SDL3`
  - `OpenGL`
  - `glew`
  - `libarchive`

On the latest Ubuntu, you can install all those dependencies with:

```bash
$ apt install meson ninja-build gcc libsdl3-dev libglew-dev libarchive-dev
```

On Fedora, you can install all those dependencies with:

```bash
$…
