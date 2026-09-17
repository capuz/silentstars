---
repo: "xx-luozi-xx/3DGS-Object-Composition"
name: "3DGS-Object-Composition"
description: "Real-Time Object Composition in 3D Gaussian Splatting via Physics-Driven Light Transport Factorization"
readmeQualityOk: true
url: "https://github.com/xx-luozi-xx/3DGS-Object-Composition"
language: "Python"
languages: ["Python", "Cuda"]
languagePcts: [66, 28]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-17T02:46:32Z"
lastCommitAt: "2026-09-17T08:50:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 72
undervaluedScore: 18
maintainers: ["xx-luozi-xx"]
openGraphImageUrl: "https://opengraph.githubassets.com/cafd2c4aef4dfc81199113018d2588c6e3bc62513ac5f6dccb160a0d48505039/xx-luozi-xx/3DGS-Object-Composition"
---

# Real-Time Object Composition in 3D Gaussian Splatting via Physics-Driven Light Transport Factorization

**Physically based, real-time object composition for 3D Gaussian Splatting.**

[English](https://github.com/xx-luozi-xx/3DGS-Object-Composition/blob/HEAD/README.md) | [简体中文](https://github.com/xx-luozi-xx/3DGS-Object-Composition/blob/HEAD/README_zh-CN.md)

## Overview

This work enables **real-time, training-free object composition in pretrained 3D Gaussian Splatting (3DGS) scenes**.

Given a pretrained 3DGS scene and known PBR Gaussian assets, our light-transport reformulation efficiently accounts for scene illumination, object self-occlusion, and object-to-scene shadow casting—without retraining the scene or relying on computationally expensive voxel-based ray marching.

Our framework achieves **over 40 FPS on consumer hardware**, enabling interactive virtual-real composition under unconstrained lighting conditions.

## Installation

### Device and Software Environment

This project was tested in the following environment:
- Operating System: Ubuntu 22.04.5 LTS
- GPU: NVIDIA GeForce RTX 3090
- NVIDIA Driver Version: 580.95.05
- CUDA Version Supported by the Driver: 13.0
-…
