---
repo: "rsasaki0109/SpatialRust"
name: "SpatialRust"
description: "Rust-native spatial computing for point clouds, computer vision, and GPU compute -- no C++/FFI layer."
readmeQualityOk: true
url: "https://github.com/rsasaki0109/SpatialRust"
homepage: "https://rsasaki0109.github.io/SpatialRust/spatialrust/"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["copc", "icp", "lidar", "point-cloud", "robotics", "rust", "wgpu", "computer-vision", "gpu-computing", "image-processing"]
stars: 22
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2026-06-12T13:37:47Z"
lastCommitAt: "2026-10-09T10:51:31Z"
lastReleaseAt: "2026-07-16T10:02:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 43
maintainers: ["rsasaki0109"]
openGraphImageUrl: "https://opengraph.githubassets.com/7518dd3a6c42db0bf15a2534b65c75e36f876c2e74f1755ff83003788ff012a4/rsasaki0109/SpatialRust"
---

# SpatialRust

  Point clouds · wgpu · COPC · RANSAC · ICP — native Rust, no C++ binding layer.

The hero GIF above is **real MVP pipeline output** (not a mockup): it uses the public PCL [`table_scene_lms400.pcd`](https://github.com/PointCloudLibrary/data/blob/master/tutorials/table_scene_lms400.pcd) sample, voxel-downsamples it, RANSAC peels off the dominant plane, and Euclidean clustering lights up objects in color — every frame rendered straight from a live pipeline run.

| ⚡ GPU-accelerated | 🗂️ COPC-native | 🦀 Pure Rust | 🧩 Composable |
| --- | --- | --- | --- |
| explicit wgpu voxel and normal kernels, automatic CPU fallback | **bounds + LOD** partial reads straight off disk — no full-tile load | no C++ / FFI binding layer to fight | one MVP crate: **IO → filter → segment → register** |

## Why SpatialRust?

| | Typical C++ stack (PCL / Open3D / OpenCV bindings) | SpatialRust |
| --- | --- | --- |
| Core language | C++ + FFI glue | **Native Rust** |
| Vision runtime | OpenCV linked into the app | **OpenCV optional for tests only** — production vision is Rust |
| GPU path | varies by wrapper | **wgpu voxel / normals** with CPU fallback |
| COPC | bolt-on scripts | **bounds…
