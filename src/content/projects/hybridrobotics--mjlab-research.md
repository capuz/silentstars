---
repo: "HybridRobotics/mjlab_research"
name: "mjlab_research"
description: "mjlab with the motion-tracking extensions SuperMimic uses."
readmeQualityOk: true
url: "https://github.com/HybridRobotics/mjlab_research"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 45
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-11-10T11:38:04Z"
lastCommitAt: "2026-11-16T11:50:24Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 33
maintainers: ["kevinzakka", "LinCanNerd", "louislelay"]
openGraphImageUrl: "https://opengraph.githubassets.com/a96d70cf22d84a13ca8080cb727a292c640617b1aab9dc71246c7009e21d43ef/HybridRobotics/mjlab_research"
---

# mjlab

mjlab combines [Isaac Lab](https://github.com/isaac-sim/IsaacLab)'s manager-based API with [MuJoCo Warp](https://github.com/google-deepmind/mujoco_warp), a GPU-accelerated version of [MuJoCo](https://github.com/google-deepmind/mujoco).
The framework provides composable building blocks for environment design,
with minimal dependencies and direct access to native MuJoCo data structures.

## Getting Started

mjlab requires an NVIDIA GPU for training. macOS is supported for evaluation only.

**Try it now:**

Run the demo (no installation needed):

```bash
uvx --from mjlab --refresh demo
```

Or try in [Google Colab](https://colab.research.google.com/github/mujocolab/mjlab/blob/main/notebooks/demo.ipynb) (no local setup required).

**Install from source:**

```bash
git clone https://github.com/mujocolab/mjlab.git && cd mjlab
uv run demo
```

For alternative installation methods (PyPI, Docker), see the [Installation Guide](https://mujocolab.github.io/mjlab/main/source/installation.html).

## Training Examples

### 1. Velocity Tracking

Train a Unitree G1 humanoid to follow velocity commands on flat terrain:

```bash
uv run train Mjlab-Velocity-Flat-Unitree-G1…
