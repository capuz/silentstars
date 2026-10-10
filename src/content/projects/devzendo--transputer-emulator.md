---
repo: "devzendo/transputer-emulator"
name: "transputer-emulator"
description: "This is a portable, open source emulator of the 32-bit Inmos Transputer family, and a host I/O server that interfaces it to a host OS, providing boot/debug/IO facilities. Written in C++14."
readmeQualityOk: true
url: "https://github.com/devzendo/transputer-emulator"
language: "C++"
languages: ["C++"]
languagePcts: [80]
stars: 22
forks: 5
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2020-02-20T22:59:51Z"
lastCommitAt: "2026-10-10T10:04:03Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 77
undervaluedScore: 57
maintainers: ["devzendo"]
openGraphImageUrl: "https://opengraph.githubassets.com/25cd6bbd9dbba57e10381b51a56e218d9eb1b9b5dcbad9327e3f9d274db2d0ed/devzendo/transputer-emulator"
---

# transputer-emulator

## What is this?
This is a portable, open source emulator of the 32-bit Inmos T414/T800/T801/T805 Transputer family, and a host/file
I/O Server that interfaces it to a host OS, providing boot/debug/IO facilities.

It is part of the [Parachute Project](https://devzendo.github.io/parachute).

The distribution currently builds under the following systems:
* Apple macOS
  * Intel: 'Catalina' 10.15
  * Apple Silicon: 'Tahoe' 26
* Linux
  * Linux Mint 21.3 Intel x86-64
  * Ubuntu Linux 24.04 LTS Intel x86-64
  * Raspberry Pi Debian 12
* Microsoft Windows
  * Windows 10 22H2
  * (untested on earlier versions e.g. XP, 7, 8, 8.1)
  * Due to lack of compatible TPM hardware, I cannot build on Windows 11 or later.
* Embedded microcontrollers
  * Raspberry Pi Pico (cross-compiled on Ubuntu Linux 24.04) - emulator and a USB-Link adapter

Due to lack of compatible TPM hardware, I cannot build on Windows 11 or later; building for Windows is the lowest
priority for me.

## Project Status
Last changes in August 2026.

First release 0.0.1 Midsummer 2019 (13 June 2019) as part of Parachute 0.0.1.

Project started around 19/08/2005, with a long hiatus.
Another hiatus from Sep…
