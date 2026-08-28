---
repo: "drbermejor/mgs4Ultra120"
name: "mgs4Ultra120"
description: "Open-source ultrawide Hor+ and experimental 120 FPS patch for MGS4 Master Collection on PC"
readmeQualityOk: true
url: "https://github.com/drbermejor/mgs4Ultra120"
homepage: "https://github.com/drbermejor/mgs4Ultra120/releases/tag/v0.1.0-alpha.1"
language: "PowerShell"
languages: ["PowerShell", "C++"]
languagePcts: [47, 32]
topics: ["directx-12", "metal-gear-solid-4", "pc-gaming", "proton", "ultrawide"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-08-27T17:00:53Z"
lastCommitAt: "2026-08-28T15:33:53Z"
lastReleaseAt: "2026-08-28T08:32:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["drbermejor"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f7e6ab2ed332a8f4febf5a010818fbefa061920dec0dc064fc6196b63cac722/drbermejor/mgs4Ultra120"
---

# MGS4 Ultra120

Open-source ultrawide, FOV and controller-profile fixes for the Steam PC port
of *METAL GEAR SOLID 4*, with corrected 120 FPS support on Windows through
[cipherxof/MGSFPSUnlock](https://github.com/cipherxof/MGSFPSUnlock).

> **Public alpha.** `v0.3.1-alpha.5` targets the verified Steam executable.
> Other builds are blocked unless the user accepts the unsafe override. Back up
> saves and keep Steam's game files available for verification.

## What the Windows release installs

| Component | Purpose |
|---|---|
| `winmm.dll` | Pinned Ultimate ASI Loader v9.7.4 |
| `scripts/MGS4Ultra120.asi` | Ultrawide/Hor+, FOV and controller-profile fixes |
| `mgs4_ultrawide.ini` | Shared MGS4Ultra120 settings |
| `scripts/MGSFPSUnlock.asi` | Corrected high-frame-rate implementation by cipherxof |
| `scripts/MGSFPSUnlock.ini` | Persistent FPS target; defaults to 120 |

Our old single-value FPS override is disabled and no longer writes the game's
FPS state. MGSFPSUnlock owns frame-rate timing and supplies separate fixes for
camera movement, character control, polygon demos, physics, ragdolls, cloth,
hair/bandana, wind and SPURS tasks. This avoids two plugins fighting over the
same…
