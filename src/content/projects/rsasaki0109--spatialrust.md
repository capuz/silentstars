---
repo: "rsasaki0109/SpatialRust"
name: "SpatialRust"
description: "Rust-native spatial computing for point clouds, LiDAR/COPC, computer vision, geometry, wgpu GPU compute, robotics, and AI-ready spatial data"
readmeQualityOk: true
url: "https://github.com/rsasaki0109/SpatialRust"
homepage: "https://rsasaki0109.github.io/SpatialRust/spatialrust/"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["copc", "icp", "lidar", "point-cloud", "robotics", "rust", "wgpu", "computer-vision", "gpu-computing", "image-processing"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-12T13:37:47Z"
lastCommitAt: "2026-07-15T05:54:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 51
maintainers: ["rsasaki0109"]
openGraphImageUrl: "https://opengraph.githubassets.com/532319358b1570388c238317adc28adb21fdfc714daa914265442c1d1a2df00b/rsasaki0109/SpatialRust"
---

# SpatialRust

</p>

  <strong>Rust-native spatial computing</strong><br>
  Point clouds · wgpu · COPC · RANSAC · ICP — native Rust, no C++ binding layer.
</p>

</p>

The hero GIF above is **real MVP pipeline output** (not a mockup): it uses the public PCL [`table_scene_lms400.pcd`](https://github.com/PointCloudLibrary/data/blob/master/tutorials/table_scene_lms400.pcd) sample, voxel-downsamples it, RANSAC peels off the dominant plane, and Euclidean clustering lights up objects in color — every frame rendered straight from a live pipeline run.

</p>

| ⚡ GPU-accelerated | 🗂️ COPC-native | 🦀 Pure Rust | 🧩 Composable |
| --- | --- | --- | --- |
| wgpu voxel filter, **~3.9× at 2M points**, automatic CPU fallback | **bounds + LOD** partial reads straight off disk — no full-tile load | no C++ / FFI binding layer to fight | one MVP crate: **IO → filter → segment → register** |

</p>

## Why SpatialRust?

| | Typical C++ stack (PCL / Open3D / OpenCV bindings) | SpatialRust |
| --- | --- | --- |
| Core language | C++ + FFI glue | **Native Rust** |
| Vision runtime | OpenCV linked into the app | **OpenCV optional for tests only** — production vision is Rust |
| GPU path | varies by…
