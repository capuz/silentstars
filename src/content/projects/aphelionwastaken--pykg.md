---
repo: "AphelionWasTaken/PyKG"
name: "PyKG"
description: "A tool to extract and create PS3 PKG files"
readmeQualityOk: true
url: "https://github.com/AphelionWasTaken/PyKG"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["playstation3", "ps3", "ps3-tool", "python", "rpcs3", "rpcs3-patcher"]
stars: 15
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-05-11T15:51:33Z"
lastCommitAt: "2026-11-21T13:32:46Z"
lastReleaseAt: "2026-11-09T13:21:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 28
maintainers: ["AphelionWasTaken"]
openGraphImageUrl: "https://opengraph.githubassets.com/44fa4c6a3b4e773fb5500fc36a7eef4f2491cae0e6bc370647faf3a2be26f4bc/AphelionWasTaken/PyKG"
---

# PyKG
PyKG is a program which can extract or build PlayStation 3 PKG files.

You can use this tool to explore PKG contents, or you can use it to bulk install PKGs to RPCS3 if they are in multiple folders.

You can also use it to rebuild PKGs or create your own PKGs.

Features:
- Windows, Linux, and MacOS support
- Retail and debug/homebrew PKG support
- A clean and easy to use GUI
- PARAM.SFO verification of PKG info
- Recursive folder scanning
- Hash verification of PKG files
- Custom PARAM.SFO creation for homebrew PKGs

Installation
============
Just download the appropriate PyKG.zip from [Releases](https://github.com/AphelionWasTaken/PyKG/releases/latest) for your operating system, extract the folder, and run the executable.

Using PyKG
============
Extracting PKGs
------------
Once the program is open, select the folder containing your PKGs. PyKG scans folders recursively, so you can point it to a folder containing subfolders which contain PKGs and it will scan all of them.

Next, select where you'd like to extract the files to. If you're extracting title updates to RPCS3, you'll need to point it to dev_hdd0/game in your RPCS3 installation.
