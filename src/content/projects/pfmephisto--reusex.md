---
repo: "pfmephisto/ReUseX"
name: "ReUseX"
description: "ReUseX is a comprehensive tool for processing 3D point cloud scans of building interiors, designed to support building reuse and renovation projects. The project processes LiDAR scans to create semantic 3D models with advanced segmentation capabilities for architectural elements."
readmeQualityOk: true
url: "https://github.com/pfmephisto/ReUseX"
homepage: "https://pfmephisto.github.io/ReUseX/"
language: "C++"
languages: ["C++"]
languagePcts: [82]
topics: ["aec", "lidar", "reuse"]
stars: 8
forks: 1
openIssues: 23
closedIssues: 223
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2023-10-20T12:24:17Z"
lastCommitAt: "2026-09-09T08:18:02Z"
lastReleaseAt: "2025-06-04T16:42:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 80
maintainers: ["pfmephisto"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/707678990/a747bd6b-c265-419f-a7a6-e5f0f22fa2b4"
discussionCount: 2
---

# ReUseX

⚠️ **Warning: This project is in active development and will regularly be introducing breaking changes**

ReUseX is a comprehensive tool for processing 3D point cloud scans of building interiors, designed to support building reuse and renovation projects. The project processes LiDAR scans to create semantic 3D models with advanced segmentation capabilities for architectural elements.

## Features

- **Point Cloud Processing**: Import sensor frames from RTABMap SLAM databases, MuSHRoom and ARKitScenes captures, E57/PLY clouds, 360° panoramas and survey photos
- **Pose Refinement**: Plane-landmark pose-graph optimization with optional wide-baseline loop closure, joint pairwise registration (GTSAM), and content-based 360° panorama alignment
- **Planar Segmentation**: Extract and segment planar surfaces (walls, floors, ceilings) via noise-adaptive region growing
- **Room Segmentation**: Automatically partition point clouds into individual rooms with Leiden community detection over the plane graph (igraph)
- **Semantic Segmentation**: Deep learning-based identification of architectural elements using YOLO and SAM3 models
- **3D Reconstruction**: Cell complex representations…
