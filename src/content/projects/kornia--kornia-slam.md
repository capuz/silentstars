---
repo: "kornia/kornia-slam"
name: "kornia-slam"
description: "Real-time visual-inertial SLAM in Rust, built on kornia-rs."
readmeQualityOk: true
url: "https://github.com/kornia/kornia-slam"
homepage: "https://www.kornia.org/slam/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 40
forks: 15
openIssues: 8
closedIssues: 14
watchers: 8
contributors: 13
recentReleases: 0
createdAt: "2025-01-20T22:47:57Z"
lastCommitAt: "2026-09-26T08:46:23Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 57
maintainers: ["cjpurackal", "Astik-2002", "edgarriba"]
openGraphImageUrl: "https://opengraph.githubassets.com/46901dd44ecca1b3d66532bdcc487809b6c6ff26222e257293b9559f4b642aa6/kornia/kornia-slam"
fundingLinks: ["GITHUB:https://github.com/kornia"]
---

# kornia-slam

Real-time visual-inertial SLAM in Rust, built on [kornia-rs](https://github.com/kornia/kornia-rs).

</div>

> **v0.1 — early release.** The API will change between minor versions.

## Features

- Monocular, stereo, and visual-inertial ORB SLAM
- Local bundle adjustment, including visual-inertial BA
- Place recognition (DBoW2) and loop closure with pose-graph optimization
- Sources: EuRoC, Hilti, MCAP, OAK-D, UVC webcams
- Terminal UI, Rerun streaming, ATE/RPE evaluation

See [ROADMAP.md](https://github.com/kornia/kornia-slam/blob/HEAD/ROADMAP.md) for what's next.

## Quick start

Download a [EuRoC](https://projects.asl.ethz.ch/datasets/doku.php?id=kmavvisualinertialdatasets)
sequence (ASL format), then:

```bash
# monocular
cargo run --release -p kornia-slam-app -- euroc --data /path/to/MH_01_easy

# stereo + IMU, with evaluation against ground truth
cargo run --release -p kornia-slam-app -- euroc --data /path/to/MH_01_easy --stereo --imu --evaluate
```

More sources and options: [apps/kornia-slam-app](https://github.com/kornia/kornia-slam/blob/HEAD/apps/kornia-slam-app/README.md).

## Development

With [Pixi](https://pixi.sh), which sets up the toolchain for you:…
