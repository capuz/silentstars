---
repo: "bkkbrls-del/midisc"
name: "midisc"
description: "Octatrack 1.40C MIDI scene locks (MIDISC2.0) — rebuild from your own stock OS"
readmeQualityOk: true
url: "https://github.com/bkkbrls-del/midisc"
homepage: "https://bkkbrls-del.github.io/midisc-patcher/"
language: "Python"
languages: ["Python", "Assembly"]
languagePcts: [77, 22]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-09-09T08:54:09Z"
lastCommitAt: "2026-10-01T20:24:23Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 37
maintainers: ["bkkbrls-del", "sambanks"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2363f652e8bf888f2f74431d8e3210b86421c64682b34fea6ed323d5d9476ad/bkkbrls-del/midisc"
---

# midisc — `MIDISC2.0`

ColdFire patch that adds **MIDI scene locks** to official Octatrack **OS 1.40C**.

There is **no prebuilt firmware in this repo**. Rebuild from your own 1.40C.

Browser patcher (still 8.2 until updated):  
https://bkkbrls-del.github.io/midisc-patcher/

## Changes from `1.40MIDISC8.2`

1. **No first trig needed** — scenes / XF work before playback starts.
2. **Timing** — scene changes land at the real queued pattern / Part boundary; manual Part confirm is immediate.
3. **Active trig locks hold** — an unscened lock (including ARP OFF?ON) survives scene/XF refresh until the native lock ends.
4. **CC before notes** — native CC values go out before same-track note-ons.
5. **Crash fixes** — FUNC+REC2 and master-track descriptor repairs; scene scratch kept off native clipboards.
6. **Pattern-commit Part sync** — when the sequencer commits ACT bank/pattern, MIDI scenes follow that pattern's Part immediately (next-step pattern changes included), without waiting for a PLEN cue.

Everything else from 8.2 stays (track-1 lock isolation, unlocked CC path, Part save/reload freeze, etc.).

## Build

```bash
powershell -ExecutionPolicy Bypass -File scripts/fetch-os.ps1   #…
