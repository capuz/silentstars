---
repo: "rainmakerv3/BB_Launcher"
name: "BB_Launcher"
description: "Dedicated launcher/mod manager combo app for Bloodborne on shadPS4"
url: "https://github.com/rainmakerv3/BB_Launcher"
language: "C++"
languages: ["C++", "CMake"]
languagePcts: [54, 23]
stars: 323
forks: 10
openIssues: 1
closedIssues: 93
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2024-12-31T13:47:40Z"
lastCommitAt: "2026-07-03T06:23:41Z"
lastReleaseAt: "2025-10-06T23:33:10Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 98
undervaluedScore: 38
maintainers: ["rainmakerv3", "Daviex", "mbuzzo1"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d51814dd8a7f763e49fbc4da649936afa36d8d0733811ba1495fdcdaf74e73c/rainmakerv3/BB_Launcher"
---

# BBLauncher

A dedicated shadPS4 launcher focused entirely on *Bloodborne*, designed to simplify setup, modding, updates, and quality-of-life features while staying fully open source.

---

## Installation & Usage

### Windows

1. Install **Visual C++ Redistributable (x64)**:
   [https://aka.ms/vs/17/release/vc_redist.x64.exe](https://aka.ms/vs/17/release/vc_redist.x64.exe)
   *(Required for shadPS4 as well.)*
2. Extract **BBLauncher** to any folder.
3. Run BBLauncher.
4. Click **Manage Builds** and download shadPS4.
5. Set the shadPS4 install folder (for example: `CUSA03173`, depending on your game serial).

---

## Skipping the GUI

Once the install folder is configured, the GUI can be skipped by launching BBLauncher with the following argument:

```bash
-n
```

On macOS, use:

```bash
--args -n
```

---

## Mod Installation

1. Place mods inside the following directory:

```
BBLauncher/Mods
```

2. Use the **mod folder icon** in the launcher for quick access.

### Recommended Setup

It is **highly recommended** to install Bloodborne using a **separate update folder**. This allows BBLauncher’s Mod Manager to apply optimizations more effectively. If a reinstall is needed, only…
