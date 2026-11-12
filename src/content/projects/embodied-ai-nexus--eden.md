---
repo: "embodied-ai-nexus/Eden"
name: "Eden"
description: "home of embodied/physical AI R&D"
readmeQualityOk: true
url: "https://github.com/embodied-ai-nexus/Eden"
homepage: "https://embodied-ai-nexus.github.io/Eden/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["real2sim2real", "sim2sim", "simulation"]
stars: 46
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-05-10T08:44:42Z"
lastCommitAt: "2026-11-12T11:43:29Z"
lastReleaseAt: "2026-11-12T11:32:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 14
maintainers: ["Kashu7100"]
openGraphImageUrl: "https://opengraph.githubassets.com/67a78681684e14647bb971b8e019fe83722215ee2495d0b8b5f67e70e2082aff/embodied-ai-nexus/Eden"
---

**E**mbodied-AI **D**evelopment **E**nvironments **N**exus

[Installation](#installation) · [Quick start](#quick-start) · [Gallery](#gallery) · [Documentation](https://embodied-ai-nexus.github.io/Eden) · [Citation](#citation)

Eden is a robot-learning framework built on [genesis-world](https://github.com/Genesis-Embodied-AI/genesis-world).
Write any robot-learning task as one typed config, train it across thousands of GPU-parallel environments, then
run the same policy on a real robot.

## Highlights

- **One typed config per task**: scene, MDP and learning runner in one Pydantic object; variants become CLI flags.
- **245 composable MDP terms**, searchable with `eden terms --grep <text>`; any decorated function becomes a new term.
- **47 robots and 11 composite rigs**: humanoids, quadrupeds, arms and dexterous hands.
- **66 tasks**, from locomotion and piano to calligraphy, plus robosuite, LIBERO, SIMPLER and PolaRiS ports.
- **Multi-physics**: every Genesis solver, plus Mochi for coupled rigid, cloth, soft-body and rod dynamics.
- **Sensing and rendering**: RGB-D, lidar, tactile, IMU and audio; batched Gaussian-splat scenes and path tracing.
- **Motion data and teleop**: retarget…
