---
repo: "cislunarspace/e2m2e"
name: "e2m2e"
description: "e2m2e 是面向地月空间任务规划的算法工具集基础设施。在“LLM+Agent”式自主任务规划系统中，大模型负责理解任务意图、分解与编排子任务，e2m2e 负责提供精确可靠的轨道计算工具：建立地月空间的动力学模型，生成周期轨道族，设计轨道之间的转移路径，并把结果画出来检查。"
readmeQualityOk: true
url: "https://github.com/cislunarspace/e2m2e"
homepage: "https://cislunarspace.cn/"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [73, 27]
stars: 5
forks: 1
openIssues: 11
closedIssues: 372
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-03-06T07:42:20Z"
lastCommitAt: "2026-08-29T10:23:03Z"
lastReleaseAt: "2026-08-04T16:02:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 71
maintainers: ["cislunarspace"]
openGraphImageUrl: "https://opengraph.githubassets.com/434640d9319e1caa923a822c27ed8bf1916a949de522831bd7f195007d709ae3/cislunarspace/e2m2e"
---

# e2m2e: Earth to Moon, Moon to Earth

**English** | [简体中文](https://github.com/cislunarspace/e2m2e/blob/HEAD/README.zh-CN.md)

e2m2e is an **algorithm toolset infrastructure** for cislunar space mission planning. In an LLM+Agent-style autonomous mission planning system, the large language model understands mission intent and decomposes/orchestrates subtasks, while e2m2e provides precise and reliable orbit computation tools: it builds dynamical models of cislunar space, generates periodic orbit families, designs transfer paths between orbits, and visualizes results for inspection.

## How to read this repository

The runtime architecture is just four pieces: `e2m2e/api/` is the sole external entry (the Facade, from which the CLI and MCP derive); `e2m2e/algorithm/` constructs problems with domain knowledge (choosing orbit families, constraints, initial guesses); `crates/` is the Rust numerical layer where heavy iterations converge; `e2m2e/data/` supplies ephemeris caches, frame data, and constant baselines. `e2m2e/tools/` is logging/visualization support, and `e2m2e/mbse/` sits outside the dependency chain.

The journey of one orbit task: `api` receives the request →…
