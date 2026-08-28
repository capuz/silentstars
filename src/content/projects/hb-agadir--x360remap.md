---
repo: "HB-Agadir/x360remap"
name: "x360remap"
description: "a DashLaunch plugin that reads USB HID mouse/keyboard input and turns it into Xbox 360 controller input, system-wide.  and a small on-console configuration app (Dear ImGui) to bind keys, tune mouse sensitivity, and manage per-game profiles, so you don't have to hand-edit a config file."
readmeQualityOk: true
url: "https://github.com/HB-Agadir/x360remap"
language: "C++"
languages: ["C++"]
languagePcts: [91]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2026-08-12T00:19:53Z"
lastCommitAt: "2026-08-28T14:26:10Z"
lastReleaseAt: "2026-08-17T21:21:02Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 23
maintainers: ["HB-Agadir"]
openGraphImageUrl: "https://opengraph.githubassets.com/85d87284cf40b6c15736edcf515b680e2513ae67b015a50088cb3aa064892846/HB-Agadir/x360remap"
discussionCount: 1
---

# X360Remap

A fork of [hiddriver360](https://github.com/EinTim23/hiddriver360) by EinTim23, adding **mouse and keyboard support** to Xbox 360 consoles running RGH/JTAG (DashLaunch), merged with native controller input.

## What this is

X360Remap is made of two pieces:

- **X360Remap Core** (`hiddriver.xex`) — a DashLaunch plugin that reads USB HID mouse/keyboard input and turns it into Xbox 360 controller input, system-wide.
- **X360Remap Studio** (`application.xex`) — a small on-console configuration app (Dear ImGui) to bind keys, tune mouse sensitivity, and manage per-game profiles, so you don't have to hand-edit a config file.

**Must have** Xbdm.exe need to be activated, without it X360Remap cause the console to freeze, I tried everything to avoid that dependence but I couldn't find a permanent solution every log stop at the moment of the freez with no clear cause.

Built for players who want to use mouse and keyboard on original Xbox 360 hardware, no dongle or adapter involved.

## Status

This is a solo, spare-time project, and it's honestly not yet where I'd like it to be. Core input remapping, per-game profiles, and mouse calibration all work on real hardware, but the…
