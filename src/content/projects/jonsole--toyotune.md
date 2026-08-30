---
repo: "jonsole/toyotune"
name: "toyotune"
description: "Daughter-board for reprogramming 1990's Toyota ECUs"
readmeQualityOk: true
url: "https://github.com/jonsole/toyotune"
language: "Assembly"
languages: ["Assembly", "VHDL"]
languagePcts: [70, 24]
stars: 7
forks: 0
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2018-05-18T20:30:38Z"
lastCommitAt: "2026-08-30T09:22:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 74
undervaluedScore: 65
maintainers: ["jonsole"]
openGraphImageUrl: "https://opengraph.githubassets.com/28620fa2af856cd4b86ca1ca042e3976b4e9c7f220714d15759deafe85616e4e/jonsole/toyotune"
---

# toyotune

Reverse engineering and ROM tuning for Toyota ECUs built on the Toshiba/Denso
8X (D8X) microcontroller — a proprietary part with an instruction set derived
from the Motorola 68HC11.

The best entry point is
**[Inside the 3S-GTE ECU](https://github.com/jonsole/toyotune/blob/HEAD/roms/3S-GTE/gen3/ecu_overview.md)**, an
architectural tour of the 1993 SW20 MR2 turbo ECU: three processors, adaptive
fuel trim and per-cylinder knock learning in 16 KB of ROM.

## What's here

- **[`roms/`](https://github.com/jonsole/toyotune/blob/HEAD/roms/)** — disassembly, annotation and tuned-ROM production.
  One directory per engine family (1G-GTE, 1G-GZE, 1JZ-GTE, 1UZ-FE, 3S-GE,
  3S-GTE, 3VZ-FE, 4A-GE), each holding one subdirectory per ECU part number.
  - [`roms/3S-GTE/`](https://github.com/jonsole/toyotune/blob/HEAD/roms/3S-GTE/) is the most thoroughly documented family —
    its [README](https://github.com/jonsole/toyotune/blob/HEAD/roms/3S-GTE/README.md) maps every part number to market,
    vehicle and CPU, and [`gen3/`](https://github.com/jonsole/toyotune/blob/HEAD/roms/3S-GTE/gen3/) holds the subsystem
    write-ups.
  -…
