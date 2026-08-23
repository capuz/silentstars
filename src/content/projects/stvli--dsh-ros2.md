---
repo: "StvLi/dsh-ros2"
name: "dsh-ros2"
description: "The Deepseek Harness ROS 2 plugin can be used to efficiently diagnose issues and perform joint debugging."
readmeQualityOk: true
url: "https://github.com/StvLi/dsh-ros2"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [66, 29]
topics: ["dsh-plugin"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-17T10:24:00Z"
lastCommitAt: "2026-08-23T04:09:36Z"
lastReleaseAt: "2026-08-23T02:46:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 45
maintainers: ["StvLi"]
openGraphImageUrl: "https://opengraph.githubassets.com/30f21f20c4960054e46786943e680fb5458a59d8b34179eb9c23cc55c5ba593c/StvLi/dsh-ros2"
---

# dsh-ros2

> ROS2 debugging toolset and robot-state vision analysis for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (DSH), shipped as a plugin. 中文版见 [README_CN.md](https://github.com/StvLi/dsh-ros2/blob/HEAD/README_CN.md).

**dsh-ros2** gives a DSH agent full robot development / debugging capabilities on any host with ROS2, organized in four capability tiers:

| Tier | Capability | Safety boundary |
| --- | --- | --- |
| **L1** | Read-only diagnostics: package/workspace/dependency checks, node/topic/service/action/param/interface enumeration, one-shot topic sampling, TF tree queries, whole-graph topology JSON, `ros2doctor`, bag summaries | Pure read-only, no approval |
| **L2** | Approval-gated management: `colcon build` (background job), `rosdep install`, custom message skeleton generation, `param set`, bounded `bag record` | Writes always ask first (fail-closed) |
| **L3** | Visualization: RViz2 / rqt lifecycle management, screenshots, multimodal vision description, xdotool-level window interaction | Local session operations |
| **L4** | Realtime vision: parallel VLM ROS2 node + image-topic acquisition (headless), plus **RViz2 offscreen rendering** (OGRE…
