---
repo: "openclaw/esp-openclaw-node"
name: "esp-openclaw-node"
description: "ESP OpenClaw Node"
readmeQualityOk: true
url: "https://github.com/openclaw/esp-openclaw-node"
homepage: "https://openclaw.github.io/esp-openclaw-node/"
language: "C"
languages: ["C"]
languagePcts: [88]
stars: 101
forks: 20
openIssues: 3
closedIssues: 8
watchers: 1
contributors: 27
recentReleases: 5
createdAt: "2026-04-06T10:16:11Z"
lastCommitAt: "2026-11-27T12:54:02Z"
lastReleaseAt: "2026-10-23T19:06:52Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 92
undervaluedScore: 42
maintainers: ["vincentkoc", "roboclaw-bot", "hannesrudolph"]
openGraphImageUrl: "https://opengraph.githubassets.com/4cb9b633d9bff85ad524b9d2459a2a7abb0137e440bd7538914565239b2d6762/openclaw/esp-openclaw-node"
fundingLinks: ["GITHUB:https://github.com/openclaw"]
---

# esp-openclaw-node

This repository contains the `esp-openclaw-node` ESP-IDF component, example applications, and documentation for running ESP32 boards as [OpenClaw Nodes](https://docs.openclaw.ai/nodes).

## Repository Layout

- `components/esp-openclaw-node/`: The `esp-openclaw-node` ESP-IDF component that handles OpenClaw transport, pairing, reconnect, and command dispatch.  
See the [Component README](https://github.com/openclaw/esp-openclaw-node/blob/HEAD/components/esp-openclaw-node/README.md) for more details on component internals.
- `components/esp-openclaw-talk/`: Provider-neutral OpenClaw Talk signaling for Espressif's WebRTC stack.
- `components/esp-openclaw-node-provisioning/`: Reusable Wi-Fi, saved-session, and USB REPL provisioning.
- `components/esp-openclaw-reader/`: UI-independent agent, conversation, reply, and device browsing over a separate operator connection.
- `components/esp-openclaw-room-node/`: Canonical dual-session room-node product behind narrow board ports.
- `examples/`: Example applications for supported boards.
- `docs/`: Getting-started and troubleshooting guides.
