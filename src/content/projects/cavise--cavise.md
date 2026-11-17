---
repo: "CAVISE/CAVISE"
name: "CAVISE"
description: "Connected & Automated Vehicle Integrated Simulation Environment"
readmeQualityOk: true
url: "https://github.com/CAVISE/CAVISE"
language: "Python"
languages: ["Python"]
languagePcts: [75]
stars: 12
forks: 4
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2024-10-14T21:10:46Z"
lastCommitAt: "2026-11-17T12:15:43Z"
lastReleaseAt: "2026-02-21T10:17:57Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 56
maintainers: ["Haralishev77", "dependabot[bot]", "AndK17"]
openGraphImageUrl: "https://opengraph.githubassets.com/57e63d50076afc48b0dff0111d8ce748c877e4473f9e3a274c02c16d41eaeae0/CAVISE/CAVISE"
---

# CAVISE Simulator

CAVISE brings driving, traffic, network simulation and cooperative perception
into one environment for connected and automated vehicle experiments.
Use YAML scenarios to configure vehicles and roadside units, run simulations,
collect sensor data and evaluate cooperative driving and perception.

This repository manages the workspace, component checkout and Docker services.
The simulation code lives in the individual component repositories.

## What you can do

- Simulate vehicles, sensors and roadside units in CARLA.
- Synchronize CARLA with SUMO for traffic co-simulation.
- Model vehicle communication with Artery, connected to OpenCDA through CAPI.
- Run cooperative perception with OpenCOOD models.
- Evaluate attacks against cooperative perception with AdvCP.
- Record simulation data, visualize predictions and inspect evaluation results.

## Components

| Component | Role |
| --- | --- |
| [CARLA](https://carla.org/) | 3D world, vehicle physics and sensors. |
| [OpenCDA](https://github.com/CAVISE/OpenCDA) | Scenario orchestration, driving behavior, agent services and evaluation. |
| [SUMO](https://github.com/CAVISE/sumo) | Traffic simulation and assets for…
