---
repo: "Sendspin/sendspin-cpp"
name: "sendspin-cpp"
description: "Sendspin client library built with C++. Suitable for host machines and embedded hardware."
readmeQualityOk: true
url: "https://github.com/Sendspin/sendspin-cpp"
language: "C++"
languages: ["C++"]
languagePcts: [98]
stars: 32
forks: 18
openIssues: 4
closedIssues: 21
watchers: 3
contributors: 12
recentReleases: 0
createdAt: "2026-03-26T21:08:56Z"
lastCommitAt: "2026-11-05T00:22:34Z"
lastReleaseAt: "2026-05-22T01:09:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 48
maintainers: ["kahrendt", "chrisuthe", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/793ba7e022201736af94af7c59464a9b02a0b3ca092ca15910b98cd1cc8a9f0f/Sendspin/sendspin-cpp"
---

# sendspin-cpp

Standalone C++ library implementing the [Sendspin synchronized audio streaming protocol](https://www.sendspin-audio.com/). Builds on both ESP-IDF (ESP32) and host platforms (macOS/Linux). Designed to be consumed by ESPHome but has no ESPHome dependencies.

## Features

- Modular Sendspin role composition: artwork, color, controller, metadata, player, source, and visualizer
- WebSocket client and server support
- Mandatory Noise KKpsk2 encryption on every connection, with Pairing PSK token and pairing code pairing
- Decodes FLAC and PCM and streams captured audio as FLAC or PCM, plus Opus decode and encode when built with `SENDSPIN_ENABLE_OPUS` (the default)
- Cross-platform: ESP-IDF (ESP32) and host (macOS/Linux)

## Documentation

- **[Integration Guide](https://github.com/Sendspin/sendspin-cpp/blob/HEAD/docs/integration-guide.md)** -- How to integrate sendspin-cpp into your application, including required callbacks, role composition, and platform setup
- **[Internals](https://github.com/Sendspin/sendspin-cpp/blob/HEAD/docs/internals.md)** -- Internal architecture, threading model, and inter-class communication
- **[Playback…
