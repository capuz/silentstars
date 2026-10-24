---
repo: "univta0001/emu6502"
name: "emu6502"
description: "Apple 2c / 2e / 2+ emulator in Rust"
readmeQualityOk: true
url: "https://github.com/univta0001/emu6502"
homepage: "https://univta0001.github.io/emu6502"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["apple-ii", "apple-iie", "emulator", "rust", "apple-iic"]
stars: 14
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-03-26T01:33:23Z"
lastCommitAt: "2026-10-24T00:14:59Z"
lastReleaseAt: "2024-03-01T09:55:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 67
maintainers: ["univta0001"]
openGraphImageUrl: "https://opengraph.githubassets.com/423a7eda369592e661d8148a7a45521fa6447b6dd11179db7323ae05c92efd5c/univta0001/emu6502"
---

# Apple IIc / //e / ][+ emulator in Rust

## What is this?

This is an Apple \]\[ and Apple //e emulator written entirely in Rust, SDL and HTML5.

Features in the emulator

- 6502 / 65C02 cycle accurate emulation
- Passed Klaus Dormann 6502, 65c02 and decimal tests
- Passed Tom Harte Processor Test for 6502 (valid opcodes) and 65c02
- Disk II interface for floppy disk drives
- File formats supported (dsk, po, nib, woz version 1 and version 2.x including Flux image, hdv, 2mg)
- Language Card for Apple ][+
- Mockingboard support at Slot 4 and Slot 5
- Parallel printer card
- Apple IIe Extended 80-Column Text Card
- RGB cards: Apple's Extended 80-Column Text/AppleColor Adaptor Card
- 60 Hz / 50Hz display mode support
- Video Scanline mode
- Support for Vapor-lock cycle counting demos e.g. megademo, mad2
- NTSC emulation supported
- Z80 Emulation
- Hard Disk support 
- Tape Support (Only PCM, 8-bit, 16-bit and mono and stereo channel)
- Uthernet II support for TCP client application (e.g. A2Stream)
- Support for RamFactor 1 MiB and RamWorks III up to 8 MiB
- Support for Apple //c (Rom FF, 00, 3, 4, 5)

## Usage

- To run the emulator

  emu6502 [FLAGS] [disk 1] [disk 2]

  Disk…
