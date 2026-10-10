---
repo: "thirdreality/voice-music-assistant"
name: "voice-music-assistant"
description: "ThirdReality Open-Source Speaker (Linux Voice Assistant & Sendspin Support)"
readmeQualityOk: true
url: "https://github.com/thirdreality/voice-music-assistant"
homepage: "https://www.thirdreality.com/products/voice-music-assistant-dev-edition"
language: "C"
languages: ["C"]
languagePcts: [97]
stars: 21
forks: 8
openIssues: 7
closedIssues: 7
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2025-10-22T11:27:27Z"
lastCommitAt: "2026-10-10T10:04:45Z"
lastReleaseAt: "2026-06-09T06:57:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 37
maintainers: ["s1x33", "JSRossie"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc6e910dbc90fb624bf90b1d99d16a2370902b9c5d20d712969877e9761b9db8/thirdreality/voice-music-assistant"
---

# Voice&Music Assistant

ThirdReality Voice&Music Assistant is an open-source speaker that supports connecting to the Home Assistant Voice Assistant and Music Assistant. You need to have a device running Home Assistant in order to use this speaker. If you do not have Home Assistant installed yet, refer to the [installation documentation](https://www.home-assistant.io/installation/) for instructions. [Buy it on ThirdReality Shop](https://thirdreality.com/product/voice-music-assistant-dev-edition/)

## Architecture

The firmware consists of two main application components:

- **Voice** — built on [linux-voice-assistant-cpp](https://github.com/thirdreality/voice-music-assistant/blob/HEAD/buildroot/package/thirdreality/linux-voice-assistant-cpp/), a C++ rewrite of [OHF-Voice/linux-voice-assistant](https://github.com/OHF-Voice/linux-voice-assistant.git). Implements the ESPHome native API so Home Assistant discovers the speaker as a voice satellite. See its [README](https://github.com/thirdreality/voice-music-assistant/blob/HEAD/buildroot/package/thirdreality/linux-voice-assistant-cpp/README.md) for details.
- **Music** — built on [Sendspin](https://www.sendspin-audio.com/), a…
