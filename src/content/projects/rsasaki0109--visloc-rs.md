---
repo: "rsasaki0109/visloc-rs"
name: "visloc-rs"
description: "SfM, MVS, visual-inertial SLAM, 3D Gaussian Splatting and map-based localization in Rust"
readmeQualityOk: true
url: "https://github.com/rsasaki0109/visloc-rs"
homepage: "https://rsasaki0109.github.io/visloc-rs/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [68, 25]
topics: ["computer-vision", "rust", "sfm", "slam", "robotics", "localization", "visual-slam", "visual-inertial-odometry", "3d-reconstruction", "gaussian-splatting"]
stars: 273
forks: 24
openIssues: 0
closedIssues: 2
watchers: 4
contributors: 7
recentReleases: 4
createdAt: "2026-05-05T02:35:57Z"
lastCommitAt: "2026-11-26T23:25:12Z"
lastReleaseAt: "2026-11-24T05:41:40Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 35
maintainers: ["claude", "rsasaki0109"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7456891bcd5315718292dfccb27e46c480d03760f166e55dd218e486a47fad2/rsasaki0109/visloc-rs"
fundingLinks: ["GITHUB:https://github.com/rsasaki0109"]
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
