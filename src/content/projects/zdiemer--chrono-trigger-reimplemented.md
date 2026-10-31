---
repo: "zdiemer/chrono-trigger-reimplemented"
name: "chrono-trigger-reimplemented"
description: "Native PC reimplementation of Chrono Trigger (SNES), validated frame-by-frame against the original ROM"
readmeQualityOk: true
url: "https://github.com/zdiemer/chrono-trigger-reimplemented"
language: "C"
languages: ["C"]
languagePcts: [85]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-09-14T06:35:25Z"
lastCommitAt: "2026-10-31T19:00:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 41
maintainers: ["zdiemer"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4946d353390281deb0b29bd4872e8486cdd7fcec0fdfd5942d985d7360a08e1/zdiemer/chrono-trigger-reimplemented"
---

# chrono-trigger-reimplemented

A native PC port of *Chrono Trigger* (SNES, USA), reimplemented in C and
validated frame by frame against the original ROM.

The goal is readable, hand-written C, not an emulator. Until every routine is
ported, the original code runs on a development hardware model and a 65816
interpreter, with each ported routine checked against it. A C generator
([docs/GENERATED.md](https://github.com/zdiemer/chrono-trigger-reimplemented/blob/HEAD/docs/GENERATED.md)) is being built as scaffolding: it turns the
remaining original code into mechanical C at build time from your ROM, as a
starting point for hand ports. See [docs/APPROACH.md](https://github.com/zdiemer/chrono-trigger-reimplemented/blob/HEAD/docs/APPROACH.md) for the
strategy and roadmap.

## Status

Porting: the attract sequence, field, menu, event and battle systems are
partly native, validated in shadow mode over 26 input movies
([docs/PORTING.md](https://github.com/zdiemer/chrono-trigger-reimplemented/blob/HEAD/docs/PORTING.md)). The development runtime plays the game
with sound ([docs/PLAYING.md](https://github.com/zdiemer/chrono-trigger-reimplemented/blob/HEAD/docs/PLAYING.md)). The C generator…
