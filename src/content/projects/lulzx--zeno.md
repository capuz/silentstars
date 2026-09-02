---
repo: "Lulzx/zeno"
name: "zeno"
description: "GPU-accelerated batched physics simulation for robotics and RL on Apple Silicon"
readmeQualityOk: true
url: "https://github.com/Lulzx/zeno"
language: "Zig"
languages: ["Zig", "Python"]
languagePcts: [65, 27]
topics: ["apple-silicon", "gpu", "physics-simulation", "reinforcement-learning", "rl", "robotics"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-17T03:30:53Z"
lastCommitAt: "2026-09-02T08:05:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 24
maintainers: ["Lulzx"]
openGraphImageUrl: "https://opengraph.githubassets.com/766c5ba9754dbd27e4c7c920b2b44028fc15eb337fb8b60b884ea14f19fc85ec/Lulzx/zeno"
---

# Zeno: Batched Rigid-Body Simulation for Apple Silicon

**Zeno** is a Metal-native, massively batched rigid-body physics engine written in Zig, built for reinforcement-learning workloads on Apple Silicon. It is designed around unified memory: simulation state lives in shared `MTLBuffer`s that Python sees as zero-copy numpy arrays, and thousands of environments step in parallel on the GPU.

The niche it targets is specific: **Isaac Gym–style batched simulation, but for Macs.** Most robotics simulation stacks assume NVIDIA GPUs or CPU portability; Zeno is built from first principles for Apple's GPU and memory architecture.

The name references Zeno of Elea, whose paradoxes on motion and infinity are foundational to physics and mathematics — fitting for a simulation engine that discretizes continuous motion into parallel computation.

## Project Status

Zeno is a **research engine, not a validated MuJoCo replacement**. Honest framing of where things stand:

- **Solid**: the staged Metal compute pipeline, batched SoA state layout, unified-memory zero-copy access, MJCF loading, Python/Gymnasium bindings, and the XPBD solver skeleton with graph-coloring parallelism.
- **Implemented but…
