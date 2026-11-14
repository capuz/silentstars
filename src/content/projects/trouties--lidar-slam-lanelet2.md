---
repo: "trouties/lidar-slam-lanelet2"
name: "lidar-slam-lanelet2"
description: "Offline LiDAR SLAM to Lanelet2 mapping pipeline on KITTI, with a per-stage error budget"
readmeQualityOk: true
url: "https://github.com/trouties/lidar-slam-lanelet2"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["autonomous-driving", "gtsam", "hdmap", "kitti", "lanelet2", "lidar", "nuscenes", "point-cloud", "slam"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-04-11T23:44:35Z"
lastCommitAt: "2026-11-14T22:00:43Z"
lastReleaseAt: "2026-11-14T22:02:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 16
maintainers: ["trouties"]
openGraphImageUrl: "https://opengraph.githubassets.com/385b7e02f356bac936d98c6c795e8c72e12608eb4cf020c7176ef22e19bc3095/trouties/lidar-slam-lanelet2"
---

# LiDAR SLAM to Lanelet2 on KITTI, with an error budget

An offline mapping pipeline on KITTI: KISS-ICP odometry, a GTSAM pose graph with Scan Context loop closures, a point-cloud map, curb extraction, and a georeferenced Lanelet2 export. The pipeline itself is conventional. The work is in the error budget: where the error in the final map comes from, how each contribution was measured, and what was done about it.

*KITTI 00, built from the pose-graph trajectory. Colour: height above the road under the car. Orange: the curbs exported to Lanelet2.*

## Pipeline

| Stage | What it does | Code |
|---|---|---|
| 1 | KITTI scans, with the HDL-64E elevation correction | `src/data/` |
| 2 | KISS-ICP odometry | `src/odometry/` |
| 3 | Pose graph with Scan Context loop closures, verified and refined by ICP | `src/optimization/` |
| 4 | Voxel map accumulated along the Stage 3 trajectory | `src/mapping/map_builder.py` |
| 5 | Curb extraction | `src/mapping/feature_extraction.py` |
| 6 | Lanelet2 OSM export, georeferenced to UTM 32N with the vehicle's RTK GNSS | `src/export/` |

Entry point: `scripts/run_pipeline.py`. Configuration: `configs/default.yaml`.

## Error budget

| Stage | Question…
