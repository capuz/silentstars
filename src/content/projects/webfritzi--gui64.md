---
repo: "WebFritzi/GUI64"
name: "GUI64"
description: "GUI64 is a graphical, window-based interface for the Commodore 64 that includes a built-in file browser. When used as a cartridge, it provides an immediate GUI experience right at startup."
readmeQualityOk: true
url: "https://github.com/WebFritzi/GUI64"
homepage: "https://www.c64-wiki.com/wiki/GUI64"
language: "Assembly"
languages: ["Assembly"]
languagePcts: [100]
topics: ["c64", "gui", "os"]
stars: 188
forks: 9
openIssues: 12
closedIssues: 7
watchers: 17
contributors: 1
recentReleases: 1
createdAt: "2024-11-13T21:52:54Z"
lastCommitAt: "2026-10-23T09:33:15Z"
lastReleaseAt: "2026-09-23T10:38:19Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 67
undervaluedScore: 39
maintainers: ["WebFritzi"]
openGraphImageUrl: "https://opengraph.githubassets.com/77267bd619885b766ea7e9ef11d7ddb24d01cd5e5669e811ff62e8fa75fc50d3/WebFritzi/GUI64"
discussionCount: 1
---

# GUI64 2.1
GUI64 is a graphical user interface (GUI) for the Commodore 64, ready to use immediately after startup. It comes in two designs: one is Windows-like, the other Mac-like. With GUI64 you can do the following:
* run programs and games with a simple double click and see the loading progress
* manage files by cutting, copying, pasting, deleting, and renaming them
* format and rename disks
* view files in text and hex mode
* SD2IEC: all of the above + browse folders and create disk images and folders
* Ultimate: browse Ultimate content and mount images
* Load and execute one GUI64 app at a time

For detailed information on GUI64, check out the [C64-Wiki page](https://www.c64-wiki.com/wiki/GUI64) or my [YouTube playlist](https://www.youtube.com/watch?v=iCAIbygV_Ac&list=PL0MXvn2FofiZXY7OWdk8VMvzWTT8VbzW2) on the development process of GUI64.

**Control:**<br>
Mouse in Port #1 (mouse wheel support with adapter Micromys)<br>
Joystick in Port #2 (right click with Commodore key + fire)

## Apps
Since GUI64 v2.1, it is possible for programmers to develop apps for GUI64. An app is a PRG binary named "[appname].gui". To build an app, programmers should include the file…
