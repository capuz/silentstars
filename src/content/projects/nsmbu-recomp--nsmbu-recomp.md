---
repo: "nsmbu-recomp/nsmbu-recomp"
name: "nsmbu-recomp"
description: "New Super Mario Bros. U: Native Port / Recompilation"
readmeQualityOk: true
url: "https://github.com/nsmbu-recomp/nsmbu-recomp"
language: "C++"
languages: ["C++"]
languagePcts: [64]
stars: 80
forks: 1
openIssues: 4
closedIssues: 7
watchers: 3
contributors: 9
recentReleases: 10
createdAt: "2026-10-08T21:51:20Z"
lastCommitAt: "2026-10-26T20:47:16Z"
lastReleaseAt: "2026-10-24T22:17:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 35
maintainers: ["IrishBruse"]
openGraphImageUrl: "https://opengraph.githubassets.com/d978d21c8000c313db9ff979eff53f39dcb51409de7bd14bd63ed237dbbe590e/nsmbu-recomp/nsmbu-recomp"
---

# New Super Mario Bros. U: Native Port / Recompilation

This project compiles Wii U game assets into a standalone, native executable.  
The release package includes the necessary runtime, build tools, and installer script.  
You must supply your own copy of the game files, disc image, and encryption keys.  

## Controls

Press `F12` to open the settings overlay.  
**F1**–**F5** load save states; **Shift+F1**–**F5** save.  
Open **Audio** for mute, volume, and TV / GamePad output.  
Open **Controls** to change keys and controller buttons.  

A release stores the mapping in `data/nsmbu/controls.json`.
A build from source stores it in the port config directory.
That directory is `~/.config/nsmbu` on Linux, `%APPDATA%\NSMBU` on Windows, and `~/Library/Application Support/NSMBU` on macOS.
Set `NSMBU_CONTROLS` to use another file.

Up to four controllers work as separate players.
Player 1 uses the keyboard and the first controller.
Each extra controller joins as the next player.
In **Controls**, keep **Same controls for every player** on to use one layout for every controller.
Turn it off to bind buttons for one player at a time.
In GamePad mode Player 1 is the Wii U GamePad and extra…
