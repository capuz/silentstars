---
repo: "nathanlem1/DetectTrack-UAV"
name: "DetectTrack-UAV"
description: "DetectTrack-UAV: Multi-Class Multi-object Detection and Tracking in Moving UAV Videos"
readmeQualityOk: true
url: "https://github.com/nathanlem1/DetectTrack-UAV"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-10-08T19:26:02Z"
lastCommitAt: "2026-07-04T23:13:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 66
undervaluedScore: 39
maintainers: ["nathanlem1"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1df343b4c27dbe88e2ffb80a79adefc45383b685f78fb2ade5c2694637f2841/nathanlem1/DetectTrack-UAV"
---

# DetectTrack-UAV
This code implements *DetectTrack-UAV: Multi-Class Multi-Object Detection and Tracking in Moving UAV Videos*.

## Abstract
In this work, we investigate detection and tracking of multiple objects of different catogories (classes) in moving 
unmanned aerial vehicle (UAV) videos. First, we fine-tune [YOLOX-X](https://github.com/Megvii-BaseDetection/YOLOX) object detector to 
[VisDrone2019](https://github.com/VisDrone/VisDrone-Dataset) detection images dataset. After investigating object detector 
performances on the VisDrone2019 images dataset, we integrate it into a Kalman filter (KF) for tracking multiple objects. 
In addition to considering motion and appearance as strong cues, we also consider weak cues such as height intersection-over-union 
(height-IoU) and tracklet confidence in the data association using a weighted sum fusion method though the weak cues do 
not increase performance. We conduct extensive evaluations on [VisDrone2019](https://github.com/VisDrone/VisDrone-Dataset) 
and [UAVDT](https://sites.google.com/view/grli-uavdt/%E9%A6%96%E9%A1%B5) Multi-Object Tracking (MOT) datasets as a zero-shot solution, and find out that our proposed…
