---
repo: "patrikduksin/cycling"
name: "cycling"
description: "Open-source bike computer firmware in Rust, starting with the Magene C606."
readmeQualityOk: true
url: "https://github.com/patrikduksin/cycling"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
stars: 5
forks: 0
openIssues: 21
closedIssues: 88
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-09-08T18:25:35Z"
lastCommitAt: "2026-10-25T02:47:19Z"
lastReleaseAt: "2026-10-25T00:55:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 96
undervaluedScore: 60
maintainers: ["patrikduksin"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf07832fd810c0be464bf0e439bc4a53922d8be1f9cfb960ce364bad2a8ff4d6/patrikduksin/cycling"
---

# cycling

Open-source Rust firmware for the Magene C606 bike computer.

- **Base** (`no_std`): positioning, physical input, display, settings, networking,
  BLE and ANT transport, buzzer patterns, GNSS pause/resume, raw motion,
  compensated pressure and owned MMC maintenance, all through an ordinary USB terminal.
- **VANA** (optional, `CYCLING_SDK=1`): workout screens, four concurrent ANT
  sensors plus one selected BLE Heart Rate or Cadence sensor, proximity radar alerts, and
  ride recording, recovery and export. It shows wheel speed, power, heart rate,
  active time, approximate gradient and training zones.

## Development

```sh
scripts/bootstrap.sh                 # Nix dev shell with every pinned tool (docs/dev-setup.md)
mise run test
mise run check
mise run simulate                    # Shared shell with deterministic host devices
mise run harness-virtual             # Shared command/input/capture/persistence scenarios
mise run build                       # Base, harness enabled
CYCLING_SDK=1 mise run build         # Add VANA
mise run verify                      # Every PR gate in parallel
```

`mise tasks` lists every task.…
