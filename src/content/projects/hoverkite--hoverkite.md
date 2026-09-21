---
repo: "hoverkite/hoverkite"
name: "hoverkite"
description: "A project to fly a kite using custom firmware on a hoverboard"
readmeQualityOk: true
url: "https://github.com/hoverkite/hoverkite"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["hacktoberfest", "firmware", "cortex-m"]
stars: 17
forks: 0
openIssues: 4
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-03-20T17:02:01Z"
lastCommitAt: "2026-09-21T09:13:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 83
undervaluedScore: 45
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b99b5f2d5b68653ff3d19f114d709fbcddbc0aef8df111a8395e55355bf5918/hoverkite/hoverkite"
---

# HoverKite V2

The main branch of this repo has been coopted for 

HoverKite is a hare-brained scheme to fly a kite using a camera, a raspberry pi, and custom firmware
on a hoverboard.

Progress is tracked on [Trello](https://trello.com/b/v4vMHzf9/kite-power-generation). Eventually we
would like to use this setup to produce power, but that's a long way off.

There are currently two crates in this repository:

- [Firmware](https://github.com/hoverkite/hoverkite/blob/HEAD/cross/hoverkite-firmware) for a hoverboard.
- [A utility](https://github.com/hoverkite/hoverkite/blob/HEAD/hovercontrol) to control it with a game controller.

They communicate over a serial port using a custom [protocol](https://github.com/hoverkite/hoverkite/blob/HEAD/docs/protocol.md).

## Getting started

You will need:

- A hoverboard with a pair of `TT-SD2.2` main-boards ("Split Board" according to [Candas' spreadsheet](https://docs.google.com/spreadsheets/d/1Vs3t2W8_z7E93Ij0pwx_cKzxzKSvjW1n1t_40CXV3ik/edit#gid=0))
  - This project is being developed on a `Zinc Smart GT Pro`.
  - https://hackaday.io/project/170932-hoverboards-for-assistive-devices suggests that `HOVER-1 ULTRA Hoverboard` is another example…
