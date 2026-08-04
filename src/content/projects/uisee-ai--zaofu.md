---
repo: "uisee-ai/zaofu"
name: "zaofu"
description: "An open-source Coding Harness Platform for long-horizon, multi-agent software delivery."
readmeQualityOk: true
url: "https://github.com/uisee-ai/zaofu"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 21
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-07-14T03:13:58Z"
lastCommitAt: "2026-08-04T06:11:48Z"
lastReleaseAt: "2026-08-04T02:49:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 24
maintainers: ["gm0011"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f627d7b6e9ba5c5ff95d6c3353c202c69e11b0598b3bc481cc59ab3689c32b2/uisee-ai/zaofu"
---

# ZaoFu / 造父

### Harness More. Yoke Less.

> AI Agent Delivery Control Plane for long-horizon software delivery.

**Developer Preview · Python 3.11+ · Apache 2.0 · Codex + Claude Code**

[中文说明](https://github.com/uisee-ai/zaofu/blob/HEAD/README.zh-CN.md) · [Product Tour](#product-tour) ·
[Quick Start](#quick-start) ·
[Capabilities](#core-capabilities) · [How It Works](#how-it-works) ·
[Product Surfaces](#product-surfaces) · [Documentation](#documentation) ·
[Changelog](https://github.com/uisee-ai/zaofu/blob/HEAD/CHANGELOG.md)

ZaoFu turns isolated coding-agent sessions into a governed delivery team. It
does not replace Codex, Claude Code, or other provider CLIs. It gives them
roles, task contracts, runtime context, durable handoffs, evidence gates,
recovery paths, and a deterministic control boundary.

```text
ordinary coding agent
  prompt -> agent writes code -> agent says done

ZaoFu delivery
  idea / PRD / issue / refactor
    -> intake / run goal
    -> scan / plan / task map
    -> multi-agent implementation + self-check
    -> independent verification
    -> Thin Judge / completion gate
    -> scoped ship / rework / escalation

task recovery
  failure / stall
    ->…
