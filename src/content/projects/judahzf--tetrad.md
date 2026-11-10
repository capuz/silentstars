---
repo: "JudahZF/tetrad"
name: "tetrad"
description: "Independent, unofficial Rust re-implementation of the Neural DSP Quad Cortex UI (alpha). Not affiliated with Neural DSP."
readmeQualityOk: true
url: "https://github.com/JudahZF/tetrad"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 6
forks: 1
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-18T06:36:01Z"
lastCommitAt: "2026-11-10T11:40:26Z"
lastReleaseAt: "2026-11-02T10:11:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 65
maintainers: ["JudahZF", "theupriser"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a2c19de95d75d8f645b5367f670d7d2807f55e4fce15e8a3938e009ea74d422/JudahZF/tetrad"
---

Tetrad replaces the touch UI of your Quad Cortex with a new one, written from scratch in Rust.
The stock UI program (ZenUI) stays installed. Tetrad keeps the stock Linux kernel, drivers,
bootloader and DSP firmware, and it reads the stock data files from your own unit at run time.
Your presets sound the same. At every boot you choose Tetrad or stock CorOS.

> [!WARNING]
> Tetrad is alpha software. It is not made, endorsed or supported by Neural DSP Technologies. To
> install it you need root SSH access to your unit. Read [Before you install](#before-you-install)
> first.

## What it looks like

## What works

- **Your sound, unchanged.** Tetrad starts the stock DSP firmware and loads presets as stock
  does. It has a driver for every stock model except the Looper block.
- **The touch UI.** The Grid, Gig and Stomp views, the preset and capture browsers, the
  block editors, settings, dialogs and keypads, in the stock look.
- **Play live.** Footswitches, stomp and scene modes, scene copy, bank changes, expression
  pedals, tempo and tap tempo, the tuner, the metronome and the Looper.
- **MIDI.** DIN and USB MIDI in and out, program changes, MIDI clock and Preset MIDI Out.
-…
