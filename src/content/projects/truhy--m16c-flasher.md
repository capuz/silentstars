---
repo: "truhy/m16c-flasher"
name: "m16c-flasher"
description: "Renesas M16C/62P reader and flasher for special programming bootloader serial I/O mode"
readmeQualityOk: true
url: "https://github.com/truhy/m16c-flasher"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 21
forks: 7
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2021-02-03T14:10:31Z"
lastCommitAt: "2026-09-23T08:46:35Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 31
maintainers: ["truhy"]
openGraphImageUrl: "https://opengraph.githubassets.com/b47ad9a91c9e6848cfe1c580732e41fa9cb6ab2eba35492bfae81c661f748559/truhy/m16c-flasher"
discussionCount: 0
---

# m16c-flasher
Renesas M16C/62P reader and flasher for special programming bootloader serial I/O mode

-----
About
-----

I wanted to dump firmware from a controller that has a Renesas M16C M30624FGPGP MCU on the PCB.
This MCU belongs to M16C/62P series group.

The MCU can be placed into special programming bootloader serial I/O (TTL RS232) mode.

I decided to write my own M16C reader/flasher program for bootloader serial I/O mode.
Tested working on M16C M30624FGPGP.

It is a console application program coded in C/C++ originally for Windows with Visual Studio 2022, but recently ported to linux.  You'll find IDE files .sln for Visual Studio 2022 (Windows) and .cbp for CodeBlocks (Linux and Windows).

Set to default serial settings:
9600, 8 bits data, no parity, 1 stop bit

I recommend to first run the "version.cmd" or "status.cmd" batch file, to test your connection with the MCU because they are not password protected, it should respond with the version string or status.

Note, the MCU's built-in bootloader read and write commands are protected by a password.

The "id_chk.cmd" batch file is useful to check whether the password is correct or not.  Edit this with the correct password…
