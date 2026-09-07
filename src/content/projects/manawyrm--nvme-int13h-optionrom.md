---
repo: "Manawyrm/nvme-int13h-optionrom"
name: "nvme-int13h-optionrom"
description: "Option ROM to boot x86 PCs from NVMe drives (legacy BIOS, INT 13h)"
readmeQualityOk: true
url: "https://github.com/Manawyrm/nvme-int13h-optionrom"
language: "C"
languages: ["C"]
languagePcts: [97]
stars: 208
forks: 8
openIssues: 3
closedIssues: 3
watchers: 9
contributors: 102
recentReleases: 0
createdAt: "2023-10-30T09:50:15Z"
lastCommitAt: "2026-09-07T08:34:38Z"
lastReleaseAt: "2026-05-19T21:55:11Z"
status: "thriving"
tags: []
healthScore: 57
undervaluedScore: 18
maintainers: ["Manawyrm", "mcb30", "shankerwangmiao"]
openGraphImageUrl: "https://opengraph.githubassets.com/3456a69a5ecc86c80392917b8f05118e7af6514135dd26b515c5f679a40b140a/Manawyrm/nvme-int13h-optionrom"
---

# NVMe INT13h Option ROM
Boot legacy PCs from NVMe storage: [YouTube video with ThinkPad T43](https://www.youtube.com/watch?v=TVKbFLtXLYM)

This project allows old x86 computers using a classic BIOS to boot from modern NVMe storage attached via PCI(e).
It's a heavily modified version of [iPXE](https://ipxe.org/start) (which usually allows for booting from the network), but 
instead of the network, this code uses a port of the [SeaBIOS](https://github.com/coreboot/seabios/tree/master) [NVMe implementation](https://github.com/coreboot/seabios/blob/master/src/hw/nvme.c) to talk to a local NVMe drive.

## Project status
Works™   
Very little fault tolerance and testing on different devices.  
It started out as a crazy proof-of-concept, but people just seemed to have success with it.

## Getting started
- Connect an NVMe drive to your computer (PCIe->PCI adapters are fine).
- Ensure the new PCI device is visible in the BIOS (or any OS).
- Check the [releases page](https://github.com/Manawyrm/nvme-int13h-optionrom/releases) for the latest binary release:

Typically you'll want to try one of the following images (depending on your hardware):  
__1.44M floppy image:__ `nvmeboot.ima`…
