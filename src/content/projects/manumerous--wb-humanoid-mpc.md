---
repo: "manumerous/wb_humanoid_mpc"
name: "wb_humanoid_mpc"
description: "Whole-Body Nonlinear MPC for Realtime Humanoid Loco-Manipulation Planning and Control"
readmeQualityOk: true
url: "https://github.com/manumerous/wb_humanoid_mpc"
language: "C++"
languages: ["C++"]
languagePcts: [91]
topics: ["humanoid", "humanoid-robot", "locomotion", "mpc", "planning", "walking", "wholebodycontrol", "ai", "data-generation", "nonlinear"]
stars: 377
forks: 75
openIssues: 8
closedIssues: 6
watchers: 5
contributors: 5
recentReleases: 0
createdAt: "2024-12-24T02:58:01Z"
lastCommitAt: "2026-10-01T10:23:07Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 63
undervaluedScore: 18
maintainers: ["manumerous"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4e8da748e7d7e02fe2f66198e8fd4c185810328fee89190f1a56591bdbbf370/manumerous/wb_humanoid_mpc"
---

# Whole-Body Humanoid MPC

This repository contains a Whole-Body Nonlinear Model Predictive Controller (NMPC) for humanoid loco-manipulation control. This approach enables to directly optimize through the **full-order torque-level dynamics in realtime** to generate a wide range of humanoid behaviors building up on an [extended & updated version of ocs2](https://github.com/manumerous/ocs2_ros2)

**Interactive Velocity and Base Height Control via Joystick:**

It contains the following hardware platform agnostic MPC fromulations:

### Centroidal Dynamics MPC
The centroidal MPC optimizes over the **whole-body kinematics** and the center off mass dynamics, with a choice to either use a single rigid 
body model or the full centroidal dynamics. This specific approach builds up on the centroidal model in ocs2 by generalizing costs and constraints to a 6 DoF contact among others. I am still working on documenting this. Until then a conscise explanation of the ocs2 centroidal model can be found here [Sleiman et. al., A Unified MPC Framework for Whole-Body Dynamic Locomotion and Manipulation](https://arxiv.org/abs/2103.00946)

### Whole-Body Dynamics MPC
The **whole-body dynamics** MPC…
