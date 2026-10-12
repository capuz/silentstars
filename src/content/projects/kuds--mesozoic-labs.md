---
repo: "kuds/mesozoic-labs"
name: "mesozoic-labs"
description: "Open-source research platform for dinosaur biomechanics and robotic locomotion using reinforcement learning. MuJoCo-based Gymnasium environments with curriculum learning, W&B experiment tracking, and sim-to-real transfer goals."
readmeQualityOk: true
url: "https://github.com/kuds/mesozoic-labs"
homepage: "https://mesozoiclabs.com"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["robotics", "dinosaur", "reinforcement-learning", "sim2real", "mujoco"]
stars: 13
forks: 0
openIssues: 2
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 2
createdAt: "2025-02-22T19:16:40Z"
lastCommitAt: "2026-10-12T11:15:55Z"
lastReleaseAt: "2026-10-02T01:44:06Z"
status: "thriving"
tags: []
healthScore: 86
undervaluedScore: 67
maintainers: ["claude", "kuds"]
openGraphImageUrl: "https://opengraph.githubassets.com/bdf5935249508034a256bf821e97780f0f47929c8c04450bb89e4092d365c7a5/kuds/mesozoic-labs"
---

# Mesozoic Labs

Dinosaur-inspired locomotion research using reinforcement learning and MuJoCo physics simulation.

*Velociraptor balance policy trained with PPO. Historical, unverified Stable-Baselines3 artifact (backend version
not recorded); not evidence for the current model or configuration.*

Mesozoic Labs is a set of [Gymnasium](https://gymnasium.farama.org) environments built on
[MuJoCo](https://mujoco.org), with a pipeline that trains agents in them with PPO or SAC from
[Stable-Baselines3](https://stable-baselines3.readthedocs.io). A model is a species in one embodiment: `anatomical`,
the animal-proportioned body, or `robot`, a buildable robot of the species. Most of the species are dinosaurs; one is
the crocodylomorph Dibothrosuchus, whose erect, long-limbed posture is a different locomotion problem from the sprawl
of a modern crocodilian, and Compsognathus also has a twelve-servo robot. The models are research abstractions rather
than validated anatomical reconstructions.

Each model learns a small set of behaviors, such as stand, walk and hunt (a species task such as a claw strike or a
reach for food). Each behavior is a policy of its own, checked against its own gate…
