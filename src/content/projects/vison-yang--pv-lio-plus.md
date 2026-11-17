---
repo: "vison-yang/PV-LIO-PLUS"
name: "PV-LIO-PLUS"
description: "A probabilistic voxelmap-based LiDAR-Inertial Odometry. Modified based on PV-LIO."
readmeQualityOk: true
url: "https://github.com/vison-yang/PV-LIO-PLUS"
language: "C++"
languages: ["C++"]
languagePcts: [94]
stars: 20
forks: 7
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-06-09T07:20:48Z"
lastCommitAt: "2026-11-17T12:16:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 72
undervaluedScore: 60
maintainers: ["vison-yang"]
openGraphImageUrl: "https://opengraph.githubassets.com/974966e0352813747ed2f2230ed5d7cbf390243ddc6defb5d197173667f26c89/vison-yang/PV-LIO-PLUS"
---

# PV-LIO-PLUS

[中文版本](https://github.com/vison-yang/PV-LIO-PLUS/blob/HEAD/README.zh-CN.md)

PV-LIO-PLUS is a ROS1 LiDAR-inertial odometry (LIO) framework that integrates
multiple map structures and their corresponding residual models to evaluate
different maps within the same framework. LiDAR/IMU processing, state
propagation, the iterated-filter loop, and result outputs are shared; each
backend retains its map representation, matching rules, and observation model.

The project originated from [PV-LIO](https://github.com/HViktorTsoi/PV-LIO),
which replaced ikd-tree with the probabilistic
[VoxelMap](https://github.com/hku-mars/VoxelMap) map in the **FAST-LIO2 source
framework**. PV-LIO-PLUS first integrated
[VoxelMapPlus (VoxelMap++)](https://github.com/uestc-icsp/VoxelMapPlus_Public),
then substantially refactored and optimized the code framework, and subsequently
incorporated more map structures and their corresponding residual models.

`MapManager` currently selects eleven map backends from a common
configuration. Their map implementations are bundled in this package. Official
upstream projects collected in the surrounding workspace supply provenance and
independent baselines;…
