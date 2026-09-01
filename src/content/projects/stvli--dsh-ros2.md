---
repo: "StvLi/dsh-ros2"
name: "dsh-ros2"
description: "The Deepseek Harness ROS 2 plugin can be used to efficiently diagnose issues and perform joint debugging."
readmeQualityOk: true
url: "https://github.com/StvLi/dsh-ros2"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [72, 26]
topics: ["dsh-plugin"]
stars: 16
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-17T10:24:00Z"
lastCommitAt: "2026-09-01T08:51:45Z"
lastReleaseAt: "2026-08-23T02:46:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 50
maintainers: ["StvLi"]
openGraphImageUrl: "https://opengraph.githubassets.com/396dc1a7287407b1ed27d295c350b64e6bedfa7305d7fee695e1ad0038723598/StvLi/dsh-ros2"
---

# dsh-ros2

> ROS2 debugging toolset and robot-state vision analysis for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (DSH), shipped as a plugin. 中文版见 [README_CN.md](https://github.com/StvLi/dsh-ros2/blob/HEAD/README_CN.md).

> **版本对应关系**：npm 上的 `dsh-ros2@0.1.0` 就是本仓库当前版本（monorepo 布局）。
> GitHub 的 `v0.8.0 ~ v0.15.0` 标签是已废弃的旧单体布局历史，从未发布到 npm。
> 版本号在 2026-08 monorepo 拆分时重新基线。详见 [docs/versioning.md](https://github.com/StvLi/dsh-ros2/blob/HEAD/docs/versioning.md)。

**dsh-ros2** gives a DSH agent full robot development / debugging capabilities on any host with ROS2, organized in four capability tiers:

| Tier | Capability | Safety boundary |
| --- | --- | --- |
| **L1** | Read-only diagnostics: package/workspace/dependency checks, node/topic/service/action/param/interface enumeration, one-shot topic sampling, TF tree queries, whole-graph topology JSON, `ros2doctor`, bag summaries, MoveIt discovery, robot-profile load, safety-state read & VLM semantic arbitration | Pure read-only, no approval |
| **L2** | Approval-gated management: `colcon build` (background job), `rosdep install`, message skeleton generation, `param set`, bounded `bag record`, one-click ROS2…
