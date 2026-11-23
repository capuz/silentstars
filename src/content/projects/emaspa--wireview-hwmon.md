---
repo: "emaspa/wireview-hwmon"
name: "wireview-hwmon"
description: "Linux hwmon driver and daemon for Thermal Grizzly WireView Pro II power monitor"
readmeQualityOk: true
url: "https://github.com/emaspa/wireview-hwmon"
language: "C"
languages: ["C"]
languagePcts: [79]
stars: 18
forks: 2
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-23T08:30:59Z"
lastCommitAt: "2026-11-23T10:22:44Z"
lastReleaseAt: "2026-07-18T08:36:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 87
undervaluedScore: 55
maintainers: ["emaspa"]
openGraphImageUrl: "https://opengraph.githubassets.com/baca65bedcf53c9d0c16b56e1c000be1e7abd74ba2a7661530ec7903991462ca/emaspa/wireview-hwmon"
fundingLinks: ["GITHUB:https://github.com/emaspa", "BUY_ME_A_COFFEE:https://buymeacoffee.com/emaspa", "KO_FI:https://ko-fi.com/emaspa"]
---

# wireview-hwmon

Linux hwmon driver and daemon for the [Thermal Grizzly WireView Pro II](https://www.thermal-grizzly.com/en/wireview-pro-ii-gpu/s-tg-wv-p2) power monitor. Exposes voltage, current, power, and temperature sensor data through the standard Linux hwmon subsystem.

Both editions of the WireView Pro II are supported: the original and the WireView Pro II Noctua Edition, which speaks the same protocol.

Several devices on one PC are supported (since 1.9.0): each gets its own hwmon device, and every command can address any of them. See [Several devices](#several-devices).

Works standalone or alongside the [wireview-linux](https://github.com/emaspa/wireview-linux) GUI application. When both are used together, the app reads sensor data from hwmon and sends commands through the daemon's Unix socket - giving you full app functionality plus system-wide sensor integration.

## How it works

```
WireView Pro II (USB, up to 8) → wireviewd (serial) → kernel module → /sys/class/hwmon/ → monitoring tools
                                 └─────────→ HTTP /sensors, /metrics (opt-in) → LAN: other hosts, the GUI app, wireviewctl, Prometheus
```
