---
repo: "LinuxJedi/Copperline"
name: "Copperline"
description: "An Amiga emulator written in Rust"
readmeQualityOk: true
url: "https://github.com/LinuxJedi/Copperline"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 82
forks: 6
openIssues: 4
closedIssues: 30
watchers: 3
contributors: 5
recentReleases: 10
createdAt: "2026-06-14T04:28:28Z"
lastCommitAt: "2026-07-18T05:47:32Z"
lastReleaseAt: "2026-07-07T10:53:03Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 37
maintainers: ["LinuxJedi", "codewiz", "hobbo91"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3a46275ee190dd01fc065e2a6dae0a8985b76ba047e4a73497159a7e27850e9/LinuxJedi/Copperline"
---

Website: [copperline.dev](https://copperline.dev/)

An Amiga emulator written in Rust, built around a vendored copy of
the pure-Rust [m68k](https://github.com/LinuxJedi/Copperline/blob/HEAD/crates/m68k) CPU core, with a
[pixels](https://crates.io/crates/pixels) + [winit](https://crates.io/crates/winit)
window for video and stdout for serial. It started life with the modest
goal of booting [DiagROM](https://www.diagrom.com/) far enough to show a
menu; it now boots Kickstart and runs timing-sensitive OCS and AGA software
from the regression set at real speed.

It covers OCS, ECS, and AGA (independent Agnus/Denise revisions,
programmable blanking, machine profiles from the A500 to the A4000,
CDTV, and CD32, with Gayle and A4000 IDE, A2091/A4091/A3000 SCSI, and the
AGA display path: 8 bitplanes,
256-entry palette, HAM8, FMODE wide fetch; remaining gaps are recorded in
the internals docs). Cycle-driven means the whole machine advances on one
colour-clock timeline: the chip bus is arbitrated per colour clock, the
Copper and blitter are scheduled per DMA slot with the hardware bus
sequences, and 68000 interrupt-recognition latency is modelled. 68000 cycle
counts are validated against the…
