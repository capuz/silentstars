---
repo: "OriEra-engine/engine"
name: "engine"
description: "AI-native, mixed-reality, self-evolving open world engine. 11-layer architecture, 5 platforms (PC / Mobile / Web / AR / BCI-reserved)."
originalDescription: "AI-native, mixed-reality, self-evolving open world engine. 11-layer architecture, 5 platforms (PC / Mobile / Web / AR / BCI-reserved)."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/OriEra-engine/engine"
homepage: "https://oriera-engine.github.io/engine/"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["ai-native", "ar", "ecs", "game-engine", "mixed-reality", "rust", "spatial-computing", "wasm", "webgpu", "world-simulation"]
stars: 22
forks: 5
openIssues: 37
closedIssues: 26
watchers: 0
contributors: 7
recentReleases: 7
createdAt: "2026-10-14T16:30:58Z"
lastCommitAt: "2026-11-03T11:15:36Z"
lastReleaseAt: "2026-10-27T08:47:27Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 48
maintainers: ["leslie520-bye", "airbate", "xxiaoyuu625"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1419411728/da171cfb-0dd0-4e6e-be8f-5dc3a16ac928"
discussionCount: 9
---

# OriEra 世界引擎

**AI 原生、虚实融合、可自演化的开放数字世界运行时**

Chinese · [English](https://github.com/OriEra-engine/engine/blob/HEAD/README.en.md)

---

## What is this

**We do not reinvent the physics engine or the dataset format.** Instead, we make ourselves a cheap, resettable, replayable training ground (world as benchmark). For physics and data export, we connect to open-source standards: [Rapier](https://rapier.rs) 3D contact physics × [LeRobotDataset v2.1](https://huggingface.co/docs/lerobot) training data export × [Gymnasium](https://gymnasium.farama.org) Python bridge.

Demo 15 in one sentence: **open the browser → teleoperate a robotic arm with keyboard and mouse → export trainable data with one click → lerobot-train**.

OriEra is not another game engine. What we are building is a real-time 3D world that runs on PC, mobile, web, and AR glasses (and future brain-computer interfaces), can be driven by AI, keeps evolving itself, and lets users create content with natural language.

Architecturally, it is an **11-layer hierarchical structure**. Five platforms are first-class citizens, and the brain-computer interface only reserves a slot in v1 without connecting hardware.

## Online demo…
