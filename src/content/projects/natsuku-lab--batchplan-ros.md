---
repo: "natsuku-lab/batchplan-ros"
name: "batchplan-ros"
description: "ROS 2 motion planning with batchplan: batched IK and planning on any GPU or CPU threads, no CUDA"
readmeQualityOk: true
url: "https://github.com/natsuku-lab/batchplan-ros"
homepage: "https://natsuku.com"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [64, 32]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-10-18T20:01:41Z"
lastCommitAt: "2026-11-19T05:00:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 47
maintainers: ["natsuku-lab", "Zarnack"]
openGraphImageUrl: "https://opengraph.githubassets.com/754aad52fabf3d31c0f5774ad206890baf5992d4b7b0d9ff114b284f96f0ada2/natsuku-lab/batchplan-ros"
---

**ROS 2 integration for [batchplan](https://github.com/natsuku-lab/batchplan).** A standalone planner node using MoveIt messages, plus an optional MoveIt planning plugin. Planning runs on CPU threads, with optional GPU acceleration for IK and trajectory optimization through Vulkan, Metal or DX12. No CUDA required.

- **Plan:** batched pose goals, multi-arm IK, collision-aware paths and timed trajectories.
- **Sequence:** straight-line moves, blended joins, attached objects and constrained motions.
- **Execute:** send trajectories to a `FollowJointTrajectory` controller, or return a plan without executing it.

See the [batchplan README](https://github.com/natsuku-lab/batchplan#readme) for the library overview, [planning guide](https://github.com/natsuku-lab/batchplan/blob/main/docs/planning.md) for algorithms and constraints, and [benchmarks](https://github.com/natsuku-lab/batchplan/blob/main/docs/benchmarks.md) for performance comparisons.

## Quick start

With [pixi](https://pixi.sh) installed:

```bash
git clone https://github.com/natsuku-lab/batchplan-ros
cd batchplan-ros
pixi run demo                    # ROS 2 Lyrical
pixi run -e jazzy demo           # ROS 2 Jazzy
```
