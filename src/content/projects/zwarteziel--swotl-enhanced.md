---
repo: "Zwarteziel/SWOTL.Enhanced"
name: "SWOTL.Enhanced"
description: "SWOTL Enhanced enables you to use your own files to play the 1991 MS-DOS game Secret Weapons of the Luftwaffe on Windows."
readmeQualityOk: true
url: "https://github.com/Zwarteziel/SWOTL.Enhanced"
language: "C"
languages: ["C"]
languagePcts: [80]
stars: 18
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2026-11-01T11:50:59Z"
lastCommitAt: "2026-11-27T12:54:20Z"
lastReleaseAt: "2026-11-02T07:56:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 66
undervaluedScore: 22
maintainers: ["Zwarteziel"]
openGraphImageUrl: "https://opengraph.githubassets.com/da749bdb91680d9a19356b97f71f6c52c43cfd94a1a8c851890cd5288ed86092/Zwarteziel/SWOTL.Enhanced"
---

# SWOTL Enhanced

Version 0.1.28

Run **Secret Weapons of the Luftwaffe** (Lucasfilm Games, 1991) on modern Windows
without installing DOSBox. You need your own copy of the original game files.
Tested with the original 1991 release and with the later 1994 release included in
Lucasarts Air Combat Classics that included the P-38, P-80, He 162 and Do 335.

The original `SWOTL.EXE` and its overlay files run inside a small PC emulation
layer made for this one game. The layer covers the x86 CPU, DOS, BIOS, VGA, AdLib,
joystick and mouse. SDL3 handles the window, scaling, sound and gamepads.
