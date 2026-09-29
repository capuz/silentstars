---
repo: "rsasaki0109/CloudAnalyzer"
name: "CloudAnalyzer"
description: "Point cloud viewer and analyzer that runs in your browser. Rust + WebAssembly."
readmeQualityOk: true
url: "https://github.com/rsasaki0109/CloudAnalyzer"
homepage: "https://rsasaki0109.github.io/CloudAnalyzer/"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [61, 21]
topics: ["lidar", "point-cloud", "slam", "python", "change-detection", "las", "rust", "surveying", "threejs", "webassembly"]
stars: 15
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 1
createdAt: "2026-03-18T01:59:07Z"
lastCommitAt: "2026-09-29T10:04:26Z"
lastReleaseAt: "2026-09-27T01:51:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 57
maintainers: ["rsasaki0109"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e47eea04b2124743dc8da4ccada54114602ecc1f18cb8822841ad45df53d69d/rsasaki0109/CloudAnalyzer"
---

# CloudAnalyzer

**Fix your SLAM map, clean it, measure it. In the browser.**

CloudAnalyzer is a point cloud viewer and analyzer that runs in your browser: open a drive's poses and scans,
close its loops, take out the cars that drove past, and compare the result with last week's map or the ground truth.
Everything runs locally in Rust compiled to WebAssembly, on every core: nothing to install, and your data
never leaves your machine.

  A loop closed by hand on a real drive (NCLT, University of Michigan): the same place seen twice a kilometre apart,
  lined up with ICP, and the drive pulled together
</p>

  <b><a href="https://rsasaki0109.github.io/CloudAnalyzer/app/">Open the app</a></b> ·
</p>

## 1. Fix the map

Drop a folder with a trajectory (KITTI, TUM) or a g2o pose graph and one scan per pose.

  <b>Replay the drive</b> scan by scan (PandaSet, San Francisco) · <b>See the correction</b>: every point colored by how far it moved
</p>

- **Close loops** between two keyframes you pick, or let it search the whole drive: candidates are found within
  the drift the odometry could have built up, registered with ICP on the worker pool, and kept only when their
  structure (not just…
