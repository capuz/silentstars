---
repo: "iharhl/memmap"
name: "memmap"
description: "Turn a YAML memory layout, or a firmware ELF and its linker map, into a datasheet-style memory map. Renders in SVG, PNG or PDF."
readmeQualityOk: true
url: "https://github.com/iharhl/memmap"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["diagram-generator", "embedded", "memory-layout", "memory-map"]
stars: 79
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-11-02T11:55:07Z"
lastCommitAt: "2026-11-14T10:47:23Z"
lastReleaseAt: "2026-11-14T10:47:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 25
maintainers: ["iharhl"]
openGraphImageUrl: "https://opengraph.githubassets.com/5beeab188caa6be8fe4128eaf7c684411d4f79d7309e2a8bef70b17f57bdae16/iharhl/memmap"
---

# memmap

Draw datasheet-style memory maps of MCU memory. You describe the layout in a YAML file, or
have `memmap` write that file from a linked firmware image or a flash partition layout. Either
way you get the same config, which `memmap` checks and renders to SVG, PNG or PDF.

- **Write it by hand.** One YAML file holds the memory (`memory`) and how to draw it (`view`),
  kept separate. Start from one of the [examples](#examples).
- **Generate it from firmware.** `from-elf` reads a linked ELF and the linker's map file (GNU ld,
  Keil armlink or IAR), and places every section at its real address and size in the chip's flash
  and RAM regions.
- **Generate it from a partition table.** `from-partitions` reads an ESP-IDF partition table, CSV
  or binary, and places every partition where the ESP-IDF build would. It also reads a Zephyr
  build's devicetree and an nRF Connect SDK Partition Manager layout, with MCUboot's slots marked.
- **Check before drawing.** Validation catches overlaps, overflow and flash sector misalignment,
  with the YAML path, line and a hint for each.
- **Verify as text.** Output is deterministic, and `describe` lists everything drawn, so agents and
  CI can…
