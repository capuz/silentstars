---
repo: "sparolab/sonar_context"
name: "sonar_context"
description: "SOTA SONAR Global Descriptor in Underwater SONAR Place Recognition (accepted in ICRA'23)"
readmeQualityOk: true
url: "https://github.com/sparolab/sonar_context"
homepage: "https://sparolab.github.io/research/sonar_context/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 61
forks: 5
openIssues: 0
closedIssues: 7
watchers: 3
contributors: 3
recentReleases: 1
createdAt: "2023-01-30T08:03:34Z"
lastCommitAt: "2026-11-11T11:20:09Z"
lastReleaseAt: "2026-11-11T11:22:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 34
maintainers: ["hogyun2"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2110dfcfbe9abeb9922383faebec796b854c48db9f0245c28ce8bb85c6838f4/sparolab/sonar_context"
---

Hogyun Kim, Gilhwan Kang, Seokhwan Jeong, Seungjun Ma, Younggun Cho · <a href="https://sites.google.com/view/sparo">SPARO Lab</a>, Inha University

______________________________________________________________________

Underwater there is no GPS and no light; a forward-looking imaging sonar sees 50 m ahead through murky water, but its images are noisy, low-resolution and change with the viewpoint. **Sonar Context** turns one sonar image into a small, robust place descriptor, so a robot can tell that it has been here before.

- :ocean: **Sonar Context**: the polar sonar image pooled into patches (range rings × bearing sectors), plus a **polar key** (one value per range ring) that does not change with the heading.
- :mag: **Coarse to fine**: the polar key finds candidates in a k-d tree; the Sonar Context compares them column by column over every bearing shift (a rotation) and row by row (a motion along the beams).
- :repeat: **SLAM**: [DISO](https://github.com/SenseRoboticsLab/DISO) sonar odometry + Sonar Context loops, verified by dense phase correlation and optimized with iSAM2, on ROS 1 and ROS 2.
- :busts_in_silhouette: **Multi-session and multi-robot**: sessions recorded apart…
