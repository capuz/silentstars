---
repo: "ElekLabs/digikit"
name: "digikit"
description: "Custom patching and tooling for Elektron devices"
readmeQualityOk: true
url: "https://github.com/ElekLabs/digikit"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [50, 45]
topics: ["coldfire", "digitakt", "digitone", "elektron", "emulator", "firmware", "sharc", "synthesizer", "wasm"]
stars: 32
forks: 9
openIssues: 46
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-09-08T08:31:54Z"
lastCommitAt: "2026-10-21T08:49:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 31
maintainers: ["m-dwyer"]
openGraphImageUrl: "https://opengraph.githubassets.com/65c771e581c1eee51e7ea11435a7c6adaf5da8f4305e7d213881e9f625f0169c/ElekLabs/digikit"
---

# digikit

digikit adds new machines and effects to the Elektron **Digitakt II** and **Digitone II**. It patches your own copy of
the stock firmware with a small runtime. The runtime loads modules from the device's +Drive, so you can add or change
a machine without flashing again. An emulator runs the real firmware on your computer, so you can test everything
before it goes near the device.

> **Experimental.** Flashing modified firmware is at your own risk. Only flash images that pass `mise run patch:preflight`.
> digikit never changes the bootloader, so the stock OS can always be restored (see [Recovery](#recovery)).
> **No Elektron firmware is in this repository**: you supply your own `.syx` file.

## Features

- **Runtime on the device:** a SETTINGS > DIGIKIT menu, modules loaded from the +Drive at boot, upload over USB, and a
  debug log you can follow on your computer.
- **Run-time machines:** new machine types next to the stock ones, with their own parameters and DSP code. A safety
  guard mutes a misbehaving machine instead of silencing the whole device.
- **Emulator:** the real firmware (ColdFire and SHARC DSP) runs on your computer, with the front panel, display and…
