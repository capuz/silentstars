---
repo: "Project-HAMi/volcano-vgpu-device-plugin"
name: "volcano-vgpu-device-plugin"
description: "Device-plugin for volcano vgpu which support hard resource isolation"
readmeQualityOk: true
url: "https://github.com/Project-HAMi/volcano-vgpu-device-plugin"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 175
forks: 73
openIssues: 1
closedIssues: 79
watchers: 3
contributors: 45
recentReleases: 0
createdAt: "2024-04-11T09:06:14Z"
lastCommitAt: "2026-10-29T05:50:34Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 43
maintainers: ["hami-robot[bot]", "DSFans2014", "linuxfhy"]
openGraphImageUrl: "https://opengraph.githubassets.com/130662b0f9de634fc20bcb84a6dd256c87dc53515fee789e652ea329414e3b11/Project-HAMi/volcano-vgpu-device-plugin"
---

# Volcano vgpu device plugin for Kubernetes

**Note**:

Volcano vgpu device-plugin can provide device-sharing mechanism for NVIDIA devices managed by volcano.

This is based on [Nvidia Device Plugin](https://github.com/NVIDIA/k8s-device-plugin), it uses [HAMi-core](https://github.com/Project-HAMi/HAMi-core) to support hard isolation of GPU card.

And collaborate with volcano, it is possible to enable GPU sharing.

## Table of Contents

- [About](#about)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
  - [Preparing your GPU Nodes](#preparing-your-gpu-nodes)
  - [Enabling vGPU Support in Kubernetes](#enabling-gpu-support-in-kubernetes)
  - [Running vGPU Jobs](#running-vgpu-jobs)
- [Issues and Contributing](#issues-and-contributing)
- [Support](#support)

## Version Compatibility Matrix

The following table shows the compatibility matrix between Volcano-vgpu and Volcano versions. Please ensure you are using compatible versions.

| Volcano-vgpu | Volcano |
|--------------|---------|
| v1.12.0 and below | v1.15.0 and below |
| master       | master  |

## About

The Volcano device plugin for Kubernetes is a Daemonset that allows you to automatically:
- Expose the…
