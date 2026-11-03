---
repo: "gili-yankovitch/joyfon"
name: "joyfon"
description: "Physical Phone Controller"
readmeQualityOk: true
url: "https://github.com/gili-yankovitch/joyfon"
language: "HTML"
languages: ["HTML", "CSS"]
languagePcts: [49, 27]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-10T22:24:00Z"
lastCommitAt: "2026-11-03T10:52:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 65
undervaluedScore: 18
maintainers: ["giliyankovitch", "gili-yankovitch"]
openGraphImageUrl: "https://opengraph.githubassets.com/2fe73ea3fabf05e7af3df9301269f3201400c1699fc7d8f71f9255880a6ea478/gili-yankovitch/joyfon"
---

# Joyfon

A USB HID game controller for the Raspberry Pi Pico (RP2040 / RP2350).

Joyfon enumerates as a **standard USB HID gamepad**, so phones (Android), PCs,
and emulators recognize it with no driver or app. The button layout mimics a
Game Boy Color: a 4-way D-pad plus `A`, `B`, `X`, `Y`, shoulder buttons
(`SR`/`SL`), and `START` / `SELECT`.

## Enclosure & PCB

The 3D-printable enclosure is modeled in Onshape:
[Joyfon case (Onshape)](https://cad.onshape.com/documents/5b058211584da6ba94a5f3a2/w/7946df008143afeea2af8019/e/bb1aadbdb91d94f271c1447f?page=2&email=giliy%40nyxsecurity.net&renderMode=0&uiState=6a5551800e11d12ad61d855e).

| Case front | Case back |
| ---------- | --------- |
|  |  |

| PCB front | PCB back |
| --------- | -------- |
|  |  |

## Wiring

All buttons are **active-low**: wire each button between its GPIO and `GND`.
The firmware enables the RP2040's internal pull-ups, so external pull-up
resistors are optional (the description below assumes you already have them).

| Function        | GPIO  |
| --------------- | ----- |
| D-pad DOWN      | 0     |
| D-pad RIGHT     | 1     |
| D-pad UP        | 2     |
| D-pad LEFT      | 3     |
| B               | 4     |…
