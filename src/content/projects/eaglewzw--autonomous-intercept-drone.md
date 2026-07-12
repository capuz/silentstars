---
repo: "Eaglewzw/Autonomous-Intercept-Drone"
name: "Autonomous-Intercept-Drone"
description: "This project is an experimental verification platform for autonomous drone interception tasks, integrating visual perception, target detection, Proportional Navigation Guidance (PNG) algorithms, and flight control methods. The project aims to provide a complete simulation reference solution for research on autonomous drone interception, guidance algorithms, and visual servo control, suitable for learning and academic research."
originalDescription: "An Autonomous Intercept Drone with Image-based Visual Servo."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Eaglewzw/Autonomous-Intercept-Drone"
language: "C++"
languages: ["C++"]
languagePcts: [77]
stars: 21
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2024-12-10T08:45:48Z"
lastCommitAt: "2026-07-12T06:17:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 45
maintainers: ["Eaglewzw"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3c20e920a58147a4f280d13224dac6bb7106df3a3bb843659bc63558b008743/Eaglewzw/Autonomous-Intercept-Drone"
---

# Autonomous Intercept Drone
### Autonomous Intercept Drone with Image-based Visual Servo

> This project is an experimental verification platform for autonomous drone interception tasks, integrating visual perception, target detection, Proportional Navigation Guidance (PNG) algorithms, and flight control methods. The project aims to provide a complete simulation reference solution for research on autonomous drone interception, guidance algorithms, and visual servo control, suitable for learning and academic research.

## Project Introduction

The system is developed in a ROS 2 environment, combined with PX4 firmware and Gazebo simulator, achieving a full-link closed loop from target discovery to simulated interception. The main functions include:

*   **Visual Target Detection**: Real-time identification and tracking of drone targets within the field of view using trained YOLO models and tracking models (LightTrack).
*   **Proportional Navigation Guidance**: Generating interception trajectories based on Proportional Navigation Guidance (PNG) laws to achieve precise preemptive interception of dynamic targets.
*   **Simulation Verification System**: Built on PX4 Software In The…
