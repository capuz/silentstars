---
repo: "oldschoola/linux_maplestory"
name: "linux_maplestory"
description: "Guide on how to run GMS MapleStory on Linux, 2026!"
url: "https://github.com/oldschoola/linux_maplestory"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-25T23:16:51Z"
lastCommitAt: "2026-06-28T02:02:27Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 31
maintainers: ["oldschoola"]
openGraphImageUrl: "https://opengraph.githubassets.com/71002e61ff1cc27b63b691b54d355410917f83170db0312c5b4491651bd55530/oldschoola/linux_maplestory"
---

# Linux MapleStory setup guide

This repo documents and automates the Linux/Proton setup used to run the Steam Windows build of MapleStory.

## What this repo does not include

The GitHub repo intentionally does **not** track proprietary patch files:

- Nexon Launcher files
- Microsoft/VC++ runtime DLL patch files
- `files.zip`
- extracted `files/`

`install.sh` downloads `files.zip` automatically from these mirrors, in order:

1. Catbox: https://files.catbox.moe/qaxsw6.zip
2. x0.at: https://x0.at/96Ia.zip
3. station307: https://l.station307.com/23wXxZg1fohbhAkbHN8wMj/files.zip
4. LimeWire: https://limewire.com/d/lzRB1#nDRoOiUHPA
5. Google Drive: https://drive.google.com/file/d/1ybJcwEGPQF3heLJnafpPX7H7kezwcvqF/view?usp=sharing

You can also pass your own local patch zip or extracted patch directory.

## Current reference setup

Observed on the original machine:

- Steam app id: `216150`
- Steam install directory: `~/.local/share/Steam/steamapps/common/MapleStory`
- Proton prefix: `~/.local/share/Steam/steamapps/compatdata/216150`
- Proton tool: `GE-Proton11-1`
- Desktop/session: KDE Wayland, with MapleStory running through Proton/XWayland
- Steam launches the Windows build…
