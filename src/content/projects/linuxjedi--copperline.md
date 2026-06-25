---
repo: "LinuxJedi/Copperline"
name: "Copperline"
description: "An Amiga emulator written in Rust"
url: "https://github.com/LinuxJedi/Copperline"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 34
forks: 2
openIssues: 2
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 7
createdAt: "2026-06-14T04:28:28Z"
lastCommitAt: "2026-06-25T06:41:33Z"
lastReleaseAt: "2026-06-25T06:40:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 43
maintainers: ["LinuxJedi", "sonnenscheinchen"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f9ae05aa0acef744df8c6d2235581c04797c1e4a202a662643c108892d20f6c/LinuxJedi/Copperline"
---

Website: [copperline.dev](https://copperline.dev/)

An Amiga emulator written in Rust, built around a vendored copy of
the pure-Rust [m68k](vendor/m68k) CPU core, with a
[pixels](https://crates.io/crates/pixels) + [winit](https://crates.io/crates/winit)
window for video and stdout for serial. It started life with the modest
goal of booting [DiagROM](https://www.diagrom.com/) far enough to show a
menu; it now boots Kickstart and runs timing-sensitive OCS and AGA software
from the regression set at real speed.

It covers OCS, ECS, and AGA (independent Agnus/Denise revisions,
programmable blanking, machine profiles from the A500 to the A1200,
CDTV, and CD32, with Gayle IDE, A2091 SCSI, and the AGA display path: 8 bitplanes,
256-entry palette, HAM8, FMODE wide fetch; remaining gaps are recorded in
the internals docs). The timing model is taken seriously: the
chip bus is arbitrated per colour clock, the Copper and blitter are
scheduled per DMA slot with hardware bus sequences, and 68000
interrupt-recognition latency is modelled. The source is organized so the
hardware model can be read and extended without chasing title-specific
patches.

## Background

It began as a two-part…
