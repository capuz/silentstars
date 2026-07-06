---
repo: "MultiMote/meshcore-cardputer-adv"
name: "meshcore-cardputer-adv"
description: "MeshCore Cardputer-Adv + Cap LoRa-1262 variant. Still in development 🚧"
readmeQualityOk: true
url: "https://github.com/MultiMote/meshcore-cardputer-adv"
language: "C"
languages: ["C", "C++"]
languagePcts: [76, 24]
topics: ["cardputer", "cardputer-adv", "lora", "meshcore"]
stars: 9
forks: 1
openIssues: 3
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-05-15T16:03:45Z"
lastCommitAt: "2026-07-06T07:03:49Z"
lastReleaseAt: "2026-05-15T16:13:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 39
maintainers: ["MultiMote"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fd22b31f6980d42fd77e2f3f815ad2b9ca0ed326c53050099c9b33c12209625/MultiMote/meshcore-cardputer-adv"
---

## MeshCore Cardputer-Adv + Cap LoRa-1262 variant

This variant designed to not change the original codebase. I tried to make the implementation as clean as possible.

### Building

1. Get a copy of [MeshCore](https://github.com/meshcore-dev/MeshCore). Current development is based on v1.16.0.

2. Copy the `variants/cardputer_adv` directory from this repository into the `variants` directory of the MeshCore source tree.

3. Run in the MeshCore directory:

Build:

```bash
platformio run --environment cardputer_adv_companion_radio_ble
```

Build and flash:

```bash
platformio run --target upload --environment cardputer_adv_companion_radio_ble
```

### Flashing pre-build binaries

1. Grab .bin file from [Releases](https://github.com/MultiMote/meshcore-cardputer-adv/releases) page. The "merged" firmware will not erase your settings because they are stored on the SD card.
2. Flash with https://meshcore.io/flasher or with any other ESP32S3 flaser.

### State

> [!WARNING]
> Firmware is under development. Some settings may reset after flashing a new version. Back up your data if you don't want to lose anything.

Currently implemented (companion):

- Cap LoRa-1262 initialization (+ port…
