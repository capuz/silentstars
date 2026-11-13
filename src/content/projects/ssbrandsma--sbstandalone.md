---
repo: "ssbrandsma/SBStandalone"
name: "SBStandalone"
description: "Squeezebox standalone internet radio mode"
readmeQualityOk: true
url: "https://github.com/ssbrandsma/SBStandalone"
language: "Lua"
languages: ["Lua"]
languagePcts: [91]
stars: 6
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-31T22:36:42Z"
lastCommitAt: "2026-11-13T11:25:17Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 57
maintainers: ["ssbrandsma", "c-f-h"]
openGraphImageUrl: "https://opengraph.githubassets.com/22c7600f5374f5ace08b767bbf0630ee22be3bbe08fc370f4993166d5b070a62/ssbrandsma/SBStandalone"
---

# Squeezebox Standalone Radio

Bring a Logitech Squeezebox Radio back to life as a self-contained internet radio. This project installs one native SqueezePlay applet on the radio itself: no Logitech Media Server (LMS), mysqueezebox.com account, or always-on computer is required after installation.

The applet is designed for the stock Squeezebox Radio firmware and uses the radio's existing audio playback engine. It adds files only under `/usr/share/jive/applets/StandaloneRadio/`; it does not replace or edit `Playback.lua` or other stock SqueezePlay files.

## What It Does

- Plays stations saved to physical preset buttons, even from the Home screen.
- Provides a `Standalone Radio` Home menu that opens the on-screen Radio Browser.
- Opens the firmware's native Now Playing screen and publishes station, playback, metadata, and remote artwork through Standalone Base.
- Reads user-defined stations managed by the Standalone Base web interface.
- Uses the radio's configured network DNS server. No station IP addresses are hardcoded.
- Treats Pause and Stop as Stop for live radio. Play restarts the last selected station.

New installations have no preloaded stations. Assign any Radio…
