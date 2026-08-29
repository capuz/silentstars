---
repo: "travisg/emu"
name: "emu"
description: "Generic 8 bit emulator"
readmeQualityOk: true
url: "https://github.com/travisg/emu"
language: "Rust"
languages: ["Rust"]
languagePcts: [65]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2013-04-14T18:50:04Z"
lastCommitAt: "2026-08-29T09:21:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 72
undervaluedScore: 67
maintainers: ["travisg"]
openGraphImageUrl: "https://opengraph.githubassets.com/53065ab258a2e1d81f41c892ea2898bba190ea0fea9a9fb5a1e5418e05ac8402/travisg/emu"
---

# Emu: Terminal-driven Vintage System Emulator

A terminal-driven emulator for several vintage computer systems, written in Rust.

## Supported Systems

- **System09 (Motorola 6809)**: boots the 6809 BASIC ROM to a prompt on the terminal.
- **MITS Altair 680 (Motorola 6800)**: boots the MITS monitor ROM on the terminal.
- **RC2014 (Zilog Z80)**: runs the factory ROM image (see the note in `rust-conversion-plan.md`
  about its serial port).
- **Kaypro II (Zilog Z80)**: boots CP/M 2.2 from a floppy image into an SDL2 window, with a
  keyboard and a read-only floppy.

## Prerequisites

- A Rust toolchain (`cargo`)
- The SDL2 development package (`libsdl2-dev` on Debian/Ubuntu, `sdl2` on Homebrew/MacPorts) — the
  Kaypro window links it dynamically, and it's a build requirement even if you never run the Kaypro
- `pkg-config`, which is how the build finds that SDL2: any install prefix works as long as
  `pkg-config sdl2` resolves, so MacPorts (`/opt/local`) and Homebrew (`/usr/local` or
  `/opt/homebrew`) need no configuration. Point `PKG_CONFIG_PATH` at the directory holding
  `sdl2.pc` if it's installed somewhere unusual
- ROM images. They aren't in the repo; the emulator looks for…
