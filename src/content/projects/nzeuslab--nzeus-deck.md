---
repo: "nzeuslab/nzeus-deck"
name: "nzeus-deck"
description: "Linux 7.2 and Debian 12 for the R36S V2.7 clone (HiChip E3100). Copy to the SD card, no flashing, uninstall any time."
readmeQualityOk: true
url: "https://github.com/nzeuslab/nzeus-deck"
homepage: "https://nzeuslab.com"
language: "C"
languages: ["C"]
languagePcts: [84]
topics: ["debian", "embedded-linux", "handheld", "hichip", "linux", "lvgl", "mips", "r36s", "retro-handheld", "reverse-engineering"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-11-18T23:14:38Z"
lastCommitAt: "2026-11-22T02:02:26Z"
lastReleaseAt: "2026-11-22T02:00:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 27
maintainers: ["naser-ashknani"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1463439162/ad027938-be3d-4104-85a3-718ab0e4c962"
---

# NZEUS Deck

**Turn the $40 R36S clone into a real Linux computer.** Linux 7.2 and Debian 12,
with a small desktop made for the console's screen and buttons: a real terminal
and Python, Wi-Fi and Bluetooth, and car and electronics tools.

This is the R36S that ArkOS and the other custom firmwares **can't** run on. Now it can.

## Install in 3 steps (Windows)

1. Download **[the latest release zip](https://github.com/nzeuslab/nzeus-deck/blob/HEAD/../../releases/latest)** and unzip it.
2. Put the console's SD card in a card reader and double-click **`install.bat`**.
   Windows asks once for administrator rights.
3. Put the card back in the console and switch it on.

**Your games:** NZEUS needs about 5 GB free on the card. If the card is full,
`install.bat` offers to delete the games to make room. It asks first, and deleted
games don't come back, so copy them to your PC first if you want to keep them.

**Keep your original card as it is:** `install-new-card.bat` puts NZEUS on a second,
empty SD card instead (see [INSTALL.md](https://github.com/nzeuslab/nzeus-deck/blob/HEAD/INSTALL.md#on-a-new-empty-sd-card)).
