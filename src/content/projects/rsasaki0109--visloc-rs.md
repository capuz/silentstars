---
repo: "rsasaki0109/visloc-rs"
name: "visloc-rs"
description: "SfM, MVS, visual-inertial SLAM, 3D Gaussian Splatting and map-based localization in Rust"
readmeQualityOk: true
url: "https://github.com/rsasaki0109/visloc-rs"
homepage: "https://rsasaki0109.github.io/visloc-rs/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [68, 24]
topics: ["computer-vision", "rust", "sfm", "slam", "robotics", "localization", "visual-slam", "visual-inertial-odometry", "3d-reconstruction", "gaussian-splatting"]
stars: 161
forks: 12
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 7
recentReleases: 2
createdAt: "2026-05-05T02:35:57Z"
lastCommitAt: "2026-11-07T22:50:44Z"
lastReleaseAt: "2026-10-24T23:20:17Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 35
maintainers: ["rsasaki0109", "claude", "debsahu"]
openGraphImageUrl: "https://opengraph.githubassets.com/16dd53658dbe80bf2ec9beba6fcdde3b1c0d70bf2e1a68460388b9cd06ecee5f/rsasaki0109/visloc-rs"
---

## In a nutshell

visloc-rs turns camera images (optionally with an IMU) into camera poses, 3D
maps and photorealistic scenes, and localizes new images against those maps.
Everything is Rust: no C++, OpenCV or CUDA toolchain to build. GPU work runs
on any GPU through wgpu. Models are read and written in COLMAP format, so
results plug into existing tools.

| What | Headline result (measured, real data) | vs |
| --- | --- | --- |
| **Photo SfM** (unordered images) | ETH3D Electro 1,200 images: **3.46× faster**, **25% lower** camera-centre error; 9,996 / 10,008 cameras registered across all ten ETH3D many-view scenes | COLMAP 3.9 CPU |
| **GPU SfM** (video frames) | EuRoC: **faster on 8/8** sequences (1.4–7.5×), **more accurate on 4/8**, equal on 1; COLMAP breaks on MH_05 (194 cm vs 2.6 cm) | COLMAP 4.1 CUDA |
| **Stereo-inertial VI-SLAM** (Basalt port + online mapper) | **Real time on 11/11** EuRoC sequences on the dev machine (1.06–1.68×, thin margin on the slowest); **beats ORB-SLAM3 on 9/11** | ORB-SLAM3, Basalt |
| **Egocentric VI-SLAM** (Project Aria, both SLAM cameras + IMU) | LaMAria, all 5 tracks: mean Score **64.3**, above GroundedSLAM (62.3); ahead on Short, Medium and…
