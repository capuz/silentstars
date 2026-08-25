---
repo: "Humblemonk/shurectl"
name: "shurectl"
description: "A terminal UI configurator for Shure audio interfaces and mics. Replaces the Windows/Mac-only ShurePlus MOTIV Desktop app"
readmeQualityOk: true
url: "https://github.com/Humblemonk/shurectl"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["motiv", "mvx2u", "podcasting", "shure", "streaming-audio", "xlr", "audio-interface", "audio", "mvx2u-gen-2", "linux-audio"]
stars: 26
forks: 4
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-14T16:09:02Z"
lastCommitAt: "2026-08-25T04:09:13Z"
lastReleaseAt: "2026-05-09T15:58:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 26
maintainers: ["Humblemonk", "plyrthn", "mike-callahan"]
openGraphImageUrl: "https://opengraph.githubassets.com/2aba779ba210b8570724801c532c8ccf1e2a1880e37c640eadddfe0f3809b33e/Humblemonk/shurectl"
fundingLinks: ["GITHUB:https://github.com/Humblemonk", "THANKS_DEV:https://thanks.dev/u/gh/humblemonk"]
---

# shurectl

An open-source terminal UI configurator for Shure USB audio interfaces and microphones on Linux, macOS, and Windows. Replaces the Windows/Mac-only ShurePlus MOTIV Desktop app.

---

## Supported Devices
- MVX2U Gen 1 — Digital Audio Interface
- MVX2U Gen 2 — Digital Audio Interface
- MV6 — USB Gaming Microphone
- MV7+ — USB/XLR Dynamic Microphone

---

## Features

### All Devices
- **Gain Control** — Auto Level / Manual toggle
- **Mic Mute** — toggle mute
- **Monitor Mix** — mic vs. playback blend slider
- **Compressor** — Off / Light / Medium / Heavy
- **High-Pass Filter** — Off / 75 Hz / 150 Hz
- **Real-time Level Meter** — dBFS input meter with peak-hold display
- **4 Preset Slots** — save and load named presets stored as TOML in `~/.config/shurectl/presets/`
- **Device Info** — factory serial number, device name, and firmware version
- **Demo mode** — run without a device plugged in (`--demo`)

### MVX2U Gen 1
- **Gain range** — 0–60 dB
- **Phantom Power** — 48V on/off; warns if enabled when muting ribbon mics
- **5-band Parametric EQ** — per-band enable, gain (−8 to +6 dB in 2 dB steps)
- **Limiter** — enable/disable
- **Panel Lock** — lock the physical panel…
