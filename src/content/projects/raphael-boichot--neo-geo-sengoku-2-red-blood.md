---
repo: "Raphael-Boichot/Neo-Geo-Sengoku-2-Red-Blood"
name: "Neo-Geo-Sengoku-2-Red-Blood"
description: "Sengoku 2 Red Blood hack for Neo Geo MVS, AES and NGCD. Complete open source workflow and IPS patches. Because if it's not public, it does not exist."
readmeQualityOk: true
url: "https://github.com/Raphael-Boichot/Neo-Geo-Sengoku-2-Red-Blood"
language: "MATLAB"
languages: ["MATLAB"]
languagePcts: [86]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 9
createdAt: "2026-06-21T13:37:20Z"
lastCommitAt: "2026-09-14T09:13:33Z"
lastReleaseAt: "2026-08-31T15:06:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 54
maintainers: ["Raphael-Boichot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1276053024/605d4ce9-340e-4a58-86e6-b8660e5b8e67"
discussionCount: 0
---

# Sengoku 2 (戦国伝承2) Red Blood hack for AES/MVS and NGCD

The project proposes a multi-OS, highly reusable workflow to uncensor Sengoku 2 on Neo Geo as well as ready-to-use IPS patches for **all know versions of the game.** This hack has only one purpose: turn the blood red. Nothing else. 

A guide to **convert a MVS bootleg** is also given here.

The hack is basically finished now and further modifications will just consist in polishing the toolchain / documentation.

## Patching the Neo Geo MVS / AES version (patch 1.18)

Go to the dedicated [IPS scripts folder](https://github.com/Raphael-Boichot/Neo-Geo-Sengoku-2-Red-Blood/blob/HEAD/Working_toolchain_MVS/IPS_scripts), get a known good dump of Sengoku 2 for [MAME](https://www.mamedev.org/), unzip, [apply the IPS patch](https://www.marcrobledo.com/RomPatcher.js/) to corresponding files (check the CRC32 just in case), zip the patched files, enjoy !

Summary of CRC32 you should expect before / after patching:

    File: 040-c1.c1 | Original CRC32: FAA8EA99 | Modified CRC32: 7863E00C
    File: 040-c2.c2 | Original CRC32: 87D0EC65 | Modified CRC32: 5F5105FF
    File: 040-c3.c3 | Original CRC32: 24B5BA80 | Modified CRC32: 7A846578…
