---
repo: "cravvnn/deadlock-dolly"
name: "deadlock-dolly"
description: "A camera-path editor for local Deadlock replays. Capture the free camera, shape a shot and play it back with animated framing and camera variables."
readmeQualityOk: true
url: "https://github.com/cravvnn/deadlock-dolly"
homepage: "https://discord.gg/deadlockediting"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [64, 36]
stars: 38
forks: 5
openIssues: 1
closedIssues: 6
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-09-08T17:22:48Z"
lastCommitAt: "2026-10-31T15:58:00Z"
lastReleaseAt: "2026-09-15T05:49:26Z"
status: "thriving"
tags: ["funded", "release_machine"]
healthScore: 94
undervaluedScore: 47
maintainers: ["cravvnn", "SamuelCurrid", "ExoCalibra"]
openGraphImageUrl: "https://opengraph.githubassets.com/737aee638841e2ab0c7f491e21ccc88a8e66dfb4786723d255e512f8398dcdf3/cravvnn/deadlock-dolly"
fundingLinks: ["GITHUB:https://github.com/cravvnn", "KO_FI:https://ko-fi.com/cravvnn"]
discussionCount: 8
---

# Deadlock Dolly

**A camera-path editor for local Deadlock replays.**

Capture views from a local replay, shape a camera path and play it back with
animated framing and effects. Edit through the desktop or directly in the game.

**Current source: 0.6.89-alpha · Windows x64 · DirectX 11.**
Native source changes need a matching rebuilt helper. The portable app includes
Python and Tcl/Tk; no separate installation is needed.

> **Local replays only — use at your own risk.** Dolly injects a native DLL
> into Deadlock. Keep `-insecure` in Deadlock's launch options while using Dolly.
> Close your Dolly editing session before launching Deadlock normally.

[Quick start](#quick-start) · [Features](#features) · [Guides](#guides) ·
[Compatibility](#compatibility) · [Support](#support) · [Contributors](#contributors)

## Quick start

1. Download the **Windows x64 ZIP** from [Releases](https://github.com/cravvnn/deadlock-dolly/releases) and extract it completely. Keep `_internal` beside `Dolly.exe`.
2. Open Steam, close any running Deadlock and keep `-insecure` in the game's launch options.
3. Run **Dolly.exe**, select the game executable and a local `.dem` replay, then click **Open replay in…
