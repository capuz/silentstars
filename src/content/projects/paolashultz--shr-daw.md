---
repo: "PaolaShultz/shr-daw"
name: "shr-daw"
description: "Raspberry Pi mini DAW with a Rust TUI, FT2-style tracker, MIDI routing, synth hosts, loops, and recording"
readmeQualityOk: true
url: "https://github.com/PaolaShultz/shr-daw"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-13T15:31:29Z"
lastCommitAt: "2026-08-03T06:43:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["PaolaShultz"]
openGraphImageUrl: "https://opengraph.githubassets.com/d247dbd3adbf38bb43140a8ea124fc4ef6801706cae4720aad3d38e452af1ec1/PaolaShultz/shr-daw"
---

SHR-DAW is a terminal-based Raspberry Pi groovebox and song-sketching
workstation written in Rust. Its main interface is a compact 40×13 TUI for
64-bit Raspberry Pi OS Lite, not a desktop GUI. It is built to turn a musical
idea into a shareable rough sketch, not to replace a desktop production DAW.

It grew from a personal need to play synths and capture ideas quickly while on
the move or jamming with friends. Going from an idea to a shareable sketch in
roughly 10–15 minutes is an intended workflow and design goal, not a benchmark
or guarantee. The useful result is a rough demo or coherent sketch; sharing the
recorded WAV happens outside SHR-DAW.

Read the complete public documentation at
[paolashultz.github.io/shr-daw](https://paolashultz.github.io/shr-daw/).

> [!WARNING]
> SHR-DAW is experimental. Back up Projects and user data, and begin audio
> testing at a low monitoring level.

## Features

- Play synthv1, Yoshimi, FluidSynth, or seven editable Moj Sint Model D starts
  through one managed melodic engine, alongside in-process
  [SHR Drums](https://github.com/PaolaShultz/shr-drums).
- Capture free-timed MIDI Ideas; build routed software, external-MIDI, drum,
  and loop parts…
