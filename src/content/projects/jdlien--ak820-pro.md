---
repo: "jdlien/ak820-pro"
name: "ak820-pro"
description: "AJAZZ AK820 Pro running QMK: build notes, host agents, and LCD asset pipeline"
readmeQualityOk: true
url: "https://github.com/jdlien/ak820-pro"
language: "Rust"
languages: ["Rust", "Python", "C"]
languagePcts: [35, 27, 24]
stars: 7
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2026-08-30T01:46:07Z"
lastCommitAt: "2026-11-03T10:52:23Z"
lastReleaseAt: "2026-11-02T04:27:37Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 60
undervaluedScore: 48
maintainers: ["jdlien"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb355b6415fea7f5e51abc6d33ce822d4bec6e3743ffeba4382e53af4a3e7d10/jdlien/ak820-pro"
---

# AK820 Pro — the "Jackrabbit" firmware

Replacement firmware for the **AJAZZ AK820 Pro**, built on QMK. Remap any
key, layer or the knob in VIA, from a browser. And the keyboard's 0.85″
screen becomes something you will actually look at: a clock set from your
computer to within milliseconds, the song that is playing, the battery left
in hours, and a menu for every setting, driven by the knob. On battery,
expect a week or more between charges with the lights on, and two to four
weeks in the power-saving modes, from figures measured on the bench rather
than guessed.

**[Download](https://github.com/jdlien/ak820-pro/releases)** ·
**[Battery calculator](https://jdlien.github.io/ak820-pro/power/)** ·
**[Get started](#get-started)** ·
**[Before you flash](#before-you-flash)**

## Features

### Remap anything with VIA

Every key, every layer and the knob, remapped live in
[VIA](https://usevia.app) from Chrome or Edge, on macOS, Windows or Linux.
No rebuild and nothing to install, and `flash.sh` keeps your layout across
firmware updates. Setup takes a minute: [Remap in VIA](#3-remap-in-via).

### The screen

The dashboard shows the time, the track playing (artist, title, play or
pause…
