---
repo: "NVIDIA/IsaacTeleop"
name: "IsaacTeleop"
description: "The unified framework for sim & real robot teleoperation"
url: "https://github.com/NVIDIA/IsaacTeleop"
homepage: "https://nvidia.github.io/IsaacTeleop/"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [49, 43]
stars: 272
forks: 49
openIssues: 97
closedIssues: 53
watchers: 3
contributors: 47
recentReleases: 4
createdAt: "2025-11-07T22:55:44Z"
lastCommitAt: "2026-07-01T07:05:40Z"
lastReleaseAt: "2026-06-30T20:09:23Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 32
maintainers: ["jiwenc-nv", "yanziz-nvidia", "sgrizan-nv"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a1247202a7183c81b8169f365dc82000979c675a86b0d13f4b328168e359457/NVIDIA/IsaacTeleop"
---

# Isaac Teleop

**The unified framework for high-fidelity ego-centric and robotics data collection.**

</div>

---

## Overview

**Isaac Teleop**: The unified standard for high-fidelity egocentric and robot data collection.
It is designed to address the data bottleneck in robot learning by streamlining device integration;
standardizing high-fidelity human demo data collection; and foster device & data interoperability.

## Key Features

- Unified stack for sim & real teleoperation
- Standardized device interface
- Flexible retargeting framework

See the [Ecosystem](https://nvidia.github.io/IsaacTeleop/main/overview/ecosystem.html) page for supported robotics stacks, devices, and retargeting details.

### Teleoperation Use Cases

- Currently supported use cases
  - Use XR headsets for gripper / tri-finger hand manipulation
  - Use XR headsets with gloves for dex-hand manipulation
  - Seated full body loco-manipulation (Homie)
  - Tracking based full body loco-manipulation (Sonic)
  - Egocentric data collection (aka “no-robot”)
- Upcoming use cases
  - Teleoperate using only non-XR devices (e.g. gamepad, Gello, haply, etc.)
  - Teleoperate cloud based robotics simulations
  - Remote…
