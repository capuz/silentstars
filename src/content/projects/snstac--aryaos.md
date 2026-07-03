---
repo: "snstac/aryaos"
name: "aryaos"
description: "AryaOS: An Operating System for Modern Situational Awareness."
url: "https://github.com/snstac/aryaos"
homepage: "https://aryaos.rtfd.io/"
language: "CSS"
languages: ["CSS", "JavaScript"]
languagePcts: [48, 22]
topics: ["ads-b", "adsb", "ais", "aprs", "atak", "cot", "cursor-on-target", "gps", "itak", "situational-awareness"]
stars: 70
forks: 7
openIssues: 42
closedIssues: 15
watchers: 6
contributors: 3
recentReleases: 10
createdAt: "2023-06-10T03:54:01Z"
lastCommitAt: "2026-07-03T06:24:21Z"
lastReleaseAt: "2026-05-26T14:26:48Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 50
maintainers: ["ampledata"]
openGraphImageUrl: "https://opengraph.githubassets.com/0eb7e4ae47e25aadce793b5da80c0a8ad733d2a77c6df67a3875e4b015734e0f/snstac/aryaos"
---

# AryaOS - The Operating System for Modern Situational Awareness

AryaOS is a Linux-based operating system with a suite of situational awareness tools pre-installed.

Features of AryaOS:

* Includes decoders and gateways for AIS, ADS-B & Drone Remote ID.
* Works with all TAK Products, including ATAK, WinTAK, iTAK, TAKX & TAK Server.
* Facilitates rapid test & evaluation of edge node sensors.
* Browser based low-code development tool for visual programming & open API.
* Runs on inexpensive COTS & low SWaP-C small board computers, including the Raspberry Pi.
* Compatible with Intel & Arm (amd64 & arm64) architectures.

## Development (contributors & agents)

| Topic | Doc |
|-------|-----|
| Image build (Docker pi-gen) | [docs/build.md](docs/build.md), [AGENTS.md](AGENTS.md) |
| Lab Pi sync & portal deploy | [docs/dev-pi.md](docs/dev-pi.md), [docs/portal.md](docs/portal.md) |
| Runtime / SDR / readsb | [docs/config.md](docs/config.md) |
| DroneHone Bluetooth bridge | [docs/dhbridge.md](docs/dhbridge.md) |

**Quick lab portal update** (from repo root, SSH to `aryaos-dev-pi`):

```bash
ARYAOS_SSH=aryaos-dev-pi ./scripts/sync-portal-review.sh
```

Agent handoff and open tasks:…
