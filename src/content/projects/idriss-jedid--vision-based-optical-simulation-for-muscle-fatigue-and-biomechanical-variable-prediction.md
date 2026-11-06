---
repo: "Idriss-jedid/Vision-Based-Optical-Simulation-for-Muscle-Fatigue-and-Biomechanical-Variable-Prediction"
name: "Vision-Based-Optical-Simulation-for-Muscle-Fatigue-and-Biomechanical-Variable-Prediction"
description: "Muscle activation, force and fatigue from an ordinary RGB camera. Two markerless pipelines (Pose2Sim with 4 cameras, OpenCap Monocular with 1) drive an OpenSim Arm26 model validated against Vicon; AI surrogates (LightGBM, BiGRU) replace OpenSim and run in a web and mobile tele-rehabilitation app."
readmeQualityOk: true
url: "https://github.com/Idriss-jedid/Vision-Based-Optical-Simulation-for-Muscle-Fatigue-and-Biomechanical-Variable-Prediction"
homepage: "https://idriss-jedid.github.io/Vision-Based-Optical-Simulation-for-Muscle-Fatigue-and-Biomechanical-Variable-Prediction/"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [96]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-11T20:52:23Z"
lastCommitAt: "2026-11-06T11:24:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 63
undervaluedScore: 24
maintainers: ["Idriss-jedid"]
openGraphImageUrl: "https://opengraph.githubassets.com/be71e45199a79c1eba13ba212e5c1306039867faced65b73efcdc46836456a8d/Idriss-jedid/Vision-Based-Optical-Simulation-for-Muscle-Fatigue-and-Biomechanical-Variable-Prediction"
---

&nbsp;·&nbsp; <a href="media/demo.mp4">Narrated demo</a>
  &nbsp;·&nbsp; <a href="https://fit3d.imar.ro/fit3d">Fit3D</a>
  &nbsp;·&nbsp; <a href="https://zenodo.org/records/7607736">MM-Fit</a>

## Abstract

Muscle activation, force and fatigue are central to rehabilitation, yet they are usually measured
with electromyography, force sensors or marker-based motion capture: equipment that is costly,
intrusive and confined to the laboratory. An ordinary RGB camera, by contrast, is available
everywhere, but it only records how a limb moves, not how its muscles work.

This work presents a vision-based framework that estimates the internal biomechanics of the upper
limb from markerless RGB video, demonstrated on the dumbbell biceps curl. Two routes recover the
motion of the arm. The multi-camera route extends Pose2Sim: RTMPose detects 2D keypoints in four
calibrated views, which are triangulated into 3D joints. The single-camera route extends OpenCap
Monocular: ViTPose and WHAM estimate the 3D body from a single video, which is then aligned with
gravity and filtered. In both routes, the shoulder, elbow and wrist give the two joint angles of the
arm. Validated against Vicon motion…
