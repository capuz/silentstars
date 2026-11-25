---
repo: "inuex35/tightly-coupled-gnss-imu-fgo"
name: "tightly-coupled-gnss-imu-fgo"
description: "Tightly-coupled IMU + GNSS RTK on GTSAM factor graphs"
readmeQualityOk: true
url: "https://github.com/inuex35/tightly-coupled-gnss-imu-fgo"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["gnss", "graph-optimization", "imu", "sensor-fusion", "tightly-coupled"]
stars: 22
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-10T03:37:17Z"
lastCommitAt: "2026-11-25T13:22:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 33
maintainers: ["inuex35"]
openGraphImageUrl: "https://opengraph.githubassets.com/67869ca807a3d7058c826c26a11eb47bf4a5843fdf655b971b2c0f450cac86fd/inuex35/tightly-coupled-gnss-imu-fgo"
---

# tightly-coupled-gnss-imu-fgo

**Open-source tightly-coupled GNSS RTK + IMU factor-graph optimization**

*carrier-phase RTK · LAMBDA ambiguity resolution · GTSAM · urban driving · reproducible*

The full RTK chain lives inside the graph: double-differenced
pseudorange **and carrier phase** with Huber M-estimator noise,
continuous integer ambiguity resolution (LAMBDA + partial AR), and
100 Hz IMU preintegration — targeting centimeter FIX in deep urban
canyons, with IMU + single-differenced Doppler bridging NLOS storms
and tunnels.
