---
repo: "SoulSolistice/esphome_vitohome"
name: "esphome_vitohome"
description: "An ESPHome external component for Viessmann heating controllers over the Optolink interface."
readmeQualityOk: true
url: "https://github.com/SoulSolistice/esphome_vitohome"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [47, 44]
topics: ["esp32", "esphome-component", "gwg", "home-assistant", "openv", "optolink", "p300", "viessmann", "vitohome", "vs2"]
stars: 14
forks: 5
openIssues: 5
closedIssues: 3
watchers: 4
contributors: 3
recentReleases: 1
createdAt: "2026-06-09T18:14:45Z"
lastCommitAt: "2026-11-12T05:39:01Z"
lastReleaseAt: "2026-10-30T06:12:47Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 87
undervaluedScore: 44
maintainers: ["SoulSolistice", "azanke79", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/24ce2b53ff1994242f6b78a1ba5f8bdfa66a2e85396feb317c2c3725428a29e8/SoulSolistice/esphome_vitohome"
---

# esphome_vitohome

An [ESPHome](https://esphome.io) external component for Viessmann heating
controllers over the Optolink (optical) interface. It speaks three Optolink
protocols — P300/VS2, KW/VS1 and GWG — and exposes controller datapoints to Home
Assistant as `sensor`, `binary_sensor`, `text_sensor`, `number`, `select`,
`switch` and `event` entities, plus a hub-fed Optolink connectivity
diagnostic and a force-refresh `button`.

vitohome targets ESP32 boards and works under both the ESP-IDF and Arduino
frameworks. It is developed and tested against a VScotHO1 unit (device
`0x20CB`). It implements the P300 (VS2) protocol (the default) and KW (VS1),
both confirmed on a VScotHO1. GWG is also selectable via the `protocol:` option:
its reads are confirmed on three units (device `0x2053`), its **writes on
none**, and not every access mode answers on every unit (see
[docs/gwg_protocol.md](https://github.com/SoulSolistice/esphome_vitohome/blob/HEAD/docs/gwg_protocol.md)). Selecting GWG logs a warning at
compile time. If the configured protocol doesn't establish a link within the
start-up window (90 s, or three poll intervals if that is longer), the
component logs an error, reports the…
