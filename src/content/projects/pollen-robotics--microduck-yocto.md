---
repo: "pollen-robotics/microduck_yocto"
name: "microduck_yocto"
description: "Microduck OS"
readmeQualityOk: true
url: "https://github.com/pollen-robotics/microduck_yocto"
language: "BitBake"
languages: ["BitBake"]
languagePcts: [77]
stars: 8
forks: 4
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 11
recentReleases: 1
createdAt: "2026-09-14T08:39:46Z"
lastCommitAt: "2026-10-29T12:25:35Z"
lastReleaseAt: "2026-10-13T10:06:01Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 58
maintainers: ["FabienDanieau", "apirrone", "pierre-rouanet"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa8eae51d0ef2f809431bc374093cc4eb9a87ff79fe519b405e3a8d46e206496/pollen-robotics/microduck_yocto"
---

# microduck_os

The operating system for **microduck**, a small bipedal robot by
[Pollen Robotics](https://www.pollen-robotics.com/): a Yocto image for the
Rockchip RK3566, built on the Rockchip vendor BSP (kernel 6.1) and
[kas](https://kas.readthedocs.io/).

It boots straight into the robot's software, the daemons from
[`pollen-robotics/microduck`](https://github.com/pollen-robotics/microduck),
and updates itself with signed A/B bundles that roll back on their own when a
new slot does not come up healthy.

| Board | Machine | Status |
|---|---|---|
| Radxa Zero 3W (stand-in for the robot's board) | `microduck-zero3` | boots, updates, rolls back; flashed as an SD card |
| microduck beta board (Seeed, first spin of the custom PCB) | `microduck-beta` | bring-up; flashed over USB-C to eMMC |

## What is in the image

- **The robot's daemons**: `robotd` (the 50 Hz Dynamixel control loop),
  `updaterd`, `mediad` (camera over WebRTC), `btd`, plus the policy set `robotd`
  walks with, seeded at build time.
- **A/B OS updates with [RAUC](https://rauc.io/)**: kernel, device tree and root
  filesystem update together into the inactive slot; U-Boot falls back to the
  other slot if the new…
