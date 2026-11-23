---
repo: "funrun45/ArcRift"
name: "ArcRift"
description: "Run an Oculus Rift S on Intel Arc GPUs: play SteamVR games (tested with VRChat). Experimental, free and open source."
readmeQualityOk: true
url: "https://github.com/funrun45/ArcRift"
language: "C++"
languages: ["C++", "PowerShell"]
languagePcts: [55, 34]
topics: ["intel-arc", "oculus", "steamvr", "vr", "vrchat", "windows", "rift-s"]
stars: 6
forks: 1
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-11-01T13:46:52Z"
lastCommitAt: "2026-11-23T13:26:36Z"
lastReleaseAt: "2026-11-23T13:27:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 68
undervaluedScore: 19
maintainers: ["funrun45"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1cbc1a822c5104be0fcdd1a9132771c49e2ebeb04e55dd3ad2814c318e9f423/funrun45/ArcRift"
---

# ArcRift 1.6: Oculus Rift S & Rift CV1 on Intel Arc

Free and open source (MIT). Community workaround to run **Oculus Rift S** (and experimental **Rift CV1**) with **Meta Horizon Link / Oculus Dash / Guardian** and **SteamVR** on **Intel Arc** GPUs. Not affiliated with or endorsed by Meta, Oculus, Intel, or Valve.

> **Experimental — use at your own risk.** While a session runs, ArcRift temporarily adjusts Windows display mode/EDID and Meta runtime settings, and restores everything cleanly when you stop. Read the safety rules below.

## What you need
- Windows 11 (recommended)
- An **Intel Arc** graphics card (tested on **Arc A770**; experimental **Arc B580 / B570 / A750 / A580 / A380** support included)
- **Oculus Rift S** (USB 3 + DisplayPort plugged straight into the Arc GPU) or **Oculus Rift CV1** (USB 3 + HDMI plugged straight into the Arc GPU, experimental)
- **Meta Horizon (Oculus)** PC app installed and open
- **Steam & SteamVR** (only required if using SteamVR mode; **not** required for Meta Dash / Guardian / Oculus-native apps)
- Microsoft Edge (built into Windows 11; hosts the ArcRift Control window)
