---
repo: "jabadiagm/MSXgoauldSD_tn20k"
name: "MSXgoauldSD_tn20k"
description: "MSX Goa'uld board with Tang Nano 20k and SD support"
readmeQualityOk: true
url: "https://github.com/jabadiagm/MSXgoauldSD_tn20k"
language: "F#"
languages: ["F#", "HTML"]
languagePcts: [58, 31]
stars: 41
forks: 22
openIssues: 1
closedIssues: 4
watchers: 10
contributors: 1
recentReleases: 0
createdAt: "2025-08-02T07:07:06Z"
lastCommitAt: "2026-11-14T10:59:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 82
undervaluedScore: 36
maintainers: ["jabadiagm"]
openGraphImageUrl: "https://opengraph.githubassets.com/81fa9e1babc067f92ddb2bad60f4a9de5b86e78883279f4f5ac70d2db5901b23/jabadiagm/MSXgoauldSD_tn20k"
---

# MSXgoauldSD_tn20k
MSX Goa'uld board with Tang Nano 20k and SD support

MSX2+ engine in Z80 socket. It turns one MSX into an MSX2+ by replacing Z80 processor. FPGA in board contains: 
* Z80
* V9958 with hdmi output
* MSX2+ BIOS
* SD Card support + Nextor 2.1
* 4MB mapper
* 2MB megaram SCC
* RTC
* PSG
* OPLL
* Kanji Level 1 & 2
* Wifi support using ESP (experimental)

**For 240p analog video support for consumer CRTs watch DirectVideo branch**

## Boards

Old boards V1.4 and V4.1 are compatible with Goa'uld SD. V3 is not supported, owners of V3 should use Goa'uld standard firmware (0.80).

New pcb V1.6 is optimized for online PCB assembly. See [Assembly guide](https://github.com/jabadiagm/MSXgoauldSD_tn20k/blob/HEAD/pcba/pcba.md)

## Slot map

Mapper and megaram can be relocated to slots 1 or 2 using config menu.

## Megaram + Sofarun
Megaram is detected automatically by sofarun using default settings. When using other software you may need to indicate location, Slot 3-3 by default.

## Configuration
Config menu is showed pressing 'g' during MSX logo. New improved menu is created by [nataliapc](https://github.com/nataliapc/msx_goauld_settings_menu)

* Enable Mapper: On by default.…
