---
repo: "Dreamer41/ha-smart-irrigation"
name: "ha-smart-irrigation"
description: "Smart Irrigation For HA"
readmeQualityOk: true
url: "https://github.com/Dreamer41/ha-smart-irrigation"
homepage: "https://zoneflowirrigation.com/"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["hacs", "hacs-integration", "home-assistant", "home-assistant-integration", "integration", "irrigation"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-08-25T10:01:20Z"
lastCommitAt: "2026-09-29T08:09:30Z"
lastReleaseAt: "2026-09-28T04:09:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 58
maintainers: ["Dreamer41", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/28f1d10ec9f30f7471e8ac2aa68c7f6a5b44bd93fe9daf03de4918480c41fc88/Dreamer41/ha-smart-irrigation"
---

# ZoneFlow Irrigation

**ZoneFlow is a smart irrigation integration for Home Assistant** for
gardens, lawns, vegetable beds, fruit trees and other plants (install with
HACS). It works out when and how much each zone needs — from the plant,
the soil, the slope, the temperature and the rain, and optionally a
soil-moisture probe, a flow meter and the weather forecast — and tells you
in plain words why it watered or skipped. It works with drip lines,
sprinklers and soaker hoses, multiple zones and shared pumps.

**Only a valve switch is required.** Every sensor is optional, each one adds
a specific capability, and each zone can use a different combination. A
sensor that goes offline later degrades that capability safely instead of
breaking the zone.

**At a glance**

- **Automatic watering per zone**: a light, frequent routine watering and
  an occasional deep soak, from temperature tiers or an evapotranspiration
  (ET) curve with a crop factor (Kc).
- **Plant, soil and slope aware**: plant presets at setup, and **cycle and
  soak** — each watering is split into as many pulses as the soil takes in
  without runoff, with extra pulses on a slope.
- **Rain and weather**: rain credit from…
