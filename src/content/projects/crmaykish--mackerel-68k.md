---
repo: "crmaykish/mackerel-68k"
name: "mackerel-68k"
description: "A series of single-board Motorola 68k computers with support for modern Linux"
readmeQualityOk: true
url: "https://github.com/crmaykish/mackerel-68k"
homepage: "https://hackaday.io/project/183861-mackerel-68k-computer"
language: "C"
languages: ["C", "Verilog"]
languagePcts: [54, 34]
topics: ["68008", "homebrew", "m68k", "retrocomputing", "uclinux", "embedded", "linux", "homebrew-computer", "kicad", "motorola-68000"]
stars: 96
forks: 8
openIssues: 0
closedIssues: 3
watchers: 8
contributors: 1
recentReleases: 0
createdAt: "2021-12-05T00:16:44Z"
lastCommitAt: "2026-11-24T01:58:23Z"
lastReleaseAt: "2026-07-12T20:09:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 28
maintainers: ["crmaykish"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ea15314f02d19ac60b0aa78f2321920e47f8ef6abc043fe39243cc88e2e455d/crmaykish/mackerel-68k"
---

# Mackerel 68k

Mackerel 68k is a family of homebrew single-board computers built around the Motorola 68000 line of processors plus a from-scratch effort to run **mainline Linux** on each one.

The project works its way up the 68k family one chip at a time, from the 68008 to the 68040. Each new board adds capability: more memory, faster CPUs, an FPU, an MMU, and richer peripherals. But the throughline is software - every Mackerel runs the **latest mainline Linux kernel**, from a tiny NOMMU uClinux shell on the 68008 up to a full MMU + hardware-FPU install on the 68030.

What's in the box, top to bottom:
