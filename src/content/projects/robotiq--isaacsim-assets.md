---
repo: "robotiq/isaacsim_assets"
name: "isaacsim_assets"
description: "Isaac Sim assets for Robotiq hardware"
readmeQualityOk: true
url: "https://github.com/robotiq/isaacsim_assets"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 14
forks: 4
openIssues: 6
closedIssues: 9
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2026-08-17T18:23:03Z"
lastCommitAt: "2026-10-29T21:24:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 44
maintainers: ["l-tschreiber-a11y", "bcastets-robotiq", "ebarnett3"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b43abe37286f0e2333322962f5730c0c0241000fad103ac6c229e1f2831a672/robotiq/isaacsim_assets"
---

# isaacsim_assets

Public [NVIDIA Isaac Sim](https://developer.nvidia.com/isaac/sim) assets
maintained by [Robotiq](https://robotiq.com). This repository is a home for
Robotiq simulation assets and the documentation needed to use them. Four
grippers are published here today, the **2F-85**, the **2F-140**, the **Hand-E** and the **Hand-E C10**, and the
layout is organized by asset category so other assets (grippers, robots,
tooling, scenes) can be added over time.

## Layout

```
grippers/                         Gripper assets
  GRIPPER_SIMULATION_GUIDE.md     How to simulate Robotiq grippers in Isaac Sim
  images/                         Figures used by the guide
  Robotiq_2F_85/                  2F-85 gripper (PhysX + Newton solver variants)
  Robotiq_2F_140/                 2F-140 gripper (PhysX + Newton solver variants)
  Robotiq_Hand_E/                 Hand-E gripper (PhysX, Stroke + Fingertip + FingertipMount variants)
  Robotiq_Hand_E_C10/             Hand-E C10 gripper, three concentric fingers (PhysX + Newton)
  tactile/                        TSF-85 tactile sensor of the 2F grippers (readers, payload generator)
  demo/                           Demos, incl. the UR5e…
