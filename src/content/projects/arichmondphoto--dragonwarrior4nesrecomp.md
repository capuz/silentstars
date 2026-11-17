---
repo: "arichmondphoto/DragonWarrior4NESRecomp"
name: "DragonWarrior4NESRecomp"
description: "A static recompilation of Dragon Warrior IV for the NES."
readmeQualityOk: true
url: "https://github.com/arichmondphoto/DragonWarrior4NESRecomp"
language: "Python"
languages: ["Python"]
languagePcts: [74]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2026-10-24T13:18:11Z"
lastCommitAt: "2026-11-17T14:42:51Z"
lastReleaseAt: "2026-11-16T14:43:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 52
maintainers: ["claude", "arichmondphoto"]
openGraphImageUrl: "https://opengraph.githubassets.com/2493b41d0ddac26f042f1f8c70f78f19462e67e840ba793891729d4fd464db7e/arichmondphoto/DragonWarrior4NESRecomp"
---

# Dragon Warrior IV (USA) — Recompiled (NESRecomp port)

Not 100% play tested - gameplay seems normal. If you find a bug or a graphic that was missed in the HD pack, please report it with details. Screenshots are appreciated.

I do not have access to a Windows machine, so this was authored and tested on what I have available (macOS on Apple Silicon and Linux x86_64). The Windows version is cross-compiled on Linux and checked with Wine.

## ROM (not included)
Dragon Warrior IV (USA), NES 2.0 header, 524,304 bytes.
- CRC32 (no header): `506E259D`
- SHA-1 (no header): `1b3dc265ba0d7e4b2cef9b3f8b0be0847df67c3c`
- Board: MMC1 SUROM — 512 KiB PRG, 8 KiB CHR-RAM, 8 KiB battery PRG-RAM

User brings their own legally-obtained ROM. I will not provide a ROM or tell you where to find one - don't ask.

## Build and Play on macOS (Apple Silicon)
[Download latest release](https://github.com/arichmondphoto/DragonWarrior4NESRecomp/releases), unzip and follow directions in `READ ME FIRST.txt`.

Building requires the Xcode command line tools and [Homebrew](https://brew.sh).
```sh
git clone https://github.com/arichmondphoto/DragonWarrior4NESRecomp.git
cd DragonWarrior4NESRecomp
./build_macos.sh…
