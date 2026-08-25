---
repo: "huntergdavis/steamclienttermux"
name: "steamclienttermux"
description: "Reproducible native Steam ARM64 on Termux/X11 with patched PRoot and Turnip"
readmeQualityOk: true
url: "https://github.com/huntergdavis/steamclienttermux"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [73, 20]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-08-08T21:27:03Z"
lastCommitAt: "2026-08-25T04:10:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 40
maintainers: ["huntergdavis"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3de7c2cef22e670a5e1f45e862974a61080907306c86b4b9c2c49da2baa853d/huntergdavis/steamclienttermux"
---

# Steam ARM64 on Termux/X11

Run Valve's native ARM64 Steam client and Windows games on an **unrooted
Samsung Galaxy Tab S8+** with Termux, Termux:X11, Mesa Turnip, Proton ARM64,
FEX, and DXVK.

This is a measured research stack, not yet a one-click Android app. It does not
contain Valve binaries, games, credentials, or account state.

## Current status

| Goal | Best verified result | Next gate |
| --- | --- | --- |
| Tomb Raider performance | 1080p tuned Ultra: **30.7 FPS average** | Replicate and generalize the profile |
| Steam startup | UI **1.662s**; cold AppID **21.80s**; cold game **49.513s** | Connect AppID acceptance to the direct game route |
| Easy distribution | Locked ZIP bootstrap through minimal Debian | Package product launchers and first-run setup |

| Component | Verified |
| --- | --- |
| Steam | Login, Store/Library rendering, downloads, preserved login state |
| Graphics | Hardware Vulkan through private Mesa Turnip |
| Windows games | Proton ARM64 + FEX + DXVK |
| Audio/input | PulseAudio and Termux:X11 mouse, touch, and keyboard |
| Native path | Steam and CEF outside PRoot; allow-listed games use the direct dispatcher |
| Launch polish | Tomb Raider's…
