---
repo: "JinHaiXu0322/M3T-UAV"
name: "M3T-UAV"
description: "M3T-UAV: Vision-Based UAV Geolocalization in Multi-Modal, Multi-Scene and Multi-Temporal Scenarios"
readmeQualityOk: true
url: "https://github.com/JinHaiXu0322/M3T-UAV"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 11
forks: 3
openIssues: 5
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-15T08:27:16Z"
lastCommitAt: "2026-10-27T12:39:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 67
undervaluedScore: 11
maintainers: ["Jasonxue0813"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4e76eab2c6a0baae809a4f169d611bcc1f591863850afed09944a3c2e47e327/JinHaiXu0322/M3T-UAV"
---

# M3T-UAV: Vision-Based UAV Geolocalization in Multi-Modal, Multi-Scene and Multi-Temporal Scenarios

This repository provides the **M3T-UAV dataset** and the **LoFTDF** framework for UAV visual geolocalization under multi-modal, multi-scene, and multi-temporal conditions.

## Overview

Reliable UAV geolocation is critical for autonomous navigation in GNSS-denied or spoofed environments. Existing vision-based methods are often limited by single-modality data, small-scale benchmarks, and weak generalization across scene and temporal variations.

To address these challenges, this project combines:

- **M3T-UAV Dataset**: a large-scale, strictly aligned triplet dataset (`UAV visible / UAV infrared / satellite map`) with diverse scenes and temporal gaps.
- **LoFTDF Framework**: a semi-dense matching model with redesigned coarse assignment and dual-deformation field (DDF) based fine alignment.
- **Evaluation Protocols**: localization-oriented metrics including GeoAUC@T and VPS.

*The proposed LoFTDF architecture.*

## Performance Highlights

LoFTDF reports strong performance on M3T-UAV:

- **Visible -> Satellite**: VPS = **0.9036**
- **Infrared -> Satellite**: VPS = **0.4421**

##…
