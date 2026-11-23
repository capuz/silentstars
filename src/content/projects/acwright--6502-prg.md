---
repo: "acwright/6502-PRG"
name: "6502-PRG"
description: "A 6502 assembly language program template for the AC6502"
readmeQualityOk: true
url: "https://github.com/acwright/6502-PRG"
language: "Pascal"
languages: ["Pascal"]
languagePcts: [97]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-01T06:00:53Z"
lastCommitAt: "2026-11-23T12:24:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 30
maintainers: ["acwright"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2904f9149103fd69797ea211ba450731c0f8c1dc5780faae5ca31be7a7ce8cc/acwright/6502-PRG"
---

6502-PRG
========

A 6502 assembly language program template for the [AC6502](https://github.com/acwright/6502-ACE) family of computer systems.

> 📖 **Guide:** [AC6502 Documentation](https://acwright.github.io/6502-DOCS/) — the user's and programmer's guide for the whole family.
> This template is walked through end to end in [Starting from a template](https://acwright.github.io/6502-DOCS/crossdev/templates).

## Overview

Programs for this system are loaded into RAM at `$0800` and executed from BASIC. Unlike cartridges (which replace ROM), programs run entirely in RAM alongside the BIOS — the Kernal, the BASIC interpreter, Wozmon and, on BIOS 1.x, the Monitor — all of which remain available.

The template builds two ways from the same source: `make` for any ACE on BIOS 1.x with a TMS9918A, and `make VDP=1` for an ACE converted to a [6502-PICOVDP](https://github.com/acwright/6502-PICOVDP) on BIOS 2.x. See [Building for the 6502-PICOVDP](#building-for-the-6502-picovdp).
