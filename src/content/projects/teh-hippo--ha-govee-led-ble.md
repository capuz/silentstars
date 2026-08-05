---
repo: "teh-hippo/ha-govee-led-ble"
name: "ha-govee-led-ble"
description: "Home Assistant Govee BLE lighting integration with H617A and H6199 support."
readmeQualityOk: true
url: "https://github.com/teh-hippo/ha-govee-led-ble"
language: "Python"
languages: ["Python"]
languagePcts: [58]
topics: ["hacs", "home-assistant", "home-assistant-custom-component"]
stars: 10
forks: 3
openIssues: 18
closedIssues: 6
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-21T07:51:08Z"
lastCommitAt: "2026-08-05T06:07:42Z"
lastReleaseAt: "2026-02-23T00:20:20Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 84
undervaluedScore: 42
maintainers: ["teh-hippo", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/20b05aaea21a1ca9e12265e3d358c755b99dd228717733178cd218dcd1ef60b0/teh-hippo/ha-govee-led-ble"
---

# Govee LED BLE for Home Assistant

Local BLE control of supported Govee LED strips from Home Assistant, with no cloud dependency.

## Supported Devices

All models support on/off, brightness, RGB color, color temperature, and state readback.

- **H617A**: LED Strip · 80+ scenes · music mode
- **H6199**: DreamView T1 · video & music modes · advanced controls

## Installation

### HACS (recommended)

1. Open **HACS** → three-dot menu → **Custom repositories**
2. Add `https://github.com/teh-hippo/ha-govee-led-ble` as **Integration**
3. Install **Govee LED BLE** and restart Home Assistant

### Manual

Copy `custom_components/ha_govee_led_ble/` into your HA `custom_components/` directory and restart.

## Beta versions

Preview builds are published from the `segments` branch as [GitHub pre-releases](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository/about-releases), tagged `vX.Y.Z-beta.N`. Stable installs never see them.

To opt in, open the integration in HACS, choose **Redownload** from the three-dot menu, and enable **Show beta versions**. Turn it off and redownload to return to the stable channel.

## Configuration

The…
