---
repo: "rsasaki0109/CloudAnalyzer"
name: "CloudAnalyzer"
description: "Browser-based LiDAR tools for SLAM map correction, point-cloud analysis, and editable Lanelet2 vector-map drafting. Runs locally with Rust + WebAssembly."
readmeQualityOk: true
url: "https://github.com/rsasaki0109/CloudAnalyzer"
homepage: "https://rsasaki0109.github.io/CloudAnalyzer/"
language: "Python"
languages: ["Python", "Rust", "TypeScript"]
languagePcts: [35, 30, 25]
topics: ["lidar", "point-cloud", "slam", "python", "change-detection", "las", "rust", "surveying", "threejs", "webassembly"]
stars: 22
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 2
createdAt: "2026-03-18T01:59:07Z"
lastCommitAt: "2026-10-24T00:15:07Z"
lastReleaseAt: "2026-10-23T10:15:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 56
maintainers: ["rsasaki0109"]
openGraphImageUrl: "https://opengraph.githubassets.com/b428d8e9ffa502eff63906ab22c981b8d713bd92900ae9fcb8625f491e9b6363/rsasaki0109/CloudAnalyzer"
---

# CloudAnalyzer

**Fix maps. Draft roads. See what changed.**

A point cloud viewer and analyzer that runs in your browser. Repair SLAM maps,
create vector-map drafts and compare surveys. Processing stays on your machine,
powered by Rust and WebAssembly.

  Close a loop in a real campus drive — NCLT, University of Michigan.

## Fix SLAM maps

Open ROS bags, MCAP, scans, trajectories or g2o graphs. Build odometry, close loops
and level maps with IMU gravity; inspect and edit with Undo.

- Find loops automatically or align selected keyframes with ICP.
- Join drives, adjust poses and export corrected clouds, KITTI / TUM poses and g2o.
- [Save a project](https://github.com/rsasaki0109/CloudAnalyzer/blob/HEAD/docs/browser-projects.md) to resume maps, constraints and review notes.

## Build vector maps

Draft roads from points and trajectories, review equipment proposals, and edit
shared boundaries with Undo. Export Autoware Lanelet2 with
[vectormap-rs](https://github.com/rsasaki0109/vectormap-rs).
**Lane counts, object types and legal control require review.**

  38 road fragments + 21 reviewed connections · 7 crossings · 2 stop drafts · 4 signal housings.<br>
  Source-review flags: 9…
