---
repo: "ATOVproject/faderpunk"
name: "faderpunk"
description: "The Eurorack and MIDI controller with a mohawk."
url: "https://github.com/ATOVproject/faderpunk"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [78, 21]
stars: 37
forks: 7
openIssues: 21
closedIssues: 132
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2024-03-28T21:27:50Z"
lastCommitAt: "2026-06-23T23:28:39Z"
lastReleaseAt: "2025-08-13T14:57:11Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 57
maintainers: ["chmanie", "ArthurGibert", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e41558a6f422c44f30cb5090e0ad6c8785ee5a264dd989ffac9f9fb4c66c815c/ATOVproject/faderpunk"
---

# Faderpunk

A powerful, modular eurorack and MIDI synthesizer controller built on the RP2350B microcontroller. Faderpunk provides 16 channels of flexible, programmable control with faders, buttons, CV jacks, and full MIDI integration, all configured through an intuitive web interface.

## Overview

Faderpunk is an embedded Rust project that uses an RP2350B to create a feature-rich eurorack and MIDI controller. Each of the 16 channels can run a different "app" - from LFOs and sequencers to MIDI converters and Turing machines - creating a highly versatile control surface for modular synthesis.

### Key Features

- **16 Independent Channels**: Each channel features a fader, button, RGB LED, and configurable CV jack
- **Modular App Architecture**: Run different apps on different channels simultaneously
- **Dual-Core Performance**: Hardware tasks on Core 0, application logic on Core 1
- **WebUSB Configuration**: Browser-based configurator with drag-and-drop layout management
- **FRAM Storage**: Persistent scene storage with fast save/recall
- **Full MIDI Support**: USB MIDI device capabilities
- **I2C Integration**: Compatible with 16n faderbank protocol
- **Real-time Control**: Async…
