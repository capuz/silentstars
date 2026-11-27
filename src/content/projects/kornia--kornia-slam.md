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
topics: ["computer-vision", "jetson", "oak-d", "rerun", "robotics", "rust", "slam", "vio", "visual-inertial-odometry", "visual-slam"]
stars: 113
forks: 28
openIssues: 26
closedIssues: 17
watchers: 10
contributors: 12
recentReleases: 1
createdAt: "2025-01-20T22:47:57Z"
lastCommitAt: "2026-11-27T16:28:24Z"
lastReleaseAt: "2026-09-27T17:28:33Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded"]
healthScore: 83
undervaluedScore: 45
maintainers: ["cjpurackal", "edgarriba", "Astik-2002"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c27c0c8b7a8ef02bcd830c2a1b0947597a3d1c8541d702ce73b6c47abbb8c09/kornia/kornia-slam"
fundingLinks: ["GITHUB:https://github.com/kornia"]
---

# kornia-slam

Real-time visual-inertial SLAM in Rust, built on [kornia-rs](https://github.com/kornia/kornia-rs).

> **v0.1 — early release.** The API will change between minor versions.

keypoints, and a follow view.</sub>

## Features

- Monocular, stereo, and visual-inertial ORB SLAM
- Local bundle adjustment, including visual-inertial BA
- Place recognition (DBoW2) and loop closure with pose-graph optimization
- Sources: EuRoC, Hilti, MCAP, OAK-D, UVC webcams
- Terminal UI, Rerun streaming, ATE/RPE evaluation

See [ROADMAP.md](https://github.com/kornia/kornia-slam/blob/HEAD/ROADMAP.md) for what's next.

## Install

### Prebuilt binaries (v0.1.0)

Linux x86_64 and aarch64 builds need glibc 2.35+ (Ubuntu 22.04+, Jetson JetPack 6):

```bash
TARGET=x86_64-unknown-linux-gnu   # or aarch64-unknown-linux-gnu
NAME=kornia-slam-v0.1.0-$TARGET
curl -L --remote-name-all https://github.com/kornia/kornia-slam/releases/download/v0.1.0/$NAME.tar.gz{,.sha256}
sha256sum -c $NAME.tar.gz.sha256
tar -xzf $NAME.tar.gz

# stereo + IMU on an EuRoC sequence, with evaluation against ground truth
./$NAME/kornia-slam euroc --data /path/to/MH_01_easy --stereo --imu --evaluate
```
