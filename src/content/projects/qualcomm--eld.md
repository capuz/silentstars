---
repo: "qualcomm/eld"
name: "eld"
description: "Embedded Linker (eld)"
readmeQualityOk: true
url: "https://github.com/qualcomm/eld"
homepage: "https://qualcomm.github.io/eld/"
language: "C++"
languages: ["C++"]
languagePcts: [75]
topics: ["embedded", "embedded-systems"]
stars: 261
forks: 86
openIssues: 256
closedIssues: 592
watchers: 7
contributors: 60
recentReleases: 0
createdAt: "2025-03-05T20:27:16Z"
lastCommitAt: "2026-10-21T17:31:32Z"
lastReleaseAt: "2026-06-26T21:51:09Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 92
undervaluedScore: 41
maintainers: ["Steven6798", "quic-seaswara", "quic-areg"]
openGraphImageUrl: "https://opengraph.githubassets.com/1907062f1a4d946823c9288b6cbc1459a8721d6d599f80fb8615e24c5253659a/qualcomm/eld"
discussionCount: 10
---

# ELD: Embedded LD

ELD is an ELF linker designed to meet the needs of embedded software projects.
It aims to be a drop-in replacement for the GNU linker, with a smaller memory
footprint, faster link times and a customizable link behavior.

ELD supports targets Hexagon, ARM, AArch64 and RISCV
and is designed for easy addition of more backends.

## Supported features
- Static linking
- Dynamic linking
- Partial linking
- LTO
- Same command-line options as GNU LD.
- Linker scripts. Linker script syntax is same as of GNU LD.
- Highly detailed linker map-files.

  Highly detailed map-files are essential to debug complex image layouts.
- Linker plugins

  Linker plugins allow a user to programmatically customize link
  behavior for advanced use-cases and complex image layouts.
- Reproduce functionality

  The reproduce functionality creates a tarball that can be used to reproduce the
  link without any other dependency.

## Building ELD and running tests

ELD supports building and running tests on Linux, Windows, and macOS (Darwin)
utilizing LLVM. macOS is supported as a **host** (Apple Silicon and Intel);
ELD still produces ELF images and does not link Mach-O. On macOS the linker…
