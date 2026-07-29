---
repo: "Hebbian-Robotics/openpi-flash"
name: "openpi-flash"
description: "Real-time inference engine for openpi"
readmeQualityOk: true
url: "https://github.com/Hebbian-Robotics/openpi-flash"
homepage: "https://hebbianrobotics.com/"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [57, 31]
topics: ["aws", "modal", "openpi", "physical-ai", "pi05", "quic", "robotics", "vla", "manipulation", "robot-learning"]
stars: 39
forks: 2
openIssues: 1
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2026-04-08T03:06:55Z"
lastCommitAt: "2026-07-29T06:13:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 10
maintainers: ["kstonekuan", "theogbrand"]
openGraphImageUrl: "https://opengraph.githubassets.com/728dedd508006e6201f026a45d959ae6e256a210abb1780effc4503b34a384f5/Hebbian-Robotics/openpi-flash"
---

# openpi-flash

Real-time inference engine for [openpi](https://github.com/Physical-Intelligence/openpi). Optimized for low-latency policy serving over QUIC and WebSocket. Deploy on AWS EC2 (Docker) or [Modal](https://modal.com).

openpi-flash gives robots the task-specific brain they need to actually ship
into production environments like fulfillment, retail, and other commercial
deployments where a general-purpose policy isn't enough.

## Key features

If you're coming from the upstream [openpi](https://github.com/Physical-Intelligence/openpi) server, these are the key additions openpi-flash includes:

- **Planner module** — specialize a general VLA to your task distribution with a fine-tuned pi0.5 subtask generator using language coaching. Loads alongside the action policy, and jointly conditions the high level task prompts with the subtask steering before action inference. See [Subtask generation (planner)](#subtask-generation-planner).
- **QUIC-first inference transport** — we replaced the upstream WebSocket-only path with a QUIC-first transport stack for low latency inference. See [QUIC (recommended for EC2/Docker)](#quic-recommended-for-ec2docker).
- **Rust transport…
