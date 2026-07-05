---
repo: "tinue/Calc-U-59"
name: "Calc-U-59"
description: "Emulator / debugger for the TI-59 calculator platform."
readmeQualityOk: true
url: "https://github.com/tinue/Calc-U-59"
language: "Assembly"
languages: ["Assembly", "Swift"]
languagePcts: [36, 36]
topics: ["debugger", "emulator", "instruments", "texas", "ti-58", "ti-58c", "ti-59"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 7
createdAt: "2026-03-28T11:25:21Z"
lastCommitAt: "2026-07-05T06:33:16Z"
lastReleaseAt: "2026-06-12T17:55:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 75
undervaluedScore: 25
maintainers: ["tinue"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4cd338e19f142d7c41f48001ad705dfb9a99f00218787e168f4295f5f2ba6f4/tinue/Calc-U-59"
---

# Calc-U-59

A TI-59 hardware emulator and integrated debugger for macOS, built for researchers and enthusiasts who want to understand the machine rather than merely use it.

## Purpose

Calc-U-59 is a research tool, not a calculator replacement. While it accurately emulates the TI-59's processor (the TMC0501), its primary audience is people who want to explore how the TI-59 works: stepping through ROM code, inspecting registers, tracing printer output, loading raw machine-state files, and understanding the quirks of the original hardware.

A second audience is people who have found their own old TI-59 programs — whether on magnetic cards, in printed listings, or from memory — and want to revive them: run them again, understand what they actually do at the machine level, or improve them with the benefit of a full debugger.

If you are looking for a polished calculator app, this is probably not for you. If you want to run programs under a debugger, observe how the ROM handles edge cases, or reproduce behavior from original hardware, you are in the right place.

## Features

- Cycle-accurate TMC0501 CPU emulation
- Integrated debugger with register inspection and program memory dump…
