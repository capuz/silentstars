---
repo: "mostazaniikkkk/Nano-Java"
name: "Nano-Java"
description: "Nano Java — J2ME MIDP 2.0 runtime for Nintendo DS. Reconstruction of the Pstros project using KVM."
readmeQualityOk: true
url: "https://github.com/mostazaniikkkk/Nano-Java"
language: "Java"
languages: ["Java", "C"]
languagePcts: [52, 46]
stars: 7
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-01T16:40:22Z"
lastCommitAt: "2026-10-09T18:55:50Z"
lastReleaseAt: "2026-05-01T16:51:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 3
maintainers: ["mostazaniikkkk"]
openGraphImageUrl: "https://opengraph.githubassets.com/120a46d77ac67ff9ee837b5e4682b8b3c9dc98b1e978db5a55c5d7a080a2ba44/mostazaniikkkk/Nano-Java"
---

# Nano Java

Nano Java runs J2ME games and applications (MIDlets, CLDC 1.1 / MIDP 2.0)
on the Nintendo DS. It is a from-scratch implementation: a small Java
virtual machine in portable C, a class library written mostly in Java, and
a platform layer for the DS (libnds / calico).

## Features

- Java VM: full bytecode set (including `jsr`/`ret` from old compilers),
  green threads with monitors, `wait`/`notify`, `sleep` and `interrupt`,
  exceptions with stack traces, lazy class initialization, weak references,
  a mark & sweep garbage collector.
- CLDC 1.1: `java.lang`, `java.util` (including `Timer`, `Calendar`),
  `java.io`, floating point.
- MIDP 2.0: `Canvas`, `GameCanvas`, `Graphics` (every primitive, the 8
  sprite transforms, alpha blending, `drawRGB`), PNG images, fonts,
  commands and soft keys, the high-level UI (`Form`, `List`, `TextBox`,
  `Alert` and the items), `javax.microedition.lcdui.game`
  (`Sprite`, `TiledLayer`, `LayerManager`), record stores (`rms`),
  `javax.microedition.media` with sound: MIDI music, WAV (PCM, IMA ADPCM,
  u-law, A-law), tone sequences and `Manager.playTone`, played by a
  General MIDI synthesizer that runs on the DS's second CPU (the ARM7),…
