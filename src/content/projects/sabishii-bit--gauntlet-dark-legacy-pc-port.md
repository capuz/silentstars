---
repo: "sabishii-bit/Gauntlet-Dark-Legacy-PC-Port"
name: "Gauntlet-Dark-Legacy-PC-Port"
description: "Fan-made unofficial PC port of Gauntlet: Dark Legacy"
readmeQualityOk: true
url: "https://github.com/sabishii-bit/Gauntlet-Dark-Legacy-PC-Port"
language: "C++"
languages: ["C++"]
languagePcts: [95]
topics: ["game-preservation", "pc-port"]
stars: 12
forks: 2
openIssues: 16
closedIssues: 25
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-09-17T01:56:09Z"
lastCommitAt: "2026-10-25T08:40:03Z"
lastReleaseAt: "2026-10-21T09:05:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 92
undervaluedScore: 51
maintainers: ["sabishii-bit", "CyberNomadic"]
openGraphImageUrl: "https://opengraph.githubassets.com/4df54c4b1d964fd1aada2f5af9c01292a715a3a8a23cd5297fe2ccde08bd1cbf/sabishii-bit/Gauntlet-Dark-Legacy-PC-Port"
---

# Gauntlet Dark Legacy

PC port of *Gauntlet Dark Legacy* for Windows and Linux.

Requires your own USA GameCube disc image (`GUNE5D`). Game assets are not included.

## Install and play

1. Download the installer for your system from [Releases](https://github.com/sabishii-bit/Gauntlet-Dark-Legacy-PC-Port/releases).
2. Run it, select or drop in your `.iso` or `.ciso`, and choose an install folder.
3. Launch `gauntlet.exe` on Windows or `gauntlet` on Linux.

Supported systems: Windows 10/11 x64 or Ubuntu 24.04+ x86-64, with a Vulkan 1.3
graphics driver. Extract the Linux `.tar.gz` before running its installer.

To update, close the game and open the installer. Select your existing install
folder, click **Check for updates**, then **Update**. Game assets, saves, and
settings are preserved; no disc image is needed. Close the installer afterward
to finish updating the installer itself.

## Build from source

```sh
git clone https://github.com/sabishii-bit/Gauntlet-Dark-Legacy-PC-Port.git
cd Gauntlet-Dark-Legacy-PC-Port
python scripts/setup.py
```

Follow the [asset setup instructions](https://github.com/sabishii-bit/Gauntlet-Dark-Legacy-PC-Port/blob/HEAD/assets/README.md), then…
