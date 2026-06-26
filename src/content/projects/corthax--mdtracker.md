---
repo: "corthax/mdtracker"
name: "mdtracker"
description: "Native music tracker for SEGA MEGA DRIVE / GENESIS / NOMAD"
url: "https://github.com/corthax/mdtracker"
language: "C"
languages: ["C"]
languagePcts: [81]
stars: 87
forks: 3
openIssues: 1
closedIssues: 2
watchers: 7
contributors: 1
recentReleases: 0
createdAt: "2021-01-24T08:10:35Z"
lastCommitAt: "2026-06-26T21:31:40Z"
lastReleaseAt: "2023-12-20T18:15:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 83
undervaluedScore: 24
maintainers: ["corthax"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4aa540c22b1787a41abf2e594f15cd328903852d3b12b778a8537044ad8d2e8/corthax/mdtracker"
---

# mdtracker
 Native music tracker for SEGA MEGA DRIVE / GENESIS / NOMAD
 
 Works on:
 
	BlastEm (RetroArch)
	
	BlastEm (Standalone 0.6.3-pre)
	
	Mega Everdrive Pro
	
 Partially:
 
	PicoDrive (RetroArch)
	
	- No CSM
	- No DAC panning
	- Wrong PSG noise pitch
	
---

SGDK (https://github.com/Stephane-D/SGDK/wiki/Setup-SGDK-with-CodeBlocks)

Code::Blocks 20.03

---

/out - Look for the latest wip roms here (*.bin).

	rom.bin - Latest test build.

	rom-pro.bin - Main version for Mega Everdrive Pro. Also should work in RetroArch (BlastEm core).

	rom-x7.bin - Stripped down version for Mega Everdrive X7. [wip]

	rom-blastem.bin - Version for standalone BlastEm emulator (modified rom header).
	
	/releases - All releases. Also the newest wip release preparation goes there.
	
	/cd - CD audio exapmle, not used. [using both msu-md driver and ssf2 mapper is not possible on MED PRO]

/inc - Copied SGDK headers. Fast and dirty way to make code completion in Code::Blocks work.

/res - Graphics, samples etc.

/src - Source code.

See "MD.Tracker Readme.txt" for help on commands etc.

---

Discord: https://discord.gg/CE22HNNk5y

Demo music (recorded from sega nomad + guitars + vocals):…
