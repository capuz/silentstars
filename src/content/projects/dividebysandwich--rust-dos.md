---
repo: "dividebysandwich/rust-dos"
name: "rust-dos"
description: "A fast DOS Emulator with VR support, comprehensive sound (SB16, GUS, MT32 etc), graphics (Hercules/CGA/EGA/VGA/SVGA/S3/Voodoo etc.), Windows (3.x and 9x) and networking support, written in Rust."
readmeQualityOk: true
url: "https://github.com/dividebysandwich/rust-dos"
homepage: "https://rust-dos.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
topics: ["adlib", "dos", "dos-emulation", "dos-emulator", "dos-games", "emulator", "gravis-ultrasound", "rust-lang", "soundblaster", "486"]
stars: 26
forks: 2
openIssues: 100
closedIssues: 56
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2025-12-22T22:06:54Z"
lastCommitAt: "2026-11-03T10:52:21Z"
lastReleaseAt: "2026-09-27T22:15:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 56
maintainers: ["kibertoad", "dividebysandwich"]
openGraphImageUrl: "https://opengraph.githubassets.com/21483e19a9267af2f61d06e6b4db390c72e1bd3253c26b7dfa1c460c5c05d544/dividebysandwich/rust-dos"
discussionCount: 6
---

## Introduction

Rust-DOS is an emulator for PC games, from the early DOS days to the
Windows 95 and 98 years.

* **DOS games** run on its built-in DOS. No copy of MS-DOS is needed.
* **Windows 95 and 98 games** run one of two ways:
  * in a real copy of Windows, booted from a disk image
    ([docs/win9x-howto.md](https://github.com/dividebysandwich/rust-dos/blob/HEAD/docs/win9x-howto.md));
  * on its built-in Windows, with no Windows image needed
    ([Windows games](https://github.com/dividebysandwich/rust-dos/blob/HEAD/CONFIGURATION.md#windows-games)). This is
    experimental and under active development: some games already run
    well, and more are tested and fixed all the time.

Rust-DOS as a whole is a work in progress, and some games and programs
may not run yet.

*Rust-DOS is looking for contributors!*

## Why

I wanted to learn more about the nuances of DOS emulation. Also, there's only one other DOS emulator written in Rust, and that one hasn't seen any development in 5 years and was using lots of unsafe{} code blocks.

## Features

* **CPU:** 386, 486, Pentium, Pentium MMX, AMD K6-2 (with 3DNow!), Pentium Pro, Pentium II and Pentium III (with SSE) with FPU, protected…
