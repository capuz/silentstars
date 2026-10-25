---
repo: "lazyxeon/AstraWeave"
name: "AstraWeave"
description: "A game engine where AI agents aren't scripted — they plan, learn, and adapt. Rust. Deterministic ECS. Designed and built entirely through human-AI collaboration. MIT licensed."
readmeQualityOk: true
url: "https://github.com/lazyxeon/AstraWeave"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["ai", "ai-agents", "game-development", "game-engine", "gamedev", "indiegame", "llms", "video-game"]
stars: 7
forks: 0
openIssues: 71
closedIssues: 58
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2025-09-04T18:36:53Z"
lastCommitAt: "2026-10-25T22:11:12Z"
lastReleaseAt: "2026-10-14T01:53:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 71
maintainers: ["lazyxeon"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1050658782/ddf02152-66bd-4da5-a863-39d66bd33107"
---

AstraWeave is an AI-native game engine with a deterministic ECS. Companions are part of the simulation. Local LLMs propose. The deterministic simulation validates and executes. Assets in the tree are CC0.

  

## Features

| | |
| --- | --- |
| Replay | One thread per tick. The required cases hash on Linux, Windows, and macOS. [Workflow](https://github.com/lazyxeon/AstraWeave/blob/HEAD/.github/workflows/determinism-replay.yml) |
| Companions | The default tick runs `RuleOrchestrator`. A local model proposes off that tick. The simulation validates and executes. [AI pipeline](https://github.com/lazyxeon/AstraWeave/blob/HEAD/docs/architecture/ai_pipeline.md) |
| ECS | `astraweave-ecs` is the schedule. [Foundation](https://github.com/lazyxeon/AstraWeave/blob/HEAD/docs/architecture/ecs_math_core_sdk_foundation.md) |
| Renderer | The engine and the editor share one wgpu path. [Render](https://github.com/lazyxeon/AstraWeave/blob/HEAD/docs/architecture/render_pipeline_material_system_shader_infrastructure.md) |
| World | Physics and the local field are on the sim tick. The loaded set is `ColumnStream`. The hashed ground is the island heightfield. `weave_tick` is the weave example and…
