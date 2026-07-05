---
repo: "attilammagyar/mpe-emulator"
name: "mpe-emulator"
description: "A VST® plugin for enhancing non-MPE MIDI streams with MPE (MIDI Polyphonic Expression) capabilities based on user-defined mappings and rules."
readmeQualityOk: true
url: "https://github.com/attilammagyar/mpe-emulator"
homepage: "https://attilammagyar.github.io/mpe-emulator/"
language: "C++"
languages: ["C++"]
languagePcts: [81]
topics: ["audio", "expression", "keyboard", "midi", "mpe", "music", "plugin", "polyphonic", "vst"]
stars: 29
forks: 1
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-06-24T23:39:40Z"
lastCommitAt: "2026-07-05T18:11:31Z"
lastReleaseAt: "2026-03-27T20:40:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 83
undervaluedScore: 52
maintainers: ["attilammagyar"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc6414e84c8c1cb00a996ccdcab7d38855e2d91fa806e8170de706e7f8388213/attilammagyar/mpe-emulator"
---

MPE Emulator
============

A [VST® plugin](https://en.wikipedia.org/wiki/Virtual_Studio_Technology) for
enhancing ordinary MIDI controllers with MPE
([MIDI Polyphonic Expression](https://en.wikipedia.org/wiki/MIDI#MIDI_Polyphonic_Expression))
capabilities based on configurable mappings and rules, for Linux, Windows,
and macOS.

MPE Emulator is a MIDI proxy: an intermediary plugin which turns
non-polyphonic, single channel aftertouch (channel pressure), pitch bend, or
any MIDI control change (CC) message into polyphonic by applying them
selectively to the lowest, highest, oldest, or newest note, either across the
whole keyboard or restricted to a range of keys based on a configurable
keyboard split point. It can also remap and reshape controller data, and do
various other tricks to increase the expressiveness of a musical performance.

To download MPE Emulator, visit its website at
[https://attilammagyar.github.io/mpe-emulator](https://attilammagyar.github.io/mpe-emulator),
or look for the "[Releases](https://github.com/attilammagyar/mpe-emulator/releases)"
section at its GitHub page at
[https://github.com/attilammagyar/mpe-emulator](https://github.com/attilammagyar/mpe-emulator).…
