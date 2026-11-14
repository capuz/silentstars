---
repo: "lolopoco32/TeleopsDVB"
name: "TeleopsDVB"
description: "Teleops - TV tuner player. It connects to the TV tuner via dvbv5-zap and streams the video feed  to the mpv player."
readmeQualityOk: true
url: "https://github.com/lolopoco32/TeleopsDVB"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-17T18:51:54Z"
lastCommitAt: "2026-11-14T10:43:08Z"
lastReleaseAt: "2026-11-08T23:26:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 44
maintainers: ["lolopoco32"]
openGraphImageUrl: "https://opengraph.githubassets.com/f928ecc13369910049d79482afd373d9f6b5e74b93c58b49e0101a7ea9994278/lolopoco32/TeleopsDVB"
---

# Teleops DVB 📺

**Teleops DVB** is a lightweight Python desktop application (built with Tkinter) designed for watching and recording DVB-C (Cable) and DVB-T/T2 (Terrestrial) TV and radio channels. It leverages `dvb-tools` (`dvbv5-scan`, `dvbv5-zap`, `dvb-fe-tool`) for tuning, scanning, and signal probing, and **MPV** (native or Flatpak `io.mpv.Mpv`) as the embedded playback engine, featuring live and full EPG (TV Guide), scheduled recordings, automatic channel switching, DVB subtitles, audio tone controls, and anti-sleep system integration.

---

## 🌟 Features

- 📡 **Automatic Channel & Scrambled Detection:** Supports full-spectrum DVB-C (Cable) and DVB-T/T2 (Terrestrial) scanning (`dvbv5-scan`) with tuner warm-up and automatic/manual scrambled channel detection (`🔑`) based on actual TS scrambling bits and SDT service types.

- 📺 **Embedded MPV Player Integration:** High-performance video and audio playback embedded into the Tkinter window via `--wid` and controlled over an IPC socket, including a custom mini-OSC overlay (subtitles, audio tracks, mute), signal info overlay, and seek/pause guards for live TV.

- 📋 **Live & Full EPG (TV Guide):** Real-time display of current…
