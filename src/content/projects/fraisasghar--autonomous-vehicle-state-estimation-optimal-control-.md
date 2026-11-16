---
repo: "fraisasghar/Autonomous-Vehicle-State-Estimation-Optimal-Control."
name: "Autonomous-Vehicle-State-Estimation-Optimal-Control."
description: "MATLAB simulation of autonomous vehicle path tracking nonlinear vehicle model, Extended Kalman Filter sensor fusion, and LQR control, with a live dashboard and auto-generated video, PDF, PPTX, and JSON reports. No toolboxes required."
readmeQualityOk: true
url: "https://github.com/fraisasghar/Autonomous-Vehicle-State-Estimation-Optimal-Control."
language: "MATLAB"
languages: ["MATLAB"]
languagePcts: [100]
topics: ["autonomous-vehicles", "control-theory", "kalman-filter", "matlab", "optimal-control", "sensor-fusion", "simulation", "state-estimation"]
stars: 30
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-13T14:03:43Z"
lastCommitAt: "2026-11-16T04:31:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 34
maintainers: ["fraisasghar"]
openGraphImageUrl: "https://opengraph.githubassets.com/cba8fdc6ec0206f54ebdaae8fec9b27ce3857adbe07a722d209d5965837b1451/fraisasghar/Autonomous-Vehicle-State-Estimation-Optimal-Control."
---

## Introduction

This project simulates the core pipeline used in real autonomous-driving stacks: a vehicle drives a closed circuit while estimating its own position from noisy, low-rate GPS and higher-rate IMU measurements, then tracks the planned path using an optimal LQR controller. Everything is built from first principles in **base MATLAB** -- no Control System, Optimization, or Robotics toolboxes anywhere in the code. The nonlinear dynamics, the Kalman filter's Jacobians, and the discrete-time LQR solve are all hand-written, and every run automatically produces a matching video, a multi-page PDF report, a PowerPoint showcase, and a machine-readable JSON results file.

The estimate feeds back into the filter every step and the loop runs closed, in real time -- the controller only ever acts on what the EKF currently believes, exactly like a real system would.

## Core Components

Three pieces do all the work, each validated on its own before being wired into the closed loop. The bicycle model supplies the ground-truth physics the other two have to contend with. The Extended Kalman Filter turns noisy, multi-rate sensor readings into one trustworthy state estimate. The LQR…
