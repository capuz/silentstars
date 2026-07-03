---
repo: "titmouse001/ZX-Spectrum-48k-Arduino-Interface"
name: "ZX-Spectrum-48k-Arduino-Interface"
description: "ZX Spectrum 48k Game Cartridge Interface using an Arduino"
url: "https://github.com/titmouse001/ZX-Spectrum-48k-Arduino-Interface"
language: "Assembly"
languages: ["Assembly"]
languagePcts: [80]
topics: ["interface", "arduino", "hardware", "sd-card", "eprom", "zx-spectrum", "joystick-interface", "kempston", "filesystem", "snapshot"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-06-22T17:48:39Z"
lastCommitAt: "2026-06-30T17:18:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 67
maintainers: ["titmouse001"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5052216b387bdb67e8a283f143eb4eef40f236a730b641f0799a4603f5a6e03/titmouse001/ZX-Spectrum-48k-Arduino-Interface"
---

# ZX Spectrum 48k Game Cartridge Interface using an Arduino

Arduino-based ZX Spectrum 48K game loader.
Loads the following from an SD card:
- SNA (48K Snapshots)
- Z80 (Supports v1/2/3 48K Snapshots)
- SCR (Spectrum screenshots)
- TXT (ASCII text files)

On start-up gives an on-screen menu that can be navigated via Spectrum keyboard or Kempston joystick.
Game loading times are around 1.4 seconds.
Bonus: You can jump using the Fire 2 button, or still use 'Up' to jump!
For compatibility, the interface can also start up in the standard Spectrum ROM by holding down the menu or fire2 button during power-up.

### 2026 Update

PCB Gerbers (latest V2.40) : [Download Gerber Files](/Documents/Gerbers/)

I'm in the middle of developing a **in-game pause menu**.
Pressing the PCB button while in-game takes you to a new pause menu screen.
Currently it suppots:-
- Resume 
- Poke (enter game cheats)
- Take screenshot of game
- Memory Viewer
- Exit Poke

#### Version 0.21 - with 90° cartridge design

### Interface Features

The interface loads games from a microSD card in about a second, using a slot at the back.
Games can be in **.sna** or ***.z80** format and stored either in folders or in the…
