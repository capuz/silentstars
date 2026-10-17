---
repo: "Ag3497120/VeRantyx"
name: "VeRantyx"
description: "Play PC VR games from an Apple silicon Mac in Apple Vision Pro with hand tracking and Joy-Con, no VR controllers. vxrt: a Windows runtime written from scratch (no Wine, Direct3D 11 to Metal) runs Half-Life: Alyx, SteamVR, The Lab and Google Earth VR. Also a native Linux ARM64 Alyx and a Wine version. HEVC streaming to a visionOS app. MIT."
readmeQualityOk: true
url: "https://github.com/Ag3497120/VeRantyx"
language: "C"
languages: ["C", "C++"]
languagePcts: [50, 23]
topics: ["apple-vision-pro", "low-latency", "mac-gaming", "metal", "half-life-alyx", "hand-tracking", "hevc", "joycon", "openvr", "steamvr"]
stars: 11
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-31T01:31:20Z"
lastCommitAt: "2026-10-17T07:58:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 38
maintainers: ["Ag3497120"]
openGraphImageUrl: "https://opengraph.githubassets.com/9edb57a137e0c1ef5e25cefc99b4fce8fabacba6611fa61117677e8b81e79244/Ag3497120/VeRantyx"
---

# VeRantyx

**Play PC VR games from an Apple Silicon Mac — in an Apple Vision Pro with your hands and a pair of Joy-Con, or in any ALVR headset.**

VeRantyx runs Windows SteamVR games such as Half-Life: Alyx on the Mac, streams
every stereo frame to the headset in hardware-encoded HEVC, and sends the
headset's head and hand poses back. Two ways to see it:

- **The VeRantyx app on Apple Vision Pro** (`VisionProClient/`): hands are
  tracked by the Vision Pro; buttons, sticks and triggers come from Nintendo
  Switch Joy-Con (one in each hand), or the game is played with bare hands. No
  tracked VR controllers are needed: the PS VR2 Sense controllers that other
  Vision Pro ports of Alyx require are not sold in every region (not in Japan at
  the time of writing).
- **ALVR's client apps** (`VERANTYX_ALVR=1`, vxrt version): the Vision Pro's
  "ALVR" app from the App Store, and the ALVR apps of Meta Quest and Pico, with
  their own controllers. Checked with the Vision Pro's ALVR app; **Quest and Pico
  are not tested yet** (we have none: reports are welcome).

The newest version, **vxrt**, needs no Wine: the Windows game and the real
Windows SteamVR run on…
