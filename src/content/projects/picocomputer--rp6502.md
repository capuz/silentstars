---
repo: "picocomputer/rp6502"
name: "rp6502"
description: "Emulator and Firmware"
readmeQualityOk: true
url: "https://github.com/picocomputer/rp6502"
language: "C"
languages: ["C"]
languagePcts: [93]
topics: ["6502", "pi-pico", "raspberry-pi"]
stars: 122
forks: 38
openIssues: 0
closedIssues: 61
watchers: 14
contributors: 7
recentReleases: 0
createdAt: "2022-05-16T00:51:10Z"
lastCommitAt: "2026-07-22T06:11:47Z"
lastReleaseAt: "2025-04-11T22:13:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 47
maintainers: ["rumbledethumps", "jasonfrowe", "WojciechGw"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e5c3f89b67929f503de2b08d130ec802a53a9edfc3b6d48134391a3c3950907/picocomputer/rp6502"
---

# Rumbledethumps' Picocomputer 6502

The Picocomputer 6502 is a real 6502 computer built from a WDC 65C02, a couple
of Raspberry Pi Picos, and very little else. This repository holds everything
that runs on the Picos plus a desktop/web emulator of the whole machine.

The main documentation starts here:<br>
https://picocomputer.github.io/

Pre-built `.uf2` firmware images for Pi Pico 2 boards:<br>
https://github.com/picocomputer/rp6502/releases

This project is for building emulation or firmware. For writing 6502 software, see
[picocomputer/vscode-cc65](https://github.com/picocomputer/vscode-cc65) and
[picocomputer/vscode-llvm-mos](https://github.com/picocomputer/vscode-llvm-mos).

## All Platforms

Begin by installing VS Code and the Pi Pico VS Code Extension as described in
[Getting started with the Raspberry Pi Pico](https://rptl.io/pico-get-started).

Some dependencies are submodules. Don't forget to grab them:
```
$ git submodule update --init
```

The emulator's debugger needs one nested submodule. Don't use `--recursive`,
which downloads much more than needed:
```
$ git -C vendor/cppdap submodule update --init third_party/json
```

The web build also needs the Emscripten…
