---
repo: "MiSTer-devel/Chip8_MiSTer"
name: "Chip8_MiSTer"
description: "CHIP-8 for MiSTer"
readmeQualityOk: true
url: "https://github.com/MiSTer-devel/Chip8_MiSTer"
language: "Verilog"
languages: ["Verilog"]
languagePcts: [63]
stars: 10
forks: 9
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 35
recentReleases: 0
createdAt: "2020-02-05T17:13:13Z"
lastCommitAt: "2026-11-20T12:21:36Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 50
maintainers: ["meauxdal", "sorgelig"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b3cdf27117d51d3662f5c50f8789febfbd58d1de1eaae4fcef2750487511c18/MiSTer-devel/Chip8_MiSTer"
---

# FPGA SuperChip #

This is a Verilog implementation of the SuperChip virtual machine. The implementation can execute Chip-8 and SuperChip programs. Hybrids, the Chip-8X and MegaChip extensions are not supported.

This core has been ported from MiST to MiSTer by Paul Sajna.
Original core is by Carsten Elton Sørensen.

For an introduction to Chip-8 and SuperChip, please see [the Chip-8 article on Wikipedia](https://en.wikipedia.org/wiki/CHIP-8). 

SuperChip has traditionally been implemented as a virtual machine, but this is a pure Verilog implementation of the CPU, display and blitter. The CPU runs at a user selectable speed of a whopping 5 kHz or 12.5 kHz. An instruction usually takes 5 cycles, some a bit longer. The blitter runs at a much faster clock rate than the CPU, 50 MHz on the MiSTer, so sprite and scroll instructions only add a couple of CPU cycles.

# Instructions #

Press F12 to bring up the OSD. From here you can select a .CH8-file to load.

Video output timings match COSMAC VIP (original CHIP-8 target). 15.7kHz support (60Hz SD CRT).

The menu also allows the CPU speed to be selected. Some games are better played on slow, some on fast.
