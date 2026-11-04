---
repo: "VitalyVorobyev/calibration-rs"
name: "calibration-rs"
description: "Vision sensors calibration library in RUST"
readmeQualityOk: true
url: "https://github.com/VitalyVorobyev/calibration-rs"
homepage: "https://vitalyvorobyev.github.io/calibration-rs/"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
stars: 6
forks: 1
openIssues: 0
closedIssues: 25
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-15T17:08:38Z"
lastCommitAt: "2026-11-04T08:03:08Z"
lastReleaseAt: "2026-06-20T09:16:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 81
maintainers: ["VitalyVorobyev"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf3ca2c981d5ad74cfe9ad864acc39e1b6b71dfd00c5744ea7822a5822804b4a/VitalyVorobyev/calibration-rs"
---

&nbsp;vision-calibration

**Camera calibration in Rust, from images to a validated metric model.** Point
it at a folder of calibration images and get back intrinsics, distortion,
multi-camera rig extrinsics, hand-eye transforms, and laser-plane geometry —
with per-feature residuals you can inspect, JSON checkpoints you can resume
from, and a desktop app to see what the numbers mean.

Available as a Rust crate, a Python package, and a GUI.

## What it calibrates

| Workflow | Solves for | Typical input |
|---|---|---|
| **Planar intrinsics** | `fx, fy, cx, cy` + distortion, and the sensor tilt (`tilt_x`, `tilt_y`) for a tilted (Scheimpflug) sensor | one camera, N views of a flat target |
| **Rig extrinsics** | per-camera intrinsics + camera-to-rig poses | 2+ synchronised cameras |
| **Single-camera hand-eye** | intrinsics + camera-to-gripper (or -to-base) transform | camera on/observing a robot arm |
| **Rig hand-eye** | rig extrinsics + hand-eye, eye-in-hand or eye-to-hand | multi-camera head on a robot |
| **Laserline device** | camera + laser-plane geometry | camera + line projector |
| **Rig laserline device** | one laser plane per camera, upstream calibration frozen |…
