---
repo: "OpenServoCore/open-servo-core"
name: "open-servo-core"
description: "The goal of this project is to create an open servo controller board and firmware."
readmeQualityOk: true
url: "https://github.com/OpenServoCore/open-servo-core"
homepage: "https://aaronqian.com/projects/open-servo-core"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["servo-control", "servo-controller"]
stars: 39
forks: 2
openIssues: 0
closedIssues: 4
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2023-07-31T07:12:30Z"
lastCommitAt: "2026-11-07T22:52:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 59
maintainers: ["aq1018"]
openGraphImageUrl: "https://opengraph.githubassets.com/62058ff591b491e10ed22ce59a30c0608f43036b6eb702cc6738827d6cdde179/OpenServoCore/open-servo-core"
discussionCount: 5
---

# OpenServoCore

> An open platform for turning cheap servos into smart actuators.

OpenServoCore (OSC) is open hardware and firmware that drops a CH32V006 control board into a $2-3 cloned hobby servo (SG90 and friends) and turns it into a Dynamixel-class smart actuator with position feedback, current sensing, bus addressing, and programmability. The bus speaks the **osc-native protocol**, a break-framed wire protocol designed to run whole on sub-$0.20 MCUs ([design writeup](https://aaronqian.com/log/2026-08-08-servo-protocol-stream-processing/)).

The thesis is the price point. At mass-production volume, an OSC swap board should add **no more than ~$1 to the BOM** of a cloned servo. That is cheap enough that upgrading every servo in a robot to smart becomes the default instead of a premium decision.

If you are here for a board, jump to [Boards](#boards). The firmware and its progress are in [Firmware](#firmware), and the design writeups are in [Reading](#reading).

## Status

**In active development. Nothing here is shippable yet.** What exists today:

- The **OSC Dev CH32** dev board is validated (Rev B) and you can order one.
- The firmware's protocol and bus transport are…
