---
repo: "aquasock/MiSTer-Media-Player"
name: "MiSTer-Media-Player"
description: "An experimental media-player core for MiSTer FPGA, with a standards-driven MPEG-2 Video / ITU-T H.262 decoder implemented primarily in FPGA logic."
readmeQualityOk: true
url: "https://github.com/aquasock/MiSTer-Media-Player"
language: "SystemVerilog"
languages: ["SystemVerilog"]
languagePcts: [64]
stars: 18
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 30
recentReleases: 9
createdAt: "2026-08-09T19:32:42Z"
lastCommitAt: "2026-09-15T08:54:05Z"
lastReleaseAt: "2026-09-03T11:07:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 44
maintainers: ["aquasock"]
openGraphImageUrl: "https://opengraph.githubassets.com/d29f04fa5537b5f1f23bffc748b8aab555c530754456c56476ebc85ecd0e0223/aquasock/MiSTer-Media-Player"
---

# MiSTer Media Player

A progressive MPEG-2/MP2 player core for stock MiSTer Main. Audio decoding
runs in FPGA logic; no ARM helper or modified Main is required. The accepted
audio/video baseline is `0b6eb0e` seed 87, with native progressive output,
manual refresh/aspect controls and compact telemetry accepted on hardware.
Keyboard play/pause is hardware tested. Faster seeking is implemented and awaits hardware validation.

- Manually loaded `.srt` subtitles through **Load subtitles**, using stock Main.
  Initial format coverage and hardware-test status: [subtitle notes](https://github.com/aquasock/MiSTer-Media-Player/blob/HEAD/docs/SUBTITLES.md).
- Raw `.m2v` and MPEG Program Stream `.mpg` through the normal file menu.
- Progressive 4:2:0 I/P/B video through 720x480, within the baseline decoder's
  motion/residual limits, at 23.976–30 fps (frame-rate codes 1–5).
- MPEG-1 Layer II audio: 48 kHz, stereo/dual/joint stereo, 112–384 kb/s,
  unprotected frames. The conversion script uses 192 kb/s stereo.
- PES timestamps, audio-clock-based presentation, and independent compressed
  video buffering. Missing individual video PTS retain encoded-cadence fallback.
- Native 720x480…
