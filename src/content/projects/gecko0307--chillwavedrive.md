---
repo: "gecko0307/ChillwaveDrive"
name: "ChillwaveDrive"
description: "Vehicle simulator written in D"
url: "https://github.com/gecko0307/ChillwaveDrive"
language: "D"
languages: ["D"]
languagePcts: [100]
topics: ["racing-game", "simcade", "vehicle-simulation"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 4
createdAt: "2022-10-01T19:34:02Z"
lastCommitAt: "2026-07-04T19:20:10Z"
lastReleaseAt: "2026-06-30T10:33:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 72
maintainers: ["gecko0307"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5a5d8fc203f3ee7f7c0763aa6c71c475193c63647d26a2af47a69bc44c519de/gecko0307/ChillwaveDrive"
---

# Chillwave Drive
Work-in-progress simcade racing game. It tries to stay both realistic and easy to control via keyboard or gamepad.

## About the Project

Chillwave Drive is written in [D language](https://dlang.org) using [Dagon Engine](https://github.com/gecko0307/dagon) and [Newton Game Dynamics](https://github.com/madeapps/newton-dynamics).

The game implements fairly realistic vehicle physics using Pacejka '94 tyre friction model. The model determines the material of the track under the car's wheels and adjusts itself accordingly. AI-controlled cars are supported; very accurate and stable path following algorithm is implemented, based on the Pure Pursuit method, as well as basic recovery mode. Opponents are capable of drifting, and the AI ​​can be configured to simulate different driving styles, from "proper" urban driving to risky and aggressive.

Currently I'm working on the race logics, weather effects, and car description format.

## Controls

- LMB + mouse - rotate the camera
- RMB - take a screenshot
- W / Right trigger - accelerate
- S / Left trigger - brake/reverse
- A / Left stick -X - steer left
- D / Left stick +X - steer right
- L - toggle headlights
- M -…
