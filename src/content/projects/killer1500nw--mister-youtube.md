---
repo: "killer1500nw/MiSTer-YouTube"
name: "MiSTer-YouTube"
description: "YouTube Core for Mister FPGA"
readmeQualityOk: true
url: "https://github.com/killer1500nw/MiSTer-YouTube"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [52, 25]
stars: 12
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-10-09T10:13:03Z"
lastCommitAt: "2026-10-25T22:11:29Z"
lastReleaseAt: "2026-10-25T22:00:26Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 36
maintainers: ["killer1500nw", "pxpxpxp"]
openGraphImageUrl: "https://opengraph.githubassets.com/99bfcf21792ab9b1f8871c15fa9464d8194fa1eeeb5ed2e2ca550940361081c0/killer1500nw/MiSTer-YouTube"
---

# MiSTer YouTube CRT Player

Browse and watch YouTube on a MiSTer FPGA, on a CRT in 240p or 480i, at up to **480p** video quality, with a gamepad or keyboard. Load the
**YouTubeCRT** core and a menu appears on screen: your channels, playlists and videos, with thumbnails, resume
and a playback bar. There is no account or login, and nothing is saved to the card except small lists and a cache. The video streams to the MiSTer's RAM.
Video is found on the MiSTer itself (yt-dlp and ffmpeg). It now uses owenb321's MiSTer_h264_decoder to decode video on the FPGA instead of the ARM.

## How this code was written

The RTL in this repository was written by an LLM working under human direction. The human contribution was research, compiling, running each build on real hardware, finding what broke, and narrowing it down to a root cause.

This is stated up front because it is a fair thing for anyone evaluating the code to know. It is not an endorsement of the approach — draw your own conclusions.

## What it does

- **Search** YouTube videos and public **playlists** from the menu (on-screen or real keyboard), with paging through the results.
- **Subscriptions**: the newest videos of all your…
